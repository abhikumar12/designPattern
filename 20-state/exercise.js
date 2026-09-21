// 🎯 EXERCISE — traffic light (red -> green -> yellow -> red) ko State
// pattern se refactor karo.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
class TrafficLight {
  constructor() { this.color = 'red'; }
  next() {
    if (this.color === 'red') this.color = 'green';
    else if (this.color === 'green') this.color = 'yellow';
    else if (this.color === 'yellow') this.color = 'red';
    console.log('now:', this.color);
  }
}
const light = new TrafficLight();
light.next(); light.next(); light.next();

// ============================================================
// TODO 1: `redState`, `greenState`, `yellowState` objects banao, har ek
//         mein `name` aur `next(light)` method (jo light.setState(...)
//         call kare next color ke state pe — 2-state.js jaisa).
//
// TODO 2: `TrafficLight` class ko refactor karo — constructor mein
//         `this.state = redState`, `next()` method `this.state.next(this)`
//         call kare, `setState(state)` method ho.
//
// TODO 3 (bonus): socho — is design mein naya rule "yellow se seedha red,
//         par sirf agar pedestrian button dabaya ho" add karna kitna easy
//         hai naive version ke mukable?
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
