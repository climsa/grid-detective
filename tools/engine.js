// Shared puzzle logic (used by the generator/verifier in Node and mirrored in the game page)
function buildBoard(level) {
  const R = level.rooms.length, C = level.rooms[0].length;
  const cells = [];
  for (let r = 0; r < R; r++) {
    cells.push([]);
    for (let c = 0; c < C; c++) cells[r].push({ r, c, room: level.rooms[r][c], obj: null });
  }
  level.objects.forEach((o, i) => {
    for (let dr = 0; dr < (o.h || 1); dr++)
      for (let dc = 0; dc < (o.w || 1); dc++) cells[o.r + dr][o.c + dc].obj = i;
  });
  const kind = (i) => level.objects[i].kind;
  const walkable = (cell) => cell.obj === null || level.kinds[kind(cell.obj)].walkable;
  return { R, C, cells, walkable, kind };
}

// Does person at (r,c) satisfy a single condition?
function condOk(level, board, cond, r, c) {
  const cell = board.cells[r][c];
  switch (cond.t) {
    case 'row': return r === cond.v;
    case 'col': return c === cond.v;
    case 'room': return cell.room === cond.v;
    case 'notRoom': return cell.room !== cond.v;
    case 'on': return cell.obj !== null && board.kind(cell.obj) === cond.v;
    case 'beside': {
      for (const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const rr = r + dr, cc = c + dc;
        if (rr < 0 || cc < 0 || rr >= board.R || cc >= board.C) continue;
        const n = board.cells[rr][cc];
        if (n.room !== cell.room) continue;
        if (n.obj !== null && n.obj !== cell.obj && board.kind(n.obj) === cond.v) return true;
      }
      return false;
    }
    case 'any': return true;
  }
  return false;
}

function clueOk(level, board, person, r, c) {
  if (!board.walkable(board.cells[r][c])) return false;
  return person.clue.every((cond) => condOk(level, board, cond, r, c));
}

// Global rule: victim alone with exactly one other person (the murderer) in the same room
function victimOk(level, board, pos) {
  const v = level.people.find((p) => p.victim);
  const vp = pos[v.id];
  const room = board.cells[vp[0]][vp[1]].room;
  const others = level.people.filter((p) => !p.victim && board.cells[pos[p.id][0]][pos[p.id][1]].room === room);
  return others.length === 1 ? others[0].id : null;
}

function solve(level, limit = 2) {
  const board = buildBoard(level);
  const people = level.people;
  const cand = people.map((p) => {
    const out = [];
    for (let r = 0; r < board.R; r++) for (let c = 0; c < board.C; c++) if (clueOk(level, board, p, r, c)) out.push([r, c]);
    return out;
  });
  const order = people.map((_, i) => i).sort((a, b) => cand[a].length - cand[b].length);
  const usedR = new Set(), usedC = new Set(), pos = {};
  const sols = [];
  (function rec(k) {
    if (sols.length >= limit) return;
    if (k === order.length) {
      const m = victimOk(level, board, pos);
      if (m) sols.push({ pos: JSON.parse(JSON.stringify(pos)), murderer: m });
      return;
    }
    const i = order[k];
    for (const [r, c] of cand[i]) {
      if (usedR.has(r) || usedC.has(c)) continue;
      usedR.add(r); usedC.add(c); pos[people[i].id] = [r, c];
      rec(k + 1);
      usedR.delete(r); usedC.delete(c); delete pos[people[i].id];
    }
  })(0);
  return sols;
}

if (typeof module !== 'undefined') module.exports = { buildBoard, condOk, clueOk, victimOk, solve };
