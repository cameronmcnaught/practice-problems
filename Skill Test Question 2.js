/**
	NOTE: All documentation follows JSDoc 3 standards

	Problem:
		1) Import the list of names from an external .txt. file
		2) Sort the names in alphabetical order
		3) Calculate the 'score' for that name.
			a) Each letter scores the point value for where it is in the Arabic Alphabet
			   (e.g. 'A' = 1, 'B' = 2, 'C' = 3, etc.)
			b) The total score (based off letters) is multiplied by the position in the 
			   sorted list of names
		4) Display the total score for all names 
**/
/**
	Get the score for the provided name.

	@function getNameScore
	@param  {string} name 		The name to be evaluated
	@param  {number} position 	The current position in the sorted list the name appears at
	@return {number} The score for the name
**/
function getNameScore(name, position) {
	var total = 0;
	name.toUpperCase().split('').forEach(function(letter) {
		total += getLetterValue(letter);
	});
	return total * position;
}

/**
	Ge the value for a letter.

	@function getLetterValue
	@param  {string} letter The letter
	@return {number} The score for the letter
**/
function getLetterValue(letter) {
	var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	return letters.indexOf(letter) + 1;
}

/**
	Get the total score for the entire list of names.

	@function getTotalScore
	@param  {array} list 	The list of names to be calculated
	@return {number} The total score for the provided list
**/
function getTotalScore(list) {
	var total = 0;
	list.forEach(function(name, index){
		total += getNameScore(name, index + 1);
	});
	return total;
}

/**
	The main function run the code in the file.

	@function run
	@param	{string} data 	The contents of the file to be analyzed
**/
function run(data) {
	var list = data.split(',').sort();

	// Display the content in the appropriate section in the html file. Format to include a comma after every 3 digits (for readability)
	document.getElementById('q2').innerText = getTotalScore(list).toLocaleString();
}

/**
	The file input button on the html used to obtain the file path
**/
var fileInput = document.getElementById("fileInput");

/**
	On change to the file input in the html (e.g. file is added),
	read the contents of that file and run the code based on that content
**/
fileInput.addEventListener("change", function() {
	var file = fileInput.files[0];
	var reader = new FileReader();
	var contents = "";

	reader.onload = function(){
		run(reader.result);
	}

	reader.readAsText(file);
});