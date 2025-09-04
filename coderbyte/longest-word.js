
const longestWord = (sen) => {
  const words = sen.match(/\b[a-zA-Z0-9]+\b/g);
  let longest = '';
  for(let word of words) {
    if(word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};

console.log('longest word', longestWord("fun#! times"));
