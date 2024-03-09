const w = ["leet", "code"];
const s = "e";

const findWordsContaining = function(words, x) {
  // code here
  let ans = [];
  for(let i = 0; i < words.length; i++) {
    if(words[i].includes(x)) {
      ans.push(i);
    }
  }
  return ans;
};

console.log('find words containing', findWordsContaining(w, s));
