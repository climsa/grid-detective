# Detektif Grid

Game puzzle deduksi misteri pembunuhan berbasis grid (mirip sudoku, dengan cerita dan karakter). Semua dalam satu file HTML, tanpa dependensi selain Google Fonts.

**Main:** buka `index.html` di browser (atau aktifkan GitHub Pages di repo ini).

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
index.html            hasil build — file yang dimainkan/dibagikan
src/shell.html        UI: HTML, CSS, logika game (placeholder /*DATA_ENGINE*/, /*GEN*/)
src/levels-engine.js  data kasus (LEVELS), lantai, engine aturan + solver
src/generator.js      generator kasus acak (deterministik per seed)
tools/build.py        rakit index.html dari src/
tools/engine.js       engine aturan untuk Node (verifikasi/generator offline)
tools/gen2.js         generator clue offline untuk layout di tools/new_levels.js
tools/new_levels.js   layout kasus 2–5 (sumber awal)
```

## Menambah kasus

1. Tambah objek baru ke array `LEVELS` di `src/levels-engine.js`:
   - `rooms`: peta ruangan per baris (1 huruf = 1 kotak), ukuran bebas.
   - `roomInfo`: nama + jenis lantai tiap huruf (lihat `FLOORS`).
   - `kinds`: jenis benda (`walkable: true` untuk karpet/kursi; `rug`/`seat` untuk gaya tampilan).
   - `objects`: `{kind, r, c, w, h}` (0-based).
   - `people`: tersangka + 1 korban (`victim: true`), jumlah ≤ min(baris, kolom). `clue` opsional untuk mode clue tetap.
2. `python3 tools/build.py`
3. Buka `index.html`. Kasus dengan clue tetap yang tidak punya tepat 1 solusi ditandai di console; di mode acak, clue dibuat otomatis.

Catatan: kode kasus hanya konsisten selama denah dan generator tidak berubah.
