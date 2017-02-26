//1
//we want a function that is created and available to us in an immediate and available.
(function () {

	var firstname = 'John';
	console.log(firstname);

}());

var firstname = 'Jane';
console.log(firstname)
//this logs "john jane"

//2
//what if you put line 9 above the function expression?

// var firstname = 'Jane';
// (function () {

// 	var firstname = 'John';
// 	console.log(firstname);

// }());
// console.log(firstname);
//this still logs 'john jane'

//This happens because whatever you create within a function is only protected within that function...within the scope.
//It is scoped to that function, that is intentional. 
//This is faking how a module should be - the console.log gets the first thing that was intended for it. 
//this doesnt affect anything outside of the scope. 

//3
//you can pass variables within this function

// var firstname = 'Jane';
// (function (lastname) {

// 	var firstname = 'John';
// 	console.log(firstname);
//	console.log(lastname);

// }('Doe'));
// console.log(firstname)

//This will log "John Doe Jane"
//How do modules in JS actually work? How can I use it to their full advantage?



