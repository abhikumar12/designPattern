// 🎯 EXERCISE — document mein har character ka "font style" (heavy, shared)
// ko Flyweight se reuse karo, sirf position+char unique rakho.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
class Character {
  constructor(char, x, y, font) {
    this.char = char; this.x = x; this.y = y;
    this.fontData = { family: font, size: 12, weight: 'normal' }; // har character apna copy
  }
}
const text = 'Hi';
const chars = [...text].map((c, i) => new Character(c, i, 0, 'Arial'));
console.log(chars.length, 'characters, har ek apna fontData copy leke');

// ============================================================
// TODO 1: `FontFactory` class banao (static Map + `getFont(family)` method)
//         jo same family ke liye same shared `{family, size, weight}` object
//         return kare (2-flyweight.js jaisa).
//
// TODO 2: `Character` class ko refactor karo taaki woh apna `fontData`
//         khud na banaye, balki `FontFactory.getFont(font)` se le.
//
// TODO 3 (bonus): dikhao ki 1000 characters banane par bhi sirf 1 shared
//         font object banta hai (console.log se count verify karo).
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
