/**
	NOTE: All documentation follows JSDoc 3 standards
	
	Problem:
		Find the sum of all even numbers in the Fibonacci Sequence that are less than 4 million
*/

/**
	Set the maximum number in the fibonacci sequence.

	Even though this is only used in one location in the file, it is seperate from the calling function
	to easily allow expansion on the code to be able to change this number (e.g. change value via an input
	tag in the html).

	@constant {number}
**/
const MAX_VALUE = 4000000;

/**
	Get the sum of all even numbers in the Fibonacci Sequence, where the sequence numbers are less than
	the maximum value (See @{link MAX_VALUE 'MAXVALUE'}).

	@function getFibonacciEvenSum
	@return {number} The total sum
*/
function getFibonacciEvenSum() {
	// Initialize a variable to track the total sum
	var total = 0;
	// Itterate over all the numbers in the Fibonacci Sequence 
	var list = fibonacci(MAX_VALUE, [1, 2]).forEach( (number) => {
		// If the number is even then add it to the running total
		if (number % 2 === 0) {
			total += number;
		}
	});
	return total;
}

/**
	Get the sequence of numbers in the Fibonacci Sequence

	@function fibonacci
	@param  {number} maxNumber		The number to not exceed in the Fibonacci Sequence
	@param  {array}  collection		The collection of numbers in the Fibonacci Sequence
	@return {array}	 				The Fibonacci Sequence
**/
function fibonacci(maxNumber, collection) {
	// Get the next number that will appear in the sequence
	var nextNumber = collection[collection.length - 2] + collection[collection.length - 1];
	// If the next number does not exceed the maximum number, add the number to the collection
	if (nextNumber <= maxNumber) {
		collection.push(nextNumber)
		fibonacci(maxNumber, collection);
	}
	return collection;
}

// Display the answer in the html document. Format the number to include a comma every 3 digits (for readability)
document.getElementById("q1").innerText = getFibonacciEvenSum().toLocaleString();