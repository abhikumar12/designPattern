// ❌ THE NAIVE VERSION — caller khud decide karta hai KAUNSI class banani hai.
// Chalao:  node 1-naive.js

class EmailNotification {
  send(msg) { console.log(`📧 Email: ${msg}`); }
}
class SmsNotification {
  send(msg) { console.log(`📱 SMS: ${msg}`); }
}

function notify(type, msg) {
  let notification;
  if (type === 'email') notification = new EmailNotification();
  else if (type === 'sms') notification = new SmsNotification();
  else throw new Error(`Unknown type: ${type}`);
  notification.send(msg);
}

notify('email', 'Order shipped');
notify('sms', 'Order shipped');

// PROBLEM: naya notification type (push) add karne ke liye notify() function
// dobara edit karna padega. Creation logic aur usage logic mixed hain.
