// TODO: implement
// LC #735 — Asteroid Collision
//
// Each asteroid has size = |value| and moves right if value > 0 and left
// if value < 0. Collisions: the smaller one EXPLODES; if equal, BOTH do.
// Asteroids moving in the SAME direction never collide. Return the state
// after all collisions.
//
// Example:
//   [5, 10, -5]   → [5, 10]    (-5 vs 10 → -5 explodes)
//   [8, -8]       → []         (equal magnitudes; both explode)
//   [10, 2, -5]   → [10]       (-5 destroys 2, then -5 explodes vs 10)
//   [-2, -1, 1, 2]→ [-2,-1,1,2] (no collisions; opposite-direction pairs
//                                are already moving apart)
//
// Approach (stack):
//   for a in asteroids:
//     while stack.length and a < 0 and stack[top] > 0:
//       top = stack[top]
//       if top < -a → stack.pop(); continue        // top explodes; check next
//       elif top === -a → stack.pop(); a = 0; break // both explode
//       else            → a = 0; break             // a explodes
//     if a !== 0 → stack.push(a)
//   return stack
//
// Why the only collisions are stack-top vs current:
//   Same-direction asteroids never collide, so a positive followed by
//   another positive just stacks. A collision is possible only when a
//   right-moving (positive) is followed by a left-moving (negative) —
//   exactly the "stack top > 0 and current < 0" case.
//
// Time:  O(n)   (each asteroid pushed/popped at most once)
// Space: O(n)
//
// Edge Cases:
//   - All same direction         → input unchanged
//   - All collide, even pairs    → []
//   - Cascading explosions       → stack pops multiple times for one current
//   - Single asteroid            → [it]

/**
 * @param {number[]} asteroids
 * @returns {number[]}
 */
const asteroidCollision = (asteroids) => {
  // your code here
};

console.log('=== LC #735 Asteroid Collision ===\n');

console.log('Test 1:');
console.log(asteroidCollision([5, 10, -5]));
// Expected: [5,10]

console.log('\nTest 2:');
console.log(asteroidCollision([8, -8]));
// Expected: []

console.log('\nTest 3:');
console.log(asteroidCollision([10, 2, -5]));
// Expected: [10]

console.log('\nTest 4:');
console.log(asteroidCollision([-2, -1, 1, 2]));
// Expected: [-2,-1,1,2]
