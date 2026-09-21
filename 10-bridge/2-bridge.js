// ✅ BRIDGE PATTERN — do dimensions (urgency × channel) ko DO alag
// hierarchies mein tod do, ek doosre ko "hold" karke connect karo.
// Chalao:  node 2-bridge.js

// Implementation hierarchy — "kaise bheja jaaye" (channel)
const emailChannel = { deliver: (text) => console.log(`📧 ${text}`) };
const smsChannel   = { deliver: (text) => console.log(`📱 ${text}`) };

// Abstraction hierarchy — "kya bheja jaaye" (urgency), channel ko bas HOLD karta hai
class Alert {
  constructor(channel) { this.channel = channel; }
  send(msg) { this.channel.deliver(msg); }
}
class UrgentAlert extends Alert {
  send(msg) { this.channel.deliver(`🚨 URGENT: ${msg}`); }
}

// Ab dono dimensions INDEPENDENTLY combine hote hain — class explosion nahi
new Alert(emailChannel).send('Deploy finished');
new UrgentAlert(smsChannel).send('Server down');
new UrgentAlert(emailChannel).send('Payment failed');

// Naya channel (push) add karna = 1 naya object. Nayi urgency level add
// karna = 1 nayi class. Dono independently badhte hain, combinations nahi.
