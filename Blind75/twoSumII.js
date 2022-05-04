// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// with the pointers for a sorted input array you don't need extra space. O(n) Time, O(1) Space
 var twoSum = function(numbers, target) {

    let leftPointer = 0;
    let rightPointer = numbers.length - 1;
    while(leftPointer < rightPointer) {
        if(numbers[leftPointer] + numbers[rightPointer] > target) {
            rightPointer -= 1;
        } else if(numbers[leftPointer] + numbers[rightPointer] < target) {
            leftPointer += 1;
        } else {
            return [leftPointer +  1, rightPointer + 1];        
        }
    }
    return []
};
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,7,11,15], 90))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1,0], -1))
console.log(twoSum([0,0,3,4], 0))



// without the pointers
//  var twoSum = function(numbers, target) {
//     let intHash = {};
//     let returnArray = [];
    
//     for(let i = 0; i < numbers.length; i++) {
//         if(!intHash[numbers[i]]) intHash[numbers[i]] = i + 1;
        
//         let potentialMatch = target - numbers[i];
//         if(intHash.hasOwnProperty(potentialMatch) && intHash[potentialMatch] !== i + 1) {
//             returnArray.push(intHash[potentialMatch], i + 1)
//         }
//     }
//     return returnArray;
// };

// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([2,3,4], 6))
// console.log(twoSum([-1,0], -1))
// console.log(twoSum([0,0,3,4], 0))
