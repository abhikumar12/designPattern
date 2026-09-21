# Lesson 18 — Mediator

**Problem:** components (UI fields, chat users, game objects) ek doosre ko
DIRECTLY reference karte hain taaki interact kar sakein. Jitne components,
wiring utni hi complex (many-to-many) ho jaati hai — naya component add karna
sabko touch karwata hai.

**Idea:** components ek doosre ko na jaanein, sab sirf ek **central mediator**
se baat karein. Mediator hi decide karta hai ki kisi event pe kaun kya
karega.

## Files — is order mein chalao
```
node 1-naive.js     # ❌ components ek doosre ko directly reference karte hain
node 2-mediator.js  # ✅ sab sirf mediator se baat karte hain
node exercise.js    # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Decouple components from each other** — koi bhi component doosre ka
   naam tak nahi jaanta.
2. **Centralize interaction logic** — "kaun kisse affect hota hai" ka rule
   ek hi jagah (mediator) rehta hai.

## When to skip
Agar sirf 2 components hain jinka relationship simple aur permanent hai,
direct reference likhna hi simpler hai — Mediator tabhi kamaata hai jab
**kai components ka wiring complex/changing** ho.
