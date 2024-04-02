const w1 = ["ab", "c"];
const w2 = ["a", "bc"];

const arrayStringsAreEqual = function(word1, word2) {
  let first = '';
  for(let each of word1) {
    first += each;
  }
  let second = '';
  for(let item of word2) {
    second += item;
  }

  return first === second;
};

console.log('array strings are equal', arrayStringsAreEqual(w1, w2));
