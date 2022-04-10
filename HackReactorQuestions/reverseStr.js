// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

// Examples
// reverse("Hello World") ➞ "DLROw OLLEh"

// reverse("ReVeRsE") ➞ "eSrEvEr"

// reverse("Radar") ➞ "RADAr"

function reverse(str) {
	// input is a string 
	
	// create return str
	let reversed_str = "";
	// create a index for the last char in the string
	let last_char = str.length - 1;
	// iterate through the original string
	
	for (let index in str) {
		if(str[last_char] === str[last_char].toUpperCase()) {
			// grab the last char, append it to the reversed_str
			reversed_str = reversed_str + str[last_char].toLowerCase();
		} else {
			reversed_str = reversed_str + str[last_char].toUpperCase();
		}
		// decrement the last_char index
		last_char = last_char - 1;
	}
	// return the retrun str
	return reversed_str;
}