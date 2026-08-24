// LC #138 — Copy List with Random Pointer   [Medium]   Pattern: Linked List
//
// A linked list of length n is given, where each node holds an extra random
// pointer that may point to ANY node in the list, or to null.
//
// Build a DEEP COPY of the list: n brand-new nodes with the same values,
// wired so that next and random pointers of the copy point at copied nodes,
// never at nodes from the original list.
//
// Return the head of the copy.
//
// The list is represented below as an array of [val, randomIndex] pairs,
// where randomIndex is null when random points to null.
//
// Example 1:
//   Input:  [[7,null],[13,0],[11,4],[10,2],[1,0]]
//   Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Example 2:
//   Input:  [[1,1],[2,1]]
//   Output: [[1,1],[2,1]]
// Example 3:
//   Input:  []
//   Output: []
//
// Constraints:
//   0 <= n <= 1000
//   -10^4 <= Node.val <= 10^4
//   Node.random is null or points to a node in the list.

class RandomNode {
  constructor(val = 0, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

// arr is [[val, randomIndex], ...] with randomIndex null for no random.
const buildRandomList = (arr) => {
  if (arr.length === 0) return null;
  const nodes = arr.map(([val]) => new RandomNode(val));
  arr.forEach(([, randomIndex], i) => {
    nodes[i].next = nodes[i + 1] || null;
    nodes[i].random = randomIndex === null ? null : nodes[randomIndex];
  });
  return nodes[0];
};

// Serializes back to [[val, randomIndex], ...] for easy comparison.
const serializeRandomList = (head) => {
  const nodes = [];
  for (let cur = head; cur; cur = cur.next) nodes.push(cur);
  const indexOf = new Map(nodes.map((n, i) => [n, i]));
  return nodes.map((n) => [n.val, n.random === null ? null : indexOf.get(n.random)]);
};

const copyRandomList = (head) => {

};

console.log(serializeRandomList(copyRandomList(buildRandomList([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]))));
// expected: [[7,null],[13,0],[11,4],[10,2],[1,0]]
console.log(serializeRandomList(copyRandomList(buildRandomList([[1, 1], [2, 1]]))));
// expected: [[1,1],[2,1]]
console.log(serializeRandomList(copyRandomList(buildRandomList([]))));
// expected: []
