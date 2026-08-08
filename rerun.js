const carFleet = (target, position, speed) => {
  const cars = position.map((pos, i) => [pos, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);

  const stack = [];

  for (const [pos, spd] of cars) {
    const time = (target - pos) / spd;
    if (stack.length === 0 || time > stack[stack.length - 1]) {
      stack.push(time);
    }
  }

  return stack.length;
};

const carFleetB = (target, position, speed) => {
  const cars = position.map((pos, i) => [pos, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);

  let fleets = 0;
  let slowest = 0;

  for (const [pos, spd] of cars) {
    const time = (target - pos) / spd;
    if (time > slowest) {
      fleets++;
      slowest = time;
    }
  }

  return fleets;
};

console.log('12,[10,8,0,5,3],[2,4,1,1,3] ->', carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
console.log('10,[3],[3]                  ->', carFleet(10, [3], [3]));                            // 1
console.log('100,[0,2,4],[4,2,1]         ->', carFleet(100, [0, 2, 4], [4, 2, 1]));              // 1
console.log('(B) 12,[10,8,0,5,3],...     ->', carFleetB(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
