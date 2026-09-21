// ✅ MEMENTO PATTERN — object khud apna "snapshot" banaye aur khud restore
// kare. Caller ko internal fields ka pata nahi hona chahiye, sirf ek opaque
// snapshot object hold karta hai.
// Chalao:  node 2-memento.js

class Editor {
  #text = '';
  type(chars) { this.#text += chars; }
  get text() { return this.#text; }

  save() {
    return { text: this.#text }; // memento — apna hi state, khud banaya
  }
  restore(memento) {
    this.#text = memento.text; // sirf Editor khud jaanta hai kaise restore kare
  }
}

class History {
  #snapshots = [];
  push(memento) { this.#snapshots.push(memento); }
  pop() { return this.#snapshots.pop(); }
}

const editor = new Editor();
const history = new History();

editor.type('Hello');
history.push(editor.save()); // undo point save

editor.type(', world');
console.log('before undo:', editor.text);

editor.restore(history.pop()); // caller ko Editor ke internals ka pata hi nahi
console.log('after undo:', editor.text);

// Editor mein naya field (cursor position) add karo — sirf save()/restore()
// badlenge, caller ka History code CHHUE BINA rahega.
