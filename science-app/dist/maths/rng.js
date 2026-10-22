// Seeded pseudo-random numbers. Every generated maths item is a pure function of
// (skill, level, seed), so a saved seed always rebuilds the same question.
export function rng(seed) {
  let h = 1779033703 ^ String(seed).length;
  for (const c of String(seed)) {
    h = Math.imul(h ^ c.charCodeAt(0), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const int = (r, lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
export const pick = (r, list) => list[Math.floor(r() * list.length)];
export const sign = r => (r() < 0.5 ? -1 : 1);
export function shuffled(r, list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export function intExcept(r, lo, hi, banned) {
  const ban = new Set(banned);
  for (let i = 0; i < 200; i++) {
    const v = int(r, lo, hi);
    if (!ban.has(v)) return v;
  }
  throw new Error('intExcept: no value available');
}
export const newSeed = () => Math.floor(Math.random() * 2 ** 31).toString(36);
