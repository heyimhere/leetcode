// LC #739 — Daily Temperatures
//
// Given an array `temperatures` of daily temps, return an array `answer` where
// answer[i] is the NUMBER OF DAYS you have to wait after day i until a WARMER
// temperature. If no future day is warmer, answer[i] = 0.
//
// Examples:
//   [73,74,75,71,69,72,76,73] -> [1,1,4,2,1,1,0,0]
//   [30,40,50,60]             -> [1,1,1,0]   (each next day is warmer)
//   [30,60,90]                -> [1,1,0]
//   [90,80,70]                -> [0,0,0]      (never gets warmer)
//
// Walkthrough of [73,74,75,71,69,72,76,73]:
//   i=0 (73): waits 1 day for 74            -> 1
//   i=1 (74): waits 1 day for 75            -> 1
//   i=2 (75): 71,69,72 all cooler; 76 on i=6 -> 4
//   i=3 (71): waits 2 days for 72 (i=5)     -> 2
//   i=4 (69): waits 1 day for 72            -> 1
//   i=5 (72): waits 1 day for 76            -> 1
//   i=6 (76): nothing warmer after          -> 0
//   i=7 (73): last day                      -> 0
//
// Intuition:
//   The brute force is: for each day, scan forward until you find a warmer day.
//   That's O(n^2) and re-scans the same cooler days over and over.
//
//   Key observation: as we walk left->right, a day is still "waiting" for its
//   warmer day until we actually see one. Those waiting days form a sequence
//   that is DECREASING in temperature (a warmer day would have already resolved
//   the cooler ones before it). That decreasing sequence of unresolved days is
//   exactly a MONOTONIC STACK.
//
//   So we keep a stack of indices whose answer is not yet known, temperatures
//   strictly decreasing from bottom to top. When today's temp arrives, it may be
//   the "warmer day" that several waiting days were hoping for — specifically
//   every day on top of the stack that is COOLER than today. Pop each one and its
//   wait is (today's index - that day's index). Then push today; it now waits.
//
//   Why it's O(n): each index is pushed once and popped at most once. Every
//   comparison either resolves a day (pop, never revisited) or stops the loop.
//
// Approach (monotonic decreasing stack of INDICES):
//   - answer = array of 0s, length n   // default 0 = "never got warmer"
//   - stack = []                        // indices of days still waiting
//   - for i in 0..n-1:
//       while stack not empty AND temperatures[i] > temperatures[top]:
//           j = stack.pop()
//           answer[j] = i - j           // days waited
//       stack.push(i)
//   - return answer
//
//   Anything left on the stack at the end keeps its default 0 (no warmer day).
//
// Why indices and not temps on the stack:
//   The answer is a DISTANCE in days, so we need the index to compute i - j. We
//   read the temperature via temperatures[stack-top] when comparing.
//
// Complexity:
//   Time:  O(n) — each index pushed once, popped at most once; the while loop's
//                 total pops across the whole run is bounded by n.
//   Space: O(n) — the stack holds a strictly decreasing run of indices; worst
//                 case is a fully decreasing input ([90,80,70,...]) where nothing
//                 ever pops and all n indices sit on the stack at once.

const dailyTemperatures = (temperatures) => {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = []; // indices of days awaiting a warmer day (temps decreasing)

  for (let i = 0; i < n; i++) {
    // Today may resolve every cooler day still waiting on top of the stack.
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
