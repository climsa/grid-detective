const FLOORS = {
  parquet:'repeating-linear-gradient(90deg,#c98f5a 0 calc(var(--cell)/2),#bf8550 calc(var(--cell)/2) var(--cell))',
  tiles:'conic-gradient(#f3eee4 25%,#e3dccd 0 50%,#f3eee4 0 75%,#e3dccd 0) 0 0/calc(var(--cell)/2) calc(var(--cell)/2)',
  darkwood:'repeating-linear-gradient(0deg,#8a5a3b 0 calc(var(--cell)/3),#7d5034 calc(var(--cell)/3) calc(var(--cell)/3*2))',
  stone:'radial-gradient(circle at 30% 30%,#9cc3e6 0 30%,transparent 31%),radial-gradient(circle at 75% 70%,#9cc3e6 0 28%,transparent 29%),#86b2dc',
  lilac:'repeating-linear-gradient(45deg,#d9c8e6 0 4px,#d1bfe0 4px 8px)',
  grate:'repeating-linear-gradient(0deg,#34404d 0 3px,#4b5968 3px 8px),#4b5968',
  grass:'repeating-linear-gradient(135deg,#8cc26b 0 6px,#84b964 6px 12px)',
  grass2:'repeating-linear-gradient(45deg,#79b45c 0 6px,#72ab55 6px 12px)',
  darktile:'conic-gradient(#5b4a42 25%,#4c3d36 0 50%,#5b4a42 0 75%,#4c3d36 0) 0 0/calc(var(--cell)/2) calc(var(--cell)/2)',
  concrete:'radial-gradient(circle at 20% 30%,rgba(0,0,0,.06) 0 2px,transparent 3px),radial-gradient(circle at 70% 70%,rgba(0,0,0,.05) 0 2px,transparent 3px),#b9b6b0',
  deck:'repeating-linear-gradient(90deg,#c79a6a 0 calc(var(--cell)/4 - 1px),#9c7349 calc(var(--cell)/4 - 1px) calc(var(--cell)/4))',
  marble:'linear-gradient(135deg,rgba(255,255,255,.0) 40%,rgba(180,180,190,.35) 45%,rgba(255,255,255,0) 52%),#ecebe7',
  lightwood:'repeating-linear-gradient(0deg,#e2c49a 0 calc(var(--cell)/3),#d8b98d calc(var(--cell)/3) calc(var(--cell)/3*2))',
  pooltile:'conic-gradient(#d6f0f5 25%,#c2e6ee 0 50%,#d6f0f5 0 75%,#c2e6ee 0) 0 0/calc(var(--cell)/3) calc(var(--cell)/3)',
  terracotta:'conic-gradient(#c97b56 25%,#bb6d49 0 50%,#c97b56 0 75%,#bb6d49 0) 0 0/calc(var(--cell)/2) calc(var(--cell)/2)'
};

