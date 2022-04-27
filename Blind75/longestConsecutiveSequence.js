// https://leetcode.com/problems/longest-consecutive-sequence

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
  // create the nums hash, space complexity O(n)
  let numsHash = {};
  for(let number of nums) if(!numsHash[number]) numsHash[number] = true;

  let globalCounter = 0;
  for(let number of nums) {
    // check if the number is the start of a sequence
    if(numsHash[number - 1]) continue;
    
    let localCounter = 1;
    let i = 1;
    // while there is a consequtive number in the hash, increment local counter
    while(numsHash[number + i]) {
      localCounter += 1;
      i += 1;
    }
    globalCounter = Math.max(localCounter, globalCounter);
  }
  return globalCounter;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([]));
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));