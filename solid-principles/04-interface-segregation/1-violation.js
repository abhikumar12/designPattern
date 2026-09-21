// ❌ VIOLATION — ek "fat" interface (base class jo contract set karti hai) sabko FORCE
// karta hai methods implement karne ke liye jo unpe apply hi nahi hote.
// Chalao:  node 1-violation.js

class Worker {
  work() { throw new Error('must implement work()'); }
  eat() { throw new Error('must implement eat()'); }
}

class HumanWorker extends Worker {
  work() { console.log('👷 human working'); }
  eat() { console.log('🍽️ human eating lunch'); }
}

class RobotWorker extends Worker {
  work() { console.log('🤖 robot working'); }
  eat() { throw new Error('robots dont eat!'); } // forced to implement, sirf error throw karne ke liye
}

const workers = [new HumanWorker(), new RobotWorker()];
workers.forEach((w) => w.work());
workers.forEach((w) => {
  try { w.eat(); } catch (e) { console.log(`❌ ${e.message}`); }
});

// PROBLEM: RobotWorker ko eat() implement karna PADTA hai sirf isliye kyunki Worker
// interface mein hai — chahe uska koi matlab na ho. Yeh RobotWorker ko ek method pe
// "depend" karwata hai jo use kabhi chahiye hi nahi.
