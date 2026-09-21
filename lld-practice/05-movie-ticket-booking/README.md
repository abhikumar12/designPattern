# LLD 5 — Movie Ticket Booking (BookMyShow-lite)

Asked at: Amazon, BookMyShow, most consumer-app companies — good for testing whether you
handle CONCURRENCY-shaped problems (double booking) even in a single-threaded demo.

## Functional Requirements
- A show has a fixed set of seats
- A user selects seats → they get **locked** (held) for a short time
- User confirms payment → seats become **booked**
- Locking is all-or-nothing: if any requested seat can't be locked, none are

## Patterns used (and why)
- **State** — a seat's allowed transitions depend entirely on its current state
  (Available → Locked → Booked). A booked seat structurally CANNOT be locked again by someone
  else — there's no `if` checking that anywhere, the state object itself refuses.
- **Facade** — `BookingService` is the one entry point over seat-locking + confirmation.

## Files
```
node design.js      # the full working design + a runnable demo
node exercise.js     # 🎯 extend it — cancellation as an explicit transition
```

## What an interviewer is watching for
1. Do you make double-booking a seat structurally impossible (state objects), or just "check
   a boolean and hope nobody races you"?
2. Is seat-locking all-or-nothing? (Lock A1+A2, but A2 is taken → A1 must be released too.)
3. Do you treat "booked → available" as ONE transition (`release`) or do you correctly see that
   a hold timing out and a user cancelling a paid booking are different business events that
   probably need different rules (refunds, etc.)? See the exercise.
