/* UI: ikon, state permainan, render papan/kartu/keterangan, modal, dan wiring kontrol.
   Berjalan saat halaman dimuat (dijalankan di baris akhir: startLevel). Dimuat paling akhir. */
/* ======================= ICONS =======================
   Ikon UI memakai PNG seragam di src/assets/img/ui/ (256×256, gaya outline gelap + isi pastel).
   Ukuran diatur CSS (.ico, .hex .ico, .sq .ico, .rnd .ico). Tabel nama file & fungsi ada di README. */
const ICON_DIR='src/assets/img/ui/';
const ico=(name,cls='ico')=>`<img class="${cls}" src="${ICON_DIR}${name}.png" alt="" aria-hidden="true" draggable="false">`;
const IC={
  back:ico('kembali'), gear:ico('pengaturan'), undo:ico('undo'), redo:ico('redo'),
  eraser:ico('penghapus'), reset:ico('reset'), check:ico('selidiki'), x:ico('tanda-x'),
  help:ico('aturan'), lens:ico('bantuan'), markX:ico('tanda-x'), pencil:ico('pensil'),
  skull:ico('korban'), detective:ico('intro-kasus')
};
const setIcon=(id,html)=>{document.getElementById(id).innerHTML=html;};
setIcon('backBtn',IC.back);setIcon('setBtn',IC.gear);setIcon('undoBtn',IC.undo);setIcon('redoBtn',IC.redo);
setIcon('eraseBtn',IC.eraser);setIcon('resetBtn',IC.reset);setIcon('checkBtn',IC.check);setIcon('markBtn',IC.x);setIcon('helpBtn',IC.help);setIcon('penBtn',IC.pencil);
document.getElementById('hintBtn').innerHTML=IC.lens;
document.querySelectorAll('.hex.back').forEach(b=>b.innerHTML=IC.back);

/* ======================= STATE & UI ======================= */
const $=id=>document.getElementById(id);
/* Portrait karakter: src/assets/img/char/char_<id>.png (256×256, latar transparan).
   Lingkaran berwarna (p.color) ada di belakangnya. Tanpa file, emoji avatar lama dipakai:
   onload menandai induk (.has-por) agar emoji disembunyikan, onerror membuang <img>. */
const portrait=p=>`<span class="emo">${p.avatar}</span><img class="por" src="src/assets/img/char/char_${p.id}.png" alt="" draggable="false" onload="this.parentNode.classList.add('has-por')" onerror="this.remove()">`;
const store={get(k,d){try{const v=localStorage.getItem('dgrid:'+k);return v?JSON.parse(v):d;}catch(e){return d;}},
             set(k,v){try{localStorage.setItem('dgrid:'+k,JSON.stringify(v));}catch(e){}}};
/* Pengaturan disimpan di satu objek 'dgrid:settings'. Kunci lama (conflict, strike, axis, random)
   tetap terbaca; kunci baru diisi default bila belum ada. */
const SET_DEFAULT={conflict:true,strike:true,axis:true,random:true,musicOn:true,musicVol:70,sfxOn:true,sfxVol:80,textSize:'normal'};
const clampVol=v=>Math.min(100,Math.max(0,Math.round(+v)||0));
const SET=Object.assign({},SET_DEFAULT,store.get('settings',{}));
SET.musicVol=clampVol(SET.musicVol);SET.sfxVol=clampVol(SET.sfxVol);
if(!['normal','large','xl'].includes(SET.textSize))SET.textSize='normal';
const validLevels=LEVELS.map(lv=>{const s=solve(lv,2);if(s.length!==1)console.warn(`Kasus "${lv.id}" punya ${s.length} solusi — perbaiki clue.`);return s.length===1?s[0]:null;});
const MAX_HINTS=3, BASE_SCORE=1500, PEN={hint:150,check:50,accuse:200};

let S=null;

/* Ukuran sel papan dihitung dari lebar tersedia (layar − padding .app − padding bingkai − ruang nomor sumbu).
   Batas bawah 28px: di 320px papan 9×9 harus tetap muat; batas bawah 34px lama membuat papan melebar. */
function cellSize(C){const w=Math.min(window.innerWidth,480)-24-16-(SET.axis?16:0);return Math.max(28,Math.min(60,Math.floor(w/C)));}
const newSeed=()=>100000+Math.floor(Math.random()*900000);
function startLevel(idx,seed){
  let lv=LEVELS[idx],sol=validLevels[idx],code=null;
  if(SET.random){ // susunan acak: orang & denah sama, posisi + clue baru (jawaban tetap tunggal)
    code=seed||newSeed();
    const g=generateCase(lv,code);
    if(g){lv=Object.assign({},lv,{people:g.people});sol=g.sol;}else code=null;
  }
  const b=buildBoard(lv);
  S={idx,lv,b,sol,code,pos:{},marks:new Set(),notes:{},sel:null,focus:null,mode:'place',undo:[],redo:[],
     hints:0,score:BASE_SCORE,wrong:0,t0:null,done:false,phase:1};
  $('caseName').firstChild.textContent=lv.title;
  $('caseSub').textContent='Kasus '+(idx+1)+(code?' · Kode '+code:' · '+lv.location);
  document.documentElement.style.setProperty('--cell',cellSize(b.C)+'px');
  $('frame').classList.toggle('noAxis',!SET.axis);
  setMode('place');renderAll();
  showIntro();
}
function renderAll(){renderBoard();renderCards();renderClue();renderBar();}

