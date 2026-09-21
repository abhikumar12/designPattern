// ✅ IDIOMATIC JS: object-as-registry. JS mein aksar YEHI best hai.
// Chalao:  node 3-strategy-registry.js

const processStripe = (amt) => `✅ Charged ₹${amt} via Stripe`;
const processPaypal = (amt) => `✅ Charged ₹${amt} via PayPal`;
const processCrypto = (amt) => `✅ Charged ₹${amt} via Crypto`;

// Functions first-class hain => strategy bas ek function, registry bas ek object.
const strategies = {
  card:   (amount) => processStripe(amount),
  paypal: (amount) => processPaypal(amount),
  crypto: (amount) => processCrypto(amount),
};

function checkout(method, amount) {
  const pay = strategies[method];
  if (!pay) throw new Error(`Unknown method: ${method}`);
  return pay(amount);
}

console.log(checkout('card', 4999));
console.log(checkout('paypal', 4999));

// Apple Pay add karna = EK line. if/else ko chhue bina:
strategies.applePay = (amount) => `✅ Charged ₹${amount} via Apple Pay`;
console.log(checkout('applePay', 4999));

// Yahi tarika hai jisse experienced JS dev naturally if/else chain khatam karta hai.
