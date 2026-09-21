# SOLID Principles

23 patterns sikhne ke baad ab "WHY" samajhna hai — SOLID woh 5 principles hain jo batate hain
ki achha object-oriented design **kyun** achha hota hai. Har pattern in principles mein se
kisi na kisi ko satisfy karne ke liye exist karta hai.

## Order matters — is sequence mein padho

| # | Principle | One-line rule | Directly powers |
|---|-----------|----------------|------------------|
| 1 | [Single Responsibility](01-single-responsibility/) | Ek class, ek reason to change | Facade, Command |
| 2 | [Open/Closed](02-open-closed/) | Extension ke liye open, modification ke liye closed | Strategy, Factory Method |
| 3 | [Liskov Substitution](03-liskov-substitution/) | Subtype, base type ki jagah safely use ho sake | Template Method, Composite |
| 4 | [Interface Segregation](04-interface-segregation/) | Chhote, focused interfaces — fat interface mat banao | Adapter, Bridge |
| 5 | [Dependency Inversion](05-dependency-inversion/) | High-level aur low-level dono abstraction pe depend karein | Adapter, Abstract Factory |

## Files — har principle mein same flow
```
node 1-violation.js   # ❌ principle todta hua code
node 2-fixed.js        # ✅ principle follow karta hua code
node exercise.js       # 🎯 tumhara turn
```

## Yeh patterns se pehle kyun nahi padhaya?
Honestly — dono order sahi hain. Patterns pehle padhna tumhe "shape" dikhata hai (yeh kaisa
dikhta hai), SOLID baad mein "WHY" deta hai (yeh isliye achha hai). Interview mein dono
directions se sawaal aate hain: "yeh pattern kaunsa principle satisfy karta hai?" utna hi
common hai jitna "yeh code SOLID kyun nahi hai, fix karo?"

## When to skip
SOLID rules nahi, **guidelines** hain. Chhote scripts, prototypes, ya code jo kabhi grow nahi
karega — in principles ki indirection cost mat uthao. Yeh tab kamaate hain jab codebase
genuinely evolve/scale karni ho.
