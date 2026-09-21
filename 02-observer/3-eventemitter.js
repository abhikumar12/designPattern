// ✅ IDIOMATIC JS: Node ka EventEmitter = Observer pattern, built-in.
// Chalao:  node 3-eventemitter.js

import { EventEmitter } from 'node:events';

class Order extends EventEmitter {
  constructor(id, items) { super(); this.id = id; this.items = items; }
  ship() {
    this.status = 'shipped';
    this.emit('shipped', this);   // notify()
  }
}

const order = new Order('A1', 2);

order.on('shipped', (o) => console.log(`📧 Email: ${o.id}`));       // subscribe
order.on('shipped', (o) => console.log(`📦 Inventory: -${o.items}`)); // subscribe

const analytics = (o) => console.log(`📊 Analytics: ${o.id}`);
order.on('shipped', analytics);

order.ship();

console.log('--- analytics off karne ke baad ---');
order.off('shipped', analytics);   // unsubscribe
order.ship();

// on = subscribe, emit = notify, off = unsubscribe. Naam alag, pattern wahi.
