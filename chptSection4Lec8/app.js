//1
//need to pull the module into app.js 
//we will do this with the JS function require()
//you pass a string to this function - this string contains the location of the module that you wish
//to import or that is used in the app.js file
// the ./ means that it is in the same file as the app.js file
//in command line run "node app.js" and it returns hello!
// require('./greet.js');

//2
// can we call our function from greet.js into app.js?
// require('./greet.js');
// greet();

//Answer: No, if we do this, it returns an error.
//greet is not defined
//this is because the code in greet.js is protected. App.js cannot have access to it unless we want it to.

//3
//We now set our variable = to the results of the function
//the require function will return the module.exports function
//this works because functions are first class and I can set them equal to a variable
//we can remove the .js extension on the end of greet.js because node.js is smart enough to know what we are talking about
var greet = require('./greet');
greet();

//this returns hello!

//How did require and module.exports become available?
//These are created in the node.js core.