function renderBar(){
  $('score').textContent=S.score.toLocaleString('id-ID');
  $('undoBtn').disabled=!S.undo.length||S.done;
  $('redoBtn').disabled=!S.redo.length||S.done;
  const left=MAX_HINTS-S.hints;
  $('hintW').querySelector('.cnt')?.remove();
  $('hintW').insertAdjacentHTML('beforeend',`<span class="cnt">${left}</span>`);
  $('hintW').classList.toggle('dis',left<=0);
}

function renderBoard(){
  const {lv,b}=S,bd=$('board');
  bd.style.setProperty('--R',b.R);bd.style.setProperty('--C',b.C);bd.innerHTML='';
  $('axTop').style.gridTemplateColumns=`repeat(${b.C},var(--cell))`;
  $('axLeft').style.gridTemplateRows=`repeat(${b.R},var(--cell))`;
  $('axTop').innerHTML=[...Array(b.C)].map((_,i)=>`<span>${i+1}</span>`).join('');
  $('axLeft').innerHTML=[...Array(b.R)].map((_,i)=>`<span>${i+1}</span>`).join('');
  const conflicts=SET.conflict?conflictCells():new Set();
  for(let r=0;r<b.R;r++)for(let c=0;c<b.C;c++){
    const cell=b.cells[r][c],el=document.createElement('div');
    el.className='cell';el.style.gridRow=r+1;el.style.gridColumn=c+1;
    el.style.background=FLOORS[lv.roomInfo[cell.room].floor]||'#eee';
    /* Lantai tiles & darktile tidak boleh menampilkan garis kisi sel (outline). */
    if(['tiles','darktile'].includes(lv.roomInfo[cell.room].floor))el.classList.add('noGrid');
    const W='var(--wall)',t=4,sh=[];
    const diff=(rr,cc)=>rr<0||cc<0||rr>=b.R||cc>=b.C||b.cells[rr][cc].room!==cell.room;
    if(diff(r-1,c))sh.push(`inset 0 ${t}px 0 ${W}`);
    if(diff(r+1,c))sh.push(`inset 0 -${t}px 0 ${W}`);
    if(diff(r,c-1))sh.push(`inset ${t}px 0 0 ${W}`);
    if(diff(r,c+1))sh.push(`inset -${t}px 0 0 ${W}`);
    el.style.boxShadow=sh.join(',');
    if(cell.obj!==null||b.walkable(cell))el.classList.add('tap');
    el.onclick=()=>{if(b.walkable(cell))tapCell(r,c);if(cell.obj!==null)showTip(cell.obj);};
    if(S.marks.has(r+','+c))el.innerHTML=`<div class="mark">${IC.markX}</div>`;
    const nt=S.notes[r+','+c];
    if(nt&&nt.length&&!whoAt(r,c)){
      const ppl=nt.map(id=>lv.people.find(p=>p.id===id));
      const shown=ppl.length>4?ppl.slice(0,3):ppl;
      el.insertAdjacentHTML('beforeend',`<div class="notes">${shown.map(p=>`<span style="--c:${p.color}">${portrait(p)}</span>`).join('')}${ppl.length>4?`<span class="more">+${ppl.length-3}</span>`:''}</div>`);
    }
    if(conflicts.has(r+','+c))el.classList.add('conflict');
    bd.appendChild(el);
  }
  lv.objects.forEach((o,i)=>{
    const k=lv.kinds[o.kind],el=document.createElement('div');
    el.style.gridRow=`${o.r+1} / span ${o.h||1}`;el.style.gridColumn=`${o.c+1} / span ${o.w||1}`;
    const w=o.w||1,h=o.h||1,m=Math.min(w,h);
    el.style.setProperty('--s',m);
    el.style.setProperty('--sx',w>h?1+(w/h-1)*.75:1);el.style.setProperty('--sy',h>w?1+(h/w-1)*.75:1);
    if(k.rug){el.className='obj rug';el.style.setProperty('--rug',o.color||'#b5523b');}
    else el.className='obj '+(k.walkable?'seat':'solid');
    // sprite: src/assets/img/obj/obj_<kind>.png, mengisi seluruh area w×h benda.
    // Tanpa sprite: karpet/tikar kembali digambar CSS (warna o.color), benda lain kembali ke emoji.
    const img=new Image();
    img.className='spr';img.alt='';img.draggable=false;
    img.onerror=()=>{
      img.remove();
      if(k.rug)el.classList.remove('spr-on');
      else el.insertAdjacentHTML('beforeend',`<span class="em">${k.emoji||''}</span>`);
    };
    if(k.rug)el.classList.add('spr-on');
    img.src=`src/assets/img/obj/obj_${o.kind}.png`;
    el.appendChild(img);
    el.dataset.obj=i;bd.appendChild(el);
  });
  // label ruangan: di tepi bawah baris terlebar ruangan (seri → baris paling bawah)
  const seen={};
  for(let r=b.R-1;r>=0;r--){
    let c=0;
    while(c<b.C){
      const k=b.cells[r][c].room;let e=c;while(e+1<b.C&&b.cells[r][e+1].room===k)e++;
      if(!seen[k]||e-c+1>seen[k].cs.length)seen[k]={r,cs:[...Array(e-c+1)].map((_,i)=>c+i)};
      c=e+1;
    }
  }
  Object.entries(seen).forEach(([k,v])=>{
    const el=document.createElement('div');el.className='roomLabel';
    el.style.gridRow=v.r+1;el.style.gridColumn=`${v.cs[0]+1} / ${v.cs[v.cs.length-1]+2}`;
    el.textContent=lv.roomInfo[k].name;bd.appendChild(el);
  });
  lv.people.forEach(p=>{
    const q=S.pos[p.id];if(!q)return;
    const el=document.createElement('div');
    el.className='token'+(p.victim?' victim':'')+(S.sel===p.id?' armed':'');el.style.setProperty('--c',p.color);
    el.style.gridRow=q[0]+1;el.style.gridColumn=q[1]+1;
    el.innerHTML=`<span class="cir"></span>${portrait(p)}`+(p.victim?`<span class="sk">${IC.skull}</span>`:'');
    bd.appendChild(el);
  });
}

