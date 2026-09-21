// 🎯 EXERCISE — NotificationService ko DIP-compliant banao.
// Chalao:  node exercise.js

// ----- violation (isse refactor karna hai) -----
class EmailSender {
  send(to, msg) { console.log(`📧 emailing ${to}: ${msg}`); }
}
class NotificationService {
  constructor() {
    this.sender = new EmailSender(); // hardcoded — sirf email kabhi bhi hardcode ho gaya
  }
  notify(to, msg) { this.sender.send(to, msg); }
}

new NotificationService().notify('alice@example.com', 'Your order shipped');

// ============================================================
// TODO 1: change NotificationService's constructor to accept a `sender` parameter instead of
//         hardcoding `new EmailSender()`.
//
// TODO 2: write an `SmsSender` class with the same `send(to, msg)` contract, and show
//         NotificationService working with BOTH EmailSender and SmsSender without any change
//         to NotificationService itself.
//
// TODO 3 (bonus): write a `FakeSender` (captures messages in an array instead of really
//         sending) and show how it would let you unit-test NotificationService.notify()
//         without actually sending an email or SMS — assert the fake captured the right
//         message.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
