// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// Examples
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)

function indexMultiplier(arr) {
	// check for edge case per instructions
	if (arr.length === 0) return 0;
	
	// create variable to store the sum
	let sum = 0;
	
	for(index in arr) {
		// multiply the element by its index
		let result = index * arr[index];
		
		// add the result to the sum variable
		sum = sum + result;
	}
	return sum;
}