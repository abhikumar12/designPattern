// 🅿️ PARKING LOT SYSTEM — classic LLD interview question
// Chalao:  node design.js
//
// See README.md for functional requirements and which patterns are used.

const SIZE = { MOTORCYCLE: 1, CAR: 2, TRUCK: 3 };

class Vehicle {
  constructor(licensePlate, type) {
    this.licensePlate = licensePlate;
    this.type = type; // 'motorcycle' | 'car' | 'truck'
    this.size = SIZE[type.toUpperCase()];
  }
}

class ParkingSpot {
  constructor(id, size) {
    this.id = id;
    this.size = size; // a spot fits vehicles of this size OR SMALLER (a car can use a truck spot)
    this.vehicle = null;
  }
  isAvailable() { return this.vehicle === null; }
  canFit(vehicle) { return this.isAvailable() && vehicle.size <= this.size; }
  park(vehicle) { this.vehicle = vehicle; }
  remove() { const v = this.vehicle; this.vehicle = null; return v; }
}

class Level {
  constructor(levelNumber, spots) {
    this.levelNumber = levelNumber;
    this.spots = spots;
  }
  findSpotFor(vehicle) {
    return this.spots.find((s) => s.canFit(vehicle)) ?? null;
  }
}

class Ticket {
  constructor(vehicle, spot) {
    this.vehicle = vehicle;
    this.spot = spot;
    this.entryTime = Date.now();
  }
}

// ---- Strategy: pricing per vehicle type, per hour ----
const pricingStrategies = {
  motorcycle: (hours) => hours * 10,
  car: (hours) => hours * 20,
  truck: (hours) => hours * 35,
};

// ---- Singleton: the parking lot itself ----
class ParkingLot {
  static #instance;
  constructor() {
    if (ParkingLot.#instance) return ParkingLot.#instance;
    this.levels = [];
    this.activeTickets = new Map(); // licensePlate -> Ticket
    ParkingLot.#instance = this;
  }
  static getInstance() { return ParkingLot.#instance ?? new ParkingLot(); }

  addLevel(level) { this.levels.push(level); }

  parkVehicle(vehicle) {
    for (const level of this.levels) {
      const spot = level.findSpotFor(vehicle);
      if (spot) {
        spot.park(vehicle);
        const ticket = new Ticket(vehicle, spot);
        this.activeTickets.set(vehicle.licensePlate, ticket);
        console.log(`✅ Parked ${vehicle.type} [${vehicle.licensePlate}] at Level ${level.levelNumber}, Spot ${spot.id}`);
        return ticket;
      }
    }
    console.log(`❌ Parking lot full — no spot for ${vehicle.type} [${vehicle.licensePlate}]`);
    return null;
  }

  unparkVehicle(licensePlate) {
    const ticket = this.activeTickets.get(licensePlate);
    if (!ticket) { console.log(`❌ No active ticket for ${licensePlate}`); return; }
    const hours = Math.max(1, (Date.now() - ticket.entryTime) / 3600000);
    const fee = pricingStrategies[ticket.vehicle.type](hours);
    ticket.spot.remove();
    this.activeTickets.delete(licensePlate);
    console.log(`🚗 Unparked ${licensePlate} — fee: ₹${fee.toFixed(2)}`);
    return fee;
  }
}

// ---------------- DEMO ----------------
const lot = ParkingLot.getInstance();
lot.addLevel(new Level(1, [
  new ParkingSpot('L1-S1', SIZE.MOTORCYCLE),
  new ParkingSpot('L1-S2', SIZE.CAR),
  new ParkingSpot('L1-S3', SIZE.TRUCK),
]));

const bike = new Vehicle('MH12AB1234', 'motorcycle');
const car = new Vehicle('MH12CD5678', 'car');
const truck = new Vehicle('MH12EF9999', 'truck');

lot.parkVehicle(bike);
lot.parkVehicle(car);
lot.parkVehicle(truck);
lot.parkVehicle(new Vehicle('MH12ZZ0000', 'car')); // no spot left that fits -> rejected

lot.unparkVehicle('MH12AB1234');
lot.unparkVehicle('MH12CD5678');

console.log('same singleton instance?', ParkingLot.getInstance() === lot);
