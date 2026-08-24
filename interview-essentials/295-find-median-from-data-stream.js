// LC #295 — Find Median from Data Stream   [Hard]   Pattern: Heap / Design
//
// The median is the middle value of an ordered list. When the list has an
// even number of elements, the median is the average of the two middle
// values.
//
// Design a structure that accepts a stream of integers and can report the
// median of everything seen so far.
//
// Implement the MedianFinder class:
//   MedianFinder()     initializes the object
//   addNum(num)        adds num to the stream
//   findMedian()       returns the median of all elements added so far
//
// Example:
//   addNum(1); addNum(2)
//   findMedian()  -> 1.5
//   addNum(3)
//   findMedian()  -> 2.0
//
// Constraints:
//   -10^5 <= num <= 10^5
//   findMedian is only called after at least one addNum.
//   At most 5 * 10^4 calls will be made in total.

class MedianFinder {
  constructor() {

  }

  addNum(num) {

  }

  findMedian() {

  }
}

const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // expected: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // expected: 2
