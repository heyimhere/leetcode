const strA = ['ahffaksfajeeubsne', 'jefaa'];
const minWindowSubstring = (strArr) => {
  const firstStr = strArr[0];
  const secondStr = strArr[1];

  const targetCount = new Map();
  for(const char of secondStr) {
    targetCount.set(char, (targetCount.get(char) || 0) + 1);
  };

  const windowCount = new Map();

  let start = 0;
  let matched = 0;
  let minLen = Infinity;
  let minWindow = "";

  for(let end = 0; end < firstStr.length; end++) {
    const char = firstStr[end];
    windowCount.set(char, (windowCount.get(char) || 0) + 1);

    if(targetCount.has(char) && windowCount.get(char) === targetCount.get(char)) {
      matched++;
    };

    while(matched === targetCount.size) {
      const windowSize = end - start + 1;
      if(windowSize < minLen) {
        minLen = windowSize;
        minWindow = firstStr.substring(start, end + 1);
      };

      const leftChar = firstStr[start];
      windowCount.set(leftChar, windowCount.get(leftChar) - 1);

      if(targetCount.has(leftChar) && windowCount.get(leftChar) < targetCount.get(leftChar)) {
        matched--;
      };

      start++;
    }
  }

  return minWindow;
}

console.log('minWindowSubstring', minWindowSubstring(strA));
