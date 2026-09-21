// ✅ CHAIN OF RESPONSIBILITY — har approver apna "handle kar sakta hoon ya
// nahi" khud decide kare, nahi to REQUEST ko agle handler ko pass kar de.
// Chalao:  node 2-chain-of-responsibility.js

class Approver {
  constructor(name, limit) { this.name = name; this.limit = limit; this.next = null; }
  setNext(approver) { this.next = approver; return approver; }
  handle(amount) {
    if (amount <= this.limit) {
      console.log(`✅ ${this.name} approved ₹${amount}`);
    } else if (this.next) {
      this.next.handle(amount); // apne bas ka nahi, agle ko pass kar do
    } else {
      console.log(`❌ ₹${amount} — koi bhi approve nahi kar saka`);
    }
  }
}

const manager  = new Approver('Manager', 1000);
const director = new Approver('Director', 10000);
const vp       = new Approver('VP', 100000);
manager.setNext(director).setNext(vp); // chain banao

manager.handle(500);
manager.handle(5000);
manager.handle(50000);
manager.handle(500000); // koi handle nahi kar sakta

// Naya level (CEO, unlimited) add karna = ek naya Approver, chain mein jodo,
// baaki approvers ko CHHUE BINA.
