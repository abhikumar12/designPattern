// ✅ FIXED — har concern apni khud ki class mein, ek hi "reason to change" ke saath.
// Chalao:  node 2-fixed.js

class Invoice {
  constructor(items) { this.items = items; }
  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
}

class InvoiceRepository {
  save(invoice) { console.log('💾 saving invoice to database...'); }
}

class InvoicePrinter {
  print(invoice) {
    console.log('--- RECEIPT ---');
    invoice.items.forEach((i) => console.log(`${i.name} x${i.qty} = ₹${i.price * i.qty}`));
    console.log(`TOTAL: ₹${invoice.calculateTotal()}`);
  }
}

class InvoiceMailer {
  send(invoice, email) { console.log(`📧 emailing receipt to ${email}...`); }
}

const invoice = new Invoice([{ name: 'Widget', price: 100, qty: 2 }]);
new InvoicePrinter().print(invoice);
new InvoiceRepository().save(invoice);
new InvoiceMailer().send(invoice, 'customer@example.com');

// Ab DB engine badalna sirf InvoiceRepository ko touch karta hai. Receipt format badalna
// sirf InvoicePrinter ko. Invoice class ko badalne ka SIRF EK reason hai: pricing/data
// shape khud badle. Yehi Single Responsibility hai — "ek class, ek reason to change."
