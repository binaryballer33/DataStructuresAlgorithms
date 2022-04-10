// Create a function that returns the frequency distribution of an array.
// This function should return an object, where the keys are 
// the unique elements and the values are the frequency 
// in which those elements occur.

// Examples
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false])
// ➞ { true: 2, false: 3 }

// getFrequencies([]) ➞ {}

export function getFrequencies(arr) {
	// input is a array
	
	// create a object to store the element, count
	let frequencyObject = {};
	
	// iterate through the input array
	for(let index in arr) {	
		// set the keys to equal the elements in the array
		// no duplicate keys
		let key = String(arr[index]);
		if(key in frequencyObject) {
			// set the values to be equal to 0 and increment it 
			// everytime you see the key
			frequencyObject[key] += 1;
		} else {
			frequencyObject[key] = 1;
		}
	}
	// return is a object with the key being the array elements 
	// and the value being that specific elements count
	return frequencyObject;
}