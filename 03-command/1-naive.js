// ❌ THE NAIVE VERSION — remote directly calls device methods, no undo.
// Chalao:  node 1-naive.js

const light = {
  on: () => console.log('💡 Light: ON'),
  off: () => console.log('💡 Light: OFF'),
};

function pressButton(action) {
  if (action === 'light-on') return light.on();
  if (action === 'light-off') return light.off();
  throw new Error(`Unknown action: ${action}`);
}

pressButton('light-on');
pressButton('light-off');

// PROBLEM: remote ko device ke internals pata hone chahiye. Undo impossible —
// last action record nahi ho raha. Naya device (fan, AC) add karo to
// pressButton() dobara edit karna padega. Command pattern isse theek karta hai.
