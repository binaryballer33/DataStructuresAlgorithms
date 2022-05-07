// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    // sort the input array so that you can do this in under O(n^2) time 
    sortedNums = nums.sort((a, b) => { return a - b}); // nLog(n) Time
    let returnArray = [];
    
    for(let index = 0; index < sortedNums.length; index++) {
        if(sortedNums[index] > 0) return returnArray;
        if(index > 0 && sortedNums[index] === sortedNums[index - 1]) continue;
        
        let immediateRightPointer = index + 1;
        let rightMostPointer = nums.length - 1;
        while(immediateRightPointer < rightMostPointer) {

            if(sortedNums[index] + sortedNums[immediateRightPointer] + sortedNums[rightMostPointer] > 0) {
                rightMostPointer -= 1;
            } else if(sortedNums[index] + sortedNums[immediateRightPointer] + sortedNums[rightMostPointer] < 0) {
                immediateRightPointer += 1;
            } else {
                returnArray.push([sortedNums[index], sortedNums[immediateRightPointer], sortedNums[rightMostPointer]]);
                immediateRightPointer += 1;
                while(sortedNums[immediateRightPointer] === sortedNums[immediateRightPointer - 1] && immediateRightPointer < rightMostPointer) immediateRightPointer += 1;
            }
        }
    }
    return returnArray;
};

console.log(threeSum([-2,0,1,1,2]));
console.log(threeSum([-1,0,1,2,-1,-4],)); // expected output --> [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-2,0,1,1,2]));
console.log(threeSum([0,0,0]));
console.log(threeSum([]));