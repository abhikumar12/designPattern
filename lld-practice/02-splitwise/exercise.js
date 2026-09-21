// 🎯 EXERCISE — extend the Splitwise design without rewriting it.
// Copy design.js above this comment (or just edit design.js directly), then:
//
// TODO 1: Add a `settle(a, b)` method to ExpenseManager that ACTUALLY clears the balance
//         between two users (not just prints it) — it should call `ledger.addDebt()` with
//         whatever amount zeroes out the current balance, then log a "settled up" message.
//
// TODO 2: Add a 4th split type: 'shares' — participants split by relative shares instead of
//         equal/exact/percent (e.g. Alice=2 shares, Bob=1 share means Alice pays 2/3, Bob 1/3).
//         Add it to splitStrategies ONLY — confirm ExpenseManager needs zero changes.
//
// TODO 3 (bonus): if you wanted every participant to get notified (console.log a message to
//         them) whenever a new expense involving them is added, which pattern from the main
//         course would you reach for, and where exactly would you hook it in? (You don't have
//         to implement it — name the pattern and the hook point.)
