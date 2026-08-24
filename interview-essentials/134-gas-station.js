// LC #134 — Gas Station   [Medium]   Pattern: Greedy
//
// There are n gas stations arranged in a circle. gas[i] is the fuel
// available at station i, and cost[i] is the fuel needed to travel from
// station i to station i + 1.
//
// You start with an empty tank at one of the stations. Return the index of
// the station you must start from to complete the full circuit once in the
// clockwise direction, or -1 if it is impossible.
//
// If a solution exists, it is guaranteed to be unique.
//
// Example 1:
//   Input:  gas = [1,2,3,4,5], cost = [3,4,5,1,2]
//   Output: 3
// Example 2:
//   Input:  gas = [2,3,4], cost = [3,4,3]
//   Output: -1
// Example 3:
//   Input:  gas = [5,1,2,3,4], cost = [4,4,1,5,1]
//   Output: 4
//
// Constraints:
//   n === gas.length === cost.length
//   1 <= n <= 10^5
//   0 <= gas[i], cost[i] <= 10^4

const canCompleteCircuit = (gas, cost) => {

};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // expected: 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));              // expected: -1
console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])); // expected: 4
