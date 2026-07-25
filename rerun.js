
const trap = (height) => {
  let l = 0;
  let r = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let total = 0;

  while (l < r) {
    if (height[l] < height[r]) {
      if (height[l] >= leftMax) {
        leftMax = height[l];
      } else {
        total += leftMax - height[l];
      }
      l++;
    } else {
      if (height[r] >= rightMax) {
        rightMax = height[r];
      } else {
        total += rightMax - height[r];
      }
      r--;
    }
  }
  return total;
}

console.log('[0,1,0,2,1,0,1,3,2,1,2,1] ->', trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log('[4,2,0,3,2,5]             ->', trap([4, 2, 0, 3, 2, 5]));                     // 9
console.log('[4,2,3]                   ->', trap([4, 2, 3]));                              // 1
console.log('[2,0,2]                   ->', trap([2, 0, 2]));                              // 2
console.log('[]                        ->', trap([]));                                     // 0
