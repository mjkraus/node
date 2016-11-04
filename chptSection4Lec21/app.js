// pass by value
function change(b){
	b = 2;
}

var a = 1;
change(a);
console.log(a);
//if we run this it console.logs 1
//why?! - a is a primitive number, when it runs through the function change(), b

//pass by reference
function changeObj(d){
	d.prop1 = function( ) {};
	d.prop2 = {};
} 

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
//if we run this it console.logs { prop1: [Function], prop2: {} }
//this is because the d variable points to the same memory location that c points to
//pass by reference. What ever I did to d effects c
//because its the same object in memory

//node.js takes advantage of this pass by reference when it comes to objects, in regards to how the require module works


