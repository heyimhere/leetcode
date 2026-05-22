// LC #1817 — Finding the Users Active Minutes
//
// You're given an array `logs` where logs[i] = [userId, time] means user
// `userId` performed an action at minute `time`. You're also given an integer k.
//
// The User Active Minutes (UAM) for a user is the NUMBER OF UNIQUE MINUTES
// in which they took at least one action. Multiple actions in the same minute
// only count once.
//
// Return an array `answer` of length k where:
//   answer[j] = the number of users whose UAM equals j + 1 (1-indexed slot)
//
// Example:
//   logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5
//   - User 0 acted at minutes {5, 2}             → UAM = 2
//   - User 1 acted at minutes {2, 3}             → UAM = 2
//   - 0 users have UAM 1, 2 users have UAM 2, 0 have 3, 4, 5
//   → answer = [0, 2, 0, 0, 0]
//
// Approach (HashMap + Set, classic inverted-index style):
//   Step 1: Build a Map<userId, Set<minute>> from the logs.
//           Using a Set automatically dedupes repeated actions in the same minute.
//   Step 2: Allocate `answer = new Array(k).fill(0)`.
//   Step 3: For each user, their UAM is the size of their minutes set.
//           Increment answer[uam - 1] (because the array is 0-indexed but
//           UAM slots are 1-indexed).
//
// Why a Set per user:
//   The problem cares about UNIQUE minutes. Set membership is O(1), so
//   tracking uniqueness while building costs nothing extra.
//
// Time:  O(L)  where L = number of log entries
// Space: O(L)  for the user → minute-set map
//
// Edge Cases:
//   - Duplicate logs ([0,5] appearing twice) → Set dedupes
//   - User with UAM > k → problem guarantees this won't happen (UAM ≤ k)
//   - Empty logs → answer is array of k zeros
//   - All users with same UAM → that slot has the full user count

/**
 * @param {number[][]} logs
 * @param {number} k
 * @returns {number[]}
 */
const findingUsersActiveMinutes = (logs, k) => {
  // your code here
};

console.log('=== LC #1817 Users Active Minutes ===\n');

console.log('Test 1 — Standard example:');
console.log(findingUsersActiveMinutes(
  [[0, 5], [1, 2], [0, 2], [0, 5], [1, 3]],
  5
));
// Expected: [0, 2, 0, 0, 0]

console.log('\nTest 2 — Each user with unique UAM:');
console.log(findingUsersActiveMinutes(
  [[1, 1], [2, 2], [2, 3]],
  4
));
// Expected: [1, 1, 0, 0]   (user 1: UAM 1, user 2: UAM 2)

console.log('\nTest 3 — Heavy duplicates collapse to one minute:');
console.log(findingUsersActiveMinutes(
  [[0, 1], [0, 1], [0, 1], [0, 1]],
  3
));
// Expected: [1, 0, 0]   (user 0 has UAM 1 — same minute four times)

console.log('\nTest 4 — Empty logs:');
console.log(findingUsersActiveMinutes([], 3));
// Expected: [0, 0, 0]

console.log('\nTest 5 — Multiple users tied:');
console.log(findingUsersActiveMinutes(
  [[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2]],
  3
));
// Expected: [0, 3, 0]   (all three users have UAM 2)
