# LLD 2 — Splitwise (Expense Sharing)

Asked at: Uber, Flipkart, Swiggy, and any company that wants to see you handle a non-trivial
data model (not just objects — actual running balances).

## Functional Requirements
- Add users to a group
- Add an expense paid by one user, split among others: **equal**, **exact amounts**, or
  **percentage**
- Track running balances: who owes whom, and how much
- Query the balance between any two users

## Patterns used (and why)
- **Strategy** — the split calculation (`equal` / `exact` / `percent`) is the one piece that
  genuinely varies. Kept as a registry so a new split type never touches the ledger.
- **Facade** — `ExpenseManager` is the one entry point callers use; it hides the interaction
  between split strategies and the `Ledger`.

## Files
```
node design.js      # the full working design + a runnable demo
node exercise.js     # 🎯 extend it — settlements + an Observer hook
```

## What an interviewer is watching for
1. Do you net balances (if A owes B ₹50 and B owes A ₹20, the ledger should just say "A owes
   B ₹30"), or do you let debts pile up unnormalized? The `Ledger.addDebt` method here nets
   them — that's usually the detail that separates a strong answer from a mediocre one.
2. Do you validate `exact`/`percent` splits sum to the right total, or silently accept garbage?
3. Can you add a 4th split type (e.g. "by shares", like 2 shares vs 1 share) without touching
   `Ledger` or `ExpenseManager`?
