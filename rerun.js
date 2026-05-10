// LC #739 - Daily Temperatures
// Difficulty: Medium | Pattern: Monotonic Stack
//
// For each day, find how many days until a warmer temperature.
// Return an array of those wait times (0 if no warmer day ahead).
//
// HINT: Use a stack. As you loop, ask: "does today's temp beat
// anything waiting on the stack?" If yes, resolve it.
// Think about what to store in the stack — the index is more useful than the temp itself.

const dailyTemperatures = (temps) => {
  // your solution here
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60]));                  // [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90]));                      // [1,1,0]
console.log(dailyTemperatures([90, 80, 70, 60]));                  // [0,0,0,0]
