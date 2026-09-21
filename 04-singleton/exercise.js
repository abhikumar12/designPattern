// 🎯 EXERCISE — Logger ko Singleton banao taaki poore app mein ek hi log
// history ho.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
class Logger {
  constructor() { this.logs = []; }
  log(msg) { this.logs.push(msg); console.log('LOG:', msg); }
}

const loggerA = new Logger();
const loggerB = new Logger();
loggerA.log('user signed up');
loggerB.log('payment received');
console.log('loggerA has', loggerA.logs.length, 'logs'); // 1 — but chahiye 2!

// ============================================================
// TODO 1: Logger class mein static #instance field + getInstance() add karo
//         (2-singleton.js jaisa), taaki loggerA aur loggerB same object hon.
//
// TODO 2 (bonus): ek module-level `export default new Logger()` variant bhi
//         try karo (3-singleton-module.js jaisa) — dono approach ka tradeoff
//         socho: class singleton lazy hai (pehli baar use hone par banta
//         hai), module singleton eager hai (import hote hi ban jaata hai).
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
