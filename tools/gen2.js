// Usage: node gen2.js <levelIndex> <seed>  -> prints clue set with a unique solution
const { buildBoard, condOk, solve, victimOk } = require('./engine');
const LV = require('./new_levels.js');
const [li, seed0] = [+process.argv[2], +process.argv[3] || 1];
const OPT = [
  { rc: [1, 2], comp: 1, notRoom: 1 },
  { rc: [1, 3], comp: 2, notRoom: 1 },
  { rc: [1, 3], comp: 2, notRoom: 2 },
  { rc: [1, 4], comp: 4, notRoom: 2 },
][li];
let s = seed0 * 9973 + li;
const rnd = () => ((s = (s * 1103515245 + 12345) % 2147483648) / 2147483648);
const pick = (a) => a[Math.floor(rnd() * a.length)];
const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const base = JSON.parse(JSON.stringify(LV[li]));
const board = buildBoard(base);
const N = base.people.length, kinds = Object.keys(base.kinds);
const roomsSet = [...new Set(base.rooms.join(''))];

function randomSolution() {
  for (let t = 0; t < 20000; t++) {
    const rows = shuffle([...Array(board.R).keys()]).slice(0, N), cols = shuffle([...Array(board.C).keys()]).slice(0, N);
    const pos = {}; let ok = true;
    base.people.forEach((p, i) => { if (!board.walkable(board.cells[rows[i]][cols[i]])) ok = false; pos[p.id] = [rows[i], cols[i]]; });
    if (ok && victimOk(base, board, pos)) return pos;
  }
}
function cands(r, c) {
  const room = board.cells[r][c].room, out = [], sp = [];
  out.push([{ t: 'room', v: room }]);
  for (const k of kinds) {
    if (condOk(base, board, { t: 'on', v: k }, r, c)) { out.push([{ t: 'on', v: k }]); sp.push({ t: 'on', v: k }); }
    if (!base.kinds[k].walkable && condOk(base, board, { t: 'beside', v: k }, r, c)) { out.push([{ t: 'beside', v: k }]); sp.push({ t: 'beside', v: k }); }
  }
  out.push([{ t: 'row', v: r }], [{ t: 'col', v: c }]);
  sp.forEach((x) => out.push([{ t: 'room', v: room }, x]));
  out.push([{ t: 'room', v: room }, { t: 'row', v: r }], [{ t: 'room', v: room }, { t: 'col', v: c }]);
  for (const rm of roomsSet) if (rm !== room) out.push([{ t: 'notRoom', v: rm }]);
  return out;
}
const isRC = (cl) => cl.some((x) => x.t === 'row' || x.t === 'col');
function okShape(lv) {
  const P = lv.people.filter((p) => !p.victim);
  const rc = P.filter((p) => isRC(p.clue)).length, comp = P.filter((p) => p.clue.length > 1).length, nr = P.filter((p) => p.clue.some((x) => x.t === 'notRoom')).length;
  const kindsUsed = P.map((p) => p.clue.map((x) => x.t + x.v).join('|'));
  return rc >= OPT.rc[0] && rc <= OPT.rc[1] && comp <= OPT.comp && nr <= OPT.notRoom && new Set(kindsUsed).size === kindsUsed.length;
}
for (let attempt = 0; attempt < 300; attempt++) {
  const pos = randomSolution(); if (!pos) continue;
  const lv = JSON.parse(JSON.stringify(base));
  const opts = lv.people.map((p) => (p.victim ? null : cands(...pos[p.id])));
  lv.people.forEach((p, i) => { p.clue = p.victim ? [{ t: 'any' }] : pick(opts[i].filter((c) => c.length === 1 && !isRC(c))); });
  for (let step = 0; step < 150; step++) {
    const sols = solve(lv, 2);
    if (sols.length === 0) break;
    if (sols.length === 1) {
      if (okShape(lv)) {
        console.log(JSON.stringify({ clues: Object.fromEntries(lv.people.filter((p) => !p.victim).map((p) => [p.id, p.clue])), pos: sols[0].pos, murderer: sols[0].murderer }));
        process.exit(0);
      }
      break;
    }
    // strengthen someone whose position differs between the two solutions
    const diff = lv.people.filter((p) => !p.victim && (sols[0].pos[p.id][0] !== sols[1].pos[p.id][0] || sols[0].pos[p.id][1] !== sols[1].pos[p.id][1]));
    const tgt = diff.length ? pick(diff) : pick(lv.people.filter((p) => !p.victim));
    const i = lv.people.indexOf(tgt);
    tgt.clue = pick(opts[i]);
  }
}
console.log('none'); process.exit(1);
