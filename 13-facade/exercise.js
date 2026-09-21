// 🎯 EXERCISE — order placement (inventory check + payment + shipping) ko
// Facade se ek simple `placeOrder()` ke peeche chhupao.
// Chalao:  node exercise.js

// ----- subsystems (already given, inhe badalna nahi hai) -----
const inventory = { reserve: (item) => console.log(`📦 reserved: ${item}`) };
const payment   = { charge: (amount) => console.log(`💳 charged ₹${amount}`) };
const shipping  = { schedule: (item) => console.log(`🚚 shipping scheduled: ${item}`) };

// ----- naive usage (isse refactor karna hai) -----
function buyNow(item, amount) {
  inventory.reserve(item);
  payment.charge(amount);
  shipping.schedule(item);
}
buyNow('Headphones', 1999);

// ============================================================
// TODO 1: `OrderFacade` class banao with ek method `placeOrder(item, amount)`
//         jo internally inventory.reserve -> payment.charge -> shipping.schedule
//         (yahi order mein) call kare.
//
// TODO 2: `buyNow` function ko hata kar `new OrderFacade().placeOrder(...)`
//         use karo.
//
// TODO 3 (bonus): agar `payment.charge` fail ho jaaye (throw kare) to socho —
//         kya inventory.reserve() undo hona chahiye? Ek naya method
//         `inventory.release(item)` maan lo aur facade mein try/catch se
//         rollback add karo.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
