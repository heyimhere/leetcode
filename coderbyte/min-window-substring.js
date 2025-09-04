const strA = ['ahffaksfajeeubsne', 'jefaa'];
const minWindowSubstring = (strArr) => {
  const [source, target] = strArr;
  const requiredChars = {};
  for(let char of target) {
    requiredChars[char] = (requiredChars[char] || 0) + 1;
  }

  const windowCount = {};
  let charsMatched = 0;
  const totalRequired = Object.keys(requiredChars).length;

  let left = 0;
  let minWindow = [-1, -1];
  let minLength = Infinity;

  for(let right = 0; right < source.length; right++) {
    const rightChar = source[right];
    windowCount[rightChar] = (windowCount[rightChar] || 0) + 1;

    if(rightChar in requiredChars && windowCount[rightChar] === requiredChars[rightChar]) {
      charsMatched++;
    }

    while(charsMatched === totalRequired) {
      if((right - left + 1) < minLength) {
        minWindow = [left, right];
        minLength = right - left + 1;
      }

      const leftChar = source[left];
      windowCount[leftChar]--;
      if(leftChar in requiredChars && windowCount[leftChar] < requiredChars[leftChar]) {
        charsMatched--;
      }

      left++;
    }
  }

  const [start, end] = minWindow;
  return minLength === Infinity ? '' : source.slice(start, end + 1);
}

console.log('minWindowSubstring', minWindowSubstring(strA));
