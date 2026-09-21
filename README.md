# Design Patterns Course (JavaScript) — run locally

Har pattern ko **chala kar** samajhne ke liye. Koi npm install ki zaroorat nahi —
sab kuch pure Node hai.

## Requirement
- Node.js 18+ installed. Check karo:
  ```
  node --version
  ```
  Agar nahi hai: https://nodejs.org se LTS install karo.

## Kaise use karein (har lesson ke liye same flow)
1. Lesson folder ka `README.md` padho.
2. `1-naive.js` chalao — dekho problem kaisi dikhti hai:
   ```
   node 01-strategy/1-naive.js
   ```
3. Pattern wali files chalao — dekho kaise clean hota hai.
4. `exercise.js` khol ke khud solve karo. Chala kar test karo.

## Structure — saare 23 classic (GoF) patterns

### Creational — object *kaise banta hai*
```
design-patterns-course/
├── 04-singleton/         ← sirf ek instance guarantee karo
├── 05-factory-method/    ← object banane ka kaam ek function ko do
├── 06-abstract-factory/  ← related objects ka poora consistent family banao
├── 07-builder/           ← complex object ko step-by-step banao
├── 08-prototype/         ← naye instance existing object ko CLONE karke banao
```

### Structural — objects *kaise jude/compose hote hain*
```
├── 09-adapter/            ← mismatched interface ko apne shape mein convert karo
├── 10-bridge/             ← do independent dimensions ko alag hierarchies mein todo
├── 11-composite/          ← tree (leaf + branch) ko uniform interface do
├── 12-decorator/          ← runtime pe stackable behavior jodo
├── 13-facade/             ← complex subsystem ke aage ek simple entry point
├── 14-flyweight/          ← shared data reuse karo, memory bachao
├── 15-proxy/              ← real object ke aage access-control/lazy-load stand-in
```

### Behavioral — objects *kaise interact/communicate karte hain*
```
├── 01-strategy/                    ← runtime pe interchangeable algorithms (yahin se shuru karo)
├── 02-observer/                    ← ek-se-anek: state badle, sab subscribers ko pata chale
├── 03-command/                     ← action ko object banao (undo/queue/replay)
├── 16-chain-of-responsibility/     ← handlers ki chain, jo handle kar sake wahi kare
├── 17-iterator/                    ← kisi bhi collection ko uniform tarike se traverse karo
├── 18-mediator/                    ← components sirf ek central mediator se baat karein
├── 19-memento/                     ← object khud apna snapshot save/restore kare
├── 20-state/                       ← behavior current status pe depend kare, state khud transition kare
├── 21-template-method/             ← shared skeleton, sirf steps subclass mein override
├── 22-visitor/                     ← classes ko chhue bina naye operations add karo
├── 23-interpreter/                 ← chhoti grammar ko composable nodes se evaluate karo
└── package.json                    ← shortcut scripts (optional)
```

## Shortcut scripts (optional)
`package.json` mein scripts hain, toh yeh bhi kaam karta hai:
```
npm run strategy:registry
npm run observer:emitter
npm run singleton:class
npm run visitor:pattern
```
Poori list ke liye `package.json` kholo — har lesson ke `naive`/pattern
files ke liye ek script hai.

## Golden rule
Sirf padhna nahi — **chalao, tood-fod karo, dobara chalao.** Jo pattern tumne
khud break karke wapas jode ho, wahi yaad rehta hai.
