// Create a function that takes an array of objects and calculate the total based on the quantity of items purchased.
//  Apply a 6% sales tax for each item when appropriate.

// Examples
// checkout([
//   { desc: "potato chips", prc: 2, qty: 2, taxable: false },
//   { desc: "soda", prc: 3, qty: 2, taxable: false },
//   { desc: "paper plates", prc: 5, qty: 1, taxable: true }
// ]) ➞ 15.3

const tax = .06

function checkout(cart) {
	// create a variable to store the total
	let total = 0;
	
	// iterate through the array of objects
	for(let item = 0; item < cart.length; item++) {
	
		// create a variable for quantity and price
		let quantity = cart[item].qty;
		let price = cart[item].prc;
		
		// multiply the (quantity * price) * tax to get the total per item
		totalPerItem = (quantity * price)
		// only multiply by the tax if the item is taxable
		if(cart[item].taxable === true) totalPerItem *= (tax + 1);
		
		// now add this items total to the total
		total = total + totalPerItem;
	}
	
	// return the total
	return total;
}