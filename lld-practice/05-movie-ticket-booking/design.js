// 🎬 MOVIE TICKET BOOKING — BookMyShow-lite, classic LLD question
// Chalao:  node design.js
//
// See README.md for functional requirements and which patterns are used.

const availableState = {
  name: 'AVAILABLE',
  lock(seat) { seat.setState(lockedState); return true; },
  book() { return false; },
  release() { return false; },
};
const lockedState = {
  name: 'LOCKED',
  lock() { return false; }, // already locked by someone else
  book(seat) { seat.setState(bookedState); return true; },
  release(seat) { seat.setState(availableState); return true; }, // hold timed out / user backed out
};
const bookedState = {
  name: 'BOOKED',
  lock() { return false; },
  book() { return false; },
  release() { return false; }, // booked seats need an explicit cancellation flow, not a plain release
};

class Seat {
  constructor(id) { this.id = id; this.state = availableState; }
  setState(state) { this.state = state; }
  lock() { const ok = this.state.lock(this); console.log(`  seat ${this.id}: lock -> ${ok ? this.state.name : 'DENIED'}`); return ok; }
  book() { const ok = this.state.book(this); console.log(`  seat ${this.id}: book -> ${ok ? this.state.name : 'DENIED'}`); return ok; }
  release() { const ok = this.state.release(this); console.log(`  seat ${this.id}: release -> ${ok ? this.state.name : 'DENIED'}`); return ok; }
}

class Show {
  constructor(id, movieName, seatIds) {
    this.id = id;
    this.movieName = movieName;
    this.seats = new Map(seatIds.map((sid) => [sid, new Seat(sid)]));
  }
}

// ---- Facade ----
class BookingService {
  lockSeats(show, seatIds) {
    const seats = seatIds.map((id) => show.seats.get(id));
    const locked = [];
    for (const seat of seats) {
      if (seat.lock()) locked.push(seat);
      else { locked.forEach((s) => s.release()); return null; } // all-or-nothing
    }
    return locked;
  }
  confirmBooking(seats) {
    const allBooked = seats.every((s) => s.book());
    console.log(allBooked ? '✅ booking confirmed' : '❌ booking failed');
    return allBooked;
  }
}

// ---------------- DEMO ----------------
const show = new Show('S1', 'Inception', ['A1', 'A2', 'A3']);
const service = new BookingService();

const locked = service.lockSeats(show, ['A1', 'A2']);
if (locked) service.confirmBooking(locked);

// someone else tries to lock an already-booked seat — structurally denied
service.lockSeats(show, ['A1']);
