// ✅ IDIOMATIC JS: ES module khud hi singleton hai — module-level object
// export karo, JS engine use sirf EK baar evaluate karta hai (import cache).
// Chalao:  node 3-singleton-module.js

const settings = { theme: 'light', retries: 3 }; // module scope = automatically singleton
export default settings;

// Isko do jagah "import" karke dikhate hain (simulate):
const configA = settings;
const configB = settings;
configA.theme = 'dark';
console.log('configA.theme:', configA.theme);
console.log('configB.theme:', configB.theme); // 'dark' — same reference

// Yehi tarika JS mein sabse zyada use hota hai: class + getInstance() ki
// zaroorat kam padti hai, module system khud singleton de deta hai.
