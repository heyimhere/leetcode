// LC #853 — Car Fleet
//
// n cars drive toward the same destination along a one-lane road (no passing).
// You're given:
//   target        the destination position (a point on the number line)
//   position[i]   the starting position of car i (all distinct)
//   speed[i]      the constant speed of car i
//
// A faster car that catches up to a slower one ahead CANNOT pass — it slows to
// match and they become a single "car fleet" moving at the slower car's speed.
// A fleet is one or more cars bumper-to-bumper arriving together. A car that
// catches the fleet ahead exactly AT the target still counts as joined.
// Return the number of car fleets that will arrive at the destination.
//
// Example:
//   target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
//   -> 3 fleets
//
// Intuition:
//   The messy part is imagining cars catching each other mid-road. The unlock is
//   to stop thinking about positions over time and think about ARRIVAL TIME:
//
//       timeToTarget = (target - position) / speed
//
//   Now sort the cars by starting position, CLOSEST to the target first. Walk
//   them in that order. Because no one can pass, a car behind can only ever
//   MERGE into the car ahead — never overtake. So compare arrival times:
//
//     - If a car behind would arrive SOONER than (or equal to) the fleet ahead,
//       it catches up and is absorbed — it does NOT form its own fleet. Its own
//       faster time is now irrelevant; the whole group moves at the slower
//       leader's pace (the time already on the stack).
//     - If a car behind would arrive LATER, it can never catch the group ahead,
//       so it starts a brand-new fleet. Its time becomes the new "leader" that
//       cars further back must beat to merge.
//
//   Keep a stack of fleet-leader arrival times. Each new fleet pushes its time;
//   merges push nothing. The number of fleets is the stack's final size.
//
//   Walkthrough (target=12, sorted by position desc):
//     pos=10 speed=2 -> time=(12-10)/2 = 1.0   stack []      -> push  [1.0]
//     pos=8  speed=4 -> time=(12-8)/4  = 1.0    1.0 <= 1.0    -> merge (catches the car ahead)
//     pos=5  speed=1 -> time=(12-5)/1  = 7.0    7.0 >  1.0    -> push  [1.0, 7.0]
//     pos=3  speed=3 -> time=(12-3)/3  = 3.0    3.0 <= 7.0    -> merge (catches the pos=5 fleet)
//     pos=0  speed=1 -> time=(12-0)/1  = 12.0   12.0 > 7.0    -> push  [1.0, 7.0, 12.0]
//   Fleets = 3.
//
// Approach (sort by position desc, then monotonic stack of times):
//   - Pair up [position, speed] and sort by position DESCENDING (closest first).
//   - For each car in that order, compute time = (target - position) / speed.
//   - If the stack is empty OR time > stack top, it can't catch the fleet ahead
//     -> push time (a new fleet). Otherwise it merges -> push nothing.
//   - Return stack.length.
//
// Why "closest to target first": the car nearest the target defines the fleet
// everyone behind it might join. Processing outward lets each car compare only
// against the fleet immediately ahead — the value sitting on top of the stack.
//
// Alternate approach (O(1) extra space):
//   You never actually read below the top of the stack, so the stack can be
//   replaced by a single `slowest` (max time seen so far) and a counter: a car
//   whose time is strictly greater than `slowest` starts a new fleet and becomes
//   the new `slowest`. Same logic, no array. Shown as carFleetB below.
//
// Complexity:
//   Time:  O(n log n) — dominated by the sort; the single stack pass is O(n).
//   Space: O(n) for the stack (O(1) for the carFleetB variant, plus the sort).

const carFleet = (target, position, speed) => {
  // Pair each car's position with its speed, then order closest-to-target first.
  const cars = position.map((pos, i) => [pos, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);

  const stack = []; // arrival times of current fleet leaders

  for (const [pos, spd] of cars) {
    const time = (target - pos) / spd;
    // If this car arrives later than the fleet ahead, it can't catch it -> new fleet.
    if (stack.length === 0 || time > stack[stack.length - 1]) {
      stack.push(time);
    }
    // Otherwise it catches the fleet ahead and is absorbed — push nothing.
  }

  return stack.length;
};

// Alternate: O(1) space — track only the slowest (max) leader time seen so far.
const carFleetB = (target, position, speed) => {
  const cars = position.map((pos, i) => [pos, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);

  let fleets = 0;
  let slowest = 0; // arrival time of the fleet currently ahead

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
