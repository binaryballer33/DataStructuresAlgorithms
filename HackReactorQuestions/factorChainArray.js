// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// [3, 6, 12, 36]

// // 3 is a factor of 6
// // 6 is a factor of 12
// // 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.

// Examples
// factorChain([1, 2, 4, 8, 16, 32]) ➞ true

// factorChain([1, 1, 1, 1, 1, 1]) ➞ true

// factorChain([2, 4, 6, 7, 12]) ➞ false

// factorChain([10, 1]) ➞ false


function factorChain(arr) {
	for(let index = 0; index < arr.length - 1; index++) {
		// start with the second element in the array
		currentElement = arr[index + 1];
		previousElement = arr[index];
		
		// check if its previous element when divided by the current element
		// === 0, if so it is a factor of the current element
		if(currentElement % previousElement !== 0) {
			return false;
		}
	}
	return true;	
}