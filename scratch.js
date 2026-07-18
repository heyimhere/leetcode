const longestConsecutive = (nums) => {
  const set = new Set(nums);
  let best = 0;

  for (let num of set) {
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
}

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
