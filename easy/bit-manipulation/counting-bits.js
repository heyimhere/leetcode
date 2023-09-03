const number = 5;
function countBits(n) {
  // code here
  let base2Array = [];
  for(let i = 0; i < n + 1; i++) {
    base2Array.push((i).toString(2));
  }
  const results = base2Array.map(each => {
    let innerCount = 0;
    for(let i = 0; i < each.length; i++) {
      if(each[i] === '1') {
        innerCount++;
      }
    }
    return innerCount;
  });
  return results;
}

console.log('count bits', countBits(number));