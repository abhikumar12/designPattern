# LLD Practice — Machine Coding Interview Problems

The 23 lessons one level up teach you the *vocabulary* (Strategy, State, Decorator...). This
folder is where that vocabulary gets used for real: classic "design X" machine-coding
questions, each solved with the smallest set of patterns that actually earns its keep — not
pattern soup.

## How to use this module
1. Open a problem's `README.md` — read ONLY the Functional Requirements section first.
2. Before looking at `design.js`, spend 10–15 minutes sketching your own classes on paper —
   this is what the actual interview feels like.
3. Compare against `design.js`, run it (`node design.js`), then read "What an interviewer is
   watching for" — that's the part most people skip and it's the highest-signal section.
4. Do `exercise.js` — extending a design cleanly is what actually proves you understand *why*
   the pattern was chosen, not just that you can name it.

## Problems

| # | Problem | Core pattern(s) | Also asked at |
|---|---------|------------------|----------------|
| 1 | [Parking Lot](01-parking-lot/) | Singleton, Strategy | Amazon, Uber, Ola |
| 2 | [Splitwise](02-splitwise/) | Strategy, Facade | Uber, Flipkart, Swiggy |
| 3 | [Elevator System](03-elevator-system/) | State | Google, Microsoft, Amazon |
| 4 | [Rate Limiter](04-rate-limiter/) | Strategy | Stripe, Uber, API platforms |
| 5 | [Movie Ticket Booking](05-movie-ticket-booking/) | State, Facade | Amazon, BookMyShow |
| 6 | [Notification Service](06-notification-service/) | Factory, Decorator | Uber, Swiggy, fintechs |

## The habit that actually matters

Every `design.js` in this folder was written the "wrong way round" on purpose — read the
naive instinct in each README's requirements, then notice how few patterns were actually
needed. Real interviews penalize pattern-stuffing as much as no-pattern spaghetti. The
question is never "which patterns do I know" — it's "what in THIS design might change, and
what's the cheapest way to isolate that change."
