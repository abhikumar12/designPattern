// 🎯 EXERCISE — invoice template ko Prototype pattern se clone karo.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
function createInvoice() {
  return {
    header: { company: 'Acme Inc', address: '123 Main St' },
    items: [],
    tax: 0.18,
  };
}
const invoiceA = createInvoice();
invoiceA.items.push({ name: 'Widget', price: 100 });
console.log(invoiceA);

// ============================================================
// TODO 1: `InvoicePrototype` CLASS banao (constructor mein header + empty
//         items + tax set kare) with ek `clone()` method jo
//         `structuredClone(this)` return kare.
//         (Class use karo, plain object literal nahi — warna clone() khud
//         ek "own property" ban jaayegi aur structuredClone use clone nahi
//         kar payega kyunki functions clone-able nahi hote. Class method
//         prototype chain pe rehta hai, isliye safe hai — 2-prototype.js
//         mein yehi tarika dikhaya gaya hai.)
//
// TODO 2: `const invoicePrototype = new InvoicePrototype()` banao, phir do
//         invoices clone karo (`invoiceA`, `invoiceB`), dono mein alag items
//         push karo, dikhao ki ek doosre ko affect nahi karte (structuredClone
//         deep copy hai, shallow spread {...this} nahi).
//
// TODO 3 (bonus): socho — agar tumne `clone()` mein `{...this}` (shallow
//         copy) use kiya hota, to `items` array kya problem create karta?
//         (Hint: dono clones same array reference share karte.)
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
