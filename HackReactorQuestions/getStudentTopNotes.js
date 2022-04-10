// Create a function that takes an array of students and returns an array of their top notes. If the student does not have notes then let's assume their top note is equal to 0.

// Examples
// getStudentTopNotes([
//   {
//     id: 1,
//     name: "Jacek",
//     notes: [5, 3, 4, 2, 5, 5]
//   },
//   {
//     id: 2,
//     name: "Ewa",
//     notes: [2, 3, 3, 3, 2, 5]
//   },
//   {
//     id: 3,
//     name: "Zygmunt",
//     notes: [2, 2, 4, 4, 3, 3]
//   }
// ]) ➞ [5, 5, 4]

function getStudentTopNotes(students) {
	
	// create topNotesArray
	let topNotesArray = [];
	
	// iterate through the array and check each student object
	for (student in students) {
		// grab the array of notes from each student
		notes = students[student].notes;
		
		// create variable top note
		let topNote = 0;
		// if the arrays length === 0  top note = 0
		if(notes.length === 0) topNotesArray.push(0);
		
		// iterate through the students notes
		// find the highest number note, topNote = note
		for(index in notes) {
			if(notes[index] > topNote) topNote = notes[index];
		}
		
		// push topNote to topNoteArray
		topNotesArray.push(topNote);
	}
	return topNotesArray;
}