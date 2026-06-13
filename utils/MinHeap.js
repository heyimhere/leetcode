// MinHeap — binary min-heap stored as a flat array.
//
// Heap property: every parent is smaller than its children.
// Root (index 0) is always the minimum element.
//
// Index math for node at index i:
//   left child  →  2i + 1
//   right child →  2i + 2
//   parent      →  Math.floor((i - 1) / 2)
//
// Operations:
//   push(val)  — add val, bubble up    → O(log n)
//   pop()      — remove & return min   → O(log n)
//   peek()     — return min, no remove → O(1)
//   size       — number of elements    → O(1)

class MinHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  pop() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._bubbleDown();
    }
    return min;
  }

  // after push: new node at end floats up until heap property restored
  _bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  // after pop: last node placed at root sinks down until heap property restored
  _bubbleDown() {
    let i = 0;
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
      if (smallest === i) break;
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
  }
}

module.exports = MinHeap;
