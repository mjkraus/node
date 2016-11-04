var person = {
	firstname: 'John',
	lastname: 'Doe',
	greet: function(){
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
};

person.greet();
//run node app.js in command line it outputs "Hello, John Doe"

//You have to use '.' to access the name/value of the object literal. You can use square brackets

console.log(person['firstname']);
//if we run node app.js in command line it outputs John

