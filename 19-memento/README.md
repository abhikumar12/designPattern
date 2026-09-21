# Lesson 19 — Memento

**Problem:** ek object ka state kabhi-kabhi save aur baad mein restore karna
hai (undo, save-game, checkpoints) — lekin caller ko object ke internal
fields khud copy/restore karne padte hain, jo encapsulation todta hai aur
internals badalne par toot jaata hai.

**Idea:** object khud apna snapshot banaye (`save()`) aur khud restore kare
(`restore()`). Caller sirf snapshot ko *opaque* tareeke se hold karta hai —
uske andar kya hai, usse matlab nahi.

## Files — is order mein chalao
```
node 1-naive.js    # ❌ caller directly internal fields copy/restore karta hai
node 2-memento.js  # ✅ object khud save()/restore() implement karta hai
node exercise.js   # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Encapsulation preserved** — internals sirf object khud dekhta/badalta
   hai, caller nahi.
2. **Snapshot is opaque to the caller** — History/SaveSlot bas snapshot ko
   store karte hain, uske andar jhaankte nahi.

## Related: Command se fark
Command "actions" ko undo karta hai (execute/undo pairs). Memento "state" ko
undo karta hai (poora snapshot save/restore). Command tab better hai jab
undo logic simple ho; Memento tab better hai jab state complex ho aur
"reverse action" likhna mushkil ho.

## When to skip
Agar state bohot chhota/simple hai (1-2 primitive fields), seedha ek
variable mein copy rakhna kaafi hai — Memento tabhi kamaata hai jab state
complex ho aur encapsulation todna avoid karna ho.
