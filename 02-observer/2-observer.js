// ✅ OBSERVER PATTERN (khud banaya)
// Chalao:  node 2-observer.js

class Subject {
  #observers = new Set();

  // subscribe ek "unsubscribe" function return karta hai — cleanup aasan
  subscribe(observer) {
    this.#observers.add(observer);
    return () => this.unsubscribe(observer);
  }
  unsubscribe(observer) { this.#observers.delete(observer); }
  notify(data) {
    for (const observer of this.#observers) observer.update(data);
  }
}

class Order extends Subject {
  constructor(id, items) { super(); this.id = id; this.items = items; }
  ship() {
    this.status = 'shipped';
    this.notify({ event: 'shipped', order: this }); // bas. kaun sun raha, pata nahi.
  }
}

// Har observer sirf ek contract follow karta hai: update(data)
const emailObserver     = { update: ({ order }) => console.log(`📧 Email: ${order.id}`) };
const inventoryObserver = { update: ({ order }) => console.log(`📦 Inventory: -${order.items}`) };

const order = new Order('A1', 2);
order.subscribe(emailObserver);
const stopInventory = order.subscribe(inventoryObserver);

order.ship();               // dono chalte hain

console.log('--- inventory unsubscribe karne ke baad ---');
stopInventory();            // ab inventory nahi sunega
order.ship();               // sirf email chalega

// Naya reaction add karna = naya observer + subscribe. Order ko CHHUE BINA.
