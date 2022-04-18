// https://www.algoexpert.io/questions/Caesar%20Cipher%20Encryptor

function caesarCipherEncryptor(string, key) {
  // Write your code here.
	
	let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  let lowerCaseString = string.toLowerCase();
  let encryptedString = [];
	
	key %= alphabet.length;

  let indexOfChar = 0;
  for(let char of lowerCaseString) {
    if(alphabet.includes(char)) {
      indexOfChar += key + alphabet.indexOf(char);
      
      if(indexOfChar >= alphabet.length) {
        indexOfChar -= alphabet.length
        encryptedString.push(alphabet[indexOfChar])
      } else {
        encryptedString.push(alphabet[indexOfChar])
      }
    } else {
      encryptedString.push(char);
    }
    indexOfChar = 0;
  }
  return encryptedString.join("");
}
  
// with the key being 3
console.log(caesarCipherEncryptor("Shaq", 3)); // --> vkdt
console.log(caesarCipherEncryptor("Hello World", 3)); // --> khoor zruog
console.log(caesarCipherEncryptor("ovmqkwtujqmfkao", 52)); // --> ovmqkwtujqmfkao
