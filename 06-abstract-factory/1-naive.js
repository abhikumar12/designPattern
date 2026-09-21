// ❌ THE NAIVE VERSION — button aur checkbox alag-alag banaye ja rahe hain,
// theme consistency guarantee nahi hoti.
// Chalao:  node 1-naive.js

function createButton(theme) {
  return theme === 'dark'
    ? { render: () => console.log('🔘 [dark button]') }
    : { render: () => console.log('⚪ [light button]') };
}
function createCheckbox(theme) {
  return theme === 'dark'
    ? { render: () => console.log('☑️ [dark checkbox]') }
    : { render: () => console.log('⬜ [light checkbox]') };
}

// Bug: kisi ne galti se mismatched theme pass kar diya
const button = createButton('dark');
const checkbox = createCheckbox('light'); // 😬 mismatch — koi compile-time check nahi
button.render();
checkbox.render();

// PROBLEM: button aur checkbox alag-alag jagah se banaye jaate hain — kuch bhi
// unhe "same family" (same theme) rehne ki guarantee nahi deta.
