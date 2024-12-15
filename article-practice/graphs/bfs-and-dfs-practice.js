
const graph = {
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E'],
};


// Breath First Search using a queue
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();
  const result = [];

  while(queue.length) {
    const vertex = queue.shift();

    if(!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for(const neighbor of graph[vertex]) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}

console.log('bfs', bfs(graph, 'A'));

function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();
  const result = [];

  while(stack.length) {
    const vertex = stack.pop();

    if(!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for(const neighbor of graph[vertex]) {
        stack.push(neighbor);
      }
    }
  }

  return result;
}

console.log('dfs', dfs(graph, 'A'));
