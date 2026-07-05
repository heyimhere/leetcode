// MaxHeap — binary max-heap stored as a flat array.
//
// Heap property: every parent is larger than its children.
// Root (index 0) is always the maximum element.
//
// Accepts an optional comparator: cmp(a, b) < 0 means a has higher priority
// (closer to root). Default: (a, b) => b - a (larger number = higher priority).
// Pass a custom comparator to heap pairs, objects, etc.:
//   new MaxHeap((a, b) => b[0] - a[0])  // order [freq, val] pairs by freq desc
//
// Mirror of MinHeap — same index math, same array layout, same O(log n)
// operations. Only the comparisons flip:
//   MinHeap bubbleUp:   stop when parent <= child   (parent already smaller)
//   MaxHeap bubbleUp:   stop when parent >= child   (parent already larger)
//   MinHeap bubbleDown: swap with the SMALLER child
//   MaxHeap bubbleDown: swap with the LARGER  child
//
// Index math for node at index i:
//   left child  →  2i + 1
//   right child →  2i + 2
//   parent      →  Math.floor((i - 1) / 2)
//
// Operations:
//   push(val)  — add val, bubble up    → O(log n)
//   pop()      — remove & return max   → O(log n)
//   peek()     — return max, no remove → O(1)
//   size       — number of elements    → O(1)

class MaxHeap {
  constructor(comparator = (a, b) => b - a) {
    this.heap = [];
    this.cmp = comparator;
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
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._bubbleDown();
    }
    return max;
  }

  // after push: new node at end floats up until heap property restored
  _bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.cmp(this.heap[parent], this.heap[i]) <= 0) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  // after pop: last node placed at root sinks down until heap property restored
  _bubbleDown() {
    let i = 0;
    const n = this.heap.length;
    while (true) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && this.cmp(this.heap[left], this.heap[largest]) < 0) largest = left;
      if (right < n && this.cmp(this.heap[right], this.heap[largest]) < 0) largest = right;
      if (largest === i) break;
      [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
      i = largest;
    }
  }
}

module.exports = MaxHeap;
