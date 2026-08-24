// LC #133 — Clone Graph   [Medium]   Pattern: Graphs
//
// Given a reference to a node in a CONNECTED undirected graph, return a deep
// copy of the whole graph.
//
// Each node holds a value and a list of its neighbors. Every node in the
// copy must be a new object whose neighbors point only at copied nodes.
//
// The graph is given below as an adjacency list, where adjList[i] holds the
// neighbors of the node with value i + 1.
//
// Example 1:
//   Input:  adjList = [[2,4],[1,3],[2,4],[1,3]]
//   Output: [[2,4],[1,3],[2,4],[1,3]]
// Example 2:
//   Input:  adjList = [[]]
//   Output: [[]]        (one node, no neighbors)
// Example 3:
//   Input:  adjList = []
//   Output: []          (empty graph, node is null)
//
// Constraints:
//   The number of nodes is in the range [0, 100].
//   1 <= Node.val <= 100, and Node.val is unique per node.
//   No repeated edges and no self-loops. The graph is connected.

class GraphNode {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

// adjList[i] lists the neighbors of the node valued i + 1.
const buildGraph = (adjList) => {
  if (adjList.length === 0) return null;
  const nodes = adjList.map((_, i) => new GraphNode(i + 1));
  adjList.forEach((neighbors, i) => {
    nodes[i].neighbors = neighbors.map((v) => nodes[v - 1]);
  });
  return nodes[0];
};

// Walks the clone and rebuilds the adjacency list for comparison.
const serializeGraph = (node) => {
  if (!node) return [];
  const seen = new Map();
  const stack = [node];
  while (stack.length > 0) {
    const cur = stack.pop();
    if (seen.has(cur.val)) continue;
    seen.set(cur.val, cur.neighbors.map((n) => n.val));
    for (const n of cur.neighbors) stack.push(n);
  }
  return [...seen.keys()].sort((a, b) => a - b).map((k) => seen.get(k).slice().sort((a, b) => a - b));
};

const cloneGraph = (node) => {

};

console.log(serializeGraph(cloneGraph(buildGraph([[2, 4], [1, 3], [2, 4], [1, 3]]))));
// expected: [[2,4],[1,3],[2,4],[1,3]]
console.log(serializeGraph(cloneGraph(buildGraph([[]])))); // expected: [[]]
console.log(serializeGraph(cloneGraph(buildGraph([]))));   // expected: []
