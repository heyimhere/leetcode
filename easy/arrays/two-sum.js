const numbers = [2,7,11,15];
const target = 9;
// const numbers = [3,2,3];
// const target = 6;

function twoSum(n) {
  // code here
  const hashtable = {};
  for(let i = 0; i < n.length; i++) {
    console.log('hashtable in for loop', hashtable);
    const diff = target - n[i];
    if(hashtable.hasOwnProperty(diff)) {
      console.log('hashtable inside if statement', hashtable);
      return [hashtable[diff], i];
    }
    hashtable[n[i]] = i;
  }
  console.log('hashtable outside for loop', hashtable);
  return null;
}

console.log('two sum', twoSum(numbers));