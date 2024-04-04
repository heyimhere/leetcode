const n = ["Mary", "John", "Emma"];
const h = [180, 165, 170];

const sortPeople = function(names, heights) {
  let hashMap = {};
  for(let i = 0; i < names.length; i++) {
    if(!(names[i] in hashMap)) {
      hashMap[heights[i]] = names[i];
    }
  }

  let sortedHeights = heights.sort((a, b) => b - a);
  let sortedArray = [];

  for(let j = 0; j < sortedHeights.length; j++) {
    sortedArray.push(hashMap[sortedHeights[j]]);
  }

  return sortedArray;
};

console.log('sort people', sortPeople(n, h));
