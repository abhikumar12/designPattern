// 🎯 EXERCISE — extend the queue design toward what a real message broker does.
// Copy simulate.js above this comment (or just edit simulate.js directly), then:
//
// TODO 1: add a VISIBILITY TIMEOUT (like AWS SQS) — when a consumer dequeues a message, it
//         should become invisible to OTHER consumers for some duration instead of being
//         removed immediately. If the consumer doesn't explicitly "delete" it (call a new
//         `ack(messageId)` method) within that window, it should become visible again for
//         someone else to pick up. This is what makes "at-least-once" delivery work when a
//         consumer crashes mid-processing.
//
// TODO 2: make message processing IDEMPOTENT — add a `processedIds` Set to the consumer
//         side (not the Queue itself), and have the handler skip (log "already processed,
//         skipping") any payload whose `messageId` it's seen before. Enqueue the SAME
//         message twice on purpose and show it only has its real effect once.
//
// TODO 3 (bonus): PubSub here delivers synchronously and in-process. What would have to
//         change for subscribers to run as genuinely separate services (e.g. different
//         Node processes, possibly on different machines)? Name 2 concrete things (in a
//         comment) that this in-memory PubSub is hiding from you.
