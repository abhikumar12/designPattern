// ❌ THE NAIVE VERSION — Order khud sabko directly call karta hai.
// Chalao:  node 1-naive.js

const sendShippedEmail   = (o) => console.log(`📧 Email: order ${o.id} shipped`);
const smsNotify          = (o) => console.log(`📱 SMS: order ${o.id} shipped`);
const analyticsTrack     = (evt, o) => console.log(`📊 Analytics: ${evt} (${o.id})`);
const inventoryDecrement = (n) => console.log(`📦 Inventory down by ${n} items`);

class Order {
  constructor(id, items) { this.id = id; this.items = items; }
  ship() {
    this.status = 'shipped';
    // Order ab in SAB services ke baare mein jaanta hai — tight coupling
    sendShippedEmail(this);
    smsNotify(this);
    analyticsTrack('order_shipped', this);
    inventoryDecrement(this.items);
  }
}

new Order('A1', 2).ship();

// PROBLEM: naya reaction (loyalty points) add karna = Order.ship() ko dobara
// kholna. Order test karne ke liye ye sab mock karne padenge. Dependency ulti hai:
// core business object apne peripheral consumers ko jaanta hai.
