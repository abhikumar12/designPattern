// ❌ THE NAIVE VERSION — third-party lib ka "alag shape" wala response
// direct use ho raha hai, jahan bhi use hota hai wahi conversion duplicate.
// Chalao:  node 1-naive.js

// Pretend yeh ek third-party payment SDK hai jiska shape hum control nahi
// kar sakte:
const legacyPaymentSdk = {
  makeCharge: (cents) => ({ status_code: 200, charged_amount_cents: cents }),
};

function checkout(amountRupees) {
  const result = legacyPaymentSdk.makeCharge(amountRupees * 100);
  // har jagah jahan yeh SDK use hoga, yeh conversion + shape-reading duplicate hogi
  if (result.status_code === 200) {
    console.log(`✅ Charged ₹${result.charged_amount_cents / 100}`);
  }
}

checkout(499);

// PROBLEM: baaki poora app "amount in rupees, { success, amount }" shape
// expect karta hai, lekin yeh SDK cents + status_code deta hai. Yeh
// mismatch-handling code har call-site pe copy-paste hoga.
