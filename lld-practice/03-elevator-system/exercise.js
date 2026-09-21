// 🎯 EXERCISE — extend the elevator design without touching the state objects.
// Copy design.js above this comment (or just edit design.js directly), then:
//
// TODO 1: Build an `ElevatorSystem` class that holds multiple Elevator instances and a
//         `dispatch(floor)` method — it should pick the IDLE elevator whose currentFloor is
//         closest to the requested floor (fall back to any elevator if none are idle), then
//         call `.requestFloor(floor)` on it. You should NOT need to change idleState,
//         movingUpState, movingDownState, or doorsOpenState at all.
//
// TODO 2: Add a MAINTENANCE state — an elevator in this state ignores all requests and
//         doesn't move. Add a `setMaintenanceMode(elevator, on)` helper that transitions in
//         and out of it. What has to happen to `elevator.requests` when maintenance mode ends?
//
// TODO 3 (bonus): the current design services requests in the order they were queued
//         ([...requests][0]), not by "elevator's current direction" (the real SCAN/elevator
//         algorithm). Sketch — in a comment, no need to fully implement — how you'd change
//         `idleState.onRequest` to pick the nearest request in the current direction instead.
