const o = ["--X", "X++", "X++"];
const finalValueAfterOperations = function(operations) {
  let total = 0;
  for(let i = 0; i < operations.length; i++) {
    if(operations[i] === "X++" || operations[i] === "++X") {
      total += 1;
    } else {
      total -= 1;
    }
  }
  return total;
};

console.log('final value after operations', finalValueAfterOperations(o));
