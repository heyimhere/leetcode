const as = "11";
const bs = "1";
function addBinary(a, b) {
  // code here
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
}

console.log('add binary', addBinary(as, bs));
