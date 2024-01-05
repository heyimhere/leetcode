const number = 2;
function isHappy(n) {
	// code here
	let hashmap = {};
	let tempValue = 0;
	let numberString = n.toString();
	let arrayFromString; 
 while(tempValue !== 1) { 
		let value = 0;
		arrayFromString = Array.from(numberString, Number);
		arrayFromString.forEach(eachNumber => {
			let sum = eachNumber * eachNumber;
			value = value + sum;	
		});
		arrayFromString = Array.from(value, Number);
		numberString = value.toString();
		tempValue = value;
		if(hashmap[value]) {
			return false;
		}
		hashmap[value] ? '' : hashmap[value] = value;
 }
	return true;
}

console.log('is happy', isHappy(number));
