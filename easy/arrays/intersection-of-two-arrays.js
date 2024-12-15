const n1 = [1, 2, 2, 1];
const n2 = [2, 2];
const intersection = (nums1, nums2) => {
  const numSet1 = new Set(nums1);
  const numSet2 = new Set(nums2);
  const ans = new Set();
  for(let each of numSet1) {
    if(numSet2.has(each)) {
      ans.add(each);
    }
  }

  for(let each of numSet2) {
    if(numSet1.has(each)) {
      ans.add(each);
    }
  }

  return Array.from(ans);
};

console.log('intersection', intersection(n1, n2));
