// 🎯 EXERCISE — extend the consistent hashing simulation.
// Copy simulate.js above this comment (or just edit simulate.js directly), then:
//
// TODO 1: demonstrate `removeServer()` the same way the demo demonstrates `addServer()` —
//         build a ring with 4 servers, snapshot every key's assigned server, remove one
//         server, snapshot again, and print how many keys moved. It should again be roughly
//         1/N, not nearly all of them.
//
// TODO 2: measure the IMPACT of virtual node count. Build two rings — one with
//         `virtualNodesPerServer = 1`, one with the default 100 — assign 1000 keys
//         (`user-0` through `user-999`) on each, and print how many keys land on each
//         server. Compute the difference between the busiest and least-busy server for
//         both rings. The low-virtual-node ring should show a much bigger imbalance.
//
// TODO 3 (bonus): why does adding virtual nodes fix the imbalance instead of just placing
//         each real server on the ring once but at a "smarter" position? Write a 2-sentence
//         answer — think about what happens when a 4th server needs to be added later.
