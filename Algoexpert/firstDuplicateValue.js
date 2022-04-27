// https://www.algoexpert.io/questions/First%20Duplicate%20Value

// O(n) ST Complexity
function firstDuplicateValue(array) {
  // Write your code here.
	let arrHash = {};
	for(let number of array) {
		if(number < 0) continue;
		
		if(!arrHash[number]) {
			arrHash[number] = true;
		} else {
			return number;
		}
	}
	return -1;
	}

console.log(firstDuplicateValue([1, 3, 2, 4, 5, 1]))