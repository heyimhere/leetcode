function maValue(n, index, maxSum) {
  // code here
  let answer = 1;
  let sum = n;
  let pointerA = index;
  let pointerB = index;

  while(sum < maxSum) {
    if(pointerB - pointerA === n - 1) {
      answer += Math.floor((maxSum - sum) / n);
      break;
    }
    sum += pointerB - pointerA + 1;
    if(sum <= maxSum) answer++;
    if(pointerB < n - 1) pointerB++;
    if(pointerA > 0) pointerA--;
  }
  return answer;
}
// [2, 3, 2, 1]

console.log('max value', maxValue(6, 1, 10));
