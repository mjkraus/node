//1
//this was our first module
// console.log("hello");

//2
//now we will set the variable greet to the same function, and call it
// var greet = function(){
// 	console.log('Hello!');
// };
// greet();

//3
//the code in the module should not unintentially effect the code in the application
//module is self contained. You can have a variable of the same name in a different module, and they will not affect each other
//how do we make this module available?
var greet = function(){
	console.log('Hello!');
};

//module.exports allows us to share this module.
//this module is now exposing the greet function
module.exports = greet;