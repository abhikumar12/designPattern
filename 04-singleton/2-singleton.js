// ✅ SINGLETON PATTERN — sirf ek instance, jahan se bhi maango wahi milega.
// Chalao:  node 2-singleton.js

class Config {
  static #instance;

  constructor() {
    if (Config.#instance) return Config.#instance; // already bana hai to wahi do
    this.settings = { theme: 'light', retries: 3 };
    Config.#instance = this;
  }

  static getInstance() {
    return Config.#instance ?? new Config();
  }
}

const configA = Config.getInstance();
const configB = Config.getInstance();

configA.settings.theme = 'dark';
console.log('configA.theme:', configA.settings.theme);
console.log('configB.theme:', configB.settings.theme); // 'dark' — same object hai
console.log('same instance?', configA === configB);
