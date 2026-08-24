// Karat-style — Meeting Rooms Part 2: Minimum Conference Rooms   [Medium]   Pattern: Intervals
//
// Part 1 of this question asks whether ONE person can attend every meeting.
// The follow-up, asked almost every time, is this one.
//
// Given an array of meeting intervals [start, end], return the MINIMUM
// number of conference rooms needed so that every meeting can run.
//
// A meeting ending exactly when another starts does not need its own room.
//
// Example 1:
//   Input:  [[0,30],[5,10],[15,20]]
//   Output: 2
// Example 2:
//   Input:  [[7,10],[2,4]]
//   Output: 1
// Example 3:
//   Input:  [[1,5],[2,3],[4,6]]
//   Output: 2
// Example 4:
//   Input:  []
//   Output: 0
//
// Follow-up: return WHICH meetings land in which room, not just the count.

const minRooms = (intervals) => {

};

console.log(minRooms([[0, 30], [5, 10], [15, 20]])); // expected: 2
console.log(minRooms([[7, 10], [2, 4]]));             // expected: 1
console.log(minRooms([[1, 5], [2, 3], [4, 6]]));      // expected: 2
console.log(minRooms([]));                             // expected: 0
