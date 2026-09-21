// 📬 MESSAGE QUEUES & ASYNC PROCESSING — decoupling producers from consumers
// Chalao:  node simulate.js
//
// See README.md for point-to-point vs pub-sub, and delivery guarantees.

// ---- Point-to-point queue with retry + dead-letter queue ----
class Queue {
  #messages = [];
  #deadLetter = [];
  constructor(maxRetries = 3) { this.maxRetries = maxRetries; }

  enqueue(payload) { this.#messages.push({ payload, attempts: 0 }); }

  process(handler) {
    while (this.#messages.length) {
      const msg = this.#messages.shift();
      try {
        handler(msg.payload);
        console.log(`  ✅ processed: ${JSON.stringify(msg.payload)}`);
      } catch (err) {
        msg.attempts++;
        if (msg.attempts >= this.maxRetries) {
          this.#deadLetter.push(msg);
          console.log(`  ☠️  moved to dead-letter after ${msg.attempts} attempts: ${JSON.stringify(msg.payload)}`);
        } else {
          console.log(`  🔁 retrying (attempt ${msg.attempts}/${this.maxRetries}): ${JSON.stringify(msg.payload)}`);
          this.#messages.push(msg); // requeue
        }
      }
    }
  }

  deadLetterCount() { return this.#deadLetter.length; }
}

console.log('-- point-to-point queue with retries --');
const orderQueue = new Queue(3);
orderQueue.enqueue({ orderId: 1 });
orderQueue.enqueue({ orderId: 2, forceFail: true }); // always fails -> ends up in the DLQ
orderQueue.process((payload) => {
  if (payload.forceFail) throw new Error('processing failed');
  console.log(`    charging payment for order ${payload.orderId}`);
});
console.log(`  dead-letter queue size: ${orderQueue.deadLetterCount()}`);

// ---- Pub-Sub: one event, many independent subscribers ----
class PubSub {
  #subscribers = new Map(); // topic -> [handlers]
  subscribe(topic, handler) {
    if (!this.#subscribers.has(topic)) this.#subscribers.set(topic, []);
    this.#subscribers.get(topic).push(handler);
  }
  publish(topic, event) {
    const handlers = this.#subscribers.get(topic) ?? [];
    console.log(`  📢 publishing to '${topic}' (${handlers.length} subscribers)`);
    handlers.forEach((h) => h(event));
  }
}

console.log('\n-- pub-sub: one event, independent subscribers --');
const bus = new PubSub();
bus.subscribe('order.placed', (e) => console.log(`    [inventory-service] reserving stock for order ${e.orderId}`));
bus.subscribe('order.placed', (e) => console.log(`    [email-service] sending confirmation for order ${e.orderId}`));
bus.subscribe('order.placed', (e) => console.log(`    [analytics-service] logging order ${e.orderId}`));
bus.publish('order.placed', { orderId: 99 });

console.log('\nNotice inventory/email/analytics services never call each other directly --');
console.log('exactly the decoupling the Observer pattern (Lesson 2) teaches, just at the');
console.log('scale of independent SERVICES instead of objects in one process.');