function renderCards(){
  const {lv}=S,tr=$('track'),sl=tr.scrollLeft;tr.innerHTML='';
  lv.people.forEach(p=>{
    const el=document.createElement('button');
    el.className='pc'+(p.victim?' victim':'')+(S.pos[p.id]?' placed':'')+(S.sel===p.id?' armed':'')+(S.focus===p.id?' focus':'');
    el.style.setProperty('--c',p.color);el.dataset.id=p.id;
    el.innerHTML=`<div class="av">${portrait(p)}</div><div class="nm">${p.name}</div><span class="ok">${IC.check}</span>${p.victim?`<span class="sk">${IC.skull}</span>`:''}`;
    el.onclick=()=>tapCard(p.id);
    tr.appendChild(el);
  });
  tr.scrollLeft=sl;
  if(typeof updChev==='function')requestAnimationFrame(updChev);
}

function clueDone(p){
  const q=S.pos[p.id];if(!q)return false;
  if(p.victim)return S.lv.people.every(x=>S.pos[x.id])&&!!murdererOf(S.lv,S.b,S.pos);
  return clueOk(S.b,p,q[0],q[1]);
}
function renderClue(){
  const box=$('clueBox'),p=S.focus&&S.lv.people.find(x=>x.id===S.focus);
  box.className='clueBox';
  if(!p){box.innerHTML='<span class="empty">Ketuk karakter untuk melihat keterangannya.</span>';return;}
  if(p.victim)box.classList.add('victim');
  if(SET.strike&&clueDone(p))box.classList.add('done');
  box.innerHTML=`<div><span class="who">${p.name} · ${p.victim?'korban':p.role}</span><span class="txt">${p.name} ${clueHTML(S.lv,p)}</span></div>`;
}

function conflictCells(){
  const out=new Set(),rows={},cols={};
  Object.values(S.pos).forEach(([r,c])=>{(rows[r]=rows[r]||[]).push(c);(cols[c]=cols[c]||[]).push(r);});
  Object.entries(rows).forEach(([r,cs])=>{if(cs.length>1)cs.forEach(c=>out.add(r+','+c));});
  Object.entries(cols).forEach(([c,rs])=>{if(rs.length>1)rs.forEach(r=>out.add(r+','+c));});
  return out;
}
const whoAt=(r,c)=>Object.keys(S.pos).find(id=>S.pos[id][0]===r&&S.pos[id][1]===c);
const snap=()=>({pos:JSON.parse(JSON.stringify(S.pos)),marks:new Set(S.marks),notes:JSON.parse(JSON.stringify(S.notes))});
function snapshot(){S.undo.push(snap());if(S.undo.length>200)S.undo.shift();S.redo=[];}
function restore(st){S.pos=st.pos;S.marks=st.marks;S.notes=st.notes;S.sel=null;}

function clearNotesOf(id){for(const k in S.notes){S.notes[k]=S.notes[k].filter(x=>x!==id);if(!S.notes[k].length)delete S.notes[k];}}
function tapCard(id){
  if(S.done)return;
  if(S.mode==='mark'||S.mode==='erase')setMode('place');
  S.focus=id;S.sel=S.sel===id?null:id;
  renderAll();
  const el=$('track').querySelector(`[data-id="${id}"]`);el&&el.scrollIntoView({behavior:'smooth',inline:'nearest',block:'nearest'});
}

