# LLD 1 — Parking Lot System

Asked at: Amazon, Uber, Ola, most product companies (extremely common opener).

## Functional Requirements
- Multiple vehicle types: motorcycle, car, truck (each needs a spot of matching-or-larger size)
- Multiple levels, each with a fixed set of spots
- Park a vehicle → find an available, correctly-sized spot → issue a ticket
- Unpark a vehicle → free the spot → calculate the fee based on duration and vehicle type

## Patterns used (and why)
- **Singleton** — a physical building has exactly one `ParkingLot`. No reason two instances
  should ever disagree about which spots are free.
- **Strategy** — fee calculation differs per vehicle type. Kept as a swappable registry so a
  pricing change never touches `ParkingLot`.
- **Composite-ish containment** — `ParkingLot → Level → ParkingSpot` is a simple hierarchy;
  not full Composite (Lesson 11) since spots and levels don't share one interface, but the same
  "contain and delegate" instinct applies.

## Files
```
node design.js      # the full working design + a runnable demo
node exercise.js     # 🎯 extend it — add a vehicle type + a decorator-based discount
```

## What an interviewer is watching for
1. Do you ask clarifying questions first (how many levels? can a bigger spot hold a smaller
   vehicle? is pricing flat or per-hour?) before writing a class?
2. Do you separate "what can vary" (pricing, spot allocation) from "what's structural"
   (ParkingLot/Level/Spot)? That separation is exactly what Strategy buys you.
3. Can you extend the design live (new vehicle type, new pricing rule) without a rewrite?
   That's the actual exercise below.
