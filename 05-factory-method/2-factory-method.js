// ✅ FACTORY METHOD — object banane ka kaam ek dedicated function/method ko
// do, caller sirf "type" maangta hai, "how to build" nahi jaanta.
// Chalao:  node 2-factory-method.js

class EmailNotification {
  send(msg) { console.log(`📧 Email: ${msg}`); }
}
class SmsNotification {
  send(msg) { console.log(`📱 SMS: ${msg}`); }
}
class PushNotification {
  send(msg) { console.log(`🔔 Push: ${msg}`); }
}

// Factory — ye "kaunsi class banani hai" ka decision yahin rakhta hai
function createNotification(type) {
  const notifications = {
    email: EmailNotification,
    sms: SmsNotification,
    push: PushNotification,
  };
  const NotificationClass = notifications[type];
  if (!NotificationClass) throw new Error(`Unknown type: ${type}`);
  return new NotificationClass();
}

function notify(type, msg) {
  const notification = createNotification(type); // caller ko class ka naam pata hi nahi
  notification.send(msg);
}

notify('email', 'Order shipped');
notify('push', 'Order shipped');

// Naya type add karna = registry mein ek line, notify() ko CHHUE BINA.
