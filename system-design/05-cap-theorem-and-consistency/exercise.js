// 🎯 EXERCISE — go beyond "pure CP or pure AP" with quorum-based consistency.
// Copy simulate.js above this comment (or just edit simulate.js directly), then:
//
// TODO 1: implement a `QuorumStore` with N nodes, a write quorum W, and a read quorum R.
//         `write(key, value)` succeeds once at least W nodes have the value.
//         `read(key)` reads from R nodes and returns the value with the HIGHEST version
//         number seen (track a version counter per key). This is the Dynamo-style approach:
//         you tune W and R per your consistency needs instead of being locked into CP or AP.
//
// TODO 2: show that when `W + R > N` (e.g. N=3, W=2, R=2), a read is GUARANTEED to overlap
//         with the most recent write's quorum — so it always sees the latest value. Then
//         show that when `W + R <= N` (e.g. W=1, R=1), a read CAN miss the latest write
//         (simulate this by writing to nodes [0] only, then reading from node [2] only).
//
// TODO 3 (bonus): what W/R combination would you pick for a "like" counter on a social post
//         (where losing a stray like under heavy load is fine) vs. a bank account balance
//         (where it's never fine)? Justify each in one sentence.
