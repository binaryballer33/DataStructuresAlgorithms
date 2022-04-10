// Create a function that takes in a sentence and a character to find. Return an object of each word in the sentence,
//  with the count of the specified character as the value.

// Examples
// findOccurrences("Hello World", "o") ➞ {
//   "hello" : 1,
//   "world" : 1
// }

// findOccurrences("Create a nice JUICY function", "c") ➞  {
//   "create" : 1,
//   "a" : 0,
//   "nice" : 1,
//   "juicy" : 1,
//   "function" : 1
// }

// findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A") ➞ {
//   "an" : 1,
//   "apple" : 1,
//   "a" : 1,
//   "day" : 1,
//   "keeps" : 0,
//   "archeologist" : 1,
//   "away..." : 2
// }

function findOccurrences(str, char) {
	// input is a string of words & a char
	
	// create the return obj
	let letterOccurrencePerWord = {};
	
	// split the input str, turn it into a arr of word strs
	let arrOfWords = str.toLowerCase().split(" ");
	
	// iterate through the arrOfWords
	for(let word of arrOfWords) {
		// check if the word is already in the obj letterOccurrencePerWord
		if(!letterOccurrencePerWord.hasOwnProperty(word)) {
			// add the word to the letterOccurrencePerWord obj
			letterOccurrencePerWord[word] = 0;
			for(let i = 0; i < word.length; i++) {
			    if(word[i] === char) letterOccurrencePerWord[word] += 1;
			}
		}
	}
	
	// output is a obj containing each word from the string as a key
	// and the value being the amount of times that char showed up 
	// in that word
	return letterOccurrencePerWord;
}
console.log(findOccurrences("Hello World", "l"))