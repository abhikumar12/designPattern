// 🎯 EXERCISE — chat users ko Mediator (ChatRoom) se connect karo taaki wo
// ek doosre ko directly reference na karein.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
class User {
  constructor(name) { this.name = name; }
  sendDirect(otherUser, msg) { // har user ko doosre users ka direct reference chahiye
    console.log(`[${this.name} -> ${otherUser.name}]: ${msg}`);
  }
}
const alice = new User('Alice');
const bob = new User('Bob');
alice.sendDirect(bob, 'Hi Bob!');

// ============================================================
// TODO 1: `ChatRoom` class banao with `register(user)` (users array mein
//         add + user.room = this set kare) aur `broadcast(sender, msg)`
//         (sender ke alawa sabko print kare: `[sender -> everyone]: msg`).
//
// TODO 2: `User` class ko refactor karo — `send(msg)` method ho jo
//         `this.room.broadcast(this, msg)` call kare, koi doosre User ka
//         direct reference na ho.
//
// TODO 3 (bonus): teesra user 'Carol' add karo, dikhao ki Alice ka message
//         Bob aur Carol dono ko milta hai — Alice ko unka direct reference
//         kabhi nahi pata.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
