
const findIntersection = (strArr) => {
  const first = strArr[0].split(',').map(Number);
  const second = strArr[1].split(',').map(Number);
  console.log('first', first);
  let i = 0;
  let j = 0;
  const result = [];
  while(i < first.length && j < second.length) {
    if(first[i] === second[j]) {
      result.push(first[i]);
      i++;
      j++;
    } else if(first[i] < second[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};

console.log('find intersection', findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
