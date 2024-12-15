
function createNode(value, left = null, right = null) {
  return { value, left, right };
}

const tree = createNode(1,
  createNode(2,
    createNode(4),
    createNode(5)
  ),
  createNode(3,
    createNode(6),
    createNode(7)
  )
);

console.log('node', JSON.stringify(tree, null, 2));

// Using a Queue for the Breath First Search
function bfs(node) {
  if(!node) {
    return [];
  }

  const queue = [node];
  const result = [];

  while(queue.length) {
    const current = queue.shift();
    result.push(current.value);

    if(current.left) {
      queue.push(current.left);
    }

    if(current.right) {
      queue.push(current.right);
    }
  }

  return result;
}

console.log('bfs', bfs(tree));

function dfs(node) {
  if(!node) {
    return [];
  } 

  const stack = [node];
  const result = [];

  while(stack.length) {
    const current = stack.pop();
    result.push(current.value);

    if(current.right) {
      stack.push(current.right);
    }

    if(current.left) {
      stack.push(current.left);
    }
  }

  return result;
}

console.log('dfs', dfs(tree));
