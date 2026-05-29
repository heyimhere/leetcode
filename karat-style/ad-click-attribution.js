// TODO: implement
// coding interview sample (Karat-style)

/**
 * Ad Click Attribution
 *
 * Problem Summary:
 * You're given two streams of events for an ad campaign:
 *   impressions: [adId, userId, timestamp]   — user SAW an ad
 *   clicks:      [adId, userId, timestamp]   — user CLICKED an ad
 *
 * A click is "attributed" to an impression if:
 *   - same adId
 *   - same userId
 *   - the click's timestamp is AFTER the impression's
 *   - the gap is within `windowSeconds`
 *
 * Build:
 *   1. attributeClicks(impressions, clicks, windowSeconds)
 *      → return the list of attributed clicks (the clicks that had a
 *        matching impression within the window).
 *   2. clickThroughRate(impressions, clicks, windowSeconds)
 *      → return a Map<adId, ctr> where
 *          ctr = attributed_clicks_for_ad / impressions_for_ad
 *        (Return 0 for ads with impressions but no attributed clicks.)
 *
 * Example:
 *   impressions = [
 *     ['ad1', 'userA', 100],
 *     ['ad1', 'userB', 200],
 *     ['ad2', 'userA', 300],
 *   ]
 *   clicks = [
 *     ['ad1', 'userA', 110],   // 10s after impression → attributed
 *     ['ad1', 'userB', 500],   // 300s after → NOT attributed if window = 60
 *     ['ad2', 'userA', 305],   // 5s after → attributed
 *     ['ad1', 'userC', 110],   // userC has no impression → NOT attributed
 *   ]
 *   windowSeconds = 60
 *
 *   attributeClicks → first and third clicks
 *   clickThroughRate → { ad1: 1/2 = 0.5, ad2: 1/1 = 1.0 }
 *
 * Approach:
 *   Build a fast lookup of impressions: Map<"adId|userId", number[]>
 *     value is a SORTED list of impression timestamps for that (ad, user) pair.
 *
 *   For each click, look up its (adId, userId) bucket. If the bucket has
 *   any timestamp `t` with click.ts - windowSeconds <= t <= click.ts, it's attributed.
 *
 *   For speed on a sorted array, use binary search to find the largest
 *   impression timestamp <= click.ts. Then check if it's within the window.
 *
 * Why a composite key:
 *   - Attribution is keyed on (adId, userId), so a single hashmap lookup
 *     gives you exactly the impressions that COULD match this click.
 *
 * Why sorted timestamps + binary search:
 *   - Without it, you'd scan every impression for every click → O(I * C).
 *   - With binary search: O(I log I) to build + O(C log I) to attribute.
 *
 * Time:
 *   - O((I + C) log I)
 * Space:
 *   - O(I) for the impression index
 *
 * Edge Cases:
 *   - Click with no matching impression          → not attributed
 *   - Multiple impressions of same (ad, user)    → any one inside the window suffices
 *   - Click at exact window boundary             → inclusive (≤ windowSeconds)
 *   - Ad has impressions but zero clicks         → CTR = 0
 */

/**
 * @param {Array<[string, string, number]>} impressions
 * @param {Array<[string, string, number]>} clicks
 * @param {number} windowSeconds
 * @returns {Array<[string, string, number]>}
 */
const attributeClicks = (impressions, clicks, windowSeconds) => {
  // your code here
};

/**
 * @param {Array<[string, string, number]>} impressions
 * @param {Array<[string, string, number]>} clicks
 * @param {number} windowSeconds
 * @returns {Map<string, number>}
 */
const clickThroughRate = (impressions, clicks, windowSeconds) => {
  // your code here
};

// ============ Test Cases ============

const impressions = [
  ['ad1', 'userA', 100],
  ['ad1', 'userB', 200],
  ['ad2', 'userA', 300],
];

const clicks = [
  ['ad1', 'userA', 110],   // 10s after → attributed (window 60)
  ['ad1', 'userB', 500],   // 300s after → NOT attributed
  ['ad2', 'userA', 305],   // 5s after → attributed
  ['ad1', 'userC', 110],   // no impression for userC → NOT attributed
];

console.log('=== Ad Click Attribution ===\n');

console.log('Test 1 — attributeClicks (window 60s):');
console.log(attributeClicks(impressions, clicks, 60));
// Expected: [['ad1','userA',110], ['ad2','userA',305]]

console.log('\nTest 2 — attributeClicks (window 1000s — everything attributable matches):');
console.log(attributeClicks(impressions, clicks, 1000));
// Expected: 3 clicks (userC still excluded — no impression)

console.log('\nTest 3 — clickThroughRate (window 60s):');
console.log(clickThroughRate(impressions, clicks, 60));
// Expected: Map { 'ad1' => 0.5, 'ad2' => 1.0 }

console.log('\nTest 4 — Empty clicks:');
console.log(attributeClicks(impressions, [], 60));
console.log(clickThroughRate(impressions, [], 60));
// Expected: [] and Map { 'ad1' => 0, 'ad2' => 0 }

console.log('\nTest 5 — Click BEFORE impression (no causality):');
console.log(attributeClicks(
  [['ad1', 'userA', 200]],
  [['ad1', 'userA', 100]],
  500
));
// Expected: []   (clicks must come after the impression)
