//there is no greet file, so instead it is going to find the greet folder and look for the index.js file
var greet = require('./greet');

greet.english();
greet.spanish();

//when I run node app.js it console.logs "Hello Hola"