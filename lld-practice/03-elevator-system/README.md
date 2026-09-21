# LLD 3 — Elevator System

Asked at: Google, Microsoft, Amazon — a favorite because it's a real state machine, not just
a bag of objects.

## Functional Requirements
- An elevator is Idle, Moving Up, Moving Down, or Doors Open at any moment
- External requests (someone presses a floor button) get queued
- The elevator processes requests one floor-step at a time, stopping when it reaches a
  requested floor

## Patterns used (and why)
- **State** — this is the textbook State pattern use case. What `step()` and `onRequest()` do
  depends ENTIRELY on the elevator's current state. No `if (this.status === 'idle')` anywhere.
- (implicit) **Strategy** — "which floor to service next" is scheduling logic that could be
  swapped independently of the state machine itself (see the exercise).

## Files
```
node design.js      # the full working design + a runnable demo (single elevator)
node exercise.js     # 🎯 extend it — multiple elevators + a dispatch strategy
```

## What an interviewer is watching for
1. Do you model states as OBJECTS (like here) instead of a string + switch statement? A string
   `status` field with `if/else` everywhere is exactly the naive version Lesson 20 warns about.
2. Do transitions live inside the states themselves, not in the Elevator class?
3. Can you add multiple elevators + a dispatch algorithm without touching the state objects?
