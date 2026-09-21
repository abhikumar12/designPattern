// ❌ THE NAIVE VERSION — heavy image har baar directly load hoti hai, chahe
// use ho ya na ho, aur koi access-control nahi.
// Chalao:  node 1-naive.js

class HighResImage {
  constructor(file) {
    this.file = file;
    console.log(`⏳ loading heavy image: ${file} (pretend this is slow)`);
  }
  display() { console.log(`🖼️ showing ${this.file}`); }
}

console.log('gallery created (but image already loaded even before display!)');
const image = new HighResImage('photo.png'); // load turant ho gaya
image.display();
image.display(); // dobara load nahi hota, but pehle hi ho chuka tha bina zaroorat

// PROBLEM: image object banate hi expensive load ho jaata hai, chahe display()
// kabhi call ho ya na ho. Aur koi bhi is object ko directly access kar sakta
// hai — permission check ka koi jagah nahi.
