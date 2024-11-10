const str = 'abccccdd';



// hashtable
const longestPalindrome = (s) => {
  const hashmap = new Map();
  let ans = 0;

  for(let each of s) {
    hashmap.set(each, (hashmap.get(each) || 0) + 1);
    if(hashmap.get(each) % 2 === 0) {
      ans += 2;
    }
  }

  return s.length > ans ? ans + 1 : ans;
};

console.log('longest palindrome', longestPalindrome(str));
