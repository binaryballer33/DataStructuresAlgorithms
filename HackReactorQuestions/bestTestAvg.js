function getBestStudent(grades) {
	// input is a obj
	
	// create str name variable return
	let nameOfHighTestAvgStudent = "";
    let testAverage = 0;

	
	// iterate through the keys in the object
	for(let name in grades) {
		let gradesArr = grades[name];
		let testTotal = 0;
		
		// get the sum of all the grades for each student
		for(let testValue of gradesArr) {
			testTotal += testValue;
		}
		
		// if this test avg is higher than the last avg change the test avg
		// and save the name of the student
		if((testTotal / gradesArr.length) > testAverage) {
			testAverage = testTotal / gradesArr.length;
			nameOfHighTestAvgStudent = name;
		}
	}
	
	
	// return name
	return nameOfHighTestAvgStudent;
}

console.log(getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80]
}))

console.log(getBestStudent({
    Susan: [67, 84, 75, 63],
    Mike: [87, 98, 64, 71],
    Jim: [90, 58, 73, 86]
}))