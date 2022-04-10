function identicalFilter(arr) {
	// if length of the arr === 1 then return element
	if(arr.length === 1) return arr;
	
	// create return array
	let return_array = [];
	
	// iterate through each string in the arr
	for(string in arr) {
		let currentString = arr[string];
		// if the length of the currentString === 1 push it to the arr
		if(currentString.length === 1) {
			return_array.push(currentString);
			continue;
		}
		
		// iterate through each char in the string
		// every char in the string has to be the same
		// if not the same then don't return it to new array
		for(let char = 0; char < currentString.length - 1; char++) {
			if(currentString[char] !== currentString[char + 1]) {
				break;
			}
			if(char === currentString.length - 2) {
				return_array.push(currentString);
			} 
		}
	}
	if(return_array.length === 0) return []; else return return_array;
}

console.log(identicalFilter(['aaa', 'b', 'ced']));