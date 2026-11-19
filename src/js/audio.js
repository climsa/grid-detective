/* AUDIO (BGM & SFX): menerapkan pengaturan musik & efek (on/off dan volume).
   Aset audio belum ada di repo (src/assets/audio/{bgm,sfx} masih kosong), jadi belum ada
   suara yang terdengar. Saat aset ditambahkan, daftarkan elemen <audio> di AUDIO.bgm / AUDIO.sfx;
   audioApply() akan mengatur volume & mute-nya sesuai pengaturan. */
const AUDIO={bgm:null,sfx:[]};

/* s = objek pengaturan (SET di ui.js). Dipanggil setiap pengaturan audio berubah. */
function audioApply(s){
  const bgmOn=!!s.musicOn,sfxOn=!!s.sfxOn;
  if(AUDIO.bgm){AUDIO.bgm.volume=bgmOn?s.musicVol/100:0;AUDIO.bgm.muted=!bgmOn;}
  AUDIO.sfx.forEach(a=>{a.volume=sfxOn?s.sfxVol/100:0;a.muted=!sfxOn;});
}
