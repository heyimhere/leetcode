
// reverse a string 
const reverseString = (s) => {
  let result = '';
  for(let i = s.length -1; i >= 0; i--) {
    result += s[i];
  }
  return result;
}

console.log('reverse string', reverseString('hello'));

// palindrome check
const isPalindrome = (s) => {
  let left = 0, right = s.length -1;
  while(left < right) {
    if(s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log('isPalindrome', isPalindrome('racecar'));

// find the maximum number in an array
const findMax = (arr) => {
  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log('findMax', findMax([2, 4, 1, 5, 10]));

// sum of all elements in an array
const sumArray = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log('sumArray', sumArray([2, 3, 4]));

// count occurences of a character in a string 
const countChar = (s, char) => {
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === char) {
      count++;
    }
  }
  return count;
}

console.log('countChar', countChar('racecar', 'r'));

// fizzbuzz 
const fizzbuzz = (n) => {
  for(let i = 0; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if(i % 3 === 0) {
      console.log('fizz');
    } else if(i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

// console.log('fizzbuzz', fizzbuzz(20));

// find the first non repeating character
const firstUniqueChar = (s) => {
  for(let i = 0; i < s.length; i++) {
    let count = 0;
    for(let j = 0; j < s.length; j++) {
      if(s[i] === s[j]) count++;
    }
    if(count === 1) return s[i];
  }
  return null;
}

console.log('firstUniqueChar', firstUniqueChar('rrrraab'));

const flatArray = (arr) => {
  let ans = [];

  const helperArray = (item) => {
    for(let i = 0; i < item.length; i++) {
      if(Array.isArray(item[i])) {
        helperArray(item[i]);
      } else {
        ans.push(item[i]);
      }
    }
  }

  helperArray(arr);
  return ans;
}

console.log('flat array', flatArray([1, 2, [3, [4, 5], 6], 7]));
