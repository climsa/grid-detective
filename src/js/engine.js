/* ENGINE: aturan clue, papan, dan solver. Dipakai UI dan generator.
   Harus dimuat setelah data/levels.js dan sebelum generator.js. */
/* ======================= ENGINE (aturan & solver) ======================= */
const ORD=['pertama','kedua','ketiga','keempat','kelima','keenam','ketujuh','kedelapan','kesembilan','kesepuluh'];

function buildBoard(lv){
  const R=lv.rooms.length,C=lv.rooms[0].length,cells=[];
  for(let r=0;r<R;r++){cells.push([]);for(let c=0;c<C;c++)cells[r].push({r,c,room:lv.rooms[r][c],obj:null});}
  lv.objects.forEach((o,i)=>{for(let dr=0;dr<(o.h||1);dr++)for(let dc=0;dc<(o.w||1);dc++)cells[o.r+dr][o.c+dc].obj=i;});
  const kind=i=>lv.objects[i].kind;
  const walkable=cell=>cell.obj===null||!!lv.kinds[kind(cell.obj)].walkable;
  return {R,C,cells,kind,walkable};
}
function condOk(b,cond,r,c){
  const cell=b.cells[r][c];
  switch(cond.t){
    case 'row':return r===cond.v;
    case 'col':return c===cond.v;
    case 'room':return cell.room===cond.v;
    case 'notRoom':return cell.room!==cond.v;
    case 'on':return cell.obj!==null&&b.kind(cell.obj)===cond.v;
    case 'beside':
      for(const [dr,dc] of [[1,0],[-1,0],[0,1],[0,-1]]){
        const rr=r+dr,cc=c+dc;
        if(rr<0||cc<0||rr>=b.R||cc>=b.C)continue;
        const n=b.cells[rr][cc];
        if(n.room!==cell.room)continue; // terhalang tembok: tidak dihitung "di samping"
        if(n.obj!==null&&n.obj!==cell.obj&&b.kind(n.obj)===cond.v)return true;
      }
      return false;
  }
  return true;
}
const clueOk=(b,p,r,c)=>b.walkable(b.cells[r][c])&&(p.clue||[]).every(k=>condOk(b,k,r,c));
function murdererOf(lv,b,pos){
  const v=lv.people.find(p=>p.victim),vp=pos[v.id];if(!vp)return null;
  const room=b.cells[vp[0]][vp[1]].room;
  const others=lv.people.filter(p=>!p.victim&&pos[p.id]&&b.cells[pos[p.id][0]][pos[p.id][1]].room===room);
  return others.length===1?others[0].id:null;
}
function solve(lv,limit=2){
  const b=buildBoard(lv),P=lv.people;
  const cand=P.map(p=>{const o=[];for(let r=0;r<b.R;r++)for(let c=0;c<b.C;c++)if(clueOk(b,p,r,c))o.push([r,c]);return o;});
  const order=P.map((_,i)=>i).sort((a,z)=>cand[a].length-cand[z].length);
  const uR=new Set(),uC=new Set(),pos={},sols=[];
  (function rec(k){
    if(sols.length>=limit)return;
    if(k===order.length){const m=murdererOf(lv,b,pos);if(m)sols.push({pos:{...pos},murderer:m});return;}
    const i=order[k];
    for(const [r,c] of cand[i]){
      if(uR.has(r)||uC.has(c))continue;
      uR.add(r);uC.add(c);pos[P[i].id]=[r,c];rec(k+1);uR.delete(r);uC.delete(c);delete pos[P[i].id];
    }
  })(0);
  return sols;
}
function clueHTML(lv,p){
  if(p.victim)return 'sendirian bersama <mark>pembunuh</mark> di ruangan yang sama.';
  if(p.text)return p.text;
  const parts=p.clue.map(k=>{
    switch(k.t){
      case 'row':return `<mark>di baris ${ORD[k.v]}</mark>`;
      case 'col':return `<mark>di kolom ${ORD[k.v]}</mark>`;
      case 'room':return `<mark>di ${lv.roomInfo[k.v].name.toLowerCase()}</mark>`;
      case 'notRoom':return `<mark>tidak di ${lv.roomInfo[k.v].name.toLowerCase()}</mark>`;
      case 'on':return lv.kinds[k.v].seat?`<mark>duduk di ${lv.kinds[k.v].name}</mark>`:`<mark>di atas ${lv.kinds[k.v].name}</mark>`;
      case 'beside':return `<mark>di samping ${lv.kinds[k.v].name}</mark>`;
    }
  });
  return 'berada '+parts.join(', ')+'.';
}
