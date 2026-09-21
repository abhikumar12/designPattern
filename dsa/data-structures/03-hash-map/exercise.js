// 🎯 EXERCISE — two more classic hash-map interview questions.
// Copy implementation.js above this comment (or edit it directly), then:
//
// TODO 1: `groupAnagrams(words)` — group words that are anagrams of each other. Use a
//         HashMap keyed by each word's SORTED characters (e.g. "eat" and "tea" both sort to
//         "aet") — every anagram group shares the same key. Return the groups as an array of
//         arrays.
//
// TODO 2: `firstNonRepeatingChar(s)` — return the first character in a string that appears
//         exactly once (or null if none does). Use a HashMap to count occurrences in one
//         pass, then a second pass to find the first count-of-1 character.
//
// TODO 3 (bonus): implement `delete()` handling for the resize-down case — right now the map
//         only grows, never shrinks. Add a check: if load factor drops below, say, 0.2 AND
//         capacity is above some minimum, shrink the bucket array. Why might a real system
//         choose NOT to shrink eagerly (hint: think about a map that oscillates between two
//         sizes under repeated insert/delete)?
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
