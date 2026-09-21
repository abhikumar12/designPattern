// 🎯 EXERCISE — purani `oldLogger` (positional args) ko naye app ke expected
// `log({level, message})` interface mein Adapter se convert karo.
// Chalao:  node exercise.js

// ----- third-party jise hum control nahi kar sakte -----
const oldLogger = {
  write: (level, msg) => console.log(`[${level.toUpperCase()}] ${msg}`),
};

// ----- naive usage (isse refactor karna hai) -----
function reportError(msg) {
  oldLogger.write('error', msg); // direct coupling — har jagah 'level, msg' order yaad rakhna
}
reportError('Payment failed');

// ============================================================
// TODO 1: `LoggerAdapter` class banao with ek method `log({ level, message })`
//         jo internally `oldLogger.write(level, message)` call kare.
//
// TODO 2: `reportError(msg, logger)` ko refactor karo taaki woh
//         `logger.log({ level: 'error', message: msg })` call kare —
//         `oldLogger` ka naam ab reportError() ke andar kahin na aaye.
//
// TODO 3 (bonus): ek doosra adapter socho jo console.log ko hi seedha
//         `log({level, message})` interface de (no real "old" system) —
//         dikhao ki reportError() dono adapters ke saath kaam karta hai.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
