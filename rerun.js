
const longestConsecutive = (nums) => {
  const set = new Set(nums);
  let best = 0;

  for (const num of set) {
    if (set.has(num - 1)) continue;

    let cur = num;
    let len = 1;
    while (set.has(cur + 1)) {
      cur++;
      len++;
    }

    best = Math.max(best, len);
  }

  return best;
};

const longestConsecutiveSort = (nums) => {
  if (nums.length === 0) return 0;
  const sorted = [...nums].sort((a, b) => a - b);

  let best = 1;
  let cur = 1;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) continue;
    if (sorted[i] === sorted[i - 1] + 1) {
      cur++;
    } else {
      cur = 1;
    }

    best = Math.max(best, cur);
  }

  return best;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));            // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));    // 9
console.log(longestConsecutive([]));                                 // 0
console.log(longestConsecutive([1, 2, 0, 1]));                       // 3
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); // 7 (-1..5? actually 3,4,5,6,7,8,9)

console.log(longestConsecutiveSort([100, 4, 200, 1, 3, 2]));         // 4
console.log(longestConsecutiveSort([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutiveSort([]));                              // 0
console.log(longestConsecutiveSort([1, 2, 0, 1]));                    // 3
