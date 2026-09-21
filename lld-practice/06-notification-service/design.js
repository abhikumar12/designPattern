// 🔔 NOTIFICATION SERVICE — multi-channel notifications, classic LLD question
// Chalao:  node design.js
//
// See README.md for functional requirements and which patterns are used.

class EmailChannel { send(to, msg) { console.log(`📧 Email to ${to}: ${msg}`); return true; } }
class SmsChannel { send(to, msg) { console.log(`📱 SMS to ${to}: ${msg}`); return true; } }
class PushChannel {
  send(to, msg) {
    const ok = Math.random() > 0.4; // pretend push occasionally fails (device offline etc.)
    console.log(ok ? `🔔 Push to ${to}: ${msg}` : `🔔 Push to ${to}: FAILED (device offline)`);
    return ok;
  }
}

// ---- Factory ----
function createChannel(type) {
  const channels = { email: EmailChannel, sms: SmsChannel, push: PushChannel };
  const ChannelClass = channels[type];
  if (!ChannelClass) throw new Error(`Unknown channel: ${type}`);
  return new ChannelClass();
}

// ---- Decorators: same `send()` interface as a plain channel ----
class RetryDecorator {
  constructor(channel, maxAttempts = 3) { this.channel = channel; this.maxAttempts = maxAttempts; }
  send(to, msg) {
    for (let attempt = 1; attempt <= this.maxAttempts; attempt++) {
      if (this.channel.send(to, msg)) return true;
      if (attempt < this.maxAttempts) console.log(`  retrying... (attempt ${attempt + 1}/${this.maxAttempts})`);
    }
    return false;
  }
}
class LoggingDecorator {
  constructor(channel) { this.channel = channel; }
  send(to, msg) {
    console.log(`  [log] sending to ${to} at ${new Date().toISOString()}`);
    const ok = this.channel.send(to, msg);
    console.log(`  [log] result: ${ok ? 'delivered' : 'failed'}`);
    return ok;
  }
}

// ---------------- DEMO ----------------
const plainEmail = createChannel('email');
plainEmail.send('alice@example.com', 'Your order shipped');

let reliablePush = createChannel('push');
reliablePush = new LoggingDecorator(new RetryDecorator(reliablePush, 3));
reliablePush.send('device-123', 'Flash sale starts now!');
