// 🛗 ELEVATOR SYSTEM — classic LLD question, State pattern in action
// Chalao:  node design.js
//
// See README.md for functional requirements and which patterns are used.

class Elevator {
  constructor(id) {
    this.id = id;
    this.currentFloor = 0;
    this.requests = new Set(); // floors we still need to stop at
    this.state = idleState;
  }
  setState(state) {
    console.log(`  elevator ${this.id}: ${this.state.name} -> ${state.name}`);
    this.state = state;
  }
  requestFloor(floor) {
    this.requests.add(floor);
    this.state.onRequest(this);
  }
  step() { this.state.step(this); }
}

const idleState = {
  name: 'IDLE',
  onRequest(elevator) {
    if (elevator.requests.size === 0) return;
    const target = [...elevator.requests][0];
    if (target > elevator.currentFloor) elevator.setState(movingUpState);
    else if (target < elevator.currentFloor) elevator.setState(movingDownState);
    else elevator.setState(doorsOpenState);
  },
  step() {},
};

const movingUpState = {
  name: 'MOVING_UP',
  onRequest() {}, // already moving — new requests just sit in the set until we pass them
  step(elevator) {
    elevator.currentFloor++;
    console.log(`  elevator ${elevator.id} passing floor ${elevator.currentFloor}`);
    if (elevator.requests.has(elevator.currentFloor)) {
      elevator.requests.delete(elevator.currentFloor);
      elevator.setState(doorsOpenState);
    }
  },
};

const movingDownState = {
  name: 'MOVING_DOWN',
  onRequest() {},
  step(elevator) {
    elevator.currentFloor--;
    console.log(`  elevator ${elevator.id} passing floor ${elevator.currentFloor}`);
    if (elevator.requests.has(elevator.currentFloor)) {
      elevator.requests.delete(elevator.currentFloor);
      elevator.setState(doorsOpenState);
    }
  },
};

const doorsOpenState = {
  name: 'DOORS_OPEN',
  onRequest() {},
  step(elevator) {
    console.log(`  elevator ${elevator.id} doors closing at floor ${elevator.currentFloor}`);
    elevator.setState(idleState);
    elevator.state.onRequest(elevator); // immediately re-evaluate: anything else pending?
  },
};

// ---------------- DEMO ----------------
const elevator = new Elevator('E1');
elevator.requestFloor(3);
elevator.requestFloor(5);

let ticks = 0;
while ((elevator.requests.size > 0 || elevator.state !== idleState) && ticks < 20) {
  elevator.step();
  ticks++;
}
console.log(`done in ${ticks} steps, resting at floor ${elevator.currentFloor}`);
