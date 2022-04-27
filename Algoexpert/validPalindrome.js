// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetHash = {};
  for(let char of alphabet) if(!alphabetHash[char]) alphabetHash[char] = true;
  
  let condensedString = s.toLowerCase().split("");
  for(let char of condensedString) {
    if(alphabet.hasOwnProperty(char) === false) condensedString.filter(char);
  }
  console.log(condensedString);
  
  
    
};

console.log(isPalindrome("wow"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));