# Lesson 23 — Interpreter

**Problem:** ek chhoti "language"/grammar hai (math expressions, boolean
rules, filter queries) jise evaluate karna hai. String-parsing + if/else se
karo to nested/composed expressions handle karna mushkil ho jaata hai.

**Idea:** grammar ke har rule (number, operator) ko ek chhoti class banao
jismein `interpret()` method ho. Complex expressions in chhote nodes ko
compose karke (tree ki tarah) banti hain — Composite pattern ka special use-case.

## Files — is order mein chalao
```
node 1-naive.js        # ❌ string-parsing + if/else, sirf flat expressions
node 2-interpreter.js  # ✅ chhoti composable classes, nested expressions natural
node exercise.js       # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Grammar as objects** — har rule apna node-type, evaluation logic
   uske andar.
2. **Composable via recursion** — Composite jaisa hi idea, yahan operation
   ka naam `interpret()` hai.

## When to skip
Agar grammar simple/fixed hai ya rarely change hoti hai, ek proper
parser library (ya even `eval`-jaisa safe alternative) use karna behtar hai.
Interpreter tab kamaata hai jab grammar **chhoti ho aur custom rules
frequently badalte/badhte** hon.
