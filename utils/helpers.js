// helpers — small reusable utilities for DSA problems.
//
// Each helper is a tiny, dependency-free function. Pull what you need:
//   const { isAlphaNum } = require('../utils/helpers');
//
// Sections are separated by banner comments. Add new helpers under the
// closest matching section, or start a new section if nothing fits.

// ============ Character ============

// Pure-comparison form — fastest in tight loops (no regex engine overhead).
// Returns true if char `c` is a-z, A-Z, or 0-9.
const isAlphaNum = (c) =>
  (c >= 'a' && c <= 'z') ||
  (c >= 'A' && c <= 'Z') ||
  (c >= '0' && c <= '9');

// Regex form — shorter and more readable, marginally slower per call.
// Prefer the function above inside hot loops; this is fine for casual use.
const isAlphaNumRegex = (c) => /[a-z0-9]/i.test(c);

module.exports = {
  isAlphaNum,
  isAlphaNumRegex,
};
