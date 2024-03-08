const acc = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5]
];

const maximumWealth = function(accounts) {
  // code here
  let isMax = 0;
  for(let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for(let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    isMax = Math.max(isMax, sum);
  }
  return isMax;
};

console.log('maximum wealth', maximumWealth(acc));
