// ✅ STRATEGY PATTERN (class form)
// Chalao:  node 2-strategy-class.js

const processStripe = (amt) => `✅ Charged ₹${amt} via Stripe`;
const processPaypal = (amt) => `✅ Charged ₹${amt} via PayPal`;
const processCrypto = (amt) => `✅ Charged ₹${amt} via Crypto`;

// Har strategy ek hi contract follow karti hai: pay(amount)
const cardStrategy   = { pay: (amount) => processStripe(amount) };
const paypalStrategy = { pay: (amount) => processPaypal(amount) };
const cryptoStrategy = { pay: (amount) => processCrypto(amount) };

// "Context" sirf delegate karta hai — use pata nahi kaunsi strategy hai
class Checkout {
  constructor(strategy) { this.strategy = strategy; }
  setStrategy(strategy) { this.strategy = strategy; }
  complete(amount)      { return this.strategy.pay(amount); }
}

const checkout = new Checkout(cardStrategy);
console.log(checkout.complete(4999));

// Runtime pe behavior swap:
checkout.setStrategy(cryptoStrategy);
console.log(checkout.complete(4999));

// Naya method add karna = naya object, Checkout ko CHHUE BINA:
const applePayStrategy = { pay: (amount) => `✅ Charged ₹${amount} via Apple Pay` };
checkout.setStrategy(applePayStrategy);
console.log(checkout.complete(4999));
