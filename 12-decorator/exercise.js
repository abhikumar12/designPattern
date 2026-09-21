// 🎯 EXERCISE — text formatters (bold/italic) ko Decorator pattern se
// refactor karo taaki koi bhi combination stack ho sake.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
function boldItalic(text) { return `**_${text}_**`; }
function boldOnly(text) { return `**${text}**`; }
// Naya combo (underline+bold) chahiye? Naya function likhna padega...

console.log(boldItalic('Hello'));

// ============================================================
// TODO 1: `PlainText` class banao with constructor(text) aur
//         `render()` method jo bas text return kare.
//
// TODO 2: `BoldDecorator` aur `ItalicDecorator` classes banao, dono
//         constructor mein "wrapped" text-object lein aur `render()` mein
//         `wrapped.render()` ke around apna marker (** ya _) laga dein.
//
// TODO 3 (bonus): `UnderlineDecorator` add karo aur teeno ko kisi bhi order
//         mein stack karke dikhao — dikhao ki order badalne se output ka
//         "nesting order" badalta hai.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
