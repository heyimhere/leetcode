const d = [9]; 
function plusOne(digits) {
  // code here
  for(let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    if(digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
}

console.log('plus one', plusOne(d));
