const isAnagram = (s, t) => {
  if(s.length !== t.length) return false;
  const count = new Map();

  for(let char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for(const char of t) {
    if(!count.has(char)) return false;
    count.set(char, count.get(char) - 1);
    if(count.get(char) < 0) return false;
  }

  return true;
}

console.log('is anagram', isAnagram("racecar", "carrace"));
