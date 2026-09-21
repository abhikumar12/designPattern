// 🎯 EXERCISE — extend the notification design without touching existing channels/decorators.
// Copy design.js above this comment (or just edit design.js directly), then:
//
// TODO 1: Add a 'slack' channel to the createChannel() registry (a SlackChannel class with the
//         same `send(to, msg)` contract). Confirm you didn't need to touch EmailChannel,
//         SmsChannel, or PushChannel.
//
// TODO 2: Write a TimeoutDecorator — it should call the wrapped channel's send(), and if it
//         doesn't resolve fast enough, log a timeout message and return false. (Since our
//         `send()` is synchronous here, simulate "slow" with a random chance instead of a real
//         timer — the point is the DECORATOR SHAPE, not real async timing.)
//
// TODO 3 (bonus): wrap the same push channel two different ways —
//         `new LoggingDecorator(new RetryDecorator(channel))` vs.
//         `new RetryDecorator(new LoggingDecorator(channel))` — run both and describe in a
//         comment what's different about the log output between the two orderings.