const LEVELS = [
  {
    id:'vila-kenanga',
    title:'Malam di Vila Kenanga',
    location:'Vila Kenanga, Lembang',
    intro:'Pak Gunawan ditemukan tak bernyawa saat hujan deras. Cocokkan keterangan semua orang, lalu ungkap pelakunya!',
    rooms:['LLLDDDD','LLLDDDD','LLLLLDD','PPMMMMM','PPMMMMM','PPPKKKK','PPPKKKK'],
    roomInfo:{
      L:{name:'Ruang Tamu',floor:'parquet'},
      D:{name:'Dapur',floor:'tiles'},
      P:{name:'Perpustakaan',floor:'darkwood'},
      M:{name:'Ruang Musik',floor:'stone'},
      K:{name:'Kamar Tidur',floor:'lilac'}
    },
    kinds:{
      sofa:{name:'sofa',emoji:'🛋️'}, lampu:{name:'lampu hias',emoji:'💡'},
      karpet:{name:'karpet',walkable:true,rug:true}, tanaman:{name:'tanaman',emoji:'🪴'},
      kompor:{name:'kompor',emoji:'🍳'}, wastafel:{name:'wastafel',emoji:'🚰'},
      meja:{name:'meja makan',emoji:'🍽️'}, kursi:{name:'kursi',emoji:'🪑',walkable:true,seat:true},
      rak:{name:'rak buku',emoji:'📚'}, mejatulis:{name:'meja tulis',emoji:'✒️'},
      piano:{name:'piano',emoji:'🎹'}, lemari:{name:'lemari',emoji:'🗄️'}, kasur:{name:'kasur',emoji:'🛏️'}
    },
    objects:[
      {kind:'sofa',r:0,c:0,w:2},{kind:'lampu',r:0,c:2},{kind:'karpet',r:1,c:1,w:2,h:2,color:'#b5523b'},
      {kind:'tanaman',r:2,c:0},{kind:'kompor',r:0,c:5},{kind:'wastafel',r:0,c:6},
      {kind:'meja',r:1,c:4,w:2},{kind:'kursi',r:2,c:5},{kind:'rak',r:3,c:0,h:2},
      {kind:'kursi',r:4,c:1},{kind:'mejatulis',r:6,c:0,w:2},{kind:'piano',r:3,c:4,w:2},
      {kind:'karpet',r:4,c:3,w:2,color:'#2f6f73'},{kind:'tanaman',r:3,c:6},{kind:'lemari',r:5,c:3},
      {kind:'kasur',r:5,c:5,w:2,h:2},{kind:'karpet',r:6,c:3,w:2,color:'#7a4f9a'}
    ],
    people:[
      {id:'ratna', name:'Bu Ratna', role:'pemilik vila', avatar:'👩‍🦳', color:'#f2c14e', clue:[{t:'beside',v:'lampu'}]},
      {id:'darto', name:'Pak Darto', role:'tukang kebun', avatar:'👨‍🌾', color:'#8fc97a', clue:[{t:'beside',v:'meja'}]},
      {id:'sinta', name:'Sinta', role:'keponakan', avatar:'👩', color:'#f29ac4', clue:[{t:'on',v:'karpet'}]},
      {id:'hendra',name:'Pak Hendra', role:'pengacara', avatar:'👨‍💼', color:'#7fa7e6', clue:[{t:'col',v:1}]},
      {id:'sumi',  name:'Mbok Sumi', role:'juru masak', avatar:'👩‍🍳', color:'#f39b7f', clue:[{t:'room',v:'D'}]},
      {id:'rio',   name:'Rio', role:'pianis', avatar:'🧑‍🎤', color:'#b79ce6', clue:[{t:'col',v:5}]},
      {id:'gunawan',name:'Pak Gunawan', role:'korban', avatar:'🧓', color:'#bdb5ab', victim:true}
    ]
  },
  {"id": "kedai-senja", "title": "Kopi Terakhir di Kedai Senja", "location": "Kedai Kopi Senja, Yogyakarta", "intro": "Saat kedai hendak tutup, Mas Bayu sang manajer tergeletak di dekat cangkirnya. Lima orang lain masih ada di dalam. Siapa yang terakhir bersamanya?", "rooms": ["BBBDDD", "BBBDDD", "GGBDDD", "GGTTTT", "GGTTTT", "GGTTTT"], "roomInfo": {"B": {"name": "Bar Kopi", "floor": "darktile"}, "D": {"name": "Ruang Depan", "floor": "parquet"}, "G": {"name": "Gudang", "floor": "concrete"}, "T": {"name": "Teras", "floor": "deck"}}, "kinds": {"mesinkopi": {"name": "mesin kopi", "emoji": "☕"}, "kasir": {"name": "mesin kasir", "emoji": "🧾"}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "etalase": {"name": "etalase kue", "emoji": "🍰"}, "sofa": {"name": "sofa", "emoji": "🛋️"}, "karpet": {"name": "karpet", "walkable": true, "rug": true}, "tanaman": {"name": "tanaman", "emoji": "🪴"}, "kardus": {"name": "tumpukan kardus", "emoji": "📦"}, "payung": {"name": "meja payung", "emoji": "⛱️"}, "sepeda": {"name": "sepeda", "emoji": "🚲"}}, "objects": [{"kind": "mesinkopi", "r": 0, "c": 0}, {"kind": "kasir", "r": 0, "c": 2}, {"kind": "kursi", "r": 2, "c": 2}, {"kind": "etalase", "r": 1, "c": 3}, {"kind": "sofa", "r": 0, "c": 5, "h": 2}, {"kind": "karpet", "r": 2, "c": 3, "w": 2, "color": "#a2553a"}, {"kind": "tanaman", "r": 2, "c": 5}, {"kind": "kardus", "r": 3, "c": 0}, {"kind": "kardus", "r": 5, "c": 1}, {"kind": "payung", "r": 4, "c": 3, "w": 2}, {"kind": "sepeda", "r": 3, "c": 5}, {"kind": "tanaman", "r": 5, "c": 2}], "people": [{"id": "laras", "name": "Laras", "role": "barista", "avatar": "👩‍🍳", "color": "#f2a96b", "clue": [{"t": "room", "v": "B"}, {"t": "beside", "v": "mesinkopi"}]}, {"id": "pakjoko", "name": "Pak Joko", "role": "pemilik kedai", "avatar": "👨‍🦲", "color": "#e5c55a", "clue": [{"t": "room", "v": "G"}]}, {"id": "dimas", "name": "Dimas", "role": "pelanggan tetap", "avatar": "🧔", "color": "#7fb8e6", "clue": [{"t": "col", "v": 5}]}, {"id": "nadia", "name": "Nadia", "role": "penulis", "avatar": "👩‍💻", "color": "#c69be8", "clue": [{"t": "beside", "v": "sofa"}]}, {"id": "ujang", "name": "Ujang", "role": "kurir", "avatar": "🧑‍🔧", "color": "#8fd18b", "clue": [{"t": "row", "v": 5}]}, {"id": "bayu", "name": "Mas Bayu", "role": "korban", "avatar": "👨", "color": "#bdb5ab", "victim": true}]},
  {"id": "galeri-kota-tua", "title": "Lukisan yang Hilang", "location": "Galeri Seni Kota Tua, Jakarta", "intro": "Malam pembukaan pameran berakhir tragis: Bu Melati, pemilik galeri, ditemukan tak bernyawa. Enam tamu terakhir masih tertahan di dalam gedung.", "rooms": ["LLKKKGG", "LLKKKGG", "LLLLGGG", "PPLLGGG", "PPPPGGG", "PPPPUUU", "PPPPUUU"], "roomInfo": {"L": {"name": "Lobi", "floor": "marble"}, "K": {"name": "Kantor Kurator", "floor": "parquet"}, "G": {"name": "Galeri Lukisan", "floor": "lightwood"}, "P": {"name": "Galeri Patung", "floor": "stone"}, "U": {"name": "Gudang", "floor": "concrete"}}, "kinds": {"resepsionis": {"name": "meja resepsionis", "emoji": "🛎️"}, "tanaman": {"name": "tanaman", "emoji": "🪴"}, "karpet": {"name": "karpet", "walkable": true, "rug": true}, "mejakerja": {"name": "meja kerja", "emoji": "🖥️"}, "arsip": {"name": "lemari arsip", "emoji": "🗄️"}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "lukisan": {"name": "lukisan", "emoji": "🖼️"}, "vas": {"name": "vas antik", "emoji": "🏺"}, "bangku": {"name": "bangku", "emoji": "🪑", "walkable": true, "seat": true}, "patung": {"name": "patung", "emoji": "🗿"}, "peti": {"name": "peti kayu", "emoji": "📦"}, "tangga": {"name": "tangga", "emoji": "🪜"}}, "objects": [{"kind": "resepsionis", "r": 0, "c": 0, "w": 2}, {"kind": "tanaman", "r": 2, "c": 0}, {"kind": "karpet", "r": 2, "c": 2, "w": 2, "h": 2, "color": "#8c2f39"}, {"kind": "mejakerja", "r": 0, "c": 3, "w": 2}, {"kind": "arsip", "r": 1, "c": 2}, {"kind": "kursi", "r": 1, "c": 3}, {"kind": "lukisan", "r": 0, "c": 6}, {"kind": "lukisan", "r": 2, "c": 4}, {"kind": "vas", "r": 4, "c": 6}, {"kind": "bangku", "r": 3, "c": 5}, {"kind": "patung", "r": 3, "c": 0}, {"kind": "patung", "r": 5, "c": 2}, {"kind": "karpet", "r": 6, "c": 0, "w": 2, "color": "#2f5d8c"}, {"kind": "peti", "r": 5, "c": 5, "w": 2}, {"kind": "tangga", "r": 6, "c": 4}], "people": [{"id": "arif", "name": "Arif", "role": "kurator", "avatar": "🧑‍💼", "color": "#7fa7e6", "clue": [{"t": "on", "v": "kursi"}]}, {"id": "sekar", "name": "Sekar", "role": "pelukis", "avatar": "👩‍🎨", "color": "#f29ac4", "clue": [{"t": "row", "v": 5}]}, {"id": "tuantan", "name": "Tuan Tan", "role": "kolektor", "avatar": "👴", "color": "#e5c55a", "clue": [{"t": "room", "v": "U"}]}, {"id": "pakdin", "name": "Pak Udin", "role": "satpam", "avatar": "👮‍♂️", "color": "#6f8fb8", "clue": [{"t": "beside", "v": "patung"}]}, {"id": "rina", "name": "Rina", "role": "wartawan", "avatar": "👩‍💻", "color": "#c69be8", "clue": [{"t": "room", "v": "G"}, {"t": "beside", "v": "lukisan"}]}, {"id": "bima", "name": "Bima", "role": "mahasiswa seni", "avatar": "🧑‍🎨", "color": "#8fd18b", "clue": [{"t": "room", "v": "P"}, {"t": "col", "v": 0}]}, {"id": "melati", "name": "Bu Melati", "role": "korban", "avatar": "👩‍🦳", "color": "#bdb5ab", "victim": true}]},
  {"id": "kapal-nusantara", "title": "Badai di Kapal Nusantara", "location": "Kapal Pesiar Nusantara, Laut Flores", "intro": "Di tengah badai, Pak Wiranto si pengusaha kapal ditemukan tak bernyawa. Tujuh orang tak bisa ke mana-mana sampai kapal berlabuh.", "rooms": ["KKKDDDDD", "KKKDDDDD", "RRRRDDDD", "RRRRBBBB", "RRRRBBBB", "MMRRBBBB", "MMMMSSSS", "MMMMSSSS"], "roomInfo": {"K": {"name": "Ruang Kemudi", "floor": "lightwood"}, "D": {"name": "Dek Atas", "floor": "deck"}, "R": {"name": "Restoran", "floor": "marble"}, "B": {"name": "Kabin", "floor": "lilac"}, "M": {"name": "Ruang Mesin", "floor": "grate"}, "S": {"name": "Area Kolam", "floor": "pooltile"}}, "kinds": {"radar": {"name": "radar", "emoji": "📡"}, "kemudi": {"name": "kemudi", "emoji": "☸️"}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "jangkar": {"name": "jangkar", "emoji": "⚓"}, "pelampung": {"name": "pelampung", "emoji": "🛟"}, "teropong": {"name": "teropong", "emoji": "🔭"}, "kue": {"name": "meja prasmanan", "emoji": "🎂"}, "mejamakan": {"name": "meja makan", "emoji": "🍽️"}, "karpet": {"name": "karpet", "walkable": true, "rug": true}, "kasur": {"name": "kasur", "emoji": "🛏️"}, "koper": {"name": "koper", "emoji": "🧳"}, "lemari": {"name": "lemari", "emoji": "🗄️"}, "mesin": {"name": "mesin kapal", "emoji": "⚙️"}, "tong": {"name": "tong oli", "emoji": "🛢️"}, "perkakas": {"name": "kotak perkakas", "emoji": "🧰"}, "kolam": {"name": "kolam renang", "emoji": "🌊"}, "payung": {"name": "payung pantai", "emoji": "⛱️"}}, "objects": [{"kind": "radar", "r": 0, "c": 0}, {"kind": "kemudi", "r": 0, "c": 1}, {"kind": "kursi", "r": 1, "c": 2}, {"kind": "jangkar", "r": 0, "c": 4}, {"kind": "pelampung", "r": 0, "c": 7}, {"kind": "kursi", "r": 1, "c": 5}, {"kind": "teropong", "r": 2, "c": 7}, {"kind": "kue", "r": 2, "c": 0}, {"kind": "mejamakan", "r": 3, "c": 1, "w": 2}, {"kind": "karpet", "r": 4, "c": 0, "w": 2, "color": "#8c2f39"}, {"kind": "kursi", "r": 5, "c": 3}, {"kind": "lemari", "r": 3, "c": 4}, {"kind": "kasur", "r": 3, "c": 6, "w": 2, "h": 2}, {"kind": "koper", "r": 5, "c": 5}, {"kind": "tong", "r": 5, "c": 0}, {"kind": "mesin", "r": 6, "c": 0, "w": 2, "h": 2}, {"kind": "perkakas", "r": 7, "c": 3}, {"kind": "kolam", "r": 6, "c": 5, "w": 2, "h": 2}, {"kind": "payung", "r": 7, "c": 7}], "people": [{"id": "kapten", "name": "Kapten Hasan", "role": "nakhoda", "avatar": "👨‍✈️", "color": "#7fa7e6", "clue": [{"t": "beside", "v": "mejamakan"}]}, {"id": "ayu", "name": "Ayu", "role": "awak kabin", "avatar": "💁‍♀️", "color": "#f29ac4", "clue": [{"t": "room", "v": "S"}]}, {"id": "chef", "name": "Chef Rudi", "role": "koki kapal", "avatar": "👨‍🍳", "color": "#f2a96b", "clue": [{"t": "room", "v": "R"}, {"t": "row", "v": 5}]}, {"id": "dewi", "name": "dr. Dewi", "role": "dokter kapal", "avatar": "👩‍⚕️", "color": "#8fd1c8", "clue": [{"t": "room", "v": "B"}, {"t": "beside", "v": "lemari"}]}, {"id": "joni", "name": "Joni", "role": "teknisi mesin", "avatar": "🧑‍🔧", "color": "#e5c55a", "clue": [{"t": "beside", "v": "mesin"}]}, {"id": "kevin", "name": "Kevin", "role": "penyanyi", "avatar": "🧑‍🎤", "color": "#c69be8", "clue": [{"t": "row", "v": 3}]}, {"id": "santoso", "name": "Pak Santoso", "role": "rekan bisnis", "avatar": "🤵", "color": "#9aa5b5", "clue": [{"t": "beside", "v": "jangkar"}]}, {"id": "wiranto", "name": "Pak Wiranto", "role": "korban", "avatar": "👨‍🦳", "color": "#bdb5ab", "victim": true}]},
  {"id": "joglo-lurah", "title": "Malam Pusaka di Rumah Joglo", "location": "Rumah Joglo Keluarga Hadi, Solo", "intro": "Selepas pagelaran wayang, Eyang Kusno ditemukan tak bernyawa dan keris pusaka keluarga menghilang. Delapan orang masih berada di kompleks rumah.", "rooms": ["TTTTTTTTT", "TPPPPPPGG", "TPPPPPPGG", "TPPPPPPGG", "DDDDDWWGG", "DDDDDWWWW", "DDDDDWWWW", "BBDDDWWWW", "BBBBBBBBB"], "roomInfo": {"T": {"name": "Taman Depan", "floor": "grass"}, "P": {"name": "Pendopo", "floor": "marble"}, "G": {"name": "Gandok", "floor": "lightwood"}, "D": {"name": "Dalem", "floor": "darkwood"}, "W": {"name": "Pawon", "floor": "terracotta"}, "B": {"name": "Taman Belakang", "floor": "grass2"}}, "kinds": {"pohon": {"name": "pohon", "emoji": "🌳"}, "pot": {"name": "pot bunga", "emoji": "🪴"}, "airmancur": {"name": "air mancur", "emoji": "⛲"}, "bangku": {"name": "bangku", "emoji": "🪑", "walkable": true, "seat": true}, "gamelan": {"name": "gamelan", "emoji": "🥁"}, "tikar": {"name": "tikar", "walkable": true, "rug": true}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "kasur": {"name": "kasur", "emoji": "🛏️"}, "lemari": {"name": "lemari", "emoji": "🗄️"}, "mejamakan": {"name": "meja makan", "emoji": "🍽️"}, "jam": {"name": "jam antik", "emoji": "🕰️"}, "tungku": {"name": "tungku", "emoji": "🔥"}, "gentong": {"name": "gentong air", "emoji": "🏺"}, "kayu": {"name": "tumpukan kayu", "emoji": "🪵"}, "sumur": {"name": "sumur", "emoji": "🪣"}, "kandang": {"name": "kandang ayam", "emoji": "🐓"}}, "objects": [{"kind": "pohon", "r": 0, "c": 0}, {"kind": "bangku", "r": 0, "c": 3, "w": 2}, {"kind": "pot", "r": 0, "c": 6}, {"kind": "airmancur", "r": 0, "c": 8}, {"kind": "gamelan", "r": 1, "c": 1, "w": 2}, {"kind": "tikar", "r": 2, "c": 3, "w": 3, "h": 2, "color": "#b0773a"}, {"kind": "kursi", "r": 3, "c": 1}, {"kind": "kasur", "r": 1, "c": 7, "w": 2, "h": 2}, {"kind": "kursi", "r": 3, "c": 7}, {"kind": "lemari", "r": 4, "c": 8}, {"kind": "lemari", "r": 4, "c": 0}, {"kind": "mejamakan", "r": 5, "c": 1, "w": 2}, {"kind": "jam", "r": 4, "c": 4}, {"kind": "tikar", "r": 6, "c": 3, "w": 2, "h": 2, "color": "#6b3f8a"}, {"kind": "gentong", "r": 4, "c": 5}, {"kind": "tungku", "r": 5, "c": 7, "w": 2}, {"kind": "kursi", "r": 7, "c": 6}, {"kind": "kayu", "r": 7, "c": 8}, {"kind": "sumur", "r": 8, "c": 0}, {"kind": "pohon", "r": 8, "c": 4}, {"kind": "kandang", "r": 8, "c": 7, "w": 2}], "people": [{"id": "sinden", "name": "Mbak Sri", "role": "sinden", "avatar": "👩‍🎤", "color": "#f29ac4", "clue": [{"t": "beside", "v": "airmancur"}]}, {"id": "dalang", "name": "Ki Darmo", "role": "dalang", "avatar": "🧓", "color": "#e5c55a", "clue": [{"t": "room", "v": "P"}, {"t": "col", "v": 4}]}, {"id": "tini", "name": "Bu Tini", "role": "juru masak", "avatar": "👩‍🍳", "color": "#f2a96b", "clue": [{"t": "on", "v": "kursi"}]}, {"id": "anton", "name": "Anton", "role": "fotografer", "avatar": "🧑‍💻", "color": "#7fa7e6", "clue": [{"t": "room", "v": "G"}]}, {"id": "galih", "name": "Galih", "role": "cucu Eyang", "avatar": "🧑", "color": "#8fd18b", "clue": [{"t": "row", "v": 5}]}, {"id": "ratih", "name": "Ratih", "role": "menantu", "avatar": "👩", "color": "#c69be8", "clue": [{"t": "beside", "v": "sumur"}]}, {"id": "parjo", "name": "Pak Parjo", "role": "abdi dalem", "avatar": "👨‍🌾", "color": "#b7a27a", "clue": [{"t": "beside", "v": "pohon"}]}, {"id": "herman", "name": "Om Herman", "role": "tamu dari kota", "avatar": "🤵", "color": "#9aa5b5", "clue": [{"t": "on", "v": "tikar"}]}, {"id": "kusno", "name": "Eyang Kusno", "role": "korban", "avatar": "👴", "color": "#bdb5ab", "victim": true}]}
];

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

