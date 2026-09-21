# SOLID 2 — Open/Closed Principle (OCP)

**Rule:** classes/functions **extension ke liye open** hone chahiye, **modification ke liye
closed**.

**Problem:** jab naya "type" (discount tier, shipping method, notification channel) add karne
ke liye tumhe EXISTING, already-tested function ko edit karna padta hai, to har change purani
functionality ko risk mein daalta hai.

**Idea:** variation points ko ek registry/lookup mein nikaalo. Naya type add karna ab ek NAYI
entry hai (extension), purane code ko touch karna nahi (modification).

## Files — is order mein chalao
```
node 1-violation.js   # ❌ naya type = existing function edit karo
node 2-fixed.js        # ✅ naya type = registry mein ek entry
node exercise.js       # 🎯 tumhara turn
```

## Yeh design patterns se kaise judta hai
Yeh literally [Strategy](../../01-strategy/) aur [Factory Method](../../05-factory-method/)
ka "why" hai — dono patterns EXACTLY OCP ko satisfy karne ke liye exist karte hain. Agar tumne
Lesson 1 (Strategy) already kiya hai, `2-fixed.js` yahan familiar lagega.

## When to skip
Har if/else ko turant registry mein convert mat karo — agar sirf 2 cases hain jo KABHI
badhenge nahi, plain `if` behtar hai. OCP tab lagao jab naye types/variants **regularly add**
hone ki expectation ho.
