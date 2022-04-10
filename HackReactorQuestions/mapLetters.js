// Given a word, create an object that stores the indexes of 
// each letter in an array.

// Make sure the letters are the keys.
// Make sure the letters are symbols.
// Make sure the indexes are stored in an array and those arrays are values.
// Examples
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

function mapLetters(word) {
	// input is lowercase string 
	
	// create the return object
	let map = {};
	
	// iterate through the string input
	for(let index in word) {
		// make the key the current character
		// add the character to the map object as the key
		let curChar = word[index];
		// if the array value for the key is not already made, make it
		if(map[curChar] === undefined) map[curChar] = [];
		
		// push the index into a array
		map[curChar].push(parseInt(index));
	}
	// output is a object, return it 
	return map;
}

// figure out how to import code using javascript
// console.log(getFrequencies("Megan Dell Pridgen Mandy"));
console.log(mapLetters('Megan Dell Pridgen Mandy'));