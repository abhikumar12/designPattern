// ✅ ADAPTER PATTERN — third-party ke ajeeb shape ko apne app ke expected
// interface mein convert karne wala ek wrapper banao.
// Chalao:  node 2-adapter.js

const legacyPaymentSdk = {
  makeCharge: (cents) => ({ status_code: 200, charged_amount_cents: cents }),
};

// Adapter — apne app ke liye "clean" interface: pay(amountRupees) -> {success, amount}
class PaymentAdapter {
  pay(amountRupees) {
    const result = legacyPaymentSdk.makeCharge(amountRupees * 100);
    return {
      success: result.status_code === 200,
      amount: result.charged_amount_cents / 100,
    };
  }
}

function checkout(amountRupees, paymentGateway) {
  const result = paymentGateway.pay(amountRupees); // apna clean interface, SDK ka pata nahi
  if (result.success) console.log(`✅ Charged ₹${result.amount}`);
}

checkout(499, new PaymentAdapter());

// Kal ko SDK badal jaaye (Stripe, Razorpay) — sirf Adapter badlega,
// checkout() ka baaki poora app CHHUE BINA rahega.
