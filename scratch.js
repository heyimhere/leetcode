const dailyTemperatures = (temperatures) => {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  return answer;
};

console.log('[73,74,75,71,69,72,76,73] ->', dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log('[30,40,50,60]             ->', dailyTemperatures([30, 40, 50, 60]));                   // [1,1,1,0]
console.log('[30,60,90]                ->', dailyTemperatures([30, 60, 90]));                        // [1,1,0]
console.log('[90,80,70]                ->', dailyTemperatures([90, 80, 70]));                        // [0,0,0]
