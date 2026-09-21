// ❌ VIOLATION — high-level OrderService, low-level MySQLDatabase pe DIRECTLY depend karta
// hai. DB badalna ya test karna mushkil hai.
// Chalao:  node 1-violation.js

class MySQLDatabase {
  save(order) { console.log(`💾 [MySQL] saved order for ₹${order.amount}`); }
}

class OrderService {
  constructor() {
    this.db = new MySQLDatabase(); // hardcoded — OrderService ko pata hai KAUNSA DB hai
  }
  placeOrder(amount) {
    const order = { amount };
    this.db.save(order);
  }
}

const service = new OrderService();
service.placeOrder(999);

// PROBLEM: OrderService (high-level business logic) MySQLDatabase (low-level detail) ko
// directly "new" kar raha hai. Kal ko Postgres pe switch karna ho, ya unit test mein fake
// DB use karna ho — OrderService ko khud edit karna padega. High-level policy, low-level
// detail se tightly coupled hai.
