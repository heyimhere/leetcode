// LC #253 — Meeting Rooms II   [Medium]   Pattern: Intervals
//
// Given an array of meeting time intervals where intervals[i] = [start, end],
// return the MINIMUM number of conference rooms required to hold them all.
//
// A meeting that ends exactly when another begins does not need a second
// room — the endpoints may touch.
//
// Example 1:
//   Input:  intervals = [[0,30],[5,10],[15,20]]
//   Output: 2
// Example 2:
//   Input:  intervals = [[7,10],[2,4]]
//   Output: 1
// Example 3:
//   Input:  intervals = [[1,5],[2,6],[3,7]]
//   Output: 3
//
// Constraints:
//   1 <= intervals.length <= 10^4
//   0 <= start < end <= 10^6

const minMeetingRooms = (intervals) => {

};

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // expected: 2
console.log(minMeetingRooms([[7, 10], [2, 4]]));             // expected: 1
console.log(minMeetingRooms([[1, 5], [2, 6], [3, 7]]));      // expected: 3
