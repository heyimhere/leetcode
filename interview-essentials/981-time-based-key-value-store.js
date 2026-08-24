// LC #981 — Time Based Key-Value Store   [Medium]   Pattern: Binary Search / Design
//
// Design a key-value store that also records a timestamp with every write,
// and can look up the value a key held at (or before) a given time.
//
// Implement the TimeMap class:
//   TimeMap()                  initializes the store
//   set(key, value, timestamp) stores key -> value at the given timestamp
//   get(key, timestamp)        returns the value set for key at the LARGEST
//                              timestamp_prev <= timestamp. If there is no
//                              such write, return "".
//
// All set calls for a given key arrive with strictly increasing timestamps.
//
// Example:
//   set("foo", "bar", 1)
//   get("foo", 1)  -> "bar"
//   get("foo", 3)  -> "bar"   (only write so far is at t=1)
//   set("foo", "bar2", 4)
//   get("foo", 4)  -> "bar2"
//   get("foo", 5)  -> "bar2"
//
// Constraints:
//   1 <= key.length, value.length <= 100
//   key and value consist of lowercase letters and digits.
//   1 <= timestamp <= 10^7
//   At most 2 * 10^5 calls will be made to set and get.

class TimeMap {
  constructor() {

  }

  set(key, value, timestamp) {

  }

  get(key, timestamp) {

  }
}

const tm = new TimeMap();
tm.set('foo', 'bar', 1);
console.log(tm.get('foo', 1)); // expected: "bar"
console.log(tm.get('foo', 3)); // expected: "bar"
tm.set('foo', 'bar2', 4);
console.log(tm.get('foo', 4)); // expected: "bar2"
console.log(tm.get('foo', 5)); // expected: "bar2"
console.log(tm.get('nope', 1)); // expected: ""
