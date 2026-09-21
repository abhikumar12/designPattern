# LLD 6 — Notification Service

Asked at: most companies with any kind of alerting/messaging feature (Uber, Swiggy, fintechs).

## Functional Requirements
- Send notifications over multiple channels: Email, SMS, Push
- Some notifications need retry-on-failure and delivery logging; others don't — and that
  extra behavior shouldn't be baked into the channels themselves

## Patterns used (and why)
- **Factory** — picks the right channel object from a type string; adding a channel is a
  one-line registry entry.
- **Decorator** — `RetryDecorator` and `LoggingDecorator` wrap a channel with extra behavior
  WITHOUT touching the channel's own code, and can be stacked in any combination (same idea as
  Lesson 12's coffee add-ons, applied to a "send" behavior instead of a drink).

## Files
```
node design.js      # the full working design + a runnable demo
node exercise.js     # 🎯 extend it — a new channel + a new decorator
```

## What an interviewer is watching for
1. Do "retry" and "logging" live INSIDE each channel (duplicated 3x), or are they cross-cutting
   concerns applied once, generically, to any channel? Decorator is the whole point here.
2. Is adding a channel (Slack, WhatsApp) a one-line registry addition, or does it require
   editing a big switch statement?
3. Can decorators be composed in different orders, and do you understand what changes about
   behavior when you do (e.g. `Logging(Retry(channel))` logs once per attempt vs.
   `Retry(Logging(channel))` logs each individual attempt)?
