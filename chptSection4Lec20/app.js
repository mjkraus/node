//Person() is my function constructor
//this is an empty object that I can attach things to it
function Person(firstname, lastname) {
	
	this.firstname = firstname;

	this.lastname = lastname;
}

//What about the prototype? the thing that the object john can inherit from.
//this is the prototype that the john object can inherit. I can attach properties and methods to this.
//We now have a greet function on the prototype
//Any object created from the function constructor, its object, will point to the prototype property of the
//function you use to construct the object.
//this is NOT the prototype of Person, this is the prototype of any objects created from Person
Person.prototype.greet = function(){
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
console.log(john.firstname);
//console.logs John.
john.greet(); //this greet function comes from the prototype
//console.logs "John Hello, John Doe"

//this is not recommended to use in production, but you can use this special method from V8 to find the prototype
//of an object
console.log(john.__proto__);
// console.logs "Person { greet: [Function] }"

