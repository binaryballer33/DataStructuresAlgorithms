// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // create a hash of each element as a key, and their count for 
  // the value
  let elementCounterHash = {};

  // create a return arr
  let results = [];

  // populate the hash
  for(let number of nums) {
    if(!elementCounterHash[number]) {
      elementCounterHash[number] = 1;
    } else {
      elementCounterHash[number] += 1;
    }
  }

  // iterate through the hash, grap the K most highest numbers
  while(results.length !== k) {
    let mostFrequent = 0;
    let mostFrequentElement = "";
    
    for(let key in elementCounterHash) {
      if(elementCounterHash[key] > mostFrequent && results.includes(Number(key)) === false) {
        mostFrequent = elementCounterHash[key];
        mostFrequentElement = Number(key);
      }
    }

    results.push(mostFrequentElement);
  }

  // return results
  console.log(results);
  return results;
};

topKFrequent([1, 3, 1, 4, 2, 3, 3, 5, 3], 2);