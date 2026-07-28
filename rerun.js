const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let p of prices) {
    if (p < minPrice) {
      minPrice = p;
    } else {
      maxProfit = Math.max(maxProfit, p - minPrice);
    }
  }
  return maxProfit;
}

console.log('[7,1,5,3,6,4] ->', maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log('[7,6,4,3,1]   ->', maxProfit([7, 6, 4, 3, 1]));     // 0
console.log('[1,2]         ->', maxProfit([1, 2]));              // 1
console.log('[2,4,1]       ->', maxProfit([2, 4, 1]));           // 2
console.log('[3,3,3]       ->', maxProfit([3, 3, 3]));           // 0
