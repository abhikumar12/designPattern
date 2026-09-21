# Lesson 3 — Command

**Problem:** ek "action" (button press, menu click, editor edit) ko turant
execute karna hai, lekin baad mein **undo karna**, **queue mein daalna**, ya
**log karke replay karna** bhi chahiye — aur caller (remote/UI) ko device ke
internals nahi pata hone chahiye.

**Idea:** action ko khud ek object bana do — `execute()` aur `undo()` wala.
Invoker (remote/menu) sirf command ko *hold* karta hai aur call karta hai,
uska implementation nahi jaanta.

## Files — is order mein chalao
```
node 1-naive.js         # ❌ direct method calls, undo impossible
node 2-command.js       # ✅ Command objects + undo
node 3-command-queue.js # ✅ macro, queue, replay
node exercise.js        # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Encapsulate a request as an object** — action + uska undo ek jagah.
2. **Decouple invoker from receiver** — RemoteControl ko Light ka pata nahi.
3. Ek baar action object ban jaaye to use **queue, log, ya batch** kar sakte ho.

## When to skip
Agar undo/queue/log kabhi chahiye hi nahi, aur action seedha ek function call
hai — seedha call karo. Command ki indirection tabhi kamaati hai jab in
extra powers (undo/redo, macros, replay) ki zaroorat ho.
