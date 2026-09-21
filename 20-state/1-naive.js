// ❌ THE NAIVE VERSION — order status ek string hai, har jagah if/else se
// check hota hai, invalid transitions (delivered -> paid) rokta koi nahi.
// Chalao:  node 1-naive.js

class Order {
  constructor() { this.status = 'placed'; }
  pay() {
    if (this.status === 'placed') { this.status = 'paid'; console.log('✅ paid'); }
    else console.log(`❌ cannot pay from status: ${this.status}`);
  }
  ship() {
    if (this.status === 'paid') { this.status = 'shipped'; console.log('✅ shipped'); }
    else console.log(`❌ cannot ship from status: ${this.status}`);
  }
  deliver() {
    if (this.status === 'shipped') { this.status = 'delivered'; console.log('✅ delivered'); }
    else console.log(`❌ cannot deliver from status: ${this.status}`);
  }
}

const order = new Order();
order.ship();   // invalid — abhi paid nahi hua
order.pay();
order.ship();
order.deliver();

// PROBLEM: har method mein "current status ke hisaab se kya allowed hai"
// wala if/else duplicate hai. Naya status (e.g. 'cancelled') add karo to
// HAR method dobara edit karna padega.
