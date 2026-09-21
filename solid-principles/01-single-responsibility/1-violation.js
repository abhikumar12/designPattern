// ❌ VIOLATION — ek hi class business logic, persistence, AUR presentation sab kar rahi hai.
// Chalao:  node 1-violation.js

class Invoice {
  constructor(items) { this.items = items; }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  saveToDatabase() {
    console.log('💾 saving invoice to database...'); // pretend yeh DB write hai
  }

  printReceipt() {
    console.log('--- RECEIPT ---');
    this.items.forEach((i) => console.log(`${i.name} x${i.qty} = ₹${i.price * i.qty}`));
    console.log(`TOTAL: ₹${this.calculateTotal()}`);
  }

  emailToCustomer(email) {
    console.log(`📧 emailing receipt to ${email}...`);
  }
}

const invoice = new Invoice([{ name: 'Widget', price: 100, qty: 2 }]);
invoice.printReceipt();
invoice.saveToDatabase();
invoice.emailToCustomer('customer@example.com');

// PROBLEM: is class ko badalne ke 4 alag reasons hain —
//   1. Pricing rule badle (calculateTotal)
//   2. DB engine badle (saveToDatabase)
//   3. Receipt format badle (printReceipt)
//   4. Email provider badle (emailToCustomer)
// Har reason ek ALAG concern hai, lekin sab ek hi class mein bandhe hain. Koi bhi change
// poori class ko touch karta hai aur baaki teeno cheezon ko accidentally break kar sakta hai.
