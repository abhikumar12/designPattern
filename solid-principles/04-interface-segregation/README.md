# SOLID 4 — Interface Segregation Principle (ISP)

**Rule:** clients ko un methods pe depend karne ke liye **force nahi** karna chahiye jo woh
use hi nahi karte. Chhote, focused interfaces banao — ek "fat" interface mat banao.

**Problem:** ek badi class/interface jo sab kuch ek saath expect karti hai, kuch
implementations ko methods implement karne padte hain jo unpe apply hi nahi hote (aur usually
sirf ek error throw karte hain).

**Idea:** interface ko split karo taaki har implementer sirf wahi depend kare jo usko
GENUINELY chahiye.

## Files — is order mein chalao
```
node 1-violation.js   # ❌ ek fat Worker interface, RobotWorker ko eat() force
node 2-fixed.js        # ✅ do chhoti, focused interfaces
node exercise.js       # 🎯 tumhara turn
```

## Yeh design patterns se kaise judta hai
[Adapter](../../09-adapter/) aur [Bridge](../../10-bridge/) dono ISP ko respect karte hain —
dono chhote, single-purpose contracts (`pay()`, `deliver()`) define karte hain instead of ek
bada do-everything interface. Fat interfaces banate hi Adapter/Bridge likhna mushkil ho jaata
hai kyunki wrap karne ke liye bohot saare irrelevant methods aa jaate hain.

## When to skip
Agar sab implementers GENUINELY sab methods use karte hain (koi bhi kisi method ko fake/throw
nahi kar raha), interface split karna sirf extra files banayega bina fayde ke. ISP ka signal
hai: koi implementation ek method ko empty/throw/no-op kar rahi hai sirf "interface follow
karne" ke liye.