function tapCell(r,c){
  if(S.done)return;
  const key=r+','+c,occ=whoAt(r,c);
  if(S.mode==='erase'){
    if(occ){snapshot();delete S.pos[occ];if(S.sel===occ)S.sel=null;}
    else if(S.marks.has(key)||S.notes[key]){snapshot();S.marks.delete(key);delete S.notes[key];}
    else return;
    renderAll();return;
  }
  if(S.mode==='mark'){
    if(occ){S.focus=occ;renderAll();return;}
    snapshot();S.marks.has(key)?S.marks.delete(key):S.marks.add(key);renderAll();return;
  }
  if(S.mode==='note'){ // mode pensil: simulasi, tidak dihitung saat diperiksa
    if(occ){S.focus=occ;renderAll();return;}
    if(!S.sel){toast('Pilih karakter yang mau disimulasikan');return;}
    snapshot();
    const arr=S.notes[key]||[];
    S.notes[key]=arr.includes(S.sel)?arr.filter(x=>x!==S.sel):[...arr,S.sel];
    if(!S.notes[key].length)delete S.notes[key];else S.marks.delete(key);
    renderAll();return;
  }
  // mode tempatkan
  // pola sudoku "angka dulu": karakter tetap terpilih sampai diganti/dilepas
  if(occ&&!S.sel){S.sel=occ;S.focus=occ;renderAll();return;}       // pilih orang dari denah
  if(!S.sel){toast('Pilih karakter dulu');return;}
  if(occ===S.sel){snapshot();delete S.pos[occ];renderAll();return;} // ketuk lagi = angkat
  snapshot();
  if(occ)delete S.pos[occ];                                         // timpa orang lain (seperti sudoku)
  clearNotesOf(S.sel);delete S.notes[key];
  S.pos[S.sel]=[r,c];S.marks.delete(key);
  renderAll();
  if(S.lv.people.every(p=>S.pos[p.id]))setTimeout(()=>investigate(true),300);
}

function setMode(m){
  S.mode=m;
  $('penBtn').classList.toggle('on',m==='note');
  $('frame').classList.toggle('noteMode',m==='note');
  $('markBtn').classList.toggle('on',m==='mark');
  $('eraseBtn').classList.toggle('on',m==='erase');
  if(m==='mark'||m==='erase'){S.sel=null;}
}

let tipT;
function showTip(i){
  const {lv}=S,o=lv.objects[i],k=lv.kinds[o.kind],tip=$('tip'),bd=$('board');
  const objEl=bd.querySelector(`[data-obj="${i}"]`),cell=bd.querySelector('.cell').offsetWidth;
  const name=k.name.charAt(0).toUpperCase()+k.name.slice(1);
  tip.innerHTML=`${name}<small class="${k.walkable?'ok':'no'}">${k.walkable?IC.check+' bisa ditempati':IC.x+' tidak bisa ditempati'}</small>`;
  const x=bd.offsetLeft+(o.c+(o.w||1)/2)*cell,below=o.r===0;
  tip.classList.toggle('below',below);
  tip.style.left=x+'px';
  tip.style.top=(bd.offsetTop+(below?(o.r+(o.h||1))*cell:o.r*cell))+'px';
  requestAnimationFrame(()=>{const fw=$('frame').offsetWidth,hw=tip.offsetWidth/2;tip.style.left=Math.min(Math.max(x,hw+2),fw-hw-2)+'px';});
  tip.classList.add('show');
  if(objEl){objEl.classList.remove('flash');void objEl.offsetWidth;objEl.classList.add('flash');}
  clearTimeout(tipT);tipT=setTimeout(()=>tip.classList.remove('show'),1600);
}

function penalize(n){S.score=Math.max(0,S.score-n);renderBar();}

function investigate(auto){
  if(S.done)return;
  const {lv,b}=S;
  const missing=lv.people.filter(p=>!S.pos[p.id]);
  if(missing.length){toast(`Masih ada ${missing.length} orang yang belum ditempatkan`);return;}
  const bad=lv.people.filter(p=>{const [r,c]=S.pos[p.id];return !p.victim&&!clueOk(b,p,r,c);});
  const conf=conflictCells().size>0, m=murdererOf(lv,b,S.pos);
  if(bad.length||conf||!m){
    if(!auto)penalize(PEN.check);
    const msg=[];if(conf)msg.push('ada baris/kolom ganda');if(bad.length)msg.push(`${bad.length} keterangan belum cocok`);if(!m&&!conf)msg.push('keterangan korban belum cocok');
    toast('Belum tepat: '+msg.join(' & ')+(auto?'':` (−${PEN.check})`));return;
  }
  S.phase=2;showBanner(2,'TUNJUK PELAKU');
  setTimeout(accuse,700);
}

