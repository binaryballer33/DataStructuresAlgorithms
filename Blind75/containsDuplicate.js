/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // input is a arr of int
    
    // create return variable
    let isDuplicate = null;
    
    // create a hash in order to keep track of seen int
    let intHash = {};
    
    // iterate through the arr of int
    // populate the intHash with numbers as keys
    for(let number of nums) {
        if(number in intHash) return true;
        else intHash[number] = true;
    }
    isDuplicate = false;

    // return boolean
    return isDuplicate;
};

console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,2,3,1]));