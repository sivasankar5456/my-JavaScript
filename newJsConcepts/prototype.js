// // 1. what is prototype
/**
In JavaScript, the prototype is a fundamental concept that allows objects to inherit properties 
and methods from other objects. Every JavaScript object has a prototype, which is itself an object.
All JavaScript objects inherit properties and methods from a prototype. 
* the prototype is used to add methods and properties to a constructor functions and classes 
see the below example 
*/
class Movie {
  constructor(movieName, director) {
    this.movieName = movieName;
    this.director = director;
  }
  getDetails() {
    console.log("movie", this.movieName, "\ndirector", this.director);
  }
}

Movie.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.movieName}`, this.director);
};

let movie1 = new Movie("rrr", "rajamouli");
// movie1.sayHello()
console.log(movie1);
/*
in above example we have getDetails method inside Movie class, so whenever new object 
created from Movie class it can have getDetails method

but when we have created class already but we want add new properties and methods 
to an existing classes we can't add directly so we took help of prototype and add properties and methods to existing classes,constructors,objects,..etc
* here with help of protoype we have attached sayHello method to Movie class.
so objects which are created from Movie class have access to sayHello method
using protoype we can add properties also
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// 2.prototype and __proto__ ?

// example
let str = "siva";
console.log(str.length);

/*
from above example:
in javascript to str length property is coming from __proto_

whenever new string created inside javascript like following happens --> let str= new String('siva') --- like this created
here String() method have prototype which helps to inherit methods and properties(like length, replace(),test()) 
to String() so we can use those methods and perorperties whenever we needed

here __proto_ is same as prototype  
means String() method prototype inherits methods and properties, those methods and propertis to inherit on str varible to use all properties and methods when we needed.
__proto__ copies all properties and methods from prototype and give it str variable
so prototype and __propt__ are same only differences is __protot__ is for str variable which we created 

go to console in browser and type
String.prototype and str.__proto_  compare these to, it gives same results

if you use directly str.prototype i gives undefined

* the above is small example we have given simply understand ___proto__ and prototype. Apply this to above Movie class to understand more.
Movie class have prototype.
movie1 have __proto_
// here __proto__ copies all methods and propertis from prototype give them to movie1 
go to console in browser and type
Movie.prototype and movie1.__proto_ compare these to, it gives same results
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 3. what is prototype chain

/*
Prototype Object:
Every JavaScript object has a prototype. The prototype is also an object.
The prototype object itself can have a prototype, and this forms a prototype chain.

Prototype Chain:
When you access a property or method on an object, JavaScript first looks at the object itself. If it doesn't find the 
property there, it looks at the object's prototype, and so on up the chain until it either finds the property or 
reaches the end of the chain (null).
 */

// // Creating an Object with a Prototype

// Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the prototype
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

// Create an instance of Person
const person1 = new Person('Alice', 30);

// Accessing a property and method
console.log(person1.name); // 'Alice'
person1.sayHello(); // 'Hello, my name is Alice'

/*
In this example:

Person is a constructor function.
Person.prototype is an object that contains the sayHello method.
person1 is an instance of Person and has access to the sayHello method via the prototype chain.
*/

// // Prototype Chain
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

/*
Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a 
class based language. i.e, When you create an object using a constructor function or a class, the created object 
inherits properties from a prototype object.

The prototype on object instance is available through Object.getPrototypeOf(object) or __proto__ property whereas 
prototype on constructor function is available through Object.prototype.

*/


/*
Summary
Prototype: An object from which other objects inherit properties and methods.

Prototype Chain: The chain of prototypes linked together, used to look up properties and methods.

Inheritance: Objects inherit properties and methods from their prototypes, enabling code reuse and extension.

Understanding prototypes is crucial for mastering JavaScript's object-oriented capabilities and effectively using its inheritance model.
*/