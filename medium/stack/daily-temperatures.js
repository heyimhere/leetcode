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
  const ans = new Array(temps.length).fill(0);
  const stack = [];

  for(let i = 0; i < temps.length; i++) {
    while(temps[i] > temps[stack[stack.length - 1]]) {
      let top = stack.pop();
      ans[top] = i - top;
    }
    stack.push(i);
  }
  return ans;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60]));                  // [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90]));                      // [1,1,0]
console.log(dailyTemperatures([90, 80, 70, 60]));                  // [0,0,0,0]
