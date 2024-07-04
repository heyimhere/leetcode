const op = ["5", "2", "C", "D", "+"];

const calPoints = function(operations) {
  const ans = [];
  for(let i = 0; i < operations.length; i++) {
    if(operations[i] === '+') {
      let sum = Number(ans[ans.length - 1]) + Number(ans[ans.length - 2]);
      ans.push(sum);
    } else if(operations[i] === 'D') {
      let timesTwo = ans[ans.length - 1] * 2;
      ans.push(timesTwo);
    } else if(operations[i] === 'C') {
      ans.pop(ans[ans.length - 1]);
    } else {
      ans.push(Number(operations[i]));
    }
  }

  let total = ans.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0);

  return total;
};

console.log('calculate points', calPoints(op));
