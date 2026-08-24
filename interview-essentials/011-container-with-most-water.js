// LC #11 — Container With Most Water   [Medium]   Pattern: Two Pointers
//
// You are given an array height of length n, where height[i] is the height
// of a vertical line drawn at x-coordinate i.
//
// Pick two lines that, together with the x-axis, form a container. Return
// the maximum amount of water such a container can hold.
//
// The container cannot be tilted — its water level is capped by the SHORTER
// of the two lines, and its width is the distance between their indices.
//
// Example 1:
//   Input:  height = [1,8,6,2,5,4,8,3,7]
//   Output: 49       (lines at index 1 and 8: min(8,7) * (8-1) = 49)
// Example 2:
//   Input:  height = [1,1]
//   Output: 1
//
// Constraints:
//   n === height.length
//   2 <= n <= 10^5
//   0 <= height[i] <= 10^4

const maxArea = (height) => {

};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // expected: 49
console.log(maxArea([1, 1]));                       // expected: 1
