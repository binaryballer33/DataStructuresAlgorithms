// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// Examples
// isIsogram("Algorism") ➞ true

// isIsogram("PasSword") ➞ false
// // Not case sensitive.

// isIsogram("Consecutive") ➞ false
// Notes
// Ignore letter case (should not be case sensitive).
// All test cases contain valid one word strings.

function isIsogram(str) {
	// input is a string 
	
	// create array to compare each char in the input str against
	let comparisonArray = [];
	
	// make input str lowercase for comparison purposes
	str = str.toLowerCase();
	
	// iterate through the string, append curChar to comparisonArray
	// only append if curChar is not already in comparisonArray
	// if it is then break and return false
	for(let curChar of str) {
		if(comparisonArray.includes(curChar)) {
			return false;
		} else {
			comparisonArray.push(curChar);
		}
	}
	// return boolean
	return true;
}