// https://leetcode.com/problems/two-sum/
// I edited the code to return all the values that add up to the target, not just the first occurence

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSumIndices = function (nums, target) {
    // create a intHash to keep track of the numbers
    let intHash = {};

    // create a possible match
    let possibleMatch = null;
    
    let i = 0;
    // iterate through the nums arr and populate the hash
    for(let number of nums) {
        possibleMatch = target - number;
        // if the number is in the hash
        if(String(possibleMatch) in intHash) {
            return [intHash[possibleMatch], i];
        }
        // if the number is not in the hash, add it to the hash
        intHash[number] = i;
        i += 1;
    }
    return [];
};

console.log(twoSumIndices([1,2,3,4,5,6], 7));
console.log(twoSumIndices([3,2,4], 6));

// Solution that gives you all the combinations is below:

var twoSum = function (nums, target) {
    // create a intHash to keep track of the numbers
    let intHash = {};

    // create a possible match
    let possibleMatch = null;
    let returnArr = [];


    // iterate through the nums arr and populate the hash
    for(let number of nums) {
        possibleMatch = target - number;
        if(!intHash[number]) {
            // if the number is not in the hash, add it to the hash
            intHash[number] = 1;
            // if the number is in the hash
            if(String(possibleMatch) in intHash) {
                returnArr.push([possibleMatch, number]);
            }
        }
    }
    if(returnArr.length !== 0) return returnArr
    return [];
};

console.log(twoSum([1,2,3,4,5,6], 7));
console.log(twoSumIndices([3,2,4], 6));
