const arrOfStrings = ["flower","flow","flight"];
function longestCommonPrefix(strs) {
  // code here
  const results = strs.reduce((acc, curr) => {
    let i = 0;
    while(acc[i] && curr[i] && acc[i] === curr[i]) {
      i++
    }
    return acc.slice(0, i);
  })
  return results;
}

console.log('longest common prefix', longestCommonPrefix(arrOfStrings));