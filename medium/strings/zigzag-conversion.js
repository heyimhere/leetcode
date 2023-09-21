function convert(s, numRows) {
  // code here
  let rows = [];
  let count = 0;
  let reverse = false;
  for(let i = 0; i < numRows; i++) {
    rows[i] = [];
  };
  for(let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if(count === numRows - 1 || count === 0) {
      reverse = !reverse
    }
  }
  const results = rows.reduce((acc, curr) => {
    return acc + curr.join('');
  }, '');
  return results;
}

console.log('convert', convert("PAYPALISHIRING", 3));