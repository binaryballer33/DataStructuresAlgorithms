// function products(r) {
//     const filtered = Object.entries(r).filter(item => item[1] >= 500);
//     console.log(filtered);
//     const sorted = filtered.sort((a, b)=> b[1] - a[1]);
//     console.log(sorted);
//     return sorted.map(item => item[0]);
// }

// console.log(products({"Computer" : 600, "TV" : 800, "Radio" : 50}))  // ➞ ["TV","Computer"]

// console.log(products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501})) // ➞ ["Bike1", "Bike3"]) 

// console.log(products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20})) // ➞ []

// function products(r) {
// 	let filteredItems = Object.entries(r).filter(item => item[1] >= 500);
// 	let sortedFilteredItems = filteredItems.sort((item1, item2) => item1[1] - item2[2]);
// 	let itemNames = sortedFilteredItems.map(item => item[0]);
//     return itemNames;	
// }

// const products = (r) =>
// 	Object.entries(r)
// 	.sort((a,b) => b[1] - a[1])
// 	.filter(e => e[1] >= 500)
// 	.map(e => e[0])


function products(r) {
	keysSorted = Object.keys(r).sort((a,b) => {
		return r[b]-r[a];
	});
	return keysSorted.filter(element => r[element] >=500);
}

console.log(products({"Computer" : 600, "TV" : 800, "Radio" : 50}))  // ➞ ["TV","Computer"]

console.log(products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501})) // ➞ ["Bike1", "Bike3"]) 

console.log(products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20})) // ➞ []

