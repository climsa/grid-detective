# Detektif Grid

Game puzzle deduksi misteri pembunuhan berbasis grid (mirip sudoku, dengan cerita dan karakter).

**Main:** buka `index.html` langsung di browser (dobel-klik atau `file://`). Tidak perlu server dan tidak perlu build. Bisa juga di-host apa adanya di GitHub Pages (root repo, branch yang dipilih).

Semua script dimuat sebagai script biasa (bukan ES module), jadi tetap jalan dari `file://`. Satu-satunya dependensi luar adalah Google Fonts (butuh internet; tanpa itu font fallback dipakai).

## Aturan

- Tiap baris dan tiap kolom hanya boleh berisi 1 orang.
- Kotak berisi perabot tidak bisa ditempati; karpet, tikar, kursi, dan bangku bisa.
- "Di samping" = bersebelahan langsung (atas/bawah/kiri/kanan) **di ruangan yang sama**.
- Baris dihitung dari atas, kolom dari kiri.
- Korban hanya berdua dengan pembunuh di satu ruangan. Tempatkan semua orang, lalu tunjuk pelakunya.

## Kontrol

| Kontrol | Fungsi |
|---|---|
| Tap karakter → tap kotak | Tempatkan (karakter tetap terpilih, seperti sudoku) |
| ✏️ Pensil | Catatan kandidat posisi (simulasi, tidak dihitung) |
| ✖ | Tandai kotak kosong |
| Penghapus | Hapus orang / tanda X / catatan |
| ✔ | Selidiki |
| 🔍 | Bantuan (maks. 3, mengurangi skor) |
| Tap benda | Tooltip nama benda |

## Kasus

| # | Kasus | Denah | Orang |
|---|---|---|---|
| 1 | Malam di Vila Kenanga | 7×7 | 7 |
| 2 | Kopi Terakhir di Kedai Senja | 6×6 | 6 |
| 3 | Lukisan yang Hilang | 7×7 | 7 |
| 4 | Badai di Kapal Nusantara | 8×8 | 8 |
| 5 | Malam Pusaka di Rumah Joglo | 9×9 | 9 |

**Mode acak** (default aktif): posisi orang dan clue disusun ulang setiap main, jawaban tetap tunggal (dicek solver). Tiap susunan punya **kode 6 angka** yang bisa dibagikan agar teman memainkan susunan yang sama. Mode ini bisa dimatikan di Pengaturan untuk memakai clue tetap.

## Struktur

```
index.html              shell: markup + link CSS + urutan script (file yang dibuka)
src/css/style.css       seluruh gaya (variabel warna di :root)
src/data/floors.js      FLOORS: jenis lantai (pola CSS) per ruangan
src/data/levels.js      LEVELS: data kasus (denah, benda, orang, clue tetap)
src/js/engine.js        aturan clue, papan, dan solver
src/js/generator.js     generator kasus acak (deterministik per seed)
src/js/audio.js         placeholder audio (belum dipakai)
src/js/router.js        placeholder router (belum dipakai; navigasi layar ada di ui.js)
src/js/ui.js            ikon, state, render, modal, dan wiring kontrol
src/assets/             folder aset (img/floor, img/obj, img/char, img/ui, audio/bgm, audio/sfx)
                        img/obj berisi sprite benda (obj_<kind>.png); kind tanpa sprite memakai emoji
tools/engine.js         salinan engine untuk Node (verifikasi/generator offline)
tools/gen2.js           generator clue offline untuk layout di tools/new_levels.js
tools/new_levels.js     layout kasus 2–5 (sumber awal)
```

Urutan `<script>` di `index.html` penting: `floors.js` → `levels.js` → `engine.js` → `generator.js` → `audio.js` → `router.js` → `ui.js`. Semua berbagi scope global (tanpa modul), jadi nama fungsi/variabel harus unik lintas file.

## Menambah kasus

1. Tambah objek baru ke array `LEVELS` di `src/data/levels.js`:
   - `rooms`: peta ruangan per baris (1 huruf = 1 kotak), ukuran bebas.
   - `roomInfo`: nama + jenis lantai tiap huruf (lihat `FLOORS` di `src/data/floors.js`).
   - `kinds`: jenis benda (`walkable: true` untuk karpet/kursi; `rug`/`seat` untuk gaya tampilan).
   - `objects`: `{kind, r, c, w, h}` (0-based).
   - `people`: tersangka + 1 korban (`victim: true`), jumlah ≤ min(baris, kolom). `clue` opsional untuk mode clue tetap.
2. Muat ulang `index.html`. Kasus dengan clue tetap yang tidak punya tepat 1 solusi ditandai di console; di mode acak, clue dibuat otomatis.

Tidak ada langkah build. Cukup edit file di `src/` lalu refresh browser.

## Menambah aset (opsional)

Letakkan file di folder yang sesuai di `src/assets/` lalu rujuk dari CSS/JS dengan path relatif (`src/assets/img/...`). Path relatif wajib agar tetap jalan dari `file://`.

**Portrait karakter:** `src/assets/img/char/char_<id>.png` (256×256, latar transparan), dengan `<id>` sama persis dengan `id` orang di `levels.js`. Dipakai di carousel dan token papan; lingkaran warna `color` tetap di belakang portrait. Korban tetap abu-abu dengan 💀. Orang tanpa file PNG otomatis kembali ke emoji `avatar`.

**Sprite benda:** satu folder untuk semua kasus, `src/assets/img/obj/obj_<kind>.png`, dengan `<kind>` persis sama dengan kunci di `kinds` pada `levels.js`. Sprite mengisi seluruh area `w×h` benda (`object-fit: contain`). Karpet dan tikar (`rug`) memakai sprite bila file-nya ada; jika tidak, digambar CSS dengan warna `o.color`. Kind tanpa file PNG otomatis kembali ke emoji `kinds[].emoji`. Kunci kind harus unik lintas kasus, karena satu file dipakai semua kasus.

## Catatan

- Kode kasus hanya konsisten selama denah dan generator tidak berubah.
- `tools/engine.js` adalah salinan engine untuk Node. Jika `src/js/engine.js` berubah, salinan ini harus ikut diperbarui.
