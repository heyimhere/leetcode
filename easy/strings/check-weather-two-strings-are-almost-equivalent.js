// const str1 = "abcdeef";
// const str2 = "abaaacc";
const str1 = "zzzyyy";
const str2 = "iiiiii";
function checkAlmostEquivalent(word1, word2) {
  // code here
  const str1map = {};
  const str2map = {};
  let equivalent = true;
  for(let i = 0; i < word1.length; i++) {
    str1map[word1[i]] ? str1map[word1[i]]++ : str1map[word1[i]] = 1;
  }
  for(let j = 0; j < word2.length; j++) {
    str2map[word2[j]] ? str2map[word2[j]]++ : str2map[word2[j]] = 1;
  }
  for(let [key, value] of Object.entries(str1map)) {
    if(str2map[key]) {
      const sub = str1map[key] - str2map[key];
      Math.abs(sub) > 3 ? equivalent = false : '';
    } else {
      str1map[key] > 3 ? equivalent = false : '';
    }
  }

  for(let [key, value] of Object.entries(str2map)) {
    if(str1map[key]) {
      const sub = str1map[key] - str2map[key];
      Math.abs(sub) > 3 ? equivalent = false : '';
    } else {
      str2map[key] > 3 ? equivalent = false : '';
    }
  }

  return equivalent;
}

console.log('check almost equivalent', checkAlmostEquivalent(str1, str2));