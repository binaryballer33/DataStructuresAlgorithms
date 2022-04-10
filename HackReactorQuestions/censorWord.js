// Create a function that takes a string and censors words over four characters with *.

// Examples
// censor("The code is fourty") ➞ "The code is ******"

// censor("Two plus three is five") ➞ "Two plus ***** is five"

// censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
// Notes
// Don't censor words with exactly four characters.
// If all words have four characters or less, return the original string.
// The amount of * is the same as the length of the word.

function censor(str) {
	// input is a string of words
	
	// create censoredString variable to return later
	let censoredString = "";
	
	// split the input string w/ space as delimeter into a array of words
	let arrayOfWords = str.split(" ");
	
	// iterate through each element in the array of words
	for(let i = 0; i < arrayOfWords.length; i++) {
		if(arrayOfWords[i].length <= 4) {
			censoredString += arrayOfWords[i] + " "
		} else {
            for(let j = 0; j < arrayOfWords[i].length; j++) {
                censoredString += '*';
            }
		}
	}
	// return a str that censors the words
	return censoredString;
}


// TO GET WHAT THEY WANTED EXACTLY I HAD TO GET MESSY
// function censor(str) {
// 	// input is a string of words
	
// 	// create censoredString variable to return later
// 	let censoredString = "";
	
// 	// split the input string w/ space as delimeter into a array of words
// 	let arrayOfWords = str.split(" ");
	
// 	// iterate through each element in the array of words
// 	for(let i = 0; i < arrayOfWords.length; i++) {
// 		if(arrayOfWords[i].length <= 4) {
// 			if(arrayOfWords[i].length === 1) {
// 				censoredString += arrayOfWords[i]; 
// 				continue;
// 			}
// 			if(i === arrayOfWords.length - 1) {
// 				censoredString += arrayOfWords[i];
// 				continue;
// 			} else {
// 				censoredString += arrayOfWords[i] + " ";
// 			}
// 		} else {
// 			for(let j = 0; j < arrayOfWords[i].length; j++) {
// 				censoredString += '*';
				
// 				if(i === arrayOfWords.length - 1) continue;
// 				if(j === arrayOfWords[i].length - 1) censoredString += " ";
// 			}
// 		}
// 	}
// 	// return a str that censors the words
// 	return censoredString;
// }
console.log(censor("The Code Is Great"))