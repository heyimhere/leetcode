const largestRectangleArea = (heights) => {
  const stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    const h = heights[i];
    let start = i;

    while (stack.length > 0 && stack[stack.length - 1][1] > h) {
      const [idx, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - idx));
      start = idx;
    }

    stack.push([start, h]);
  }

  const n = heights.length;
  for (const [idx, height] of stack) {
    maxArea = Math.max(maxArea, height * (n - idx));
  }

  return maxArea;
};

console.log('[2,1,5,6,2,3] ->', largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log('[2,4]         ->', largestRectangleArea([2, 4]));             // 4
console.log('[2,1,2]       ->', largestRectangleArea([2, 1, 2]));         // 3
console.log('[1,1,1,1]     ->', largestRectangleArea([1, 1, 1, 1]));      // 4
console.log('[5]           ->', largestRectangleArea([5]));               // 5
