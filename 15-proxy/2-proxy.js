// ✅ PROXY PATTERN — asli object ke aage ek "stand-in" rakho jo access
// control kare, aur loading ko TAB tak taale jab tak genuinely zaroorat na
// ho (lazy loading).
// Chalao:  node 2-proxy.js

class HighResImage {
  constructor(file) {
    this.file = file;
    console.log(`⏳ loading heavy image: ${file} (pretend this is slow)`);
  }
  display() { console.log(`🖼️ showing ${this.file}`); }
}

// Proxy — same interface (display()) but real object ko lazily banata hai
class ImageProxy {
  #realImage = null;
  constructor(file, userRole) { this.file = file; this.userRole = userRole; }
  display() {
    if (this.userRole !== 'admin') {
      console.log('🚫 access denied — admin only');
      return;
    }
    if (!this.#realImage) this.#realImage = new HighResImage(this.file); // pehli baar hi load
    this.#realImage.display();
  }
}

console.log('gallery created (image NOT loaded yet)');
const image = new ImageProxy('photo.png', 'admin');
image.display();   // ab load hota hai
image.display();   // cached — dobara load nahi hota

const guestImage = new ImageProxy('secret.png', 'guest');
guestImage.display(); // access denied, load hi nahi hota
