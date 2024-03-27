const s = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

const mostWordsFound = function(sentences) {
  let maxValue = 0;
  for(let i = 0; i < sentences.length; i++) {
    let words = sentences[i].split(' ');
    maxValue = Math.max(maxValue, words.length);
  }
  return maxValue;
};

console.log('most words found', mostWordsFound(s));
