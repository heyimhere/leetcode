const h = [1, 2, 2, 1];
// const h = [1];

// function isPalindrome(head) {
//   // code
//   let left = 0;
//   let right = head.length - 1;
//   let result = false;
//   if(head.length % 2 !== 0) {
//     console.log('divisible by 2')
//     return result;
//   }   
//   while(left <= right) {
//     console.log('right', head[right], 'left', head[left]);
//     if(head[left] === head[right]) {
//       result = true;
//       left++
//       right--
//     } else {
//       return result = false
//     }
//   }
//   
//   return result;
// }

function isPalindrome(head) {
  let node = head;
  let vode = head;
  let flag = true;
  backtrack(node);
  function backtrack(node) {
    node.next && backtrack(node.next);
    if(node.val !== vode.val) flag = false;
    vode = vode.next;
  }
  return flag;
}

console.log('is palindrome', isPalindrome(h));
