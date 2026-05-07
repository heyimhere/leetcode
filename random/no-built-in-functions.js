
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

/**
 * Flatten a Deeply Nested Array (Without Built-in .flat())
 * 
 * Problem Summary:
 * Given an array that may contain nested arrays at any depth, flatten it into
 * a single-level array containing all elements in order.
 * This is similar to LeetCode #2625 (Flatten Deeply Nested Array).
 * 
 * Example:
 * Input:  [1, 2, [3, [4, 5], 6], 7]
 * Output: [1, 2, 3, 4, 5, 6, 7]
 * 
 * Possible Approaches:
 * 1. Recursion with Helper Function: Use closure to accumulate results.
 *    - Time: O(n), Space: O(d) call stack where d = max depth. Clean and clear.
 * 2. Recursion with Concat: Return new arrays and concatenate results.
 *    - Time: O(n), Space: O(n) for new arrays. More functional style.
 * 3. Iterative with Stack: Use explicit stack to avoid recursion.
 *    - Time: O(n), Space: O(n). Avoids call stack overflow for very deep arrays.
 * 
 * Chosen Approach: Recursion with Helper Function
 * - Clear separation of concerns (outer function for setup, inner for recursion).
 * - Uses closure to avoid passing result array through every call.
 * - Handles any depth of nesting naturally.
 * 
 * Algorithm Steps:
 * 1. Initialize an empty result array.
 * 2. Define a helper function that iterates through an array:
 *    a. For each element, check if it's an array (using Array.isArray).
 *    b. If it's an array, recursively call helper on that nested array.
 *    c. If it's not an array, push the element to the result.
 * 3. Call the helper on the input array.
 * 4. Return the result array.
 * 
 * Why This Works:
 * - Recursion naturally handles arbitrary nesting depth.
 * - Each element is visited exactly once.
 * - The closure keeps the result array accessible without passing it around.
 * - Array.isArray correctly identifies arrays (unlike typeof which returns 'object').
 * 
 * Time Complexity: O(n) - Each element is visited exactly once.
 * Space Complexity: O(d) - Call stack depth equals maximum nesting depth.
 * 
 * Key Patterns: Recursion, Closure, Array Traversal
 * 
 * Edge Cases:
 * - Empty array: Returns [].
 * - Already flat array: Returns copy of the array.
 * - Deeply nested: Handles any depth (limited by call stack).
 * - Mixed types: Works with any element types (numbers, strings, objects, etc.).
 */

/**
 * Flattens a deeply nested array into a single-level array.
 * @param {any[]} arr - The input array (may contain nested arrays)
 * @returns {any[]} - Flattened array with all elements at one level
 */
const flatArray = (arr) => {
  const result = [];

  const flatten = (items) => {
    for (let i = 0; i < items.length; i++) {
      if (Array.isArray(items[i])) {
        // Recursively flatten nested arrays
        flatten(items[i]);
      } else {
        // Base case: push non-array elements to result
        result.push(items[i]);
      }
    }
  };

  flatten(arr);
  return result;
};

/**
 * Alternative: Recursion with concat (functional style)
 * More elegant but creates more intermediate arrays.
 */
const flatArrayConcat = (arr) => {
  let result = [];
  
  for (const item of arr) {
    if (Array.isArray(item)) {
      // Recursively flatten and concat
      result = result.concat(flatArrayConcat(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
};

/**
 * Alternative: Iterative with Stack
 * Avoids recursion, useful for very deeply nested arrays.
 */
const flatArrayIterative = (arr) => {
  const result = [];
  const stack = [...arr].reverse(); // Reverse to maintain order when popping
  
  while (stack.length > 0) {
    const item = stack.pop();
    
    if (Array.isArray(item)) {
      // Push nested items back onto stack (reversed to maintain order)
      for (let i = item.length - 1; i >= 0; i--) {
        stack.push(item[i]);
      }
    } else {
      result.push(item);
    }
  }
  
  return result;
};

// ============ Test Cases ============

// Test Case 1: Basic nested array
console.log('Test 1 - [1, 2, [3, [4, 5], 6], 7]:', flatArray([1, 2, [3, [4, 5], 6], 7]));
// Expected: [1, 2, 3, 4, 5, 6, 7]

// Test Case 2: Already flat
console.log('Test 2 - [1, 2, 3]:', flatArray([1, 2, 3]));
// Expected: [1, 2, 3]

// Test Case 3: Empty array
console.log('Test 3 - []:', flatArray([]));
// Expected: []

// Test Case 4: Deeply nested
console.log('Test 4 - [[[1]], [[2]], [[3]]]:', flatArray([[[1]], [[2]], [[3]]]));
// Expected: [1, 2, 3]

// Test Case 5: Mixed types
console.log('Test 5 - [1, "a", [true, [null]]]:', flatArray([1, 'a', [true, [null]]]));
// Expected: [1, 'a', true, null]

// Test Case 6: Verify concat version
console.log('Test 6 - Concat version:', flatArrayConcat([1, 2, [3, [4, 5], 6], 7]));
// Expected: [1, 2, 3, 4, 5, 6, 7]

// Test Case 7: Verify iterative version
console.log('Test 7 - Iterative version:', flatArrayIterative([1, 2, [3, [4, 5], 6], 7]));
// Expected: [1, 2, 3, 4, 5, 6, 7]
