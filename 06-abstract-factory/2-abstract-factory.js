// ✅ ABSTRACT FACTORY — related objects ka poora "family" ek hi factory se
// banta hai, taaki wo hamesha consistent rahein (e.g. sab dark, ya sab light).
// Chalao:  node 2-abstract-factory.js

const lightFactory = {
  createButton:   () => ({ render: () => console.log('⚪ [light button]') }),
  createCheckbox: () => ({ render: () => console.log('⬜ [light checkbox]') }),
};
const darkFactory = {
  createButton:   () => ({ render: () => console.log('🔘 [dark button]') }),
  createCheckbox: () => ({ render: () => console.log('☑️ [dark checkbox]') }),
};

function getFactory(theme) {
  const factories = { light: lightFactory, dark: darkFactory };
  return factories[theme] ?? (() => { throw new Error(`Unknown theme: ${theme}`); })();
}

// UI code ko sirf EK factory milta hai — mismatch ab possible hi nahi
function renderForm(factory) {
  factory.createButton().render();
  factory.createCheckbox().render();
}

console.log('-- dark theme form --');
renderForm(getFactory('dark'));
console.log('-- light theme form --');
renderForm(getFactory('light'));

// Naya theme (e.g. "high-contrast") add karna = naya factory object,
// renderForm() ko CHHUE BINA.
