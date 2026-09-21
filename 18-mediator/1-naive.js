// ❌ THE NAIVE VERSION — form fields ek doosre ko DIRECTLY reference karte
// hain — many-to-many wiring, naya field add karna sabko edit karwata hai.
// Chalao:  node 1-naive.js

class Checkbox {
  constructor() { this.checked = false; }
  toggle(submitButton) {
    this.checked = !this.checked;
    console.log('checkbox:', this.checked);
    submitButton.setEnabled(this.checked); // checkbox ko SubmitButton ka pata hai
  }
}
class SubmitButton {
  setEnabled(enabled) { console.log('submit button enabled:', enabled); }
}

const submitButton = new SubmitButton();
const checkbox = new Checkbox();
checkbox.toggle(submitButton);
checkbox.toggle(submitButton);

// PROBLEM: Checkbox ko SubmitButton ke baare mein directly pata hai. Ek
// teesra field (dropdown) add karo jo bhi submit ko affect kare — ab
// Checkbox aur Dropdown dono ko ek doosre + SubmitButton sabka pata hona
// padega. Components ka wiring O(n²) ho jaata hai.
