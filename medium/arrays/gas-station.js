const g = [1, 2, 3, 4, 5];
const c = [3, 4, 5, 1, 2];

const canCompleteCircuit = function(gas, cost) {
	let totalTank = 0;
	let currentTank = 0;
	let startingStation = 0;
	for(let i = 0; i < gas.length; i++) {
		const netCost = gas[i] - cost[i];
		totalTank += netCost;
		currentTank += netCost;
		if(currentTank < 0) {
			startingPosition = i + 1;
			currentTank = 0;
		}
	}
	return totalTank < 0 ? -1 : startingPosition;
};

console.log('can complete circuit', canCompleteCircuit(g, c));
