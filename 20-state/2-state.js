// ✅ STATE PATTERN — har status ko ek object bana do jo khud decide kare
// "is status mein kya allowed hai". Order sirf current state ko delegate
// karta hai.
// Chalao:  node 2-state.js

const placedState = {
  name: 'placed',
  pay: (order) => { console.log('✅ paid'); order.setState(paidState); },
  ship: () => console.log('❌ cannot ship — not paid yet'),
  deliver: () => console.log('❌ cannot deliver — not shipped yet'),
};
const paidState = {
  name: 'paid',
  pay: () => console.log('❌ already paid'),
  ship: (order) => { console.log('✅ shipped'); order.setState(shippedState); },
  deliver: () => console.log('❌ cannot deliver — not shipped yet'),
};
const shippedState = {
  name: 'shipped',
  pay: () => console.log('❌ already paid'),
  ship: () => console.log('❌ already shipped'),
  deliver: (order) => { console.log('✅ delivered'); order.setState(deliveredState); },
};
const deliveredState = {
  name: 'delivered',
  pay: () => console.log('❌ order already delivered'),
  ship: () => console.log('❌ order already delivered'),
  deliver: () => console.log('❌ already delivered'),
};

class Order {
  constructor() { this.state = placedState; }
  setState(state) { this.state = state; }
  pay()      { this.state.pay(this); }
  ship()     { this.state.ship(this); }
  deliver()  { this.state.deliver(this); }
}

const order = new Order();
order.ship();   // invalid — placedState.ship() khud "not paid" bolta hai
order.pay();
order.ship();
order.deliver();

// Naya status (cancelled) add karna = ek naya state object, Order class
// ko CHHUE BINA.
