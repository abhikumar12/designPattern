// 🎯 EXERCISE — two more classic sliding-window problems.
// Copy pattern.js above this comment (or edit it directly), then:
//
// TODO 1: `minSubarrayLen(target, nums)` — find the length of the SHORTEST contiguous
//         subarray whose sum is >= target (0 if none exists). Variable window: grow the
//         right edge, adding to a running sum; whenever the sum >= target, record the
//         window length and shrink from the LEFT (in a while loop, not if) while it's still
//         >= target, to find the shortest valid window at this right edge.
//
// TODO 2: `longestSubstringKDistinct(s, k)` — longest substring with AT MOST k distinct
//         characters. Use a Map to count characters currently in the window. Grow the right
//         edge; whenever the map has MORE than k distinct keys, shrink from the left
//         (decrementing counts, removing a key once its count hits 0) until you're back to
//         k or fewer distinct characters.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
