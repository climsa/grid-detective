/* Jenis lantai per ruangan (FLOORS). Nama kunci dipakai di roomInfo[].floor pada levels.js.
   Dimuat sebelum levels.js (lihat index.html). */
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
