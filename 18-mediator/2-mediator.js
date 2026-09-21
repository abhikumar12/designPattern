// ✅ MEDIATOR PATTERN — components ek doosre ko directly nahi jaante, sab
// ek CENTRAL mediator se baat karte hain. Mediator decide karta hai "kisko
// kya karna hai".
// Chalao:  node 2-mediator.js

class FormMediator {
  #components = {};
  register(name, component) { this.#components[name] = component; component.mediator = this; }
  notify(sender, event) {
    if (sender === 'checkbox' && event === 'toggled') {
      const checked = this.#components.checkbox.checked;
      this.#components.submitButton.setEnabled(checked);
    }
    // naya field/rule add karna = yahan ek naya `if`, components ko chhue bina
  }
}

class Checkbox {
  constructor() { this.checked = false; }
  toggle() {
    this.checked = !this.checked;
    console.log('checkbox:', this.checked);
    this.mediator.notify('checkbox', 'toggled'); // sirf mediator ko batata hai, SubmitButton ko nahi jaanta
  }
}
class SubmitButton {
  setEnabled(enabled) { console.log('submit button enabled:', enabled); }
}

const mediator = new FormMediator();
const checkbox = new Checkbox();
const submitButton = new SubmitButton();
mediator.register('checkbox', checkbox);
mediator.register('submitButton', submitButton);

checkbox.toggle();
checkbox.toggle();

// Naya field (dropdown) add karna = mediator mein ek naya `if`/register call,
// Checkbox aur SubmitButton ko ek doosre ke baare mein KUCH pata nahi hona chahiye.
