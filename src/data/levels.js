/* Data kasus (LEVELS): denah, ruangan, benda, orang. Tambah kasus di sini.
   Lihat README "Menambah kasus". Dimuat setelah floors.js. */
const LEVELS = [
  {
    id:'vila-kenanga',
    title:'Malam di Vila Kenanga',
    location:'Vila Kenanga, Lembang',
    intro:'Pak Gunawan ditemukan tak bernyawa saat hujan deras. Cocokkan keterangan semua orang, lalu ungkap pelakunya!',
    story:{
      nada:'dark',
      latar:'Pak Gunawan, pemilik vila tua di Lembang, ditemukan tak bernyawa saat hujan deras.',
      motif:'warisan vila yang sedang disengketakan.'
    },
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
      {id:'ratna', name:'Bu Ratna', role:'pemilik vila', avatar:'👩‍🦳', color:'#f2c14e', clue:[{t:'beside',v:'lampu'}], story:{rahasia:'sudah menjual sebagian tanah diam-diam.', alibi:'menelepon notaris di kamar setelah pukul sembilan.', pengecoh:'tidak ada.'}},
      {id:'darto', name:'Pak Darto', role:'tukang kebun', avatar:'👨‍🌾', color:'#8fc97a', clue:[{t:'beside',v:'meja'}], story:{rahasia:'pernah bertengkar dengan Gunawan soal pohon tumbang.', alibi:'membersihkan gudang alat sampai larut.', pengecoh:null}},
      {id:'sinta', name:'Sinta', role:'keponakan', avatar:'👩', color:'#f29ac4', clue:[{t:'on',v:'karpet'}], story:{rahasia:'berutang ke Gunawan.', alibi:'ke warung dekat vila, pulang sebentar, lalu tidur.', pengecoh:null}},
      {id:'hendra',name:'Pak Hendra', role:'pengacara', avatar:'👨‍💼', color:'#7fa7e6', clue:[{t:'col',v:1}], story:{rahasia:'memegang surat wasiat.', alibi:'membaca berkas di ruang tamu sampai hujan reda.', pengecoh:null}},
      {id:'sumi',  name:'Mbok Sumi', role:'juru masak', avatar:'👩‍🍳', color:'#f39b7f', clue:[{t:'room',v:'D'}], story:{rahasia:'mendengar pertengkaran malam itu.', alibi:'menyiapkan teh hangat di dapur.', pengecoh:null}},
      {id:'rio',   name:'Rio', role:'pianis', avatar:'🧑‍🎤', color:'#b79ce6', clue:[{t:'col',v:5}], story:{rahasia:'tidak punya motif jelas.', alibi:'latihan piano sampai tengah malam.', pengecoh:'sering terlihat dekat piano.'}},
      {id:'gunawan',name:'Pak Gunawan', role:'korban', avatar:'🧓', color:'#bdb5ab', victim:true}
    ]
  },
  {"id": "kedai-senja", "title": "Kopi Terakhir di Kedai Senja", "location": "Kedai Kopi Senja, Yogyakarta", "intro": "Saat kedai hendak tutup, Mas Bayu sang manajer tergeletak di dekat cangkirnya. Lima orang lain masih ada di dalam. Siapa yang terakhir bersamanya?", "story": {"nada": "komedi", "latar": "Mas Bayu, manajer kedai, tergeletak dekat cangkir kopinya saat kedai hampir tutup.", "motif": "resep rahasia kopi yang akan dijual ke kompetitor.", "pengecoh": "kucing kedai selalu berada di tempat yang salah."}, "rooms": ["BBBDDD", "BBBDDD", "GGBDDD", "GGTTTT", "GGTTTT", "GGTTTT"], "roomInfo": {"B": {"name": "Bar Kopi", "floor": "darktile"}, "D": {"name": "Ruang Depan", "floor": "parquet"}, "G": {"name": "Gudang", "floor": "concrete"}, "T": {"name": "Teras", "floor": "deck"}}, "kinds": {"mesinkopi": {"name": "mesin kopi", "emoji": "☕"}, "kasir": {"name": "mesin kasir", "emoji": "🧾"}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "etalase": {"name": "etalase kue", "emoji": "🍰"}, "sofa": {"name": "sofa", "emoji": "🛋️"}, "karpet": {"name": "karpet", "walkable": true, "rug": true}, "tanaman": {"name": "tanaman", "emoji": "🪴"}, "kardus": {"name": "tumpukan kardus", "emoji": "📦"}, "payung": {"name": "meja payung", "emoji": "⛱️"}, "sepeda": {"name": "sepeda", "emoji": "🚲"}}, "objects": [{"kind": "mesinkopi", "r": 0, "c": 0}, {"kind": "kasir", "r": 0, "c": 2}, {"kind": "kursi", "r": 2, "c": 2}, {"kind": "etalase", "r": 1, "c": 3}, {"kind": "sofa", "r": 0, "c": 5, "h": 2}, {"kind": "karpet", "r": 2, "c": 3, "w": 2, "color": "#a2553a"}, {"kind": "tanaman", "r": 2, "c": 5}, {"kind": "kardus", "r": 3, "c": 0}, {"kind": "kardus", "r": 5, "c": 1}, {"kind": "payung", "r": 4, "c": 3, "w": 2}, {"kind": "sepeda", "r": 3, "c": 5}, {"kind": "tanaman", "r": 5, "c": 2}], "people": [{"id": "laras", "name": "Laras", "role": "barista", "avatar": "👩‍🍳", "color": "#f2a96b", "clue": [{"t": "room", "v": "B"}, {"t": "beside", "v": "mesinkopi"}], "story": {"rahasia": "satu-satunya yang tahu resep penuh.", "alibi": "membersihkan mesin kopi sambil memakai earphone, tidak mendengar apa-apa.", "pengecoh": null}}, {"id": "joko", "name": "Pak Joko", "role": "pemilik kedai", "avatar": "👨‍🦲", "color": "#e5c55a", "clue": [{"t": "room", "v": "G"}], "story": {"rahasia": "kesal pada Bayu soal laporan keuangan.", "alibi": "menghitung uang kas sendirian.", "pengecoh": null}}, {"id": "dimas", "name": "Dimas", "role": "pelanggan tetap", "avatar": "🧔", "color": "#7fb8e6", "clue": [{"t": "col", "v": 5}], "story": {"rahasia": "belum membayar tagihan sebulan.", "alibi": "tidur di kursi pojok setelah minum dua gelas kopi.", "pengecoh": null}}, {"id": "nadia", "name": "Nadia", "role": "penulis", "avatar": "👩‍💻", "color": "#c69be8", "clue": [{"t": "beside", "v": "sofa"}], "story": {"rahasia": "sedang menulis cerita tentang kedai ini.", "alibi": "mengetik di laptop dan mengirim naskah ke penerbit.", "pengecoh": null}}, {"id": "ujang", "name": "Ujang", "role": "kurir", "avatar": "🧑‍🔧", "color": "#8fd18b", "clue": [{"t": "row", "v": 5}], "story": {"rahasia": "mengantar kardus ke gudang.", "alibi": "menunggu tanda tangan di teras sampai hujan reda.", "pengecoh": null}}, {"id": "bayu", "name": "Mas Bayu", "role": "korban", "avatar": "👨", "color": "#bdb5ab", "victim": true}]},
  {"id": "galeri-kota-tua", "title": "Lukisan yang Hilang", "location": "Galeri Seni Kota Tua, Jakarta", "intro": "Malam pembukaan pameran berakhir tragis: Bu Melati, pemilik galeri, ditemukan tak bernyawa. Enam tamu terakhir masih tertahan di dalam gedung.", "story": {"nada": "campuran", "latar": "Bu Melati, pemilik galeri, ditemukan tak bernyawa saat pembukaan pameran.", "motif": "lukisan asli yang hilang diduga sudah diganti dengan palsu."}, "rooms": ["LLKKKGG", "LLKKKGG", "LLLLGGG", "PPLLGGG", "PPPPGGG", "PPPPUUU", "PPPPUUU"], "roomInfo": {"L": {"name": "Lobi", "floor": "marble"}, "K": {"name": "Kantor Kurator", "floor": "parquet"}, "G": {"name": "Galeri Lukisan", "floor": "lightwood"}, "P": {"name": "Galeri Patung", "floor": "stone"}, "U": {"name": "Gudang", "floor": "concrete"}}, "kinds": {"resepsionis": {"name": "meja resepsionis", "emoji": "🛎️"}, "tanaman": {"name": "tanaman", "emoji": "🪴"}, "karpet": {"name": "karpet", "walkable": true, "rug": true}, "mejakerja": {"name": "meja kerja", "emoji": "🖥️"}, "arsip": {"name": "lemari arsip", "emoji": "🗄️"}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "lukisan": {"name": "lukisan", "emoji": "🖼️"}, "vas": {"name": "vas antik", "emoji": "🏺"}, "bangku": {"name": "bangku", "emoji": "🪑", "walkable": true, "seat": true}, "patung": {"name": "patung", "emoji": "🗿"}, "peti": {"name": "peti kayu", "emoji": "📦"}, "tangga": {"name": "tangga", "emoji": "🪜"}}, "objects": [{"kind": "resepsionis", "r": 0, "c": 0, "w": 2}, {"kind": "tanaman", "r": 2, "c": 0}, {"kind": "karpet", "r": 2, "c": 2, "w": 2, "h": 2, "color": "#8c2f39"}, {"kind": "mejakerja", "r": 0, "c": 3, "w": 2}, {"kind": "arsip", "r": 1, "c": 2}, {"kind": "kursi", "r": 1, "c": 3}, {"kind": "lukisan", "r": 0, "c": 6}, {"kind": "lukisan", "r": 2, "c": 4}, {"kind": "vas", "r": 4, "c": 6}, {"kind": "bangku", "r": 3, "c": 5}, {"kind": "patung", "r": 3, "c": 0}, {"kind": "patung", "r": 5, "c": 2}, {"kind": "karpet", "r": 6, "c": 0, "w": 2, "color": "#2f5d8c"}, {"kind": "peti", "r": 5, "c": 5, "w": 2}, {"kind": "tangga", "r": 6, "c": 4}], "people": [{"id": "arif", "name": "Arif", "role": "kurator", "avatar": "🧑‍💼", "color": "#7fa7e6", "clue": [{"t": "on", "v": "kursi"}], "story": {"rahasia": "ketahuan memalsukan katalog.", "alibi": "mengatur pencahayaan di galeri lukisan.", "pengecoh": null}}, {"id": "sekar", "name": "Sekar", "role": "pelukis", "avatar": "👩‍🎨", "color": "#f29ac4", "clue": [{"t": "row", "v": 5}], "story": {"rahasia": "merasa karyanya diremehkan Melati.", "alibi": "menggambar sketsa di tangga dekat jendela.", "pengecoh": "Tangannya penuh cat biru, padahal katanya ia tidak menyentuh kanvas sejak pagi."}}, {"id": "tuantan", "name": "Tuan Tan", "role": "kolektor", "avatar": "👴", "color": "#e5c55a", "clue": [{"t": "room", "v": "U"}], "story": {"rahasia": "membayar Melati dengan cek kosong untuk pesanan lukisan palsu.", "alibi": "berbincang dengan tamu di lobi.", "pengecoh": null}}, {"id": "pakdin", "name": "Pak Udin", "role": "satpam", "avatar": "👮‍♂️", "color": "#6f8fb8", "clue": [{"t": "beside", "v": "patung"}], "story": {"rahasia": "lupa mengunci gudang.", "alibi": "berkeliling gedung dengan senter.", "pengecoh": "Ia menyimpan kunci cadangan gudang di sakunya sejak sore."}}, {"id": "rina", "name": "Rina", "role": "wartawan", "avatar": "👩‍💻", "color": "#c69be8", "clue": [{"t": "room", "v": "G"}, {"t": "beside", "v": "lukisan"}], "story": {"rahasia": "mencari berita besar.", "alibi": "mengetik catatan di meja kerja sambil menunggu wawancara.", "pengecoh": "Ia merekam diam-diam saat Melati berbicara di telepon."}}, {"id": "bima", "name": "Bima", "role": "mahasiswa seni", "avatar": "🧑‍🎨", "color": "#8fd18b", "clue": [{"t": "room", "v": "P"}, {"t": "col", "v": 0}], "story": {"rahasia": "ditolak beasiswa oleh Melati.", "alibi": "menggambar patung di bangku.", "pengecoh": null}}, {"id": "melati", "name": "Bu Melati", "role": "korban", "avatar": "👩‍🦳", "color": "#bdb5ab", "victim": true}]},
  {"id": "kapal-nusantara", "title": "Badai di Kapal Nusantara", "location": "Kapal Pesiar Nusantara, Laut Flores", "intro": "Di tengah badai, Pak Wiranto si pengusaha kapal ditemukan tak bernyawa. Tujuh orang tak bisa ke mana-mana sampai kapal berlabuh.", "story": {"nada": "dark", "latar": "Pak Wiranto, pengusaha kapal, ditemukan tak bernyawa di tengah badai.", "motif": "kontrak penjualan kapal yang curang dan utang kepada rekan bisnis."}, "rooms": ["KKKDDDDD", "KKKDDDDD", "RRRRDDDD", "RRRRBBBB", "RRRRBBBB", "MMRRBBBB", "MMMMSSSS", "MMMMSSSS"], "roomInfo": {"K": {"name": "Ruang Kemudi", "floor": "lightwood"}, "D": {"name": "Dek Atas", "floor": "deck"}, "R": {"name": "Restoran", "floor": "marble"}, "B": {"name": "Kabin", "floor": "lilac"}, "M": {"name": "Ruang Mesin", "floor": "grate"}, "S": {"name": "Area Kolam", "floor": "pooltile"}}, "kinds": {"radar": {"name": "radar", "emoji": "📡"}, "kemudi": {"name": "kemudi", "emoji": "☸️"}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "jangkar": {"name": "jangkar", "emoji": "⚓"}, "pelampung": {"name": "pelampung", "emoji": "🛟"}, "teropong": {"name": "teropong", "emoji": "🔭"}, "kue": {"name": "meja prasmanan", "emoji": "🎂"}, "mejamakan": {"name": "meja makan", "emoji": "🍽️"}, "karpet": {"name": "karpet", "walkable": true, "rug": true}, "kasur": {"name": "kasur", "emoji": "🛏️"}, "koper": {"name": "koper", "emoji": "🧳"}, "lemari": {"name": "lemari", "emoji": "🗄️"}, "mesin": {"name": "mesin kapal", "emoji": "⚙️"}, "tong": {"name": "tong oli", "emoji": "🛢️"}, "perkakas": {"name": "kotak perkakas", "emoji": "🧰"}, "kolam": {"name": "kolam renang", "emoji": "🌊"}, "payungpantai": {"name": "payung pantai", "emoji": "⛱️"}}, "objects": [{"kind": "radar", "r": 0, "c": 0}, {"kind": "kemudi", "r": 0, "c": 1}, {"kind": "kursi", "r": 1, "c": 2}, {"kind": "jangkar", "r": 0, "c": 4}, {"kind": "pelampung", "r": 0, "c": 7}, {"kind": "kursi", "r": 1, "c": 5}, {"kind": "teropong", "r": 2, "c": 7}, {"kind": "kue", "r": 2, "c": 0}, {"kind": "mejamakan", "r": 3, "c": 1, "w": 2}, {"kind": "karpet", "r": 4, "c": 0, "w": 2, "color": "#8c2f39"}, {"kind": "kursi", "r": 5, "c": 3}, {"kind": "lemari", "r": 3, "c": 4}, {"kind": "kasur", "r": 3, "c": 6, "w": 2, "h": 2}, {"kind": "koper", "r": 5, "c": 5}, {"kind": "tong", "r": 5, "c": 0}, {"kind": "mesin", "r": 6, "c": 0, "w": 2, "h": 2}, {"kind": "perkakas", "r": 7, "c": 3}, {"kind": "kolam", "r": 6, "c": 5, "w": 2, "h": 2}, {"kind": "payungpantai", "r": 7, "c": 7}], "people": [{"id": "kapten", "name": "Kapten Hasan", "role": "nakhoda", "avatar": "👨‍✈️", "color": "#7fa7e6", "clue": [{"t": "beside", "v": "mejamakan"}], "story": {"rahasia": "tahu kapal dalam kondisi buruk tapi tetap berlayar.", "alibi": "memantau cuaca di ruang kemudi.", "pengecoh": null}}, {"id": "ayu", "name": "Ayu", "role": "awak kabin", "avatar": "💁‍♀️", "color": "#f29ac4", "clue": [{"t": "room", "v": "S"}], "story": {"rahasia": "menerima bayaran tambahan untuk menutupi sesuatu.", "alibi": "merapikan kabin tamu, lalu istirahat.", "pengecoh": null}}, {"id": "chef", "name": "Chef Rudi", "role": "koki kapal", "avatar": "👨‍🍳", "color": "#f2a96b", "clue": [{"t": "room", "v": "R"}, {"t": "row", "v": 5}], "story": {"rahasia": "pernah dipecat oleh Wiranto.", "alibi": "menyiapkan makan malam di dapur.", "pengecoh": null}}, {"id": "dewi", "name": "dr. Dewi", "role": "dokter kapal", "avatar": "👩‍⚕️", "color": "#8fd1c8", "clue": [{"t": "room", "v": "B"}, {"t": "beside", "v": "lemari"}], "story": {"rahasia": "mengetahui Wiranto sakit parah dan menyembunyikannya.", "alibi": "memeriksa penumpang yang mabuk laut.", "pengecoh": null}}, {"id": "joni", "name": "Joni", "role": "teknisi mesin", "avatar": "🧑‍🔧", "color": "#e5c55a", "clue": [{"t": "beside", "v": "mesin"}], "story": {"rahasia": "menyabotase generator untuk mengulur waktu.", "alibi": "bekerja di ruang mesin sendirian.", "pengecoh": null}}, {"id": "kevin", "name": "Kevin", "role": "penyanyi", "avatar": "🧑‍🎤", "color": "#c69be8", "clue": [{"t": "row", "v": 3}], "story": {"rahasia": "berutang banyak pada Wiranto.", "alibi": "berlatih lagu di dek atas sambil basah kuyup.", "pengecoh": null}}, {"id": "santoso", "name": "Pak Santoso", "role": "rekan bisnis", "avatar": "🤵", "color": "#9aa5b5", "clue": [{"t": "beside", "v": "jangkar"}], "story": {"rahasia": "penandatangan kontrak yang curang.", "alibi": "duduk di restoran menunggu kopi.", "pengecoh": null}}, {"id": "wiranto", "name": "Pak Wiranto", "role": "korban", "avatar": "👨‍🦳", "color": "#bdb5ab", "victim": true}]},
  {"id":"arisan-kue-terakhir","title":"Kue Terakhir di Arisan Ibu-Ibu","location":"Rumah Bu Ratna, arisan bulanan","intro":"Arisan bulanan di rumah Bu Ratna mendadak kacau. Bu Melati, ketua arisan, tergeletak diam di tengah acara. Lima orang lain masih ada di sana. Siapa yang terakhir bersamanya?","story":{"nada":"komedi","latar":"arisan bulanan di rumah Bu Ratna, saat semua orang sibuk berebut potongan kue terakhir.","motif":"uang kas arisan yang selisih dan belum dijelaskan."},"rooms":["RRRDDD","RRRDDD","RRRTTT","KKKTTT","KKKTTT","KKKKKK"],"roomInfo":{"R":{"name":"Ruang Tamu","floor":"parquet"},"D":{"name":"Dapur","floor":"tiles"},"T":{"name":"Teras","floor":"deck"},"K":{"name":"Ruang Keluarga","floor":"lilac"}},"kinds":{"sofa":{"name":"sofa","emoji":"🛋️"},"lampu":{"name":"lampu hias","emoji":"💡"},"mejamakan":{"name":"meja makan","emoji":"🍽️"},"kursi":{"name":"kursi","emoji":"🪑","walkable":true,"seat":true},"karpet":{"name":"karpet","emoji":"🟥","walkable":true,"rug":true},"kue":{"name":"kue-kue","emoji":"🍰"},"kompor":{"name":"kompor","emoji":"🍳"},"wastafel":{"name":"wastafel","emoji":"🚰"},"tanaman":{"name":"tanaman","emoji":"🪴"},"lemari":{"name":"lemari","emoji":"🗄️"}},"objects":[{"kind":"sofa","r":0,"c":0,"w":2},{"kind":"lampu","r":0,"c":2},{"kind":"mejamakan","r":1,"c":1,"w":2},{"kind":"kursi","r":2,"c":1},{"kind":"kompor","r":0,"c":4},{"kind":"wastafel","r":0,"c":5},{"kind":"kue","r":1,"c":4},{"kind":"tanaman","r":2,"c":5},{"kind":"kursi","r":4,"c":4},{"kind":"karpet","r":3,"c":1,"w":2,"h":2},{"kind":"lemari","r":5,"c":5}],"people":[{"id":"ratna","name":"Bu Ratna","role":"tuan rumah","avatar":"👩‍🦳","color":"#f2c14e","clue":[{"t":"row","v":4},{"t":"on","v":"karpet"}],"story":{"rahasia":"kas arisan ia pakai dulu untuk renovasi.","alibi":"menata hidangan untuk tamu.","pengecoh":null}},{"id":"sumi","name":"Mbok Sumi","role":"anggota arisan","avatar":"👩‍🍳","color":"#f39b7f","clue":[{"t":"room","v":"D"}],"story":{"rahasia":"diam-diam mencatat tiap utang anggota.","alibi":"membagikan teh ke para tamu.","pengecoh":null}},{"id":"tini","name":"Bu Tini","role":"anggota arisan","avatar":"👩‍🍳","color":"#f2a96b","clue":[{"t":"col","v":5}],"story":{"rahasia":"menukar nama di undian arisan.","alibi":"sibuk berfoto selfie dengan para tamu.","pengecoh":null}},{"id":"rina","name":"Rina","role":"anggota arisan","avatar":"👩‍💻","color":"#c69be8","clue":[{"t":"room","v":"T"}],"story":{"rahasia":"menulis kolom gosip tentang arisan ini.","alibi":"mencatat obrolan di buku kecilnya.","pengecoh":"terlihat berbisik dengan Melati sejak awal."}},{"id":"laras","name":"Laras","role":"anggota arisan","avatar":"👩‍🍳","color":"#f2a96b","clue":[{"t":"col","v":1}],"story":{"rahasia":"belum pernah membayar iuran.","alibi":"mencuci piring tanpa henti.","pengecoh":null}},{"id":"melati","name":"Bu Melati","role":"ketua arisan","avatar":"👩‍🦳","color":"#bdb5ab","victim":true}]},
  {"id":"penginapan-kaki-gunung","title":"Malam Terakhir di Penginapan Kaki Gunung","location":"Penginapan Kaki Gunung","intro":"Menjelang pagi, Pak Wiranto, tamu pengusaha, ditemukan tak bernyawa di penginapan kaki gunung. Lima orang lain masih berada di sana, dan kabut tebal menutup jalan turun. Siapa yang terakhir bersamanya?","story":{"nada":"dark","latar":"penginapan sepi di kaki gunung saat kabut tebal menutup jalan turun.","motif":"tanah penginapan yang akan dijual ke investor."},"rooms":["LLLDDK","LLLDDK","TTTKKK","TTTKKK","HHHHHH","HHHHHH"],"roomInfo":{"L":{"name":"Lobi","floor":"darkwood"},"D":{"name":"Dapur","floor":"tiles"},"K":{"name":"Kamar Tamu","floor":"lilac"},"T":{"name":"Teras","floor":"deck"},"H":{"name":"Halaman","floor":"grass"}},"kinds":{"sofa":{"name":"sofa","emoji":"🛋️"},"lampu":{"name":"lampu redup","emoji":"💡"},"mejamakan":{"name":"meja makan","emoji":"🍽️"},"kursi":{"name":"kursi","emoji":"🪑","walkable":true,"seat":true},"karpet":{"name":"karpet","emoji":"🟥","walkable":true,"rug":true},"kasur":{"name":"kasur","emoji":"🛏️"},"lemari":{"name":"lemari","emoji":"🗄️"},"kompor":{"name":"kompor","emoji":"🍳"},"wastafel":{"name":"wastafel","emoji":"🚰"},"tanaman":{"name":"tanaman","emoji":"🪴"},"kayu":{"name":"tumpukan kayu","emoji":"🪵"}},"objects":[{"kind":"sofa","r":0,"c":0,"w":2},{"kind":"lampu","r":0,"c":2},{"kind":"mejamakan","r":1,"c":1},{"kind":"kursi","r":1,"c":2},{"kind":"kompor","r":0,"c":4},{"kind":"wastafel","r":1,"c":4},{"kind":"tanaman","r":2,"c":0},{"kind":"kursi","r":3,"c":1},{"kind":"kasur","r":2,"c":4,"w":2,"h":2},{"kind":"lemari","r":3,"c":3},{"kind":"kayu","r":4,"c":0,"w":2},{"kind":"karpet","r":4,"c":4,"w":2},{"kind":"tanaman","r":5,"c":0}],"people":[{"id":"hendra","name":"Pak Hendra","role":"pemilik tanah","avatar":"👨‍💼","color":"#7fa7e6","clue":[{"t":"row","v":5},{"t":"col","v":2}],"story":{"rahasia":"pemilik tanah yang berniat menjual diam-diam.","alibi":"membaca surat kontrak di bawah lampu redup.","pengecoh":"tangannya gemetar saat ditanya soal investor."}},{"id":"ayu","name":"Ayu","role":"pegawai penginapan","avatar":"💁‍♀️","color":"#f29ac4","clue":[{"t":"row","v":0}],"story":{"rahasia":"pernah dijanjikan bagian dari penjualan.","alibi":"merapikan perlengkapan tamu.","pengecoh":null}},{"id":"joni","name":"Joni","role":"penjaga penginapan","avatar":"🧑‍🔧","color":"#e5c55a","clue":[{"t":"room","v":"K"}],"story":{"rahasia":"pernah dilarang menginap oleh Wiranto.","alibi":"memperbaiki lampu yang berkedip.","pengecoh":null}},{"id":"dewi","name":"dr. Dewi","role":"pengelola penginapan","avatar":"👩‍⚕️","color":"#8fd1c8","clue":[{"t":"col","v":1}],"story":{"rahasia":"tahu kondisi kesehatan Wiranto.","alibi":"mengobati tamu yang demam.","pengecoh":null}},{"id":"ujang","name":"Ujang","role":"pemandu gunung","avatar":"🧑‍🔧","color":"#8fd18b","clue":[{"t":"beside","v":"tanaman"}],"story":{"rahasia":"membuka jalur gunung tanpa izin.","alibi":"berjaga di pintu masuk sampai kabut menebal.","pengecoh":"sepatunya penuh lumpur basah."}},{"id":"wiranto","name":"Pak Wiranto","role":"tamu pengusaha","avatar":"👨‍🦳","color":"#bdb5ab","victim":true}]},
  {"id":"siaran-terakhir-gunawan","title":"Siaran Terakhir Pak Gunawan","location":"Stasiun Radio Kecil","intro":"Selesai siaran malam, Pak Gunawan, penyiar senior, ditemukan tak bernyawa di stasiun radio kecil. Lima orang lain masih berada di gedung, dan suara tak dikenal sempat terdengar di sela siaran.","story":{"nada":"campuran","latar":"stasiun radio kecil yang hampir ditutup, dengan suara tak dikenal terdengar di sela siaran.","motif":"rekaman rahasia yang akan dibacakan Gunawan di udara."},"rooms":["SSSKKK","SSSKKK","LLLRRR","LLLRRR","LLLRRR","LLLRRR"],"roomInfo":{"S":{"name":"Studio Siaran","floor":"darktile"},"K":{"name":"Ruang Kontrol","floor":"concrete"},"L":{"name":"Lobi","floor":"parquet"},"R":{"name":"Ruang Rekam","floor":"stone"}},"kinds":{"mesin":{"name":"peralatan siaran","emoji":"🎚️"},"mejakerja":{"name":"meja kerja","emoji":"🖥️"},"kursi":{"name":"kursi","emoji":"🪑","walkable":true,"seat":true},"rak":{"name":"rak piringan","emoji":"📀"},"lampu":{"name":"lampu","emoji":"💡"},"sofa":{"name":"sofa","emoji":"🛋️"},"karpet":{"name":"karpet","emoji":"🟥","walkable":true,"rug":true},"tanaman":{"name":"tanaman","emoji":"🪴"},"lemari":{"name":"lemari","emoji":"🗄️"}},"objects":[{"kind":"mesin","r":0,"c":0,"w":2},{"kind":"mejakerja","r":1,"c":1,"w":2},{"kind":"kursi","r":2,"c":1},{"kind":"lampu","r":0,"c":4},{"kind":"rak","r":1,"c":4,"w":2},{"kind":"mesin","r":0,"c":5},{"kind":"sofa","r":4,"c":0,"w":2},{"kind":"tanaman","r":5,"c":0},{"kind":"karpet","r":3,"c":2,"h":2},{"kind":"kursi","r":3,"c":4},{"kind":"lemari","r":4,"c":5},{"kind":"kursi","r":5,"c":3}],"people":[{"id":"nadia","name":"Nadia","role":"penyiar baru","avatar":"👩‍💻","color":"#c69be8","clue":[{"t":"row","v":2},{"t":"col","v":4}],"story":{"rahasia":"penyiar baru yang mengincar jam siarannya.","alibi":"berlatih membaca naskah dengan suara keras.","pengecoh":"bolak-balik melihat jam."}},{"id":"kevin","name":"Kevin","role":"pengisi lagu","avatar":"🧑‍🎤","color":"#c69be8","clue":[{"t":"col","v":5}],"story":{"rahasia":"lagunya dipakai tanpa izin.","alibi":"memilih lagu untuk jam berikutnya.","pengecoh":null}},{"id":"rio","name":"Rio","role":"teknisi siaran","avatar":"🧑‍🎤","color":"#b79ce6","clue":[{"t":"room","v":"R"}],"story":{"rahasia":"pernah merekam percakapan Gunawan diam-diam.","alibi":"mengatur suara dan peralatan siaran.","pengecoh":null}},{"id":"sinta","name":"Sinta","role":"penerima telepon","avatar":"👩","color":"#f29ac4","clue":[{"t":"col","v":2}],"story":{"rahasia":"berutang pada Gunawan.","alibi":"menjawab telepon pendengar.","pengecoh":null}},{"id":"darto","name":"Pak Darto","role":"operator","avatar":"👨‍🌾","color":"#8fc97a","clue":[{"t":"beside","v":"tanaman"}],"story":{"rahasia":"pernah dipecat Gunawan.","alibi":"membersihkan peralatan sampai larut.","pengecoh":null}},{"id":"gunawan","name":"Pak Gunawan","role":"penyiar senior","avatar":"🧓","color":"#bdb5ab","victim":true}]},
{"id":"hujan-kebun-teh","title":"Hujan di Kebun Teh","location":"Kebun Teh, Lereng Bukit","rooms":["KKKKGGG","KKKKGGG","KKTTGGG","KTTTRRD","TTTRRDD","TRRRRDD","RRRRDDD"],"roomInfo":{"K":{"name":"Kebun Teh","floor":"grass"},"T":{"name":"Teras","floor":"deck"},"R":{"name":"Ruang Tamu","floor":"darkwood"},"G":{"name":"Gudang Pengolahan","floor":"concrete"},"D":{"name":"Dapur","floor":"tiles"}},"kinds":{"pohon":{"name":"pohon teh","emoji":"🌳"},"tong":{"name":"tong air","emoji":"🛢️"},"sumur":{"name":"sumur","emoji":"🪣"},"kayu":{"name":"tumpukan kayu","emoji":"🪵"},"tikar":{"name":"tikar jemur","walkable":true,"rug":true},"kursi":{"name":"kursi","emoji":"🪑","walkable":true,"seat":true},"bangku":{"name":"bangku","emoji":"🪑","walkable":true,"seat":true},"mejamakan":{"name":"meja makan","emoji":"🍽️"},"mesin":{"name":"mesin pengering","emoji":"⚙️"},"peti":{"name":"peti kayu","emoji":"📦"},"kardus":{"name":"tumpukan kardus","emoji":"📦"},"lemari":{"name":"lemari","emoji":"🗄️"},"payung":{"name":"payung","emoji":"⛱️"},"tanaman":{"name":"tanaman","emoji":"🪴"},"sofa":{"name":"sofa","emoji":"🛋️"},"lampu":{"name":"lampu hias","emoji":"💡"},"rak":{"name":"rak","emoji":"📚"},"kompor":{"name":"kompor","emoji":"🍳"},"wastafel":{"name":"wastafel","emoji":"🚰"},"tungku":{"name":"tungku","emoji":"🔥"}},"objects":[{"kind":"pohon","r":0,"c":0},{"kind":"pohon","r":1,"c":2},{"kind":"tong","r":2,"c":1},{"kind":"kayu","r":0,"c":3},{"kind":"sumur","r":3,"c":0},{"kind":"tikar","r":1,"c":1},{"kind":"mesin","r":0,"c":5},{"kind":"peti","r":1,"c":6},{"kind":"kardus","r":2,"c":4},{"kind":"lemari","r":1,"c":4},{"kind":"payung","r":2,"c":2},{"kind":"bangku","r":4,"c":1},{"kind":"tanaman","r":5,"c":0},{"kind":"sofa","r":5,"c":2,"w":2},{"kind":"lampu","r":3,"c":4},{"kind":"rak","r":6,"c":0},{"kind":"kursi","r":6,"c":2},{"kind":"kompor","r":3,"c":6},{"kind":"wastafel","r":4,"c":6},{"kind":"mejamakan","r":5,"c":5,"w":2},{"kind":"tungku","r":6,"c":4}],"people":[{"id":"kusno","name":"Pak Kusno","role":"korban","avatar":"👴","color":"#bdb5ab","victim":true},{"id":"parjo","name":"Pak Parjo","role":"pekerja kebun","avatar":"👨‍🌾","color":"#b7a27a","clue":[{"t":"notRoom","v":"D"},{"t":"col","v":3}],"story":{"rahasia":"menggelapkan sebagian hasil panen.","alibi":"mengecek hasil petikan sampai gelap.","pengecoh":null}},{"id":"tini","name":"Bu Tini","role":"juru masak","avatar":"👩‍🍳","color":"#f2a96b","clue":[{"t":"beside","v":"kardus"}],"story":{"rahasia":"diam-diam meminjamkan uang pada Kusno.","alibi":"menyiapkan makan malam untuk para pekerja.","pengecoh":null}},{"id":"galih","name":"Galih","role":"perantara tanah","avatar":"🧑","color":"#8fd18b","clue":[{"t":"row","v":6}],"story":{"rahasia":"menawarkan tanah ke pembeli lain.","alibi":"duduk menghitung hasil timbangan.","pengecoh":"menyembunyikan surat dari pembeli itu."}},{"id":"herman","name":"Om Herman","role":"calon pembeli kebun","avatar":"🤵","color":"#9aa5b5","clue":[{"t":"notRoom","v":"T"}],"story":{"rahasia":"ingin membeli seluruh kebun.","alibi":"berbincang dengan tamu yang menginap.","pengecoh":null}},{"id":"sri","name":"Mbak Sri","role":"mandor kebun","avatar":"👩‍🎤","color":"#f29ac4","clue":[{"t":"beside","v":"tong"}],"story":{"rahasia":"tahu Kusno akan mengganti pengelola.","alibi":"menyanyi untuk para pekerja yang kelelahan.","pengecoh":null}},{"id":"bima","name":"Bima","role":"pekerja baru","avatar":"🧑‍🎨","color":"#8fd18b","clue":[{"t":"room","v":"G"}],"story":{"rahasia":"pekerja baru yang mencari pekerjaan lain.","alibi":"memperbaiki alat yang rusak.","pengecoh":"lari terburu-buru saat ditanya."}}],"intro":"Pak Kusno, juragan kebun teh, ditemukan tak bernyawa saat hujan tak berhenti. Jalan menuju kebun putus oleh longsor kecil. Enam orang lain masih berada di kebun.","story":{"nada":"dark","latar":"kebun teh di lereng bukit, jalan terputus oleh longsor kecil.","motif":"hak panen dan utang pupuk yang menumpuk."}},
{
    id:'kostum-pentas-tujuhbelasan',title:'Kostum yang Hilang di Pentas Tujuhbelasan',location:'Pentas 17-an Kampung',
    intro:'Mas Bayu, ketua panitia, jatuh pingsan setelah menyadari kostum hilang. Enam orang lain masih ada di area pentas.',
    story:{nada:'komedi',latar:'pentas 17 Agustusan di kampung, dengan lomba, panggung, dan kostum badut yang lenyap.',motif:'hadiah lomba yang tertukar dan merugikan salah satu peserta.'},
    rooms:[
      'SSSLLLL',
      'SSSLLLL',
      'RRLLLDD',
      'RRLLLDD',
      'RRLLDDD',
      'LLLLUUU',
      'LLLLUUU',
    ],
    roomInfo:{S:{name:'Panggung',floor:'lightwood'},L:{name:'Lapangan',floor:'grass'},R:{name:'Ruang Rias',floor:'lilac'},D:{name:'Tenda Panitia',floor:'deck'},U:{name:'Gudang Kostum',floor:'concrete'}},
    kinds:{lampu:{name:'lampu',emoji:'💡'},karpet:{name:'karpet',emoji:'🟥',walkable:true,rug:true},tangga:{name:'tangga',emoji:'🪜'},bangku:{name:'bangku',emoji:'🪑',walkable:true,seat:true},tanaman:{name:'tanaman',emoji:'🪴'},payungpantai:{name:'payung pantai',emoji:'⛱️'},tikar:{name:'tikar',walkable:true,rug:true},kardus:{name:'tumpukan kardus',emoji:'📦'},lemari:{name:'lemari',emoji:'🗄️'},kursi:{name:'kursi',emoji:'🪑',walkable:true,seat:true},mejatulis:{name:'meja tulis',emoji:'✒️'},kue:{name:'kue-kue',emoji:'🍰'},peti:{name:'peti kayu',emoji:'📦'},perkakas:{name:'kotak perkakas',emoji:'🧰'},rak:{name:'rak',emoji:'📚'}},
    objects:[
      {kind:'lampu',r:0,c:0},
      {kind:'karpet',r:0,c:1,w:2,color:'#8c2f39'},
      {kind:'tangga',r:1,c:2},
      {kind:'bangku',r:0,c:4},
      {kind:'tanaman',r:0,c:6},
      {kind:'payungpantai',r:1,c:6},
      {kind:'tikar',r:2,c:3,w:2,h:2,color:'#2f6f73'},
      {kind:'kardus',r:5,c:2},
      {kind:'bangku',r:6,c:2},
      {kind:'lemari',r:2,c:0},
      {kind:'kursi',r:3,c:1},
      {kind:'mejatulis',r:4,c:0,w:2},
      {kind:'mejatulis',r:2,c:5,w:2},
      {kind:'kue',r:3,c:5},
      {kind:'kursi',r:3,c:6},
      {kind:'peti',r:5,c:4,w:2},
      {kind:'kardus',r:5,c:6},
      {kind:'perkakas',r:6,c:4},
      {kind:'rak',r:6,c:5},
    ],
    people:[
      {id:'joko',name:'Pak Joko',role:'panitia hadiah',avatar:'👨‍🦲',color:'#e5c55a',clue:[{t:'notRoom',v:'S'}],story:{rahasia:'menyembunyikan hadiah utama untuk anaknya.',alibi:'menyiapkan lomba panjat pinang.',pengecoh:'mengaku tak tahu apa pun, tapi tersenyum terus.'}},
      {id:'dimas',name:'Dimas',role:'peserta lomba',avatar:'🧔',color:'#7fb8e6',clue:[{t:'room',v:'S'},{t:'on',v:'karpet'}],story:{rahasia:'peserta yang selalu curang di lomba.',alibi:'berlatih lomba makan kerupuk.',pengecoh:null}},
      {id:'ujang',name:'Ujang',role:'panitia tikar',avatar:'🧑‍🔧',color:'#8fd18b',clue:[{t:'beside',v:'lampu'}],story:{rahasia:'membawa pulang kostum untuk latihan.',alibi:'mengatur penonton dan tikar.',pengecoh:null}},
      {id:'sekar',name:'Sekar',role:'penulis naskah',avatar:'👩‍🎨',color:'#f29ac4',clue:[{t:'row',v:2}],story:{rahasia:'menulis naskah pidato untuk Bayu.',alibi:'mengecek tata rias para peserta.',pengecoh:null}},
      {id:'anton',name:'Anton',role:'tukang foto',avatar:'🧑‍💻',color:'#7fa7e6',clue:[{t:'col',v:2}],story:{rahasia:'memotret semua orang, termasuk pada saat yang salah.',alibi:'memotret persiapan panggung.',pengecoh:null}},
      {id:'ratih',name:'Ratih',role:'juri lomba',avatar:'👩',color:'#c69be8',clue:[{t:'row',v:3}],story:{rahasia:'menjadi juri tapi memihak.',alibi:'menghitung nilai peserta.',pengecoh:null}},
      {id:'bayu',name:'Mas Bayu',role:'korban',avatar:'👨',color:'#bdb5ab',victim:true},
    ]
  },
  {
    id:'kain-batik-tertukar',title:'Kain Batik yang Tertukar',location:'Galeri Kota, Pameran Batik Tua',
    intro:'Bu Melati, kurator pameran batik, ditemukan tak bernyawa sebelum pembukaan. Enam orang lain masih ada di galeri.',
    story:{nada:'campuran',latar:'pameran batik tua di galeri kota dengan kain langka yang diduga tertukar.',motif:'kain batik asli milik keluarga yang ternyata sudah diganti tiruan.'},
    rooms:[
      'LLLRRRR',
      'LLLRRRR',
      'AAARRKK',
      'AAAKKKK',
      'AAAKKKK',
      'GGGGTTT',
      'GGGGTTT',
    ],
    roomInfo:{L:{name:'Lobi',floor:'marble'},R:{name:'Ruang Pamer',floor:'lightwood'},A:{name:'Kantor Kurator',floor:'parquet'},K:{name:'Ruang Kain Langka',floor:'darkwood'},G:{name:'Gudang',floor:'concrete'},T:{name:'Teras',floor:'deck'}},
    kinds:{resepsionis:{name:'meja resepsionis',emoji:'🛎️'},tanaman:{name:'tanaman',emoji:'🪴'},vas:{name:'vas antik',emoji:'🏺'},lukisan:{name:'lukisan',emoji:'🖼️'},patung:{name:'patung',emoji:'🗿'},bangku:{name:'bangku',emoji:'🪑',walkable:true,seat:true},mejakerja:{name:'meja kerja',emoji:'🖥️'},arsip:{name:'lemari arsip',emoji:'🗄️'},kursi:{name:'kursi',emoji:'🪑',walkable:true,seat:true},lampu:{name:'lampu',emoji:'💡'},etalase:{name:'etalase kaca',emoji:'🪟'},karpet:{name:'karpet',emoji:'🟥',walkable:true,rug:true},lemari:{name:'lemari',emoji:'🗄️'},jam:{name:'jam antik',emoji:'🕰️'},peti:{name:'peti kayu',emoji:'📦'},kardus:{name:'tumpukan kardus',emoji:'📦'},tangga:{name:'tangga',emoji:'🪜'},payungpantai:{name:'payung pantai',emoji:'⛱️'}},
    objects:[
      {kind:'resepsionis',r:0,c:0,w:2},
      {kind:'tanaman',r:1,c:0},
      {kind:'vas',r:1,c:2},
      {kind:'lukisan',r:0,c:6},
      {kind:'patung',r:0,c:4},
      {kind:'vas',r:1,c:6},
      {kind:'bangku',r:1,c:5},
      {kind:'mejakerja',r:2,c:0,w:2},
      {kind:'arsip',r:3,c:0},
      {kind:'kursi',r:3,c:1},
      {kind:'lampu',r:4,c:2},
      {kind:'etalase',r:3,c:5,w:2},
      {kind:'karpet',r:3,c:3,h:2,color:'#8c2f39'},
      {kind:'lemari',r:4,c:6},
      {kind:'jam',r:2,c:6},
      {kind:'peti',r:5,c:0,w:2},
      {kind:'kardus',r:5,c:2},
      {kind:'tangga',r:6,c:1},
      {kind:'payungpantai',r:5,c:5},
      {kind:'tanaman',r:6,c:4},
      {kind:'bangku',r:6,c:6},
    ],
    people:[
      {id:'arif',name:'Arif',role:'petugas label',avatar:'🧑‍💼',color:'#7fa7e6',clue:[{t:'beside',v:'payungpantai'}],story:{rahasia:'pernah memalsukan label kain.',alibi:'memeriksa label dan pencahayaan.',pengecoh:'menutup labelnya dengan tangan.'}},
      {id:'sri',name:'Mbak Sri',role:'pewaris kain',avatar:'👩‍🎤',color:'#f29ac4',clue:[{t:'room',v:'K'}],story:{rahasia:'pewaris sah kain tua itu.',alibi:'menyambut tamu yang datang lebih awal.',pengecoh:null}},
      {id:'rina',name:'Rina',role:'wartawan',avatar:'👩‍💻',color:'#c69be8',clue:[{t:'col',v:2}],story:{rahasia:'ingin menulis berita tentang tiruan kain.',alibi:'wawancara dengan perajin.',pengecoh:null}},
      {id:'tuantan',name:'Tuan Tan',role:'kolektor',avatar:'👴',color:'#e5c55a',clue:[{t:'col',v:0}],story:{rahasia:'kolektor yang membeli kain tanpa surat.',alibi:'mengamati koleksi sendirian.',pengecoh:null}},
      {id:'bima',name:'Bima',role:'perajin batik',avatar:'🧑‍🎨',color:'#8fd18b',clue:[{t:'room',v:'R'}],story:{rahasia:'perajin muda yang kainnya tidak dipamerkan.',alibi:'menata benang dan alat.',pengecoh:null}},
      {id:'sumi',name:'Mbok Sumi',role:'penjaga kain keluarga',avatar:'👩‍🍳',color:'#f39b7f',clue:[{t:'notRoom',v:'R'},{t:'on',v:'bangku'}],story:{rahasia:'menyimpan kain lama peninggalan keluarga.',alibi:'menyiapkan makanan untuk tamu.',pengecoh:null}},
      {id:'melati',name:'Bu Melati',role:'korban',avatar:'👩‍🦳',color:'#bdb5ab',victim:true},
    ]
  },
  {
    id:'kereta-malam-surabaya',title:'Kereta Malam ke Surabaya',location:'Kereta Malam ke Surabaya',
    intro:'Pak Santoso, penumpang, ditemukan tak bernyawa saat kereta berhenti di tengah malam. Enam orang lain masih terjebak di dalam kereta.',
    story:{nada:'dark',latar:'kereta malam jarak jauh, dengan sinyal padam dan penumpang terjebak.',motif:'berkas yang dibawa Santoso bisa menjatuhkan banyak orang.'},
    rooms:[
      'EEESBBB',
      'EEESBBB',
      'EEESMMM',
      'EEESMMM',
      'CCCSMMM',
      'CCCSMMM',
      'CCCSMMM',
    ],
    roomInfo:{E:{name:'Gerbong Ekonomi',floor:'lightwood'},S:{name:'Sambungan Gerbong',floor:'grate'},B:{name:'Kompartemen Tidur',floor:'lilac'},M:{name:'Gerbong Restorasi',floor:'tiles'},C:{name:'Kabin Kondektur',floor:'concrete'}},
    kinds:{bangku:{name:'bangku',emoji:'🪑',walkable:true,seat:true},kursi:{name:'kursi',emoji:'🪑',walkable:true,seat:true},tanaman:{name:'tanaman',emoji:'🪴'},kardus:{name:'tumpukan kardus',emoji:'📦'},koper:{name:'koper',emoji:'🧳'},lampu:{name:'lampu',emoji:'💡'},kasur:{name:'kasur',emoji:'🛏️'},lemari:{name:'lemari',emoji:'🗄️'},kompor:{name:'kompor',emoji:'🍳'},mejamakan:{name:'meja makan',emoji:'🍽️'},wastafel:{name:'wastafel',emoji:'🚰'},kue:{name:'kue-kue',emoji:'🍰'},mejatulis:{name:'meja tulis',emoji:'✒️'},arsip:{name:'lemari arsip',emoji:'🗄️'},peti:{name:'peti kayu',emoji:'📦'}},
    objects:[
      {kind:'bangku',r:0,c:0,w:2},
      {kind:'kursi',r:1,c:1},
      {kind:'tanaman',r:0,c:2},
      {kind:'kardus',r:2,c:0},
      {kind:'koper',r:2,c:2},
      {kind:'lampu',r:3,c:0},
      {kind:'kasur',r:0,c:5,w:2},
      {kind:'kursi',r:1,c:5},
      {kind:'lemari',r:1,c:6},
      {kind:'kompor',r:2,c:4},
      {kind:'mejamakan',r:2,c:5,w:2},
      {kind:'kursi',r:3,c:5},
      {kind:'wastafel',r:3,c:6},
      {kind:'mejamakan',r:4,c:5,w:2},
      {kind:'kursi',r:5,c:5},
      {kind:'kue',r:6,c:4},
      {kind:'mejatulis',r:4,c:0,w:2},
      {kind:'kursi',r:5,c:1},
      {kind:'arsip',r:4,c:2},
      {kind:'kardus',r:5,c:0},
      {kind:'peti',r:6,c:0,w:2},
    ],
    people:[
      {id:'kapten',name:'Kapten Hasan',role:'kondektur',avatar:'👨‍✈️',color:'#7fa7e6',clue:[{t:'row',v:0}],story:{rahasia:'kondektur yang pernah menutupi kecelakaan.',alibi:'mengecek tiket di sepanjang rangkaian.',pengecoh:null}},
      {id:'dewi',name:'dr. Dewi',role:'penumpang',avatar:'👩‍⚕️',color:'#8fd1c8',clue:[{t:'row',v:3}],story:{rahasia:'penumpang yang menyamar.',alibi:'membantu penumpang yang pusing.',pengecoh:null}},
      {id:'chef',name:'Chef Rudi',role:'pelayan restorasi',avatar:'👨‍🍳',color:'#f2a96b',clue:[{t:'beside',v:'peti'}],story:{rahasia:'mengantar berkas ke tempat yang salah.',alibi:'menyiapkan makanan untuk penumpang.',pengecoh:null}},
      {id:'kevin',name:'Kevin',role:'penumpang',avatar:'🧑‍🎤',color:'#c69be8',clue:[{t:'room',v:'E'},{t:'row',v:1}],story:{rahasia:'berutang pada Santoso.',alibi:'tertidur di kursinya sambil memeluk tas.',pengecoh:'terlihat membawa tas yang bukan miliknya.'}},
      {id:'laras',name:'Laras',role:'penumpang',avatar:'👩‍🍳',color:'#f2a96b',clue:[{t:'col',v:4}],story:{rahasia:'menyimpan salinan berkas.',alibi:'membaca buku sampai larut.',pengecoh:null}},
      {id:'hendra',name:'Pak Hendra',role:'pengacara',avatar:'👨‍💼',color:'#7fa7e6',clue:[{t:'room',v:'M'}],story:{rahasia:'pengacara yang pernah membela Santoso.',alibi:'menelepon klien walau sinyal lemah.',pengecoh:null}},
      {id:'santoso',name:'Pak Santoso',role:'korban',avatar:'🤵',color:'#9aa5b5',victim:true},
    ]
  },
  {"id": "joglo-lurah", "title": "Malam Pusaka di Rumah Joglo", "location": "Rumah Joglo Keluarga Hadi, Solo", "intro": "Selepas pagelaran wayang, Eyang Kusno ditemukan tak bernyawa dan keris pusaka keluarga menghilang. Delapan orang masih berada di kompleks rumah.", "story": {"nada": "campuran", "latar": "Eyang Kusno ditemukan tak bernyawa setelah pagelaran wayang. Keris pusaka keluarga hilang.", "motif": "perebutan warisan keris pusaka."}, "rooms": ["TTTTTTTTT", "TPPPPPPGG", "TPPPPPPGG", "TPPPPPPGG", "DDDDDWWGG", "DDDDDWWWW", "DDDDDWWWW", "BBDDDWWWW", "BBBBBBBBB"], "roomInfo": {"T": {"name": "Taman Depan", "floor": "grass"}, "P": {"name": "Pendopo", "floor": "marble"}, "G": {"name": "Gandok", "floor": "lightwood"}, "D": {"name": "Dalem", "floor": "darkwood"}, "W": {"name": "Pawon", "floor": "terracotta"}, "B": {"name": "Taman Belakang", "floor": "grass2"}}, "kinds": {"pohon": {"name": "pohon", "emoji": "🌳"}, "pot": {"name": "pot bunga", "emoji": "🪴"}, "airmancur": {"name": "air mancur", "emoji": "⛲"}, "bangku": {"name": "bangku", "emoji": "🪑", "walkable": true, "seat": true}, "gamelan": {"name": "gamelan", "emoji": "🥁"}, "tikar": {"name": "tikar", "walkable": true, "rug": true}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "kasur": {"name": "kasur", "emoji": "🛏️"}, "lemari": {"name": "lemari", "emoji": "🗄️"}, "mejamakan": {"name": "meja makan", "emoji": "🍽️"}, "jam": {"name": "jam antik", "emoji": "🕰️"}, "tungku": {"name": "tungku", "emoji": "🔥"}, "gentong": {"name": "gentong air", "emoji": "🏺"}, "kayu": {"name": "tumpukan kayu", "emoji": "🪵"}, "sumur": {"name": "sumur", "emoji": "🪣"}, "kandang": {"name": "kandang ayam", "emoji": "🐓"}}, "objects": [{"kind": "pohon", "r": 0, "c": 0}, {"kind": "bangku", "r": 0, "c": 3, "w": 2}, {"kind": "pot", "r": 0, "c": 6}, {"kind": "airmancur", "r": 0, "c": 8}, {"kind": "gamelan", "r": 1, "c": 1, "w": 2}, {"kind": "tikar", "r": 2, "c": 3, "w": 3, "h": 2, "color": "#b0773a"}, {"kind": "kursi", "r": 3, "c": 1}, {"kind": "kasur", "r": 1, "c": 7, "w": 2, "h": 2}, {"kind": "kursi", "r": 3, "c": 7}, {"kind": "lemari", "r": 4, "c": 8}, {"kind": "lemari", "r": 4, "c": 0}, {"kind": "mejamakan", "r": 5, "c": 1, "w": 2}, {"kind": "jam", "r": 4, "c": 4}, {"kind": "tikar", "r": 6, "c": 3, "w": 2, "h": 2, "color": "#6b3f8a"}, {"kind": "gentong", "r": 4, "c": 5}, {"kind": "tungku", "r": 5, "c": 7, "w": 2}, {"kind": "kursi", "r": 7, "c": 6}, {"kind": "kayu", "r": 7, "c": 8}, {"kind": "sumur", "r": 8, "c": 0}, {"kind": "pohon", "r": 8, "c": 4}, {"kind": "kandang", "r": 8, "c": 7, "w": 2}], "people": [{"id": "sri", "name": "Mbak Sri", "role": "sinden", "avatar": "👩‍🎤", "color": "#f29ac4", "clue": [{"t": "beside", "v": "airmancur"}], "story": {"rahasia": "dulu dekat dengan Eyang.", "alibi": "menyanyi di pendopo sampai akhir pagelaran.", "pengecoh": null}}, {"id": "darmo", "name": "Ki Darmo", "role": "dalang", "avatar": "🧓", "color": "#e5c55a", "clue": [{"t": "room", "v": "P"}, {"t": "col", "v": 4}], "story": {"rahasia": "dipecat dari pagelaran tahun lalu.", "alibi": "membereskan wayang di pendopo.", "pengecoh": null}}, {"id": "tini", "name": "Bu Tini", "role": "juru masak", "avatar": "👩‍🍳", "color": "#f2a96b", "clue": [{"t": "on", "v": "kursi"}], "story": {"rahasia": "menyimpan rahasia keluarga tentang keris.", "alibi": "menyiapkan wedang di pawon.", "pengecoh": null}}, {"id": "anton", "name": "Anton", "role": "fotografer", "avatar": "🧑‍💻", "color": "#7fa7e6", "clue": [{"t": "room", "v": "G"}], "story": {"rahasia": "fotonya memperlihatkan seseorang di taman belakang.", "alibi": "memotret gamelan di taman depan.", "pengecoh": null}}, {"id": "galih", "name": "Galih", "role": "cucu Eyang", "avatar": "🧑", "color": "#8fd18b", "clue": [{"t": "row", "v": 5}], "story": {"rahasia": "ingin keris itu dijual.", "alibi": "duduk di bangku taman sambil bermain ponsel.", "pengecoh": null}}, {"id": "ratih", "name": "Ratih", "role": "menantu", "avatar": "👩", "color": "#c69be8", "clue": [{"t": "beside", "v": "sumur"}], "story": {"rahasia": "bertengkar dengan Eyang soal rumah.", "alibi": "di kamar tidur bersama bayinya.", "pengecoh": null}}, {"id": "parjo", "name": "Pak Parjo", "role": "abdi dalem", "avatar": "👨‍🌾", "color": "#b7a27a", "clue": [{"t": "beside", "v": "pohon"}], "story": {"rahasia": "tahu jalur rahasia ke sumur.", "alibi": "membersihkan kandang ayam.", "pengecoh": null}}, {"id": "herman", "name": "Om Herman", "role": "tamu dari kota", "avatar": "🤵", "color": "#9aa5b5", "clue": [{"t": "on", "v": "tikar"}], "story": {"rahasia": "tertarik pada keris untuk koleksi.", "alibi": "duduk di tikar sambil minum kopi bersama tamu lain.", "pengecoh": null}}, {"id": "kusno", "name": "Eyang Kusno", "role": "korban", "avatar": "👴", "color": "#bdb5ab", "victim": true}]},
  {"id": "pesta-pernikahan-sunyi", "title": "Pesta Pernikahan yang Berakhir Sunyi", "location": "Gedung Serbaguna, Pesta Pernikahan", "intro": "Pak Gunawan, ayah pengantin, ditemukan tak bernyawa saat tamu bubar. Tujuh orang lain masih berada di gedung.", "story": {"nada": "campuran", "latar": "pesta pernikahan besar di gedung serbaguna, dengan keluarga dari dua kampung yang punya sejarah.", "motif": "mahar dan warisan keluarga yang belum disepakati."}, "rooms": ["TTAAAAKK", "TTAAAAKK", "AAAAAAKK", "AAAADDKK", "AAAADDDD", "AAAADDDD", "AAHHHHDD", "AAHHHHDD"], "roomInfo": {"T": {"name": "Teras Depan", "floor": "deck"}, "A": {"name": "Aula Pesta", "floor": "marble"}, "K": {"name": "Ruang Rias", "floor": "lilac"}, "D": {"name": "Dapur Katering", "floor": "tiles"}, "H": {"name": "Halaman Belakang", "floor": "grass"}}, "kinds": {"tanaman": {"name": "tanaman", "emoji": "🪴"}, "lampu": {"name": "lampu gantung", "emoji": "💡"}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "meja": {"name": "meja hidangan", "emoji": "🍽️"}, "karpet": {"name": "karpet", "emoji": "🟥", "walkable": true, "rug": true}, "kue": {"name": "meja kue", "emoji": "🍰"}, "kasur": {"name": "kasur pengantin", "emoji": "🛏️"}, "lemari": {"name": "lemari", "emoji": "🗄️"}, "kompor": {"name": "kompor", "emoji": "🍳"}, "wastafel": {"name": "wastafel", "emoji": "🚰"}}, "objects": [{"kind": "tanaman", "r": 0, "c": 0}, {"kind": "lampu", "r": 0, "c": 4}, {"kind": "kursi", "r": 1, "c": 1}, {"kind": "meja", "r": 2, "c": 2, "w": 2}, {"kind": "kursi", "r": 1, "c": 4}, {"kind": "karpet", "r": 4, "c": 1, "w": 2, "h": 2, "color": "#8c2f39"}, {"kind": "kue", "r": 3, "c": 0}, {"kind": "kursi", "r": 6, "c": 4}, {"kind": "kasur", "r": 1, "c": 6, "h": 2}, {"kind": "lemari", "r": 3, "c": 7}, {"kind": "kompor", "r": 4, "c": 4}, {"kind": "wastafel", "r": 5, "c": 7}], "people": [{"id": "ratna", "name": "Bu Ratna", "role": "bibi pengantin", "avatar": "👩‍🦳", "color": "#f2c14e", "clue": [{"t": "room", "v": "H"}, {"t": "col", "v": 4}], "story": {"rahasia": "bibi pengantin yang tahu mahar kurang.", "alibi": "menyambut para tamu di pintu masuk.", "pengecoh": "menukar kartu undangan."}}, {"id": "darto", "name": "Pak Darto", "role": "paman pengantin", "avatar": "👨‍🌾", "color": "#8fc97a", "clue": [{"t": "on", "v": "karpet"}], "story": {"rahasia": "paman yang menolak pernikahan ini.", "alibi": "duduk berbincang dengan tetangga.", "pengecoh": null}}, {"id": "sinta", "name": "Sinta", "role": "sepupu pengantin", "avatar": "👩", "color": "#f29ac4", "clue": [{"t": "beside", "v": "wastafel"}], "story": {"rahasia": "sepupu yang menyukai calon mempelai.", "alibi": "menemani pengantin berfoto.", "pengecoh": null}}, {"id": "anton", "name": "Anton", "role": "fotografer", "avatar": "🧑‍💻", "color": "#7fa7e6", "clue": [{"t": "beside", "v": "kasur"}], "story": {"rahasia": "fotografer yang melihat sesuatu.", "alibi": "memotret keluarga satu per satu.", "pengecoh": null}}, {"id": "ratih", "name": "Ratih", "role": "penjahit", "avatar": "👩", "color": "#c69be8", "clue": [{"t": "beside", "v": "lampu"}], "story": {"rahasia": "berutang pada keluarga mempelai.", "alibi": "merapikan baju pengantin.", "pengecoh": null}}, {"id": "nadia", "name": "Nadia", "role": "penulis acara", "avatar": "👩‍💻", "color": "#c69be8", "clue": [{"t": "row", "v": 6}], "story": {"rahasia": "penulis acara yang mengubah susunan.", "alibi": "mengatur urutan acara dengan pengeras suara.", "pengecoh": null}}, {"id": "galih", "name": "Galih", "role": "musisi", "avatar": "🧑", "color": "#8fd18b", "clue": [{"t": "on", "v": "kursi"}], "story": {"rahasia": "musisi yang dibayar kurang.", "alibi": "bermain musik sampai acara bubar.", "pengecoh": null}}, {"id": "gunawan", "name": "Pak Gunawan", "role": "ayah pengantin", "avatar": "🧓", "color": "#bdb5ab", "victim": true}]},
  {"id": "rahasia-bioskop-tua", "title": "Rahasia di Balik Layar Bioskop Tua", "location": "Bioskop Tua Kota", "intro": "Pak Wiranto, pemilik bioskop, ditemukan tak bernyawa setelah putaran film terakhir. Tujuh orang lain masih berada di dalam gedung.", "story": {"nada": "dark", "latar": "bioskop tua yang akan dibongkar, dengan film lama yang tak pernah ditayangkan.", "motif": "film itu menyimpan rekaman yang bisa membuka aib lama."}, "rooms": ["LLLNNNPP", "LLLNNNPP", "NNNNNNPP", "NNNNNNNN", "NNNNNNNN", "GGNNNNSS", "GGNNNNSS", "GGNNNNSS"], "roomInfo": {"L": {"name": "Lobi", "floor": "parquet"}, "N": {"name": "Ruang Penonton", "floor": "darkwood"}, "P": {"name": "Ruang Proyektor", "floor": "grate"}, "G": {"name": "Gudang Film", "floor": "concrete"}, "S": {"name": "Studio Poster", "floor": "darktile"}}, "kinds": {"kasir": {"name": "loket tiket", "emoji": "🧾"}, "tanaman": {"name": "tanaman", "emoji": "🪴"}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "lampu": {"name": "lampu", "emoji": "💡"}, "karpet": {"name": "karpet", "emoji": "🟥", "walkable": true, "rug": true}, "mesin": {"name": "proyektor", "emoji": "🎞️"}, "rak": {"name": "rak film", "emoji": "📀"}, "peti": {"name": "peti film", "emoji": "📦"}, "kardus": {"name": "tumpukan kardus", "emoji": "📦"}, "mejakerja": {"name": "meja lukis", "emoji": "🖌️"}, "lukisan": {"name": "poster", "emoji": "🖼️"}}, "objects": [{"kind": "kasir", "r": 0, "c": 0, "w": 2}, {"kind": "tanaman", "r": 1, "c": 2}, {"kind": "kursi", "r": 1, "c": 0}, {"kind": "lampu", "r": 0, "c": 4}, {"kind": "karpet", "r": 2, "c": 2, "w": 3, "color": "#8c2f39"}, {"kind": "kursi", "r": 3, "c": 1}, {"kind": "kursi", "r": 3, "c": 3}, {"kind": "kursi", "r": 3, "c": 5}, {"kind": "kursi", "r": 4, "c": 2}, {"kind": "kursi", "r": 4, "c": 4}, {"kind": "kursi", "r": 4, "c": 6}, {"kind": "mesin", "r": 0, "c": 6, "w": 2}, {"kind": "rak", "r": 2, "c": 6}, {"kind": "rak", "r": 2, "c": 7}, {"kind": "peti", "r": 5, "c": 0, "w": 2}, {"kind": "kardus", "r": 7, "c": 0, "w": 2}, {"kind": "mejakerja", "r": 5, "c": 6, "w": 2}, {"kind": "lukisan", "r": 6, "c": 6}, {"kind": "kursi", "r": 7, "c": 7}], "people": [{"id": "pakdin", "name": "Pak Udin", "role": "penjaga bioskop", "avatar": "👮‍♂️", "color": "#6f8fb8", "clue": [{"t": "col", "v": 4}], "story": {"rahasia": "penjaga yang menyimpan rol film.", "alibi": "berkeliling sambil mengecek keamanan.", "pengecoh": null}}, {"id": "arif", "name": "Arif", "role": "mantan kru studio", "avatar": "🧑‍💼", "color": "#7fa7e6", "clue": [{"t": "beside", "v": "tanaman"}], "story": {"rahasia": "dulu bekerja di studio yang membuat film itu.", "alibi": "mengatur lampu sorot.", "pengecoh": null}}, {"id": "joni", "name": "Joni", "role": "teknisi proyektor", "avatar": "🧑‍🔧", "color": "#e5c55a", "clue": [{"t": "on", "v": "kursi"}], "story": {"rahasia": "teknisi yang pernah menyalin rekaman.", "alibi": "memperbaiki proyektor.", "pengecoh": "bau bahan kimia di bajunya."}}, {"id": "rio", "name": "Rio", "role": "pemain film lama", "avatar": "🧑‍🎤", "color": "#b79ce6", "clue": [{"t": "on", "v": "karpet"}], "story": {"rahasia": "pemain di film itu semasa kecil.", "alibi": "membersihkan kursi penonton.", "pengecoh": null}}, {"id": "sekar", "name": "Sekar", "role": "pelukis poster", "avatar": "👩‍🎨", "color": "#f29ac4", "clue": [{"t": "col", "v": 1}], "story": {"rahasia": "pelukis poster yang tahu isi film.", "alibi": "melukis poster baru sampai larut.", "pengecoh": null}}, {"id": "tuantan", "name": "Tuan Tan", "role": "calon pembeli", "avatar": "👴", "color": "#e5c55a", "clue": [{"t": "room", "v": "S"}], "story": {"rahasia": "pembeli bioskop yang ingin film itu hilang.", "alibi": "berbincang dengan pemilik lama.", "pengecoh": "terlihat membawa kunci cadangan."}}, {"id": "chef", "name": "Chef Rudi", "role": "pedagang kecil", "avatar": "👨‍🍳", "color": "#f2a96b", "clue": [{"t": "room", "v": "S"}, {"t": "row", "v": 7}], "story": {"rahasia": "pedagang kecil yang melihat tamu asing.", "alibi": "berjualan makanan ringan.", "pengecoh": null}}, {"id": "wiranto", "name": "Pak Wiranto", "role": "pemilik bioskop", "avatar": "👨‍🦳", "color": "#bdb5ab", "victim": true}]},
  {"id": "lomba-masak-kacau", "title": "Lomba Masak yang Kacau", "location": "Lapangan Lomba Masak Kampung", "intro": "Om Herman, juri lomba, jatuh pingsan setelah mencicipi satu hidangan. Tujuh orang lain masih berada di area lomba.", "story": {"nada": "komedi", "latar": "lomba masak kampung dengan hidangan aneh, juri yang cerewet, dan hadiah besar.", "motif": "hadiah utama yang diduga sudah diatur lebih dulu."}, "rooms": ["TTTJJJJJ", "TTTJJJJJ", "DDDDDDHH", "DDDDDDHH", "GGDDDDHH", "GGDDDDHH", "GGDDDDHH", "GGDDHHHH"], "roomInfo": {"T": {"name": "Tenda Peserta", "floor": "grass2"}, "J": {"name": "Area Juri", "floor": "marble"}, "D": {"name": "Dapur Umum", "floor": "tiles"}, "H": {"name": "Halaman Makan", "floor": "deck"}, "G": {"name": "Gudang Bahan", "floor": "concrete"}}, "kinds": {"payungpantai": {"name": "payung pantai", "emoji": "⛱️"}, "tanaman": {"name": "tanaman", "emoji": "🪴"}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "meja": {"name": "meja juri", "emoji": "📋"}, "vas": {"name": "vas", "emoji": "🏺"}, "lampu": {"name": "lampu", "emoji": "💡"}, "kompor": {"name": "kompor", "emoji": "🍳"}, "wastafel": {"name": "wastafel", "emoji": "🚰"}, "mejakerja": {"name": "meja persiapan", "emoji": "🥣"}, "tungku": {"name": "tungku", "emoji": "🔥"}, "tong": {"name": "tong bumbu", "emoji": "🛢️"}, "gentong": {"name": "gentong air", "emoji": "🏺"}, "kardus": {"name": "kardus bahan", "emoji": "📦"}, "peti": {"name": "peti bahan", "emoji": "📦"}, "mejamakan": {"name": "meja makan", "emoji": "🍽️"}, "kue": {"name": "kue-kue", "emoji": "🍰"}}, "objects": [{"kind": "payungpantai", "r": 0, "c": 2}, {"kind": "tanaman", "r": 0, "c": 0}, {"kind": "kursi", "r": 1, "c": 2}, {"kind": "meja", "r": 0, "c": 4, "w": 2}, {"kind": "vas", "r": 0, "c": 7}, {"kind": "lampu", "r": 1, "c": 7}, {"kind": "kursi", "r": 1, "c": 5}, {"kind": "kompor", "r": 2, "c": 2}, {"kind": "wastafel", "r": 2, "c": 4}, {"kind": "mejakerja", "r": 3, "c": 2, "w": 2}, {"kind": "tungku", "r": 5, "c": 3}, {"kind": "tong", "r": 3, "c": 5}, {"kind": "gentong", "r": 6, "c": 2}, {"kind": "kardus", "r": 4, "c": 0, "w": 2}, {"kind": "peti", "r": 6, "c": 0}, {"kind": "mejamakan", "r": 3, "c": 6, "w": 2}, {"kind": "kursi", "r": 2, "c": 6}, {"kind": "kursi", "r": 5, "c": 6}, {"kind": "kue", "r": 6, "c": 6}, {"kind": "kursi", "r": 7, "c": 4}], "people": [{"id": "sumi", "name": "Mbok Sumi", "role": "peserta lomba", "avatar": "👩‍🍳", "color": "#f39b7f", "clue": [{"t": "beside", "v": "tong"}], "story": {"rahasia": "peserta yang menyontek resep.", "alibi": "mengaduk panci besar.", "pengecoh": "bumbu rahasianya tidak pernah ia ceritakan."}}, {"id": "chef", "name": "Chef Rudi", "role": "peserta bayaran", "avatar": "👨‍🍳", "color": "#f2a96b", "clue": [{"t": "room", "v": "D"}, {"t": "row", "v": 5}], "story": {"rahasia": "peserta bayaran yang tak mau kalah.", "alibi": "memotong bahan dengan cepat.", "pengecoh": null}}, {"id": "tini", "name": "Bu Tini", "role": "peserta lomba", "avatar": "👩‍🍳", "color": "#f2a96b", "clue": [{"t": "beside", "v": "kue"}], "story": {"rahasia": "menukar nomor peserta.", "alibi": "menghias hidangan sampai cantik.", "pengecoh": null}}, {"id": "parjo", "name": "Pak Parjo", "role": "peserta lomba", "avatar": "👨‍🌾", "color": "#b7a27a", "clue": [{"t": "col", "v": 4}], "story": {"rahasia": "hanya ikut karena penasaran hadiah.", "alibi": "menunggu masakan matang.", "pengecoh": null}}, {"id": "ayu", "name": "Ayu", "role": "asisten peserta", "avatar": "💁‍♀️", "color": "#f29ac4", "clue": [{"t": "room", "v": "D"}], "story": {"rahasia": "pernah dikritik pedas oleh Herman.", "alibi": "membantu peserta menyiapkan bahan.", "pengecoh": null}}, {"id": "ujang", "name": "Ujang", "role": "panitia", "avatar": "🧑‍🔧", "color": "#8fd18b", "clue": [{"t": "beside", "v": "peti"}], "story": {"rahasia": "panitia yang menghitung nilai.", "alibi": "mencatat nilai peserta.", "pengecoh": null}}, {"id": "dimas", "name": "Dimas", "role": "pemakan gratis", "avatar": "🧔", "color": "#7fb8e6", "clue": [{"t": "beside", "v": "wastafel"}], "story": {"rahasia": "pemakan gratis yang mencicipi semua.", "alibi": "antre mencicipi hidangan.", "pengecoh": null}}, {"id": "herman", "name": "Om Herman", "role": "juri lomba", "avatar": "🤵", "color": "#9aa5b5", "victim": true}]},
  {"id": "festival-wayang-terakhir", "title": "Malam Terakhir Festival Wayang Kota", "location": "Panggung Festival Wayang Kota", "intro": "Pak Kusno, sesepuh panitia, ditemukan tak bernyawa setelah pertunjukan. Tujuh orang lain masih berada di area festival.", "story": {"nada": "campuran", "latar": "festival wayang tahunan di kota, dengan penonton ramai dan panitia yang diam-diam berselisih.", "motif": "hak mengelola festival tahun depan dan dana yang tak jelas."}, "rooms": ["PPPPKKKK", "PPPPKKKK", "PPPPBBKK", "NNNNBBNN", "NNNNNNNN", "NNNNNNNN", "AANNNNNN", "AANNNNNN"], "roomInfo": {"P": {"name": "Panggung Wayang", "floor": "darkwood"}, "N": {"name": "Area Penonton", "floor": "grass"}, "K": {"name": "Kantor Panitia", "floor": "lightwood"}, "B": {"name": "Belakang Panggung", "floor": "darktile"}, "A": {"name": "Ruang Arsip", "floor": "concrete"}}, "kinds": {"gamelan": {"name": "gamelan", "emoji": "🥁"}, "tikar": {"name": "tikar", "emoji": "", "walkable": true, "rug": true}, "mejakerja": {"name": "meja panitia", "emoji": "🖥️"}, "kursi": {"name": "kursi", "emoji": "🪑", "walkable": true, "seat": true}, "arsip": {"name": "lemari arsip", "emoji": "🗄️"}, "lampu": {"name": "lampu", "emoji": "💡"}, "perkakas": {"name": "kotak perkakas", "emoji": "🧰"}, "tangga": {"name": "tangga", "emoji": "🪜"}, "payung": {"name": "payung", "emoji": "☂️"}, "pohon": {"name": "pohon", "emoji": "🌳"}, "bangku": {"name": "bangku", "emoji": "🪑", "walkable": true, "seat": true}, "kue": {"name": "kue-kue", "emoji": "🍰"}, "tanaman": {"name": "tanaman", "emoji": "🪴"}, "kardus": {"name": "tumpukan kardus", "emoji": "📦"}}, "objects": [{"kind": "gamelan", "r": 0, "c": 0, "w": 2, "h": 2}, {"kind": "tikar", "r": 1, "c": 2, "w": 2, "h": 2, "color": "#6b3f8a"}, {"kind": "mejakerja", "r": 0, "c": 4, "w": 2}, {"kind": "kursi", "r": 1, "c": 5}, {"kind": "arsip", "r": 0, "c": 7}, {"kind": "lampu", "r": 2, "c": 7}, {"kind": "perkakas", "r": 3, "c": 4}, {"kind": "tangga", "r": 2, "c": 5}, {"kind": "payung", "r": 3, "c": 0}, {"kind": "pohon", "r": 3, "c": 1}, {"kind": "bangku", "r": 4, "c": 1}, {"kind": "bangku", "r": 4, "c": 3}, {"kind": "bangku", "r": 4, "c": 5}, {"kind": "bangku", "r": 4, "c": 7}, {"kind": "bangku", "r": 5, "c": 2}, {"kind": "bangku", "r": 5, "c": 4}, {"kind": "bangku", "r": 5, "c": 6}, {"kind": "kue", "r": 6, "c": 4}, {"kind": "tanaman", "r": 7, "c": 6}, {"kind": "kardus", "r": 3, "c": 7}, {"kind": "arsip", "r": 6, "c": 0}, {"kind": "kardus", "r": 7, "c": 1}], "people": [{"id": "sri", "name": "Mbak Sri", "role": "calon ketua panitia", "avatar": "👩‍🎤", "color": "#f29ac4", "clue": [{"t": "on", "v": "bangku"}], "story": {"rahasia": "ingin menjadi ketua panitia.", "alibi": "menyanyi sampai pertunjukan usai.", "pengecoh": null}}, {"id": "darmo", "name": "Ki Darmo", "role": "dalang", "avatar": "🧓", "color": "#e5c55a", "clue": [{"t": "row", "v": 7}], "story": {"rahasia": "dalang yang ingin tampil tanpa batasan.", "alibi": "merapikan wayang sesudah pertunjukan.", "pengecoh": null}}, {"id": "melati", "name": "Bu Melati", "role": "bendahara", "avatar": "👩‍🦳", "color": "#bdb5ab", "clue": [{"t": "room", "v": "P"}], "story": {"rahasia": "bendahara yang menahan dana.", "alibi": "menghitung hasil penjualan karcis.", "pengecoh": "menyembunyikan buku catatan."}}, {"id": "kevin", "name": "Kevin", "role": "musisi pengganti", "avatar": "🧑‍🎤", "color": "#c69be8", "clue": [{"t": "on", "v": "kursi"}], "story": {"rahasia": "musisi pengganti yang digaji kurang.", "alibi": "menata alat musik.", "pengecoh": null}}, {"id": "hendra", "name": "Pak Hendra", "role": "penasihat hukum", "avatar": "👨‍💼", "color": "#7fa7e6", "clue": [{"t": "room", "v": "N"}, {"t": "col", "v": 3}], "story": {"rahasia": "penasihat hukum yang tahu soal dana.", "alibi": "membaca dokumen sampai larut.", "pengecoh": null}}, {"id": "nadia", "name": "Nadia", "role": "penulis ulasan", "avatar": "👩‍💻", "color": "#c69be8", "clue": [{"t": "beside", "v": "payung"}], "story": {"rahasia": "menulis ulasan yang menyindir panitia.", "alibi": "mengetik ulasan sambil menonton.", "pengecoh": null}}, {"id": "joko", "name": "Pak Joko", "role": "penjaga", "avatar": "👨‍🦲", "color": "#e5c55a", "clue": [{"t": "beside", "v": "pohon"}], "story": {"rahasia": "penjaga yang dilarang masuk tempat tertentu.", "alibi": "berkeliling menjaga keamanan.", "pengecoh": null}}, {"id": "kusno", "name": "Eyang Kusno", "role": "sesepuh panitia", "avatar": "👴", "color": "#bdb5ab", "victim": true}]},
  {
    "id": "lampu-padam-perpustakaan",
    "title": "Lampu Padam di Perpustakaan Desa",
    "location": "Perpustakaan Desa",
    "intro": "Pak Udin ditemukan tak bernyawa saat listrik padam, dan enam orang lain masih ada di sekitarnya.",
    "story": {
      "nada": "dark",
      "latar": "perpustakaan desa saat listrik padam menjelang malam.",
      "motif": "buku tua bernilai yang hilang dari rak."
    },
    "rooms": [
      "BBBAAAL",
      "BBBAAAL",
      "BBNNAAL",
      "BBNNAAL",
      "NNNNLLL",
      "NNNNLLL",
      "NNNNLLL"
    ],
    "roomInfo": {
      "B": {
        "name": "Ruang Baca",
        "floor": "parquet"
      },
      "A": {
        "name": "Rak Arsip",
        "floor": "darkwood"
      },
      "N": {
        "name": "Ruang Anak",
        "floor": "lilac"
      },
      "L": {
        "name": "Meja Penjaga",
        "floor": "marble"
      }
    },
    "kinds": {
      "rak": {
        "name": "rak buku",
        "emoji": "📚"
      },
      "mejatulis": {
        "name": "meja tulis",
        "emoji": "✒️"
      },
      "kursi": {
        "name": "kursi",
        "emoji": "🪑",
        "walkable": true,
        "seat": true
      },
      "karpet": {
        "name": "karpet",
        "walkable": true,
        "rug": true
      },
      "lampu": {
        "name": "lampu baca",
        "emoji": "💡"
      },
      "arsip": {
        "name": "lemari arsip",
        "emoji": "🗄️"
      },
      "resepsionis": {
        "name": "meja penjaga",
        "emoji": "🛎️"
      },
      "tanaman": {
        "name": "tanaman",
        "emoji": "🪴"
      },
      "bangku": {
        "name": "bangku",
        "emoji": "🪑",
        "walkable": true,
        "seat": true
      }
    },
    "objects": [
      {
        "kind": "mejatulis",
        "r": 0,
        "c": 0,
        "w": 2
      },
      {
        "kind": "kursi",
        "r": 1,
        "c": 1
      },
      {
        "kind": "lampu",
        "r": 1,
        "c": 2
      },
      {
        "kind": "karpet",
        "r": 2,
        "c": 0,
        "w": 2,
        "color": "#8c5a3a"
      },
      {
        "kind": "tanaman",
        "r": 3,
        "c": 0
      },
      {
        "kind": "rak",
        "r": 0,
        "c": 3,
        "h": 2
      },
      {
        "kind": "rak",
        "r": 0,
        "c": 5,
        "h": 2
      },
      {
        "kind": "arsip",
        "r": 2,
        "c": 5
      },
      {
        "kind": "kursi",
        "r": 3,
        "c": 4
      },
      {
        "kind": "resepsionis",
        "r": 4,
        "c": 4,
        "w": 2
      },
      {
        "kind": "tanaman",
        "r": 6,
        "c": 6
      },
      {
        "kind": "bangku",
        "r": 5,
        "c": 6
      },
      {
        "kind": "karpet",
        "r": 5,
        "c": 1,
        "w": 2,
        "h": 2,
        "color": "#2f6f73"
      },
      {
        "kind": "bangku",
        "r": 4,
        "c": 0
      },
      {
        "kind": "lampu",
        "r": 6,
        "c": 3
      }
    ],
    "people": [
      {
        "id": "pakdin",
        "name": "Pak Udin",
        "role": "penjaga perpustakaan",
        "avatar": "👮‍♂️",
        "color": "#bdb5ab",
        "victim": true
      },
      {
        "id": "sekar",
        "name": "Sekar",
        "role": "pengunjung",
        "avatar": "👩‍🎨",
        "color": "#f29ac4",
        "clue": [
          {
            "t": "room",
            "v": "B"
          },
          {
            "t": "on",
            "v": "kursi"
          }
        ],
        "story": {
          "rahasia": "menjual buku lama lewat daring.",
          "alibi": "mendata buku pinjaman.",
          "pengecoh": null
        }
      },
      {
        "id": "rina",
        "name": "Rina",
        "role": "wartawan",
        "avatar": "👩‍💻",
        "color": "#c69be8",
        "clue": [
          {
            "t": "on",
            "v": "karpet"
          }
        ],
        "story": {
          "rahasia": "menyalin arsip desa untuk tulisannya.",
          "alibi": "membaca di bawah lilin.",
          "pengecoh": "menutup tas saat didekati."
        }
      },
      {
        "id": "joko",
        "name": "Pak Joko",
        "role": "warga",
        "avatar": "👨‍🦲",
        "color": "#e5c55a",
        "clue": [
          {
            "t": "row",
            "v": 2
          }
        ],
        "story": {
          "rahasia": "pernah diusir karena merusak buku.",
          "alibi": "memperbaiki sakelar listrik.",
          "pengecoh": null
        }
      },
      {
        "id": "herman",
        "name": "Om Herman",
        "role": "kolektor",
        "avatar": "🤵",
        "color": "#9aa5b5",
        "clue": [
          {
            "t": "on",
            "v": "bangku"
          }
        ],
        "story": {
          "rahasia": "kolektor yang menawar buku itu.",
          "alibi": "berbincang dengan pengunjung.",
          "pengecoh": null
        }
      },
      {
        "id": "dewi",
        "name": "dr. Dewi",
        "role": "pengajar anak",
        "avatar": "👩‍⚕️",
        "color": "#8fd1c8",
        "clue": [
          {
            "t": "beside",
            "v": "tanaman"
          }
        ],
        "story": {
          "rahasia": "meminjam buku tanpa dicatat.",
          "alibi": "mengajar anak membaca.",
          "pengecoh": null
        }
      },
      {
        "id": "bima",
        "name": "Bima",
        "role": "magang",
        "avatar": "🧑‍🎨",
        "color": "#8fd18b",
        "clue": [
          {
            "t": "room",
            "v": "N"
          }
        ],
        "story": {
          "rahasia": "magang yang salah mencatat koleksi.",
          "alibi": "menyusun buku.",
          "pengecoh": "gugup saat ditanya catatan."
        }
      }
    ]
  },
  {
    "id": "opor-hilang-hajatan",
    "title": "Opor Hilang di Hajatan Sunatan",
    "location": "Hajatan Sunatan Kampung",
    "intro": "Mbok Sumi ditemukan tak bernyawa di tengah hajatan sunatan, dan enam orang lain masih ada di sekitarnya.",
    "story": {
      "nada": "komedi",
      "latar": "hajatan sunatan di kampung, tenda penuh tamu.",
      "motif": "resep rahasia opor yang diincar banyak orang."
    },
    "rooms": [
      "TTTTKKK",
      "TTTTKKK",
      "TTEEKKK",
      "OOOEEGG",
      "OOOEEGG",
      "OOOGGGG",
      "OOOGGGG"
    ],
    "roomInfo": {
      "T": {
        "name": "Tenda Tamu",
        "floor": "parquet"
      },
      "K": {
        "name": "Dapur",
        "floor": "tiles"
      },
      "E": {
        "name": "Teras Rumah",
        "floor": "deck"
      },
      "O": {
        "name": "Panggung Organ",
        "floor": "stone"
      },
      "G": {
        "name": "Halaman Parkir",
        "floor": "grass2"
      }
    },
    "kinds": {
      "kompor": {
        "name": "kompor",
        "emoji": "🍳"
      },
      "wastafel": {
        "name": "wastafel",
        "emoji": "🚰"
      },
      "meja": {
        "name": "meja makan",
        "emoji": "🍽️"
      },
      "kursi": {
        "name": "kursi",
        "emoji": "🪑",
        "walkable": true,
        "seat": true
      },
      "tikar": {
        "name": "tikar",
        "walkable": true,
        "rug": true
      },
      "tanaman": {
        "name": "tanaman",
        "emoji": "🪴"
      },
      "gentong": {
        "name": "gentong",
        "emoji": "🫙"
      },
      "piano": {
        "name": "organ tunggal",
        "emoji": "🎹"
      },
      "sepeda": {
        "name": "sepeda",
        "emoji": "🚲"
      },
      "kardus": {
        "name": "tumpukan kardus",
        "emoji": "📦"
      }
    },
    "objects": [
      {
        "kind": "kompor",
        "r": 0,
        "c": 5,
        "w": 2
      },
      {
        "kind": "wastafel",
        "r": 1,
        "c": 6
      },
      {
        "kind": "meja",
        "r": 2,
        "c": 5,
        "w": 2
      },
      {
        "kind": "kursi",
        "r": 0,
        "c": 1
      },
      {
        "kind": "kursi",
        "r": 1,
        "c": 3
      },
      {
        "kind": "tikar",
        "r": 0,
        "c": 2,
        "h": 2
      },
      {
        "kind": "tanaman",
        "r": 0,
        "c": 0
      },
      {
        "kind": "gentong",
        "r": 4,
        "c": 3
      },
      {
        "kind": "kursi",
        "r": 2,
        "c": 3
      },
      {
        "kind": "piano",
        "r": 3,
        "c": 0,
        "w": 2,
        "h": 2
      },
      {
        "kind": "tanaman",
        "r": 5,
        "c": 2
      },
      {
        "kind": "sepeda",
        "r": 5,
        "c": 5,
        "w": 2
      },
      {
        "kind": "kardus",
        "r": 6,
        "c": 6
      },
      {
        "kind": "kardus",
        "r": 6,
        "c": 4
      },
      {
        "kind": "kursi",
        "r": 3,
        "c": 5
      }
    ],
    "people": [
      {
        "id": "sumi",
        "name": "Mbok Sumi",
        "role": "juru masak hajatan",
        "avatar": "👩‍🍳",
        "color": "#bdb5ab",
        "victim": true
      },
      {
        "id": "ratna",
        "name": "Bu Ratna",
        "role": "tetangga",
        "avatar": "👩‍🦳",
        "color": "#f2c14e",
        "clue": [
          {
            "t": "room",
            "v": "G"
          }
        ],
        "story": {
          "rahasia": "ingin membuka katering sendiri.",
          "alibi": "menata kursi tamu.",
          "pengecoh": null
        }
      },
      {
        "id": "laras",
        "name": "Laras",
        "role": "tetangga",
        "avatar": "👩‍🍳",
        "color": "#f2a96b",
        "clue": [
          {
            "t": "room",
            "v": "O"
          }
        ],
        "story": {
          "rahasia": "pernah gagal membuat opor di rumah.",
          "alibi": "mencuci panci.",
          "pengecoh": "tangannya berbau santan."
        }
      },
      {
        "id": "parjo",
        "name": "Pak Parjo",
        "role": "panitia parkir",
        "avatar": "👨‍🌾",
        "color": "#b7a27a",
        "clue": [
          {
            "t": "beside",
            "v": "kompor"
          }
        ],
        "story": {
          "rahasia": "menjual sisa nasi ke tetangga.",
          "alibi": "mengatur parkir.",
          "pengecoh": null
        }
      },
      {
        "id": "kevin",
        "name": "Kevin",
        "role": "pemain organ tunggal",
        "avatar": "🧑‍🎤",
        "color": "#c69be8",
        "clue": [
          {
            "t": "room",
            "v": "T"
          },
          {
            "t": "beside",
            "v": "tanaman"
          }
        ],
        "story": {
          "rahasia": "pemain organ tunggal yang digaji kurang.",
          "alibi": "mengetes pengeras suara.",
          "pengecoh": null
        }
      },
      {
        "id": "galih",
        "name": "Galih",
        "role": "penerima tamu",
        "avatar": "🧑",
        "color": "#8fd18b",
        "clue": [
          {
            "t": "beside",
            "v": "tanaman"
          }
        ],
        "story": {
          "rahasia": "diam-diam sudah makan tiga porsi.",
          "alibi": "menyambut tamu.",
          "pengecoh": "piringnya tidak pernah kosong."
        }
      },
      {
        "id": "tini",
        "name": "Bu Tini",
        "role": "tetangga",
        "avatar": "👩‍🍳",
        "color": "#f2a96b",
        "clue": [
          {
            "t": "beside",
            "v": "kardus"
          }
        ],
        "story": {
          "rahasia": "pernah dilarang membantu masak.",
          "alibi": "memotong sayur.",
          "pengecoh": null
        }
      }
    ]
  },
  {
    "id": "pelatih-terakhir-futsal",
    "title": "Pelatih Terakhir di Turnamen Futsal",
    "location": "Lapangan Futsal Kampung",
    "intro": "Arif ditemukan tak bernyawa pada malam turnamen, dan enam orang lain masih berada di sekitarnya.",
    "story": {
      "nada": "campuran",
      "latar": "lapangan futsal kampung pada malam turnamen.",
      "motif": "ban kapten dan uang taruhan."
    },
    "rooms": [
      "TTTSSRR",
      "TTTSSRR",
      "LLLLLLL",
      "LLLLLLL",
      "LLLLLBB",
      "LLLLLBB",
      "LLLLLBB"
    ],
    "roomInfo": {
      "T": {
        "name": "Tribun",
        "floor": "grate"
      },
      "S": {
        "name": "Meja Skor",
        "floor": "concrete"
      },
      "R": {
        "name": "Ruang Ganti",
        "floor": "tiles"
      },
      "L": {
        "name": "Lapangan",
        "floor": "grass"
      },
      "B": {
        "name": "Bangku Cadangan",
        "floor": "deck"
      }
    },
    "kinds": {
      "tangga": {
        "name": "tangga",
        "emoji": "🪜"
      },
      "kursi": {
        "name": "kursi",
        "emoji": "🪑",
        "walkable": true,
        "seat": true
      },
      "mesin": {
        "name": "papan skor",
        "emoji": "🔢"
      },
      "tong": {
        "name": "tong bola",
        "emoji": "⚽"
      },
      "lemari": {
        "name": "loker",
        "emoji": "🗄️"
      },
      "wastafel": {
        "name": "wastafel",
        "emoji": "🚰"
      },
      "pohon": {
        "name": "pohon",
        "emoji": "🌳"
      },
      "tanaman": {
        "name": "tanaman",
        "emoji": "🪴"
      },
      "bangku": {
        "name": "bangku",
        "emoji": "🪑",
        "walkable": true,
        "seat": true
      }
    },
    "objects": [
      {
        "kind": "tangga",
        "r": 0,
        "c": 0
      },
      {
        "kind": "kursi",
        "r": 1,
        "c": 0
      },
      {
        "kind": "kursi",
        "r": 1,
        "c": 2
      },
      {
        "kind": "mesin",
        "r": 0,
        "c": 3,
        "w": 2
      },
      {
        "kind": "tong",
        "r": 1,
        "c": 4
      },
      {
        "kind": "lemari",
        "r": 0,
        "c": 5
      },
      {
        "kind": "wastafel",
        "r": 1,
        "c": 6
      },
      {
        "kind": "pohon",
        "r": 2,
        "c": 0
      },
      {
        "kind": "tanaman",
        "r": 3,
        "c": 4
      },
      {
        "kind": "bangku",
        "r": 4,
        "c": 6
      },
      {
        "kind": "bangku",
        "r": 6,
        "c": 6
      },
      {
        "kind": "kursi",
        "r": 6,
        "c": 4
      },
      {
        "kind": "tong",
        "r": 6,
        "c": 0
      }
    ],
    "people": [
      {
        "id": "arif",
        "name": "Arif",
        "role": "pelatih tim kampung",
        "avatar": "🧑‍💼",
        "color": "#bdb5ab",
        "victim": true
      },
      {
        "id": "kevin",
        "name": "Kevin",
        "role": "pemain",
        "avatar": "🧑‍🎤",
        "color": "#c69be8",
        "clue": [
          {
            "t": "beside",
            "v": "pohon"
          }
        ],
        "story": {
          "rahasia": "kapten yang akan dicopot.",
          "alibi": "memanaskan badan.",
          "pengecoh": null
        }
      },
      {
        "id": "rio",
        "name": "Rio",
        "role": "pemain",
        "avatar": "🧑‍🎤",
        "color": "#b79ce6",
        "clue": [
          {
            "t": "room",
            "v": "L"
          },
          {
            "t": "row",
            "v": 2
          }
        ],
        "story": {
          "rahasia": "bertaruh melawan timnya sendiri.",
          "alibi": "memegang botol minum tim.",
          "pengecoh": "menghindari tatapan pelatih."
        }
      },
      {
        "id": "bima",
        "name": "Bima",
        "role": "pemain cadangan",
        "avatar": "🧑‍🎨",
        "color": "#8fd18b",
        "clue": [
          {
            "t": "on",
            "v": "bangku"
          }
        ],
        "story": {
          "rahasia": "pemain cadangan yang ingin jadi kapten.",
          "alibi": "duduk di bangku cadangan.",
          "pengecoh": null
        }
      },
      {
        "id": "ujang",
        "name": "Ujang",
        "role": "wasit",
        "avatar": "🧑‍🔧",
        "color": "#8fd18b",
        "clue": [
          {
            "t": "beside",
            "v": "tanaman"
          }
        ],
        "story": {
          "rahasia": "wasit yang dijanjikan bayaran.",
          "alibi": "mengatur papan skor.",
          "pengecoh": null
        }
      },
      {
        "id": "nadia",
        "name": "Nadia",
        "role": "penyiar",
        "avatar": "👩‍💻",
        "color": "#c69be8",
        "clue": [
          {
            "t": "beside",
            "v": "tangga"
          }
        ],
        "story": {
          "rahasia": "penyiar acara yang tahu soal taruhan.",
          "alibi": "mengomentari pertandingan.",
          "pengecoh": null
        }
      },
      {
        "id": "hendra",
        "name": "Pak Hendra",
        "role": "penyandang dana",
        "avatar": "👨‍💼",
        "color": "#7fa7e6",
        "clue": [
          {
            "t": "beside",
            "v": "tong"
          }
        ],
        "story": {
          "rahasia": "penyandang dana yang menarik sponsor.",
          "alibi": "menandatangani kuitansi.",
          "pengecoh": null
        }
      }
    ]
  },
  {
    "id": "kapal-terakhir-badai",
    "title": "Kapal Terakhir Sebelum Badai",
    "location": "Dermaga Kecil",
    "intro": "Ki Darmo ditemukan tak bernyawa menjelang badai, dan enam orang lain masih berada di sekitar kapal.",
    "story": {
      "nada": "dark",
      "latar": "dermaga kecil menjelang badai, kapal terakhir hendak berangkat.",
      "motif": "klaim asuransi kapal dan jadwal pelayaran."
    },
    "rooms": [
      "OOOLLLL",
      "OOOLLLL",
      "GGGDDDD",
      "GGGDDDD",
      "DDDDDKK",
      "DDDDDKK",
      "DDDDDKK"
    ],
    "roomInfo": {
      "O": {
        "name": "Ruang Tunggu",
        "floor": "lightwood"
      },
      "L": {
        "name": "Loket Tiket",
        "floor": "marble"
      },
      "G": {
        "name": "Ruang Mesin",
        "floor": "grate"
      },
      "D": {
        "name": "Dermaga",
        "floor": "concrete"
      },
      "K": {
        "name": "Geladak Kapal",
        "floor": "deck"
      }
    },
    "kinds": {
      "bangku": {
        "name": "bangku",
        "emoji": "🪑",
        "walkable": true,
        "seat": true
      },
      "kursi": {
        "name": "kursi",
        "emoji": "🪑",
        "walkable": true,
        "seat": true
      },
      "jangkar": {
        "name": "jangkar",
        "emoji": "⚓"
      },
      "kemudi": {
        "name": "kemudi kapal",
        "emoji": "🛞"
      },
      "tong": {
        "name": "drum bahan bakar",
        "emoji": "🛢️"
      },
      "mesin": {
        "name": "mesin kapal",
        "emoji": "⚙️"
      },
      "kasir": {
        "name": "mesin tiket",
        "emoji": "🧾"
      },
      "pelampung": {
        "name": "pelampung",
        "emoji": "🛟"
      },
      "koper": {
        "name": "koper",
        "emoji": "🧳"
      },
      "kayu": {
        "name": "tumpukan kayu",
        "emoji": "🪵"
      },
      "peti": {
        "name": "peti muatan",
        "emoji": "📦"
      },
      "radar": {
        "name": "radar",
        "emoji": "📡"
      }
    },
    "objects": [
      {
        "kind": "bangku",
        "r": 0,
        "c": 0,
        "w": 2
      },
      {
        "kind": "bangku",
        "r": 1,
        "c": 2
      },
      {
        "kind": "koper",
        "r": 0,
        "c": 2
      },
      {
        "kind": "kasir",
        "r": 0,
        "c": 4
      },
      {
        "kind": "peti",
        "r": 0,
        "c": 6
      },
      {
        "kind": "pelampung",
        "r": 1,
        "c": 6
      },
      {
        "kind": "mesin",
        "r": 2,
        "c": 0,
        "w": 2,
        "h": 2
      },
      {
        "kind": "tong",
        "r": 3,
        "c": 2
      },
      {
        "kind": "kayu",
        "r": 2,
        "c": 2
      },
      {
        "kind": "jangkar",
        "r": 4,
        "c": 0
      },
      {
        "kind": "pelampung",
        "r": 5,
        "c": 1
      },
      {
        "kind": "peti",
        "r": 6,
        "c": 0
      },
      {
        "kind": "kayu",
        "r": 3,
        "c": 5
      },
      {
        "kind": "kemudi",
        "r": 5,
        "c": 6
      },
      {
        "kind": "radar",
        "r": 4,
        "c": 6
      },
      {
        "kind": "tong",
        "r": 6,
        "c": 5
      },
      {
        "kind": "bangku",
        "r": 5,
        "c": 5
      }
    ],
    "people": [
      {
        "id": "darmo",
        "name": "Ki Darmo",
        "role": "nahkoda kapal kecil",
        "avatar": "🧓",
        "color": "#bdb5ab",
        "victim": true
      },
      {
        "id": "parjo",
        "name": "Pak Parjo",
        "role": "awak kapal",
        "avatar": "👨‍🌾",
        "color": "#b7a27a",
        "clue": [
          {
            "t": "beside",
            "v": "kayu"
          }
        ],
        "story": {
          "rahasia": "menurunkan muatan tanpa izin.",
          "alibi": "mengikat tali kapal.",
          "pengecoh": null
        }
      },
      {
        "id": "tini",
        "name": "Bu Tini",
        "role": "penjaga loket",
        "avatar": "👩‍🍳",
        "color": "#f2a96b",
        "clue": [
          {
            "t": "room",
            "v": "O"
          }
        ],
        "story": {
          "rahasia": "menjual tiket lebih dari kursi.",
          "alibi": "menjaga loket.",
          "pengecoh": null
        }
      },
      {
        "id": "galih",
        "name": "Galih",
        "role": "awak kapal",
        "avatar": "🧑",
        "color": "#8fd18b",
        "clue": [
          {
            "t": "room",
            "v": "K"
          },
          {
            "t": "on",
            "v": "bangku"
          }
        ],
        "story": {
          "rahasia": "mengetahui kerusakan mesin dan diam.",
          "alibi": "mengecek bahan bakar.",
          "pengecoh": "tangannya berminyak dan gemetar."
        }
      },
      {
        "id": "ratih",
        "name": "Ratih",
        "role": "penumpang",
        "avatar": "👩",
        "color": "#c69be8",
        "clue": [
          {
            "t": "col",
            "v": 2
          }
        ],
        "story": {
          "rahasia": "penumpang yang menyembunyikan identitas.",
          "alibi": "menunggu di ruang tunggu.",
          "pengecoh": null
        }
      },
      {
        "id": "joni",
        "name": "Joni",
        "role": "awak kapal",
        "avatar": "🧑‍🔧",
        "color": "#e5c55a",
        "clue": [
          {
            "t": "col",
            "v": 3
          }
        ],
        "story": {
          "rahasia": "pernah dipecat dari pelayaran.",
          "alibi": "memperbaiki jaring.",
          "pengecoh": null
        }
      },
      {
        "id": "laras",
        "name": "Laras",
        "role": "pengurus administrasi",
        "avatar": "👩‍🍳",
        "color": "#f2a96b",
        "clue": [
          {
            "t": "beside",
            "v": "koper"
          }
        ],
        "story": {
          "rahasia": "mengurus asuransi diam-diam.",
          "alibi": "menghitung penumpang.",
          "pengecoh": null
        }
      }
    ]
  }
];
