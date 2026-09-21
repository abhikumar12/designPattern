# HLD 6 — Message Queues & Async Processing

Asked at: Uber, Swiggy, any company with background jobs (emails, payments, notifications).
Comes up whenever a system-design answer needs to avoid making the user WAIT for slow work.

## Why queues exist
Some work shouldn't block the request that triggered it — sending a confirmation email,
resizing an uploaded image, charging a payment. A queue lets a producer say "do this later"
and move on, while one or more consumers process the backlog independently. This DECOUPLES
producers from consumers: neither needs to know the other exists, or be up at the same time.

## Two shapes
- **Point-to-point queue** — each message is processed by exactly ONE consumer (e.g. "charge
  this order" should happen once, not once per service that's listening).
- **Pub-Sub (publish-subscribe)** — each message is broadcast to EVERY subscriber
  independently. This is the [Observer pattern](../../02-observer/) at the scale of
  independent services instead of objects in one process — an `order.placed` event might
  need to reach inventory, email, AND analytics, and none of them should know the others
  exist.

## Delivery guarantees (know these cold)
- **At-most-once** — message might be lost, never processed twice. Fast, simplest, riskiest.
- **At-least-once** — message is guaranteed to be processed, but MIGHT be processed twice
  (e.g. consumer crashes after processing but before acknowledging). Requires consumers to
  be **idempotent** (processing the same message twice has the same effect as once).
- **Exactly-once** — the ideal, genuinely hard to guarantee across a network; most "exactly
  once" systems are really at-least-once + deduplication (an idempotency key).

## Files
```
node simulate.js     # a retrying point-to-point queue with a dead-letter queue, plus pub-sub
node exercise.js      # 🎯 extend it — visibility timeout + idempotent processing
```

## What an interviewer is watching for
1. Do you reach for a queue specifically to decouple slow/unreliable work from the
   user-facing request path?
2. Do you know what a **dead-letter queue** is for (messages that fail repeatedly get set
   aside for manual inspection, instead of blocking/retrying forever)?
3. Do you understand why "at-least-once + idempotency" is the realistic target, not
   "exactly-once", and can explain what idempotency means concretely (a `messageId` you've
   already processed gets skipped, not reprocessed)?
