const maxArea = (height) => {
  let l = 0;
  let r = height.length - 1;
  let best = 0;

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    best = Math.max(best, area);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return best;
}

console.log('[1,8,6,2,5,4,8,3,7] ->', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log('[1,1]               ->', maxArea([1, 1]));                       // 1
console.log('[4,3,2,1,4]         ->', maxArea([4, 3, 2, 1, 4]));              // 16
console.log('[1,2,1]             ->', maxArea([1, 2, 1]));                    // 2
console.log('[2,3,4,5,18,17,6]   ->', maxArea([2, 3, 4, 5, 18, 17, 6]));      // 17
