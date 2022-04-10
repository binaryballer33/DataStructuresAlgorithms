function replaceVowel(word) {
	// input is a string called word
	
	// create a hash containing the key as the vowel and value as number
	let vowelNumberObject = {"a": 1, "e": 2, "i": 3, "o": 4, "u": 5};
	let returnString = "";
	
	// iterate through the word
	for(let index = 0; index < word.length; index++) {
		// check each char and see if it contains a vowel
		if(word[index] in vowelNumberObject) {
			// replace that word with the corrsponding keys value
			returnString += vowelNumberObject[word[index]];
		} else {
			returnString += word[index];
		}
	}
	
	//output is the same string but with the vowels modified
	return returnString;
}


console.log(replaceVowel('Megan'))