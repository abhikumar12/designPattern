// 🎯 EXERCISE — ek fat Printer interface ko segregate karo.
// Chalao:  node exercise.js

// ----- violation (isse refactor karna hai) -----
class MultiFunctionPrinter {
  print(doc) { console.log(`🖨️ printing ${doc}`); }
  scan(doc) { console.log(`📠 scanning ${doc}`); }
  fax(doc) { console.log(`📠 faxing ${doc}`); }
}
class BasicPrinter {
  print(doc) { console.log(`🖨️ printing ${doc}`); }
  scan() { throw new Error('this printer cannot scan!'); } // forced, unused
  fax() { throw new Error('this printer cannot fax!'); }   // forced, unused
}

new MultiFunctionPrinter().print('report.pdf');
try { new BasicPrinter().scan('report.pdf'); } catch (e) { console.log(`❌ ${e.message}`); }

// ============================================================
// TODO 1: BasicPrinter should only need to implement `print()`. Restructure so it's not
//         forced to define scan()/fax() at all (delete those methods from it entirely —
//         nothing should call them on a BasicPrinter, so nothing should break).
//
// TODO 2: write a function `printIfPossible(device, doc)` that prints via `device.print(doc)`
//         — it should work for BOTH BasicPrinter and MultiFunctionPrinter without either
//         needing a shared "fat" base class.
//
// TODO 3 (bonus): write a function `scanIfPossible(device, doc)` that checks
//         `typeof device.scan === 'function'` before calling it (like the `eaters` filter in
//         2-fixed.js) — call it with both printer types and confirm it doesn't crash on
//         BasicPrinter.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
