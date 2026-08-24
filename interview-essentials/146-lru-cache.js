// LC #146 — LRU Cache   [Medium]   Pattern: Linked List / Design
//
// Design a fixed-capacity cache that evicts the LEAST RECENTLY USED entry
// when it overflows. Both operations must run in constant average time.
//
// Implement the LRUCache class:
//   LRUCache(capacity)  initializes the cache with a positive capacity
//   get(key)            returns the value for key, or -1 if not present
//   put(key, value)     inserts or updates key. If this pushes the size past
//                       capacity, evict the least recently used key.
//
// Both get and put count as "using" a key.
//
// Example:
//   LRUCache(2)
//   put(1,1); put(2,2)
//   get(1)    -> 1
//   put(3,3)            // evicts key 2
//   get(2)    -> -1
//   put(4,4)            // evicts key 1
//   get(1)    -> -1
//   get(3)    -> 3
//   get(4)    -> 4
//
// Constraints:
//   1 <= capacity <= 3000
//   0 <= key <= 10^4
//   0 <= value <= 10^5
//   At most 2 * 10^5 calls will be made to get and put.

class LRUCache {
  constructor(capacity) {

  }

  get(key) {

  }

  put(key, value) {

  }
}

const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // expected: 1
lru.put(3, 3);
console.log(lru.get(2)); // expected: -1
lru.put(4, 4);
console.log(lru.get(1)); // expected: -1
console.log(lru.get(3)); // expected: 3
console.log(lru.get(4)); // expected: 4
