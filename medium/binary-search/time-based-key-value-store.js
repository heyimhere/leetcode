// TODO: implement
// LC #981 — Time Based Key-Value Store
//
// Design a key-value store that retrieves values BY (key, timestamp).
//   set(key, value, timestamp)  — store; timestamps strictly increase per key
//   get(key, timestamp)         — return the value with the LARGEST
//                                 stored timestamp ≤ the queried one
//                                 (or "" if none)
//
// Example:
//   set("foo","bar",1)
//   get("foo",1)  → "bar"
//   get("foo",3)  → "bar"     (still the latest as of t=3)
//   set("foo","bar2",4)
//   get("foo",4)  → "bar2"
//   get("foo",5)  → "bar2"
//
// Approach (HashMap of key → sorted array of [timestamp, value]):
//   set(k, v, t):
//     map[k].push([t, v])   // timestamps already increasing per key
//
//   get(k, t):
//     arr = map[k] or null
//     if !arr → ""
//     binary search for the LAST index where arr[idx][0] <= t
//     return arr[idx][1], or "" if none
//
// Why binary search:
//   Sets per key arrive in increasing time order. So we have a sorted
//   timeline per key. "Largest ≤ t" is a classic upper-bound search.
//
// Time:  set O(1); get O(log n)
// Space: O(total sets)
//
// Edge Cases:
//   - get before any set         → ""
//   - t < earliest stored        → ""
//   - t exactly equals a stored  → return that value
//   - Repeated set of same key   → strict timestamp ordering guaranteed

class TimeMap {
  constructor() {
    // your code here
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @returns {void}
   */
  set(key, value, timestamp) {
    // your code here
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @returns {string}
   */
  get(key, timestamp) {
    // your code here
  }
}

console.log('=== LC #981 Time Based Key-Value Store ===\n');

const tm = new TimeMap();
tm.set('foo', 'bar', 1);
console.log(tm.get('foo', 1));  // Expected: 'bar'
console.log(tm.get('foo', 3));  // Expected: 'bar'
tm.set('foo', 'bar2', 4);
console.log(tm.get('foo', 4));  // Expected: 'bar2'
console.log(tm.get('foo', 5));  // Expected: 'bar2'
console.log(tm.get('missing', 1)); // Expected: ''
