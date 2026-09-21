// ❌ THE NAIVE VERSION — har (notification-type × channel) combination ke
// liye alag class — class explosion.
// Chalao:  node 1-naive.js

class UrgentEmailAlert {
  send(msg) { console.log(`📧🚨 URGENT EMAIL: ${msg}`); }
}
class NormalEmailAlert {
  send(msg) { console.log(`📧 email: ${msg}`); }
}
class UrgentSmsAlert {
  send(msg) { console.log(`📱🚨 URGENT SMS: ${msg}`); }
}
class NormalSmsAlert {
  send(msg) { console.log(`📱 sms: ${msg}`); }
}

new UrgentEmailAlert().send('Server down');
new NormalSmsAlert().send('Deploy finished');

// PROBLEM: 2 urgency levels × 2 channels = 4 classes. Teesra channel (push)
// add karo -> 6 classes. Teesri urgency level add karo -> 9 classes. Yeh
// (urgency × channel) combinations ke saath EXPONENTIALLY badhta hai.
