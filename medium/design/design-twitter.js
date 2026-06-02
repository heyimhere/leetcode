// TODO: implement
// LC #355 — Design Twitter
//
// Design a tiny Twitter-like system:
//   postTweet(userId, tweetId)              — user posts a tweet
//   getNewsFeed(userId) → tweetId[]          — 10 most recent across self
//                                              + followees, most recent first
//   follow(followerId, followeeId)
//   unfollow(followerId, followeeId)
//
// Tweets are identified by globally increasing IDs (or you can track a
// global counter for recency).
//
// Approach (HashMaps + small per-user tweet list + heap merge for feed):
//   - tweets:  Map<userId, Array<[timestamp, tweetId]>>  (chronological)
//   - follows: Map<userId, Set<followeeId>>
//   - global  `time` counter, incremented on each postTweet.
//
//   postTweet:
//     append [time++, tweetId] to tweets[userId]
//
//   follow / unfollow: standard set ops.
//
//   getNewsFeed(userId):
//     Collect the user's own tweets AND tweets of everyone they follow.
//     For each source, take the LAST up-to-10 tweets and push into a
//     max-heap keyed by timestamp. Pop up to 10 to build the feed.
//
// Why a heap for the feed:
//   Multi-source "k-way merge of sorted lists" is exactly what min/max
//   heaps solve. We don't need to materialize everyone's full tweet
//   history — just enough heads to pop 10.
//
// Time:  postTweet/follow/unfollow O(1) avg
//        getNewsFeed O(K log K + n_followees × log)
// Space: O(total tweets + follows)
//
// Edge Cases:
//   - User has no tweets                         → empty feed (unless followees)
//   - Follow self                                → spec says ignore-or-allow; both fine
//   - Unfollow someone you don't follow          → no-op
//   - getNewsFeed before any posts               → []

class Twitter {
  constructor() {
    // your code here
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @returns {void}
   */
  postTweet(userId, tweetId) {
    // your code here
  }

  /**
   * @param {number} userId
   * @returns {number[]}
   */
  getNewsFeed(userId) {
    // your code here
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @returns {void}
   */
  follow(followerId, followeeId) {
    // your code here
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @returns {void}
   */
  unfollow(followerId, followeeId) {
    // your code here
  }
}

console.log('=== LC #355 Design Twitter ===\n');

const t = new Twitter();
t.postTweet(1, 5);
console.log(t.getNewsFeed(1));   // Expected: [5]
t.follow(1, 2);
t.postTweet(2, 6);
console.log(t.getNewsFeed(1));   // Expected: [6, 5]
t.unfollow(1, 2);
console.log(t.getNewsFeed(1));   // Expected: [5]
