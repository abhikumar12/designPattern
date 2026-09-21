// ✅ FIXED — OrderService kisi bhi "database jaisi cheez" pe depend karta hai (jiska sirf
// save() method ho), concrete MySQLDatabase pe nahi. Dependency BAHAR se inject hoti hai.
// Chalao:  node 2-fixed.js

class MySQLDatabase {
  save(order) { console.log(`💾 [MySQL] saved order for ₹${order.amount}`); }
}
class PostgresDatabase {
  save(order) { console.log(`💾 [Postgres] saved order for ₹${order.amount}`); }
}
class InMemoryDatabase { // tests ke liye — real DB ki zaroorat nahi
  constructor() { this.orders = []; }
  save(order) { this.orders.push(order); console.log(`💾 [InMemory] saved order for ₹${order.amount}`); }
}

class OrderService {
  constructor(database) { this.db = database; } // dependency INJECTED, hardcoded nahi
  placeOrder(amount) {
    const order = { amount };
    this.db.save(order);
  }
}

new OrderService(new MySQLDatabase()).placeOrder(999);
new OrderService(new PostgresDatabase()).placeOrder(499);

const testDb = new InMemoryDatabase();
new OrderService(testDb).placeOrder(199);
console.log('test db captured:', testDb.orders);

// OrderService ka code EK baar bhi nahi badla DB switch karne ke liye. Dono (high-level
// OrderService, low-level *Database classes) ab ek "abstraction" (save(order) contract) pe
// depend karte hain, ek doosre pe nahi. Yehi Dependency Inversion hai.