function accuse(){
  const {lv}=S,sus=lv.people.filter(p=>!p.victim);
  openModal(`<h2>Semua posisi cocok!</h2><p>Sekarang tunjuk pelakunya. Siapa yang membunuh ${lv.people.find(p=>p.victim).name}?</p>
    <div class="suspects">${sus.map(p=>`<button data-id="${p.id}"><div class="av" style="--c:${p.color}">${portrait(p)}</div>${p.name}</button>`).join('')}</div>
    <div class="row"><button class="btn" id="mClose">Periksa lagi</button></div>`);
  $('sheet').querySelectorAll('.suspects button').forEach(bt=>bt.onclick=()=>verdict(bt.dataset.id));
  $('mClose').onclick=closeModal;
}

function verdict(id){
  const {lv,b,sol}=S,p=lv.people.find(x=>x.id===id);
  if(id!==sol.murderer){
    S.wrong++;penalize(PEN.accuse);
    openModal(`<h2>Bukan dia…</h2><p>${p.name} punya alibi. Lihat lagi siapa yang <b>sendirian bersama korban</b> di ruangan yang sama. (−${PEN.accuse})</p>
      <div class="row"><button class="btn pri" id="again">Tuduh lagi</button></div>`);
    $('again').onclick=accuse;return;
  }
  S.done=true;
  const secs=elapsed();
  const vp=S.pos[lv.people.find(x=>x.victim).id],room=lv.roomInfo[b.cells[vp[0]][vp[1]].room].name;
  const prog=store.get('progress',{}),prev=prog[lv.id]||{};
  prog[lv.id]={solved:true,best:prev.best?Math.min(prev.best,secs):secs,score:Math.max(prev.score||0,S.score)};store.set('progress',prog);
  const hasNext=S.idx+1<LEVELS.length;
  renderBar();
  openModal(`<h2>Kasus terpecahkan!</h2>
    <p><b>${p.name}</b> (${p.role}) adalah pelakunya — hanya dia yang berdua dengan korban di <b>${room}</b>.</p>
    <div class="stats"><div><b>${S.score.toLocaleString('id-ID')}</b>Skor</div><div><b>${fmt(secs)}</b>Waktu</div><div><b>${S.hints}</b>Bantuan</div></div>
    ${S.code?`<p style="font-size:13px;margin:0 0 4px">Kode kasus ini: <b>${S.code}</b> — bagikan ke teman supaya mereka main susunan yang sama.</p>`:''}
    ${S.code?`<div class="row"><button class="btn" id="againBtn">🎲 Main lagi (posisi baru)</button></div>`:''}
    <div class="row">${hasNext?`<button class="btn pri" id="nextBtn">Kasus berikutnya</button>`:`<button class="btn" disabled>Kasus baru segera hadir</button>`}
    <button class="btn" id="listBtn">Daftar kasus</button></div>`);
  if(hasNext)$('nextBtn').onclick=()=>{closeModal();startLevel(S.idx+1);};
  if(S.code)$('againBtn').onclick=()=>{closeModal();startLevel(S.idx);};
  $('listBtn').onclick=()=>{closeModal();go('levels');};
}

function hint(){
  if(S.done)return;
  if(S.hints>=MAX_HINTS){toast('Bantuan sudah habis');return;}
  const {lv,sol}=S;
  const target=lv.people.find(p=>{const q=S.pos[p.id];return !q||q[0]!==sol.pos[p.id][0]||q[1]!==sol.pos[p.id][1];});
  if(!target){investigate(false);return;}
  snapshot();
  const [r,c]=sol.pos[target.id],occ=whoAt(r,c);if(occ&&occ!==target.id)delete S.pos[occ];
  clearNotesOf(target.id);delete S.notes[r+','+c];S.pos[target.id]=[r,c];S.marks.delete(r+','+c);S.hints++;S.sel=null;S.focus=target.id;
  penalize(PEN.hint);
  toast(`${target.name} ada di baris ${r+1}, kolom ${c+1} (−${PEN.hint})`);
  renderAll();
  if(lv.people.every(p=>S.pos[p.id]))setTimeout(()=>investigate(true),400);
}

