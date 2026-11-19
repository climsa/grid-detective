/* ======================= GENERATOR KASUS ACAK =======================
   Template kasus = data LEVELS (denah, benda, orang). Clue di template diabaikan.
   generateCase(lv, seed) -> {people:[...dengan clue baru], sol:{pos, murderer}}
   Deterministik: seed yang sama -> susunan & clue yang sama (bisa dibagikan sebagai kode). */
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function generateCase(tpl,seed){
  const rnd=mulberry32(seed>>>0);
  const pick=a=>a[Math.floor(rnd()*a.length)];
  const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  const wpick=list=>{let tot=0;list.forEach(x=>tot+=x.w);let r=rnd()*tot;for(const x of list){r-=x.w;if(r<=0)return x.c;}return list[list.length-1].c;};
  const lv=JSON.parse(JSON.stringify(tpl)),b=buildBoard(lv),P=lv.people,N=P.length;
  const kinds=Object.keys(lv.kinds),rooms=[...new Set(lv.rooms.join(''))];
  const isRC=cl=>cl.some(x=>x.t==='row'||x.t==='col');
  const maxRC=Math.ceil((N-1)/3);
  function randomSolution(){
    for(let t=0;t<5000;t++){
      const rows=shuffle([...Array(b.R).keys()]).slice(0,N),cols=shuffle([...Array(b.C).keys()]).slice(0,N),pos={};let ok=true;
      P.forEach((p,i)=>{if(!b.walkable(b.cells[rows[i]][cols[i]]))ok=false;pos[p.id]=[rows[i],cols[i]];});
      if(ok&&murdererOf(lv,b,pos))return pos;
    }
    return null;
  }
  function cands(r,c){ // semua clue yang benar untuk posisi (r,c), dengan bobot
    const room=b.cells[r][c].room,out=[],sp=[];
    out.push({c:[{t:'room',v:room}],w:3});
    for(const k of kinds){
      if(condOk(b,{t:'on',v:k},r,c)){out.push({c:[{t:'on',v:k}],w:3});sp.push({t:'on',v:k});}
      if(!lv.kinds[k].walkable&&condOk(b,{t:'beside',v:k},r,c)){out.push({c:[{t:'beside',v:k}],w:3});sp.push({t:'beside',v:k});}
    }
    for(const rm of rooms)if(rm!==room)out.push({c:[{t:'notRoom',v:rm}],w:1});
    out.push({c:[{t:'row',v:r}],w:1},{c:[{t:'col',v:c}],w:1});
    sp.forEach(x=>out.push({c:[{t:'room',v:room},x],w:2}));
    out.push({c:[{t:'room',v:room},{t:'row',v:r}],w:1},{c:[{t:'room',v:room},{t:'col',v:c}],w:1});
    return out;
  }
  const holds=(cl,r,c)=>b.walkable(b.cells[r][c])&&cl.every(k=>condOk(b,k,r,c));
  for(let attempt=0;attempt<60;attempt++){
    const truth=randomSolution();if(!truth)break;
    const opts={};P.forEach(p=>{if(!p.victim)opts[p.id]=cands(...truth[p.id]);});
    P.forEach(p=>{p.clue=p.victim?undefined:wpick(opts[p.id].filter(o=>o.c.length===1&&!isRC(o.c)&&o.c[0].t!=='notRoom'));});
    for(let step=0;step<80;step++){
      const sols=solve(lv,2);
      const alt=sols.find(s=>P.some(p=>s.pos[p.id][0]!==truth[p.id][0]||s.pos[p.id][1]!==truth[p.id][1]));
      if(!alt){
        const S=P.filter(p=>!p.victim),txt=S.map(p=>JSON.stringify(p.clue));
        if(S.filter(p=>isRC(p.clue)).length<=maxRC&&new Set(txt).size===txt.length&&sols.length===1)
          return {people:P,sol:sols[0]};
        break;
      }
      // perkuat clue seseorang supaya solusi alternatif gugur
      const diff=P.filter(p=>!p.victim&&(alt.pos[p.id][0]!==truth[p.id][0]||alt.pos[p.id][1]!==truth[p.id][1]));
      const tgt=pick(diff.length?diff:P.filter(p=>!p.victim));
      const ap=alt.pos[tgt.id];
      let good=opts[tgt.id].filter(o=>!holds(o.c,ap[0],ap[1]));
      const rcUsed=P.filter(p=>!p.victim&&p!==tgt&&isRC(p.clue)).length;
      if(rcUsed>=maxRC){const nr=good.filter(o=>!isRC(o.c));if(nr.length)good=nr;}
      tgt.clue=wpick(good.length?good:opts[tgt.id]);
    }
  }
  return null;
}
if(typeof module!=='undefined')module.exports={generateCase,mulberry32};
