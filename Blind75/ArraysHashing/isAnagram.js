// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // check to see if the lenght of both of the words are the same, if not return false
  if (s.length !== t.length) return false;

  // create the hash of chars as keys, space complexity O(n)
  let stringHash = {};

  // create a hash for string t
  let stringHashT = {};

  // iterate through the string s and create a hash, to perform checks in O(c)
  // keep a count of the letters
  for (let letter of s) {
    if (!stringHash[letter]) {
      stringHash[letter] = 1;
    } else {
      stringHash[letter] += 1;
    }
  }

  // iterate through t, checking if the cur char of t is in the stringHash
  for (let letter of t) {
    if (letter in stringHash) {
      // start accounting for how many times this letter occurs in string t
      if (!stringHashT[letter]) {
        stringHashT[letter] = 1;
      } else {
        stringHashT[letter] += 1;
        // return false if a char occurence count is higher in string T than it is in string S
        if (stringHashT[letter] > stringHash[letter]) return false;
      }
    } else {
      // if the letter is not in stringHash, then t is not a anagram of s
      return false;
    }
  }
  // return true if you haven't returned false already
  return true;
};

console.log(isAnagram("string", "strngi"));
