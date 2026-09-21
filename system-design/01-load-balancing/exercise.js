// 🎯 EXERCISE — extend the load balancer design without breaking existing strategies.
// Copy simulate.js above this comment (or just edit simulate.js directly), then:
//
// TODO 1: add a `healthy` flag (default true) to Server. Write a `HealthAwareBalancer`
//         wrapper that takes ANY of the three existing balancers and skips unhealthy
//         servers when picking — you should NOT need to modify RoundRobinBalancer,
//         WeightedRoundRobinBalancer, or LeastConnectionsBalancer themselves (this is the
//         Decorator pattern from Lesson 12, applied to a load balancer instead of a coffee).
//
// TODO 2: simulate server C going down mid-run (set its `healthy = false` partway through
//         a loop of pick() calls) and show that HealthAwareBalancer stops routing to it.
//
// TODO 3 (bonus): what would go wrong if a load balancer used Round Robin for a service
//         where each server keeps user sessions in local memory (not a shared session
//         store)? Write a 2-sentence explanation of the failure a user would actually see.
