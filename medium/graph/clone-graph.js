// TODO: implement
// LC #133 — Clone Graph
//
// Given a reference to a node in a CONNECTED undirected graph, return a
// DEEP COPY of the entire graph. Each node has `val` and `neighbors`.
//
// Approach (DFS or BFS with visited map):
//   visited: Map<originalNode, clonedNode>
//
//   DFS:
//     clone(node):
//       if node null → null
//       if visited has node → return visited.get(node)
//       copy = new Node(node.val)
//       visited.set(node, copy)
//       for nb of node.neighbors:
//         copy.neighbors.push(clone(nb))
//       return copy
//
// Why visited map:
//   The graph may have cycles. The map prevents infinite recursion AND
//   gives us O(1) "have I cloned this yet?" lookup for the neighbor
//   relationship.
//
// BFS variant:
//   queue starts with [node]; visited has [node, copy] up front. While
//   queue not empty: pop n, walk its neighbors, clone any unseen one and
//   enqueue it; in either case, attach the clone to n's clone neighbors.
//
// Time:  O(V + E)
// Space: O(V) for the visited map
//
// Edge Cases:
//   - null input            → null
//   - Single node, no neighbors → clone of just that node
//   - Self-loop             → clone correctly points to itself (mapped via visited)
//   - Disconnected graph    → problem says connected; would only clone one component

class GraphNode {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

/**
 * @param {GraphNode | null} node
 * @returns {GraphNode | null}
 */
const cloneGraph = (node) => {
  // your code here
};

console.log('=== LC #133 Clone Graph ===\n');

// Build the classic LC example:
// 1 -- 2
// |    |
// 4 -- 3
const a = new GraphNode(1);
const b = new GraphNode(2);
const c = new GraphNode(3);
const d = new GraphNode(4);
a.neighbors = [b, d];
b.neighbors = [a, c];
c.neighbors = [b, d];
d.neighbors = [a, c];

const cloned = cloneGraph(a);
console.log('Test 1 — clone has correct vals + neighbor count:');
console.log(cloned?.val, cloned?.neighbors.map(n => n.val));
// Expected: 1 [2, 4]

console.log('\nTest 2 — clone is a NEW object:');
console.log(cloned !== a);
// Expected: true

console.log('\nTest 3 — null:');
console.log(cloneGraph(null));
// Expected: null
