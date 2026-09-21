// 💰 SPLITWISE-LITE — expense sharing system, classic LLD question
// Chalao:  node design.js
//
// See README.md for functional requirements and which patterns are used.

class User {
  constructor(id, name) { this.id = id; this.name = name; }
}

// ---- Strategy: how to split an expense among participants ----
const splitStrategies = {
  equal: (amount, users) => {
    const share = amount / users.length;
    return users.map((u) => ({ user: u, amount: share }));
  },
  exact: (amount, users, extra) => {
    const total = extra.amounts.reduce((a, b) => a + b, 0);
    if (Math.abs(total - amount) > 0.01) throw new Error('exact amounts must sum to total');
    return users.map((u, i) => ({ user: u, amount: extra.amounts[i] }));
  },
  percent: (amount, users, extra) => {
    const total = extra.percents.reduce((a, b) => a + b, 0);
    if (Math.abs(total - 100) > 0.01) throw new Error('percents must sum to 100');
    return users.map((u, i) => ({ user: u, amount: (amount * extra.percents[i]) / 100 }));
  },
};

// ---- Ledger: tracks NET pairwise balances (never lets both directions grow at once) ----
class Ledger {
  #balances = new Map(); // key `${owesId}->${owedToId}` = amount owed

  #key(a, b) { return `${a}->${b}`; }

  addDebt(owesId, owedToId, amount) {
    if (owesId === owedToId || amount === 0) return;
    const opposite = this.#balances.get(this.#key(owedToId, owesId)) ?? 0;
    if (opposite >= amount) {
      this.#balances.set(this.#key(owedToId, owesId), opposite - amount);
    } else {
      this.#balances.delete(this.#key(owedToId, owesId));
      const existing = this.#balances.get(this.#key(owesId, owedToId)) ?? 0;
      this.#balances.set(this.#key(owesId, owedToId), existing + (amount - opposite));
    }
  }

  getBalance(aId, bId) {
    const aOwesB = this.#balances.get(this.#key(aId, bId)) ?? 0;
    const bOwesA = this.#balances.get(this.#key(bId, aId)) ?? 0;
    return aOwesB - bOwesA; // positive => a owes b
  }

  printAll(users) {
    for (const [key, amount] of this.#balances) {
      if (amount <= 0.001) continue;
      const [owesId, owedToId] = key.split('->');
      const owes = users.find((u) => u.id === owesId);
      const owedTo = users.find((u) => u.id === owedToId);
      console.log(`  ${owes.name} owes ${owedTo.name}: ₹${amount.toFixed(2)}`);
    }
  }
}

// ---- Facade over split strategies + Ledger ----
class ExpenseManager {
  constructor(users) { this.users = users; this.ledger = new Ledger(); }

  addExpense(paidBy, amount, splitType, participants, extra = {}) {
    const splits = splitStrategies[splitType](amount, participants, extra);
    for (const { user, amount: share } of splits) {
      if (user.id === paidBy.id) continue;
      this.ledger.addDebt(user.id, paidBy.id, share);
    }
    console.log(`✅ ${paidBy.name} paid ₹${amount} (${splitType} split among ${participants.length})`);
  }

  balanceBetween(a, b) {
    const bal = this.ledger.getBalance(a.id, b.id);
    if (bal === 0) { console.log(`${a.name} and ${b.name} are settled up`); return; }
    console.log(bal > 0 ? `${a.name} owes ${b.name} ₹${bal.toFixed(2)}` : `${b.name} owes ${a.name} ₹${(-bal).toFixed(2)}`);
  }

  printBalances() {
    console.log('-- balances --');
    this.ledger.printAll(this.users);
  }
}

// ---------------- DEMO ----------------
const alice = new User('u1', 'Alice');
const bob = new User('u2', 'Bob');
const carol = new User('u3', 'Carol');
const manager = new ExpenseManager([alice, bob, carol]);

manager.addExpense(alice, 300, 'equal', [alice, bob, carol]);
manager.addExpense(bob, 100, 'exact', [alice, bob], { amounts: [60, 40] });
manager.addExpense(carol, 500, 'percent', [alice, carol], { percents: [30, 70] });

manager.printBalances();
manager.balanceBetween(alice, bob);