/* ---------- modals ---------- */
function showIntro(){
  const {lv}=S;
  openModal(`<div class="det"><div class="f">${IC.detective}</div><div><h2 style="margin:0">${lv.title}</h2><span style="color:#b9b3ff;font-weight:600;font-size:13px">Kasus ${S.idx+1} · ${lv.location}</span></div></div>
    <p>${lv.intro}</p>
    ${lv.story?`<div class="story"><p><b>Latar:</b> ${lv.story.latar}</p><p><b>Motif:</b> ${lv.story.motif}</p></div>`:''}
    <p style="font-size:14px">${lv.people.length-1} tersangka · ${Object.keys(lv.roomInfo).length} ruangan · denah ${lv.rooms.length}×${lv.rooms[0].length}</p>
    ${S.code?`<div class="codeBox"><div><small>Kode kasus</small><b>${S.code}</b></div><button class="btn" id="rerollBtn">🎲 Acak lagi</button></div>
    <div class="codeIn"><input id="codeInput" inputmode="numeric" maxlength="6" placeholder="Punya kode dari teman?"><button class="btn" id="useCode">Pakai</button></div>`:''}
    <div class="row"><button class="btn" id="rulesBtn">Aturan</button><button class="btn pri" id="goBtn">Mulai</button></div>`,true);
  if(S.code){
    $('rerollBtn').onclick=()=>startLevel(S.idx);
    $('useCode').onclick=()=>{const v=+$('codeInput').value.trim();if(!(v>=100000&&v<=999999)){toast('Kode harus 6 angka');return;}startLevel(S.idx,v);};
  }
  $('goBtn').onclick=()=>{closeModal();if(!S.t0)S.t0=Date.now();showBanner(1,'TEMPATKAN TERSANGKA');};
  $('rulesBtn').onclick=()=>showHelp(true);
}
/* ---------- Cara Main & Pengaturan (dipakai modal di permainan dan layar menu) ---------- */
function helpHTML(){return `<ul>
      <li>Tiap <b>baris</b> dan <b>kolom</b> hanya boleh berisi <b>1 orang</b>.</li>
      <li>Perabot (sofa, kompor, rak, kasur, dll.) <b>tidak bisa ditempati</b>. <b>Karpet</b> dan <b>kursi</b> bisa.</li>
      <li>"Di samping" = bersebelahan langsung (atas/bawah/kiri/kanan) <b>di ruangan yang sama</b>. Benda di balik tembok tidak dihitung.</li>
      <li>Baris dihitung dari atas, kolom dari kiri.</li>
      <li>Korban hanya berdua dengan pembunuh di satu ruangan.</li></ul>
    <ul><li><b>Tempatkan</b> (mode normal, seperti sudoku): ketuk karakter, lalu ketuk kotak. Karakter tetap terpilih: ketuk kotak lain untuk memindahnya, ketuk kotaknya lagi untuk mengangkat. Ketuk kartunya lagi untuk melepas pilihan.</li>
      <li>${IC.pencil} <b>Pensil (simulasi)</b>: pilih karakter, lalu ketuk beberapa kotak sebagai kandidat posisinya. Catatan kecil ini tidak dihitung saat diperiksa. Ketuk lagi untuk menghapus. Saat orang ditempatkan sungguhan, catatannya hilang otomatis.</li>
      <li>${IC.x} <b>Tanda X</b>: tandai kotak yang kamu yakini kosong.</li>
      <li>Penghapus: ketuk orang/tanda X untuk menghapusnya.</li>
      <li>${IC.lens} Bantuan (maks. ${MAX_HINTS}) dan ${IC.check} Selidiki mengurangi skor jika salah.</li>
      <li>Ketuk benda untuk melihat namanya.</li></ul>
    `;}
function showHelp(fromIntro){
  openModal(`<h2>Aturan main</h2>${helpHTML()}<div class="row"><button class="btn pri" id="okBtn">Mengerti</button></div>`,true);
  $('okBtn').onclick=()=>{if(fromIntro&&!S.t0)showIntro();else closeModal();};
}
/* ---------- halaman pengaturan: layar scrSettings (bukan modal), dibuka dari menu utama & dari dalam kasus ---------- */
let setFrom='menu'; // layar asal; tombol kembali di Pengaturan kembali ke sana
const TS_CLASS={large:'ts-l',xl:'ts-xl'};
function applySettings(){ // menerapkan pengaturan saat ini ke tampilan & audio
  const root=document.documentElement;
  root.classList.remove('ts-l','ts-xl');if(TS_CLASS[SET.textSize])root.classList.add(TS_CLASS[SET.textSize]);
  $('frame').classList.toggle('noAxis',!SET.axis);
  if(S)root.style.setProperty('--cell',cellSize(S.b.C)+'px');
  audioApply(SET);
  syncSettingsUI();
}
function syncSettingsUI(){
  document.querySelectorAll('#setPage .sw').forEach(sw=>{const on=!!SET[sw.dataset.k];sw.classList.toggle('on',on);sw.setAttribute('aria-checked',on);});
  document.querySelectorAll('#setPage [data-ts]').forEach(b=>{const on=b.dataset.ts===SET.textSize;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});
  const vm=$('vol-music'),vs=$('vol-sfx');
  vm.value=SET.musicVol;vs.value=SET.sfxVol;vm.disabled=!SET.musicOn;vs.disabled=!SET.sfxOn;
  $('val-music').textContent=SET.musicVol+'%';$('val-sfx').textContent=SET.sfxVol+'%';
  $('icoMusic').src=ICON_DIR+(SET.musicOn?'suara-on.png':'suara-off.png');
  $('icoSfx').src=ICON_DIR+(SET.sfxOn?'suara-on.png':'suara-off.png');
}
function setSetting(k,v){
  SET[k]=v;store.set('settings',SET);applySettings();
  if(S&&(k==='conflict'||k==='strike'))renderAll(); // papan & keterangan memakai dua pengaturan ini
}
function openSettings(from){setFrom=from;syncSettingsUI();go('settings');}
function closeSettings(){
  go(setFrom);
  if(setFrom==='game'&&S){document.documentElement.style.setProperty('--cell',cellSize(S.b.C)+'px');renderAll();}
}
function resetProgress(){
  openModal(`<h2>Reset progres?</h2><p>Status selesai, skor, dan waktu terbaik semua kasus akan dihapus. Pengaturan tidak ikut dihapus. Tindakan ini tidak bisa dibatalkan.</p>
    <div class="row"><button class="btn" id="mClose">Batal</button><button class="btn danger" id="yes">Hapus progres</button></div>`);
  $('mClose').onclick=closeModal;
  $('yes').onclick=()=>{store.set('progress',{});closeModal();toast('Progres sudah direset');};
}

