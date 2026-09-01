const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const need = new Map();

  for (let char of s) {
    need.set(char, (need.get(char) ?? 0) + 1);
  }

  for (let char of t) {
    if (!need.has(char) || need.get(char) === 0) return false;

    need.set(char, need.get(char) - 1);
  }

  return true;
};

console.log('"anagram", "nagaram" ->', isAnagram('anagram', 'nagaram')); // true
console.log('"rat", "car"         ->', isAnagram('rat', 'car')); // false
console.log('"a", "ab"            ->', isAnagram('a', 'ab')); // false
console.log('"", ""               ->', isAnagram('', '')); // true
console.log('"aacc", "ccac"       ->', isAnagram('aacc', 'ccac')); // false
