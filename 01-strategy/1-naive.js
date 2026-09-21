// ❌ THE NAIVE VERSION — sab kuch ek function mein if/else ke saath.
// Chalao:  node 1-naive.js

// Mock payment services (pretend ye real APIs call karte hain)
const processStripe = (amt) => `✅ Charged ₹${amt} via Stripe`;
const processPaypal = (amt) => `✅ Charged ₹${amt} via PayPal`;
const processCrypto = (amt) => `✅ Charged ₹${amt} via Crypto`;

function checkout(cart, method) {
  if (method === 'card')   return processStripe(cart.total);
  if (method === 'paypal') return processPaypal(cart.total);
  if (method === 'crypto') return processCrypto(cart.total);
  throw new Error(`Unknown method: ${method}`);
}

const cart = { total: 4999 };
console.log(checkout(cart, 'card'));
console.log(checkout(cart, 'paypal'));
console.log(checkout(cart, 'crypto'));

// PROBLEM: naya method (Apple Pay) add karne ke liye is function ko DOBARA
// kholna padega. Jitne payment ho sakte hain, utni jagah ye if/else copy hota
// hai. Ek path ko akele test karna bhi mushkil. => Strategy pattern isse theek karta hai.
