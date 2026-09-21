// ❌ THE NAIVE VERSION — har jagah naya config object bana rahe hain.
// Chalao:  node 1-naive.js

class Config {
  constructor() {
    this.settings = { theme: 'light', retries: 3 };
  }
}

const configA = new Config();
const configB = new Config();

configA.settings.theme = 'dark';
console.log('configA.theme:', configA.settings.theme);
console.log('configB.theme:', configB.settings.theme); // still 'light' — inconsistent!

// PROBLEM: Config app-wide ek hi hona chahiye (ek hi source of truth). Har
// `new Config()` alag state banata hai — kahin change karo, kahin nahi dikhta.
