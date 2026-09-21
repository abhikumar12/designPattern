// 🎯 EXERCISE — extend the parking lot design without rewriting it.
// Copy design.js above this comment (or just edit design.js directly), then:
//
// TODO 1: Add a 'van' vehicle type — size between car and truck — to the SIZE map and add a
//         matching entry to pricingStrategies. Confirm you did NOT have to touch ParkingLot,
//         Level, or ParkingSpot — only the two registries. That's Open/Closed in action.
//
// TODO 2: Add an "EV discount" — give Vehicle an `isEV` flag, and make EVs get 20% off
//         whatever pricing strategy applies. Hint: this is the Decorator pattern (Lesson 12)
//         applied to a Strategy FUNCTION instead of an object — write a
//         `withEvDiscount(pricingFn)` wrapper instead of editing each strategy.
//
// TODO 3 (bonus): today, if two vehicles try to park in the exact same millisecond, both could
//         call findSpotFor() before either calls park(), and both might get told the same spot
//         is free. Where would a real (multi-request, concurrent) system need a lock or
//         transaction that this single-threaded demo doesn't need? You don't need to implement
//         it — just identify the exact race window in the code.
