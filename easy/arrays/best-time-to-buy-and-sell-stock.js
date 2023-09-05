const p = [7,1,5,3,6,4];
function maxProfit(prices) {
  // time limit exceeded :/
  // let money = 0;
  // for(let i = 0; i < prices.length; i++) {
  //   for(let j = i; j < prices.length; j++) {
  //     if(prices[i] < prices[j]) {
  //       let sub = prices[i] - prices[j];
  //       money = Math.max(money, Math.abs(sub));
  //     }
  //   }
  // }
  // return money;

  let left = 0;
  let right = 1;
  let max = 0;
  while(right < prices.length) {
    if(prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = Math.max(max, sub);
    } else {
      left = right;
    }
    right++
  }
  return max;
}

console.log('max profit', maxProfit(p));