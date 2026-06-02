// TODO: implement
// LC #380 — Insert Delete GetRandom O(1)
//
// Design a data structure supporting average O(1):
//   insert(val)    — true if inserted (was absent), else false
//   remove(val)    — true if removed (was present), else false
//   getRandom()    — return a uniformly random element from the set
//
// Example:
//   r.insert(1);    // true
//   r.remove(2);    // false
//   r.insert(2);    // true
//   r.getRandom();  // 1 or 2 with equal probability
//   r.remove(1);    // true
//   r.insert(2);    // false (already present)
//   r.getRandom();  // 2
//
// Approach (parallel array + index map):
//   list: number[]           — values in insertion order, but freely shuffled
//   idx:  Map<number, number> — value → its index in `list`
//
//   insert(v):
//     if idx.has(v) → return false
//     idx.set(v, list.length)
//     list.push(v)
//     return true
//
//   remove(v):
//     if !idx.has(v) → return false
//     i = idx.get(v); last = list[list.length - 1]
//     list[i] = last; idx.set(last, i)
//     list.pop(); idx.delete(v)
//     return true
//
//   getRandom():
//     return list[Math.floor(Math.random() * list.length)]
//
// Why "swap with last":
//   Removing from the middle of an array is O(n). Replacing the slot with
//   the last element and shrinking by one is O(1), and the map keeps every
//   value's index up to date.
//
// Why the Map:
//   getRandom needs an indexable, contiguous collection (the array). The
//   Map maintains value→index for O(1) insert/remove.
//
// Time:  O(1) average per op
// Space: O(n)
//
// Edge Cases:
//   - remove when empty       → false
//   - getRandom when empty    → spec says won't be called
//   - duplicate inserts       → return false; structure unchanged
//   - remove the last element → no swap needed; just pop

class RandomizedSet {
  constructor() {
    // your code here
  }

  /**
   * @param {number} val
   * @returns {boolean}
   */
  insert(val) {
    // your code here
  }

  /**
   * @param {number} val
   * @returns {boolean}
   */
  remove(val) {
    // your code here
  }

  /**
   * @returns {number}
   */
  getRandom() {
    // your code here
  }
}

console.log('=== LC #380 Insert Delete GetRandom O(1) ===\n');

const r = new RandomizedSet();
console.log(r.insert(1));    // Expected: true
console.log(r.remove(2));    // Expected: false
console.log(r.insert(2));    // Expected: true
console.log(r.getRandom());  // Expected: 1 or 2
console.log(r.remove(1));    // Expected: true
console.log(r.insert(2));    // Expected: false
console.log(r.getRandom());  // Expected: 2
