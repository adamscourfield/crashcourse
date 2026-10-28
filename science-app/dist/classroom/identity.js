// Student identity helpers shared by the browser and the manage-students edge function
// (supabase/functions/manage-students/identity.js must stay byte-identical; a test checks this).
// Students never use an email address. Their sign-in is the class join code, a username and a
// password; behind the scenes these map to a synthetic, non-deliverable auth email.

export const JOIN_CODE = /^[A-HJKMNP-Z2-9]{6}$/;  // the 31 characters new_join_code() uses
export const USERNAME = /^[a-z0-9-]{3,32}$/;

export function normaliseCode(code) {
  // Join codes never contain 0, 1, I, L or O, so a typed O is read as-is and anything else is invalid.
  const c = String(code || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  return JOIN_CODE.test(c) ? c : '';
}

export function normaliseUsername(name) {
  const u = String(name || '').trim().toLowerCase();
  return USERNAME.test(u) ? u : '';
}

export function cleanDisplayName(name) {
  return String(name || '').replace(/[\u0000-\u001f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 80);
}

/** "Amira Khan" -> "amira-k"; "Zoë" -> "zoe"; unique within the class by adding 2, 3, ... */
export function usernameFor(displayName, taken = new Set()) {
  const parts = cleanDisplayName(displayName).normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9 ]/g, '').split(' ').filter(Boolean);
  let base = parts.length ? parts[0].slice(0, 20) + (parts.length > 1 ? '-' + parts[parts.length - 1][0] : '') : 'student';
  if (base.length < 3) base = (base + '-pupil').slice(0, 20);
  let name = base, n = 2;
  while (taken.has(name)) name = `${base}${n++}`;
  return name;
}

const WORDS = ['amber', 'apple', 'arrow', 'badge', 'basil', 'beach', 'birch', 'blaze', 'bloom', 'brick', 'brook', 'cabin', 'candle', 'canyon', 'cedar', 'chalk', 'cloud', 'clover', 'comet', 'coral', 'crane', 'crest', 'daisy', 'delta', 'dune', 'eagle', 'ember', 'falcon', 'fern', 'field', 'flint', 'forest', 'frost', 'garnet', 'glade', 'granite', 'grove', 'harbor', 'hazel', 'heron', 'island', 'ivory', 'jasper', 'juniper', 'kestrel', 'lagoon', 'lantern', 'larch', 'lemon', 'lilac', 'linen', 'lotus', 'maple', 'marble', 'meadow', 'mint', 'moss', 'nectar', 'oak', 'ocean', 'olive', 'orbit', 'otter', 'pebble', 'pepper', 'pine', 'planet', 'plum', 'pond', 'quartz', 'raven', 'reef', 'ridge', 'river', 'robin', 'saffron', 'sage', 'shore', 'silver', 'sparrow', 'spruce', 'stone', 'summit', 'swift', 'thistle', 'thunder', 'tide', 'timber', 'topaz', 'tulip', 'valley', 'velvet', 'violet', 'walnut', 'willow', 'winter', 'wren', 'yarrow', 'zephyr'];

function randomInt(n) {
  const a = new Uint32Array(1);
  globalThis.crypto.getRandomValues(a);
  return a[0] % n;
}

/** Three words and two digits, e.g. "maple-river-otter-42": easy to read aloud; about 26 bits, which
 *  relies on Supabase Auth's sign-in rate limits. Teachers can reset a student's password at any time. */
export function newPassword() {
  const w = () => WORDS[randomInt(WORDS.length)];
  return `${w()}-${w()}-${w()}-${String(randomInt(90) + 10)}`;
}

export function studentEmail(username, joinCode, domain) {
  const u = normaliseUsername(username), c = normaliseCode(joinCode);
  if (!u || !c) throw new Error('Invalid username or class code');
  return `${u}@${c.toLowerCase()}.${domain}`;
}
