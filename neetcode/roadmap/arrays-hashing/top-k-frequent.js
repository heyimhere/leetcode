
const topKFrequent = (nums, k) => {
  const count = new Map();

  for(let each of nums) {
    count.set(each, (count.get(each) || 0) + 1);
  }

  const sorted = Array.from(count).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map(([num, val]) => num);
};

console.log('top k frequent', topKFrequent([1, 1, 1, 2, 2, 3], 2));
