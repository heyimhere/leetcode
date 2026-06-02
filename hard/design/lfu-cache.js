// TODO: implement
// LC #460 — LFU Cache
//
// Design a Least-Frequently-Used cache with capacity `cap`:
//   get(key)         → value or -1; ALSO increments use-frequency
//   put(key, value)  → insert/update; if full, EVICT the LFU key. Ties are
//                       broken by LRU (least recently used).
//
// Example (cap = 2):
//   put(1,1); put(2,2);
//   get(1)        → 1     // freq of 1: 1→2
//   put(3,3)      → evicts key 2 (freq 1, lower than key 1's freq 2)
//   get(2)        → -1
//   get(3)        → 3     // freq of 3: 1→2
//   put(4,4)      → ties between 1 and 3 at freq 2; evict the LRU among them
//   get(1)        → 1 or -1 (depending on use order)
//
// Approach (HashMap of key, HashMap of freq → doubly-linked-list of keys,
//           and minFreq tracker):
//
//   keyToNode:  Map<key, listNode>      (node has key, value, freq, prev/next)
//   freqToList: Map<freq, DoublyLinkedList>   (head = MRU, tail = LRU)
//   minFreq:    smallest freq present
//
//   get(key):
//     if not present → -1
//     bump node's freq up by 1 (remove from current list, push to new freq list)
//     if old list now empty and old freq === minFreq → minFreq++
//     return value
//
//   put(key, value):
//     if cap === 0 → no-op
//     if key already present:
//       update value; bump freq (same as get)
//       return
//     if size === cap:
//       evict the TAIL of freqToList[minFreq]; delete from keyToNode
//     insert new node at freq=1; minFreq = 1
//
// Why doubly linked list per freq:
//   At each freq we need O(1) "remove arbitrary node" AND O(1) "evict
//   oldest" — exactly a DLL with head/tail.
//
// Why a `minFreq` tracker:
//   Eviction always picks the LFU bucket. Without it we'd scan all freqs.
//
// Time:  O(1) average per op
// Space: O(cap)
//
// Edge Cases:
//   - cap = 0                   → put has no effect; get returns -1
//   - put same key twice        → update value; bump freq
//   - All ties on freq          → LRU within that bucket wins eviction

class LFUCache {
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

console.log('=== LC #460 LFU Cache ===\n');

const c = new LFUCache(2);
c.put(1, 1); c.put(2, 2);
console.log(c.get(1));   // Expected: 1
c.put(3, 3);             // evicts key 2
console.log(c.get(2));   // Expected: -1
console.log(c.get(3));   // Expected: 3
c.put(4, 4);             // evicts the LRU of the tied freq pair
console.log(c.get(1));   // Expected: -1 or 1 depending on eviction
console.log(c.get(3));   // Expected: 3 or -1
console.log(c.get(4));   // Expected: 4
