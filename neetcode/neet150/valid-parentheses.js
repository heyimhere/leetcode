// LC #20 — Valid Parentheses
//
// Given a string s containing just the characters '()[]{}', determine if the
// input is valid. A string is valid when every open bracket is closed by the
// SAME type of bracket, and brackets are closed in the correct (nested) order.
//
// Examples:
//   "()"       -> true
//   "()[]{}"   -> true
//   "(]"       -> false  (wrong type)
//   "([)]"     -> false  (wrong order — ')' tries to close '[')
//   "([{}])"   -> true   (properly nested)
//   "("        -> false  (never closed)
//   ")"        -> false  (closes nothing)
//
// Intuition:
//   Brackets NEST, which means the most-recently-opened bracket must be the
//   FIRST one closed — last-in, first-out. That is exactly a STACK.
//
//   Read left to right. Each opening bracket is an unsettled "promise" to be
//   closed later, so we push it. Each closing bracket must settle the NEWEST
//   promise — the one on top of the stack. So when we hit a closer we look at
//   the stack's top: if it's the matching opener, that promise is kept, pop it;
//   otherwise the string is invalid.
//
//   Three distinct failure modes, all handled naturally:
//     1) Closer doesn't match the top opener   -> "(]"   -> false
//     2) Closer arrives with an empty stack     -> ")"    -> false (nothing to match)
//     3) Stack still holds openers at the end    -> "("    -> false (promises unkept)
//   Valid  <=>  every closer matched its top AND the stack ends empty.
//
// Approach (stack + close->open map):
//   - pairs = { ')':'(', ']':'[', '}':'{' }   // closer -> its required opener
//   - stack = []
//   - for each char c in s:
//       if c is an opener:      push c
//       else (c is a closer):   if stack empty OR pop() !== pairs[c] -> return false
//   - return stack.length === 0   // nothing left unclosed
//
// Alternate approaches:
//   1) "Push the expected closer" (see isValidB below): instead of pushing the
//      opener, push the closer we EXPECT to see next. Then every closing bracket
//      just has to equal stack.pop() — no lookup map on the compare. Same O(n),
//      arguably slicker; some find it less obvious to recall. Included as a variant.
//   2) Repeatedly string-replace "()", "[]", "{}" with "" until stable. Cute but
//      O(n^2) (each replace re-scans) — never do this in an interview.
//
// Complexity of the chosen solution:
//   Time:  O(n)  — single pass over s; each char does O(1) push/pop/compare work.
//   Space: O(n)  — worst case the whole string is openers ("(((((") and they all
//                  sit on the stack at once, so the stack grows to n.

const isValid = (s) => {
  const pairs = { ')': '(', ']': '[', '}': '{' };
  const stack = [];

  for (const c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else {
      // c is a closer: the top must be its matching opener.
      if (stack.length === 0 || stack.pop() !== pairs[c]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// ---
// Variant B: push the EXPECTED closing bracket instead of the opener.
// When we open '(', we push ')' — the exact char we must see to close it. Then
// any closer is valid only if it equals what we popped. Avoids the lookup map on
// the compare step; the tradeoff is it's a slightly less literal mental model.
const isValidB = (s) => {
  const stack = [];

  for (const c of s) {
    if (c === '(') stack.push(')');
    else if (c === '[') stack.push(']');
    else if (c === '{') stack.push('}');
    // c is a closer: it must match the closer we were expecting.
    else if (stack.length === 0 || stack.pop() !== c) return false;
  }

  return stack.length === 0;
};

console.log('"()"      ->', isValid('()'));       // true
console.log('"()[]{}"  ->', isValid('()[]{}'));   // true
console.log('"(]"      ->', isValid('(]'));       // false
console.log('"([)]"    ->', isValid('([)]'));     // false
console.log('"([{}])"  ->', isValid('([{}])'));   // true
console.log('"("       ->', isValid('('));        // false
console.log('")"       ->', isValid(')'));        // false

console.log('--- variant B ---');
console.log('"()[]{}"  ->', isValidB('()[]{}'));  // true
console.log('"([)]"    ->', isValidB('([)]'));    // false
console.log('"([{}])"  ->', isValidB('([{}])'));  // true