/* ---------- navigasi layar: menu, Pilih Kasus, Mode Khusus, Pengaturan, Cara Main, Tentang, permainan ---------- */
const CASE_COUNT=7; // Pilih Kasus & Mulai memakai kasus 1-7 (kasus 9x9 tidak masuk daftar utama)
const SCREENS={menu:'scrMenu',levels:'scrLevels',special:'scrSpecial',settings:'scrSettings',help:'scrHelp',about:'scrAbout',game:'scrGame'};
const MAIN_IDX=LEVELS.map((_,i)=>i).filter(i=>!(LEVELS[i].rooms.length===9&&LEVELS[i].rooms[0].length===9)).slice(0,CASE_COUNT);
const SPECIAL_IDX=LEVELS.map((_,i)=>i).filter(i=>LEVELS[i].rooms.length===9&&LEVELS[i].rooms[0].length===9);
let gameOrigin='menu'; // layar tempat permainan dibuka; tombol kembali di permainan kembali ke sana
const isOpenCase=i=>SET.random||!!validLevels[i]; // kasus dengan clue tetap yang cacat dikunci
const isSolved=(i,prog)=>!!(prog[LEVELS[i].id]&&prog[LEVELS[i].id].solved);

function go(name){
  if(!SCREENS[name])return;
  closeModal();
  Object.entries(SCREENS).forEach(([k,id])=>$(id).classList.toggle('show',k===name));
  if(name==='levels')renderLevels();
  if(name==='special')renderSpecial();
  window.scrollTo(0,0);
}
// kind: locked | open | done | avail (Mode Khusus selalu tersedia, tidak dikunci)
function caseCard(i,kind){
  const lv=LEVELS[i],pr=store.get('progress',{})[lv.id]||{};
  const label={locked:'Terkunci',open:'Terbuka',done:'Selesai',avail:'Tersedia'}[kind];
  const score=kind==='done'&&pr.score?`<small>${pr.score.toLocaleString('id-ID')}</small>`:'';
  return `<button class="lv ${kind}" data-i="${i}"${kind==='locked'?' disabled':''}><div class="n">${i+1}</div><div class="t"><b>${lv.title}</b><span>${lv.location}</span><span>${lv.rooms.length}×${lv.rooms[0].length} · ${lv.people.length} orang</span></div><div class="st">${label}${score}</div></button>`;
}
function bindCards(el,from){el.querySelectorAll('.lv:not([disabled])').forEach(bt=>bt.onclick=()=>playCase(+bt.dataset.i,from));}
function renderLevels(){
  const prog=store.get('progress',{}),el=$('levelList');
  el.innerHTML=MAIN_IDX.map(i=>caseCard(i,!isOpenCase(i)?'locked':isSolved(i,prog)?'done':'open')).join('');
  bindCards(el,'levels');
}
function renderSpecial(){
  const prog=store.get('progress',{}),el=$('specialList');
  el.innerHTML=SPECIAL_IDX.length?SPECIAL_IDX.map(i=>caseCard(i,isSolved(i,prog)?'done':'avail')).join(''):'<p class="note">Belum ada kasus khusus.</p>';
  bindCards(el,'special');
}
// kasus 1-4 pertama yang belum selesai dan terbuka; undefined bila semua sudah selesai
function nextCaseIdx(){const prog=store.get('progress',{});return MAIN_IDX.find(i=>isOpenCase(i)&&!isSolved(i,prog));}
function playCase(idx,from){gameOrigin=from;go('game');startLevel(idx);}

let modalLocked=false;
function openModal(html,locked){$('sheet').innerHTML=html;$('modal').classList.add('show');modalLocked=!!locked;}
function closeModal(){$('modal').classList.remove('show');}
let bnT;function showBanner(n,t){$('bnN').textContent=n;$('bnT').textContent=t;$('banner').classList.add('show');clearTimeout(bnT);bnT=setTimeout(()=>$('banner').classList.remove('show'),1800);}
let tT;function toast(m){const t=$('toast');t.textContent=m;t.classList.add('show');clearTimeout(tT);tT=setTimeout(()=>t.classList.remove('show'),2000);}
const fmt=s=>String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
const elapsed=()=>S.t0?Math.floor((Date.now()-S.t0)/1000):0;

