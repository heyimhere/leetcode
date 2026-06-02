// TODO: implement
// LC #146 — LRU Cache
//
// Design a cache with capacity `cap` supporting O(1) average:
//   get(key)        → value (or -1 if absent)
//   put(key, value) → insert/update; if size exceeds cap, evict LEAST
//                     RECENTLY USED key.
// "Recency" is updated on both get and put.
//
// Example (cap = 2):
//   put(1, 1); put(2, 2);
//   get(1) → 1                  // 1 is now most recent
//   put(3, 3)                   // evicts key 2 (LRU)
//   get(2) → -1
//   put(4, 4)                   // evicts key 1
//   get(1) → -1
//   get(3) → 3
//   get(4) → 4
//
// Approach (doubly linked list + HashMap):
//   - HashMap: key → node reference
//   - Doubly linked list ordered by recency (head = MRU, tail = LRU)
//
//   get(k):
//     if !map.has(k) → -1
//     node = map.get(k)
//     move node to head
//     return node.value
//
//   put(k, v):
//     if map.has(k):
//       node = map.get(k); node.value = v; move node to head
//     else:
//       if map.size === cap:
//         remove tail.prev; map.delete(tail.prev.key)
//       create node; insert at head; map.set(k, node)
//
// Why doubly linked:
//   We need O(1) removal of an arbitrary node (the one being touched) AND
//   O(1) insertion at the head. Doubly linked list does both via prev/next.
//
// Alternative: JS's Map preserves insertion order, so you can implement
// LRU using JUST a Map (re-set on access). Concise but a little spooky to
// rely on. The DLL+Map version is the classic interview answer.
//
// Time:  O(1) average per op
// Space: O(cap)
//
// Edge Cases:
//   - cap = 0                          → every put evicts immediately
//   - put same key twice               → counts as one entry; updates value
//   - get on missing                   → -1, no mutation

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    // your code here
  }

  /**
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    // your code here
  }

  /**
   * @param {number} key
   * @param {number} value
   * @returns {void}
   */
  put(key, value) {
    // your code here
  }
}

console.log('=== LC #146 LRU Cache ===\n');

const c = new LRUCache(2);
c.put(1, 1);
c.put(2, 2);
console.log(c.get(1));     // Expected: 1
c.put(3, 3);
console.log(c.get(2));     // Expected: -1
c.put(4, 4);
console.log(c.get(1));     // Expected: -1
console.log(c.get(3));     // Expected: 3
console.log(c.get(4));     // Expected: 4
