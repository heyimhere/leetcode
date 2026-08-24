// Karat-style — Calendar Free Slots   [Medium]   Pattern: Intervals
//
// You are given each employee's busy intervals plus a shared work-day window
// [dayStart, dayEnd].
//
// Return the intervals during which EVERY employee is free, clipped to the
// work day. The result should be sorted and non-overlapping.
//
// Each person's own intervals are sorted, but may overlap across people.
//
// Example 1:
//   Input: calendars = [
//            [[9,10], [11,12]],
//            [[10,11]],
//            [[13,14]]
//          ], dayStart = 9, dayEnd = 17
//   Output: [[12,13],[14,17]]
//
// Example 2:
//   Input: calendars = [[]], dayStart = 9, dayEnd = 17
//   Output: [[9,17]]        (nobody is busy)
//
// Example 3:
//   Input: calendars = [[[9,17]]], dayStart = 9, dayEnd = 17
//   Output: []              (booked solid)
//
// Follow-up: given a meeting length D, return only the free slots that can
// actually fit it.

const freeSlots = (calendars, dayStart, dayEnd) => {

};

console.log(freeSlots([[[9, 10], [11, 12]], [[10, 11]], [[13, 14]]], 9, 17));
// expected: [[12,13],[14,17]]
console.log(freeSlots([[]], 9, 17));          // expected: [[9,17]]
console.log(freeSlots([[[9, 17]]], 9, 17));   // expected: []
