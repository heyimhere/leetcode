
const containsDuplicate = (nums) => {
  const seen = new Set();

  for(let num of nums) {
    if(seen.has(num)) return true;
    seen.add(num);
  }

  return false;
};

console.log('contains duplicate', containsDuplicate([1, 3, 2, 4]));
