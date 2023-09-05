const string = "MCMXCIV";
const romanToIntMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}
function romantoInt(s) {
  // code here
  let count = 0;
  for(let i = 0; i < s.length; i++) {
   romanToIntMap[s[i]] < romanToIntMap[s[i + 1]] ? count -= romanToIntMap[s[i]] : count += romanToIntMap[s[i]]; 
  }
  return count;
}

console.log('roman to int', romantoInt(string));