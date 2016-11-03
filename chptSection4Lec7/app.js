// function statement

function greet(){
	console.log('hi');
}
greet();

// functions are first-class
// functions are objects, there are special kind of objects in JS
// not giving it the function greet(), giving it the variable because we are asking for the result of greet.

function logGreeting(fn){
	fn();
}
logGreeting(greet); //this returns "hi hi"

//function expression
//this variable now has this function as its value
// this function is anymous because it doesn't have a name. It is just the value of greetMe.
var greetMe = function () {
	console.log("Hi Tony");
}
greetMe();

//its still first class so you can pass it around.
logGreeting(greetMe);

//use a function expression on the fly
logGreeting(function(){
	console.log('Hello Tony!');
});