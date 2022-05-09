// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// O(n) ST using a Set (faster than a HashMap)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;

  let charSet = new Set();
  let leftPtr = 0;
  let longestSubstring = 1;

  for (let i = 0; i < s.length; i++) {
    while (charSet.has(s[i])) {
      charSet.delete(s[leftPtr]);
      leftPtr += 1;
    }
    charSet.add(s[i]);
    longestSubstring = Math.max(longestSubstring, i - leftPtr + 1);
  }
  return longestSubstring;
};

// O(n) ST using a HashMap
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//   if (s.length === 0) return 0;
//   let longestSubstring = 1;
//   let map = {};

//   let localCounter = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (map.hasOwnProperty(s[i])) {
//       localCounter = 1;
//       i = map[s[i]] + 1;
//       map = {};
//     } else {
//       localCounter += 1;
//       longestSubstring = Math.max(longestSubstring, localCounter);
//     }

//     if (!map[s[i]]) {
//       map[s[i]] = i;
//     }
//   }
//   return longestSubstring;
// };

console.log(lengthOfLongestSubstring("anviaj")); // Expected Output: 5
console.log(lengthOfLongestSubstring("dvdf")); // Expected Output: 3
console.log(lengthOfLongestSubstring("pwwkew")); // Expected Output: 3
console.log(lengthOfLongestSubstring("abcabcbb")); //  Expected Output: 3
