// LC #739 — Daily Temperatures   [Medium]   Pattern: Stack
//
// Given an array temperatures of daily temperatures, return an array answer
// where answer[i] is the number of days you have to wait after day i to get
// a WARMER temperature.
//
// If no future day is warmer, answer[i] is 0.
//
// Example 1:
//   Input:  temperatures = [73,74,75,71,69,72,76,73]
//   Output: [1,1,4,2,1,1,0,0]
// Example 2:
//   Input:  temperatures = [30,40,50,60]
//   Output: [1,1,1,0]
// Example 3:
//   Input:  temperatures = [30,60,90]
//   Output: [1,1,0]
//
// Constraints:
//   1 <= temperatures.length <= 10^5
//   30 <= temperatures[i] <= 100

const dailyTemperatures = (temperatures) => {

};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // expected: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60]));                  // expected: [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90]));                      // expected: [1,1,0]
