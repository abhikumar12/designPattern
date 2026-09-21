// ❌ THE NAIVE VERSION — state ko bahar se directly copy/restore kiya ja
// raha hai — editor ke internal fields sabko expose karne padte hain.
// Chalao:  node 1-naive.js

class Editor {
  constructor() { this.text = ''; }
  type(chars) { this.text += chars; }
}

const editor = new Editor();
editor.type('Hello');

// Undo ke liye caller khud state copy kar raha hai — editor ke internals
// (this.text) directly access ho rahe hain
const backup = editor.text; // agar Editor mein aur fields add ho (cursor, formatting)
                             // to yeh backup INCOMPLETE ho jaayega
editor.type(', world');
console.log('before undo:', editor.text);
editor.text = backup; // caller directly internal field ko overwrite kar raha hai
console.log('after undo:', editor.text);

// PROBLEM: caller ko Editor ke internal fields ka pata hona chahiye aur
// undo logic khud implement karna padta hai. Editor ke internals badle
// (naya field add ho) to yeh backup/restore code bhi TOOT sakta hai.