/* ---------- wiring ---------- */
$('penBtn').onclick=()=>{const on=S.mode!=='note';setMode(on?'note':'place');renderAll();toast(on?'Mode pensil: simulasi posisi (tidak dihitung)':'Mode pensil mati: tempatkan sungguhan');};
$('markBtn').onclick=()=>{setMode(S.mode==='mark'?'place':'mark');renderAll();};
$('eraseBtn').onclick=()=>{setMode(S.mode==='erase'?'place':'erase');renderAll();};
$('undoBtn').onclick=()=>{const u=S.undo.pop();if(!u||S.done)return;S.redo.push(snap());restore(u);renderAll();};
$('redoBtn').onclick=()=>{const u=S.redo.pop();if(!u||S.done)return;S.undo.push(snap());restore(u);renderAll();};
$('resetBtn').onclick=()=>{
  if(S.done){startLevel(S.idx);return;}
  openModal(`<h2>Mulai ulang?</h2><p>Semua posisi, tanda X, dan catatan pensil akan dihapus. Skor dan waktu tidak berubah.</p>
    <div class="row"><button class="btn" id="mClose">Batal</button><button class="btn pri" id="yes">Kosongkan</button></div>`);
  $('mClose').onclick=closeModal;
  $('yes').onclick=()=>{snapshot();S.pos={};S.marks=new Set();S.notes={};S.sel=null;closeModal();renderAll();};
};
$('hintBtn').onclick=hint;
$('checkBtn').onclick=()=>investigate(false);
$('helpBtn').onclick=()=>showHelp(false);
$('setBtn').onclick=()=>openSettings('game');
$('backBtn').onclick=()=>go(gameOrigin);
$('setBack').onclick=closeSettings;
$('resetProgBtn').onclick=resetProgress;
document.querySelectorAll('#setPage .sw').forEach(sw=>sw.onclick=()=>setSetting(sw.dataset.k,!SET[sw.dataset.k]));
document.querySelectorAll('#setPage input[type=range]').forEach(r=>r.oninput=()=>setSetting(r.dataset.k,clampVol(r.value)));
document.querySelectorAll('#setPage [data-ts]').forEach(b=>b.onclick=()=>setSetting('textSize',b.dataset.ts));

/* ---------- carousel: tombol kiri/kanan, roda mouse, dan drag (desktop) ---------- */
const TR=$('track');
function updChev(){const max=TR.scrollWidth-TR.clientWidth;$('chevL').classList.toggle('hide',TR.scrollLeft<=4);$('chevR').classList.toggle('hide',TR.scrollLeft>=max-4);}
$('chevR').onclick=()=>TR.scrollBy({left:TR.clientWidth*.75,behavior:'smooth'});
$('chevL').onclick=()=>TR.scrollBy({left:-TR.clientWidth*.75,behavior:'smooth'});
TR.addEventListener('scroll',updChev,{passive:true});
window.addEventListener('resize',updChev);
TR.addEventListener('wheel',e=>{ // roda vertikal -> geser horizontal
  if(Math.abs(e.deltaY)>Math.abs(e.deltaX)&&TR.scrollWidth>TR.clientWidth){TR.scrollLeft+=e.deltaY;e.preventDefault();}
},{passive:false});
let drag=null,dragMoved=false;
TR.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;drag={x:e.clientX,sl:TR.scrollLeft};dragMoved=false;});
window.addEventListener('pointermove',e=>{
  if(!drag)return;const dx=e.clientX-drag.x;
  if(!dragMoved&&Math.abs(dx)>5){dragMoved=true;TR.classList.add('drag');}
  if(dragMoved)TR.scrollLeft=drag.sl-dx;
});
window.addEventListener('pointerup',()=>{if(!drag)return;drag=null;if(dragMoved){TR.classList.remove('drag');}});
TR.addEventListener('click',e=>{if(dragMoved){e.stopPropagation();e.preventDefault();dragMoved=false;}},true); // drag bukan tap kartu
$('modal').onclick=e=>{if(e.target.id==='modal'&&!modalLocked&&!S.done)closeModal();};
setInterval(()=>{if(S&&!S.done)$('timer').textContent=fmt(elapsed());},1000);
window.addEventListener('resize',()=>{if(S)document.documentElement.style.setProperty('--cell',cellSize(S.b.C)+'px');});

/* layar awal: menu utama (scrMenu sudah tampil di index.html) */
$('menuStart').onclick=()=>{const i=nextCaseIdx();if(i===undefined)go('levels');else playCase(i,'menu');};
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));
$('helpBody').innerHTML=helpHTML();
$('menuSettings').onclick=()=>openSettings('menu');
applySettings();
