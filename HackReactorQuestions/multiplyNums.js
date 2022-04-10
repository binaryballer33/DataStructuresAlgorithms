// Multiplying Numbers in a String
// Given a string of numbers separated by a comma and space, return the product of the numbers.

// Examples
// multiplyNums("2, 3") ➞ 6

// multiplyNums("1, 2, 3, 4") ➞ 24

// multiplyNums("54, 75, 453, 0") ➞ 0

// multiplyNums("10, -2") ➞ -20

function multiplyNums(nums) {
	// input is a string containing numbers
	
	// create return variable
	let result = 1;

    // split the nums up into a list of number elements
    nums = nums.split(", ")

    // iterate through the string
	for(let index = 0; index < nums.length; index++) {
		// check if the current char is a number
		// if it is then append the char to the list as a integer
		if(parseInt(nums[index])){
            result *= nums[index];
        } else {
            result *= 0;
        }
	}
	// return the result
	return result;
}
console.log(multiplyNums("1, 2, 0, 3, 4, 5, 6"));
console.log(multiplyNums("-27, -14, -28, 13, -17"));
