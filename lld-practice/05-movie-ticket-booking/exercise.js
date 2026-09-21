// 🎯 EXERCISE — extend the booking design without weakening the state machine.
// Copy design.js above this comment (or just edit design.js directly), then:
//
// TODO 1: bookedState.release() deliberately returns false — a plain "release" shouldn't undo
//         a paid booking. Add a SEPARATE `cancel()` transition (distinct from `release()`) that
//         moves BOOKED -> AVAILABLE, and log a "refund initiated" message when it happens.
//         lockedState and availableState should NOT support `cancel()` (only booked seats can
//         be cancelled — you can't cancel something that was never booked).
//
// TODO 2: Add a `lockedAt` timestamp on Seat, and a `releaseExpiredLocks(show, maxAgeMs)`
//         function on BookingService that walks all seats and releases any LOCKED seat older
//         than maxAgeMs. This simulates what a real background job would do for abandoned
//         carts.
//
// TODO 3 (bonus): why is "all-or-nothing" locking (see lockSeats) important here? Write a
//         2-sentence explanation of what would go wrong for a user if locking were NOT
//         all-or-nothing.
