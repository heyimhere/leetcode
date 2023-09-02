const array = [1,2,2, 1,1,3];

function uniqueOccurrences(a) {
  // code here
  const results = a.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, {});
  let value = true;
  const parsingValues = Object.values(results);
  if(new Set(parsingValues).size !== parsingValues.length) {
    value = false;
  }
  return value;
}

console.log('unique occurrences', uniqueOccurrences(array));