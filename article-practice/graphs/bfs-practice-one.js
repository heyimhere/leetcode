
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const childNode = new Node(value);
    this.children.push(childNode);
    return childNode; 
  }
}

const root = new Node(1);

root.addChild(2);
root.addChild(3);
const child1 = root.addChild(4);
child1.addChild(5);

console.log('node', JSON.stringify(root, null, 2));

const depthFirstSearch = (root) => {
  const results = [];

  const queue = [root];
  while(queue.length > 0) {
    let current = queue.shift();
    if(current === null) continue;
    results.push(current.value);

    for(each of current.children) {
      queue.push(each);
    }
  }

  return results;
}

console.log('depthFirstSearch', depthFirstSearch(root));
