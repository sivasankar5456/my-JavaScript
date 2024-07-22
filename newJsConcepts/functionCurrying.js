/*
Function currying in JavaScript is a technique of transforming a function that 
takes multiple arguments into a sequence of functions that each take a single argument. 
This allows for partial application of a function’s arguments, which means you can 
create a new function by fixing some arguments of the original function.

Example
Consider a simple function that adds three numbers:
 */

function add(a, b, c) {
  return a + b + c;
}
/*
Using currying, this function can be transformed into a series of functions that each take one argument:
 */
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

// Usage
const curriedAdd = curryAdd(1)(2)(3); // 6
/*
Explanation
Original Function: The add function takes three parameters and returns their sum.
Curried Function: The curryAdd function takes one parameter and returns another function that takes the next parameter, 
and so on, until all parameters have been provided.
Usage: You call the curried function by successively invoking it with a single argument at a time.
Advantages
Reusability: You can create partially applied functions easily, which can be reused in different contexts.
Readability and Maintainability: Code can become more readable and easier to manage when dealing with functions that have a lot of parameters.
Functional Programming: Currying is a common pattern in functional programming, which JavaScript supports.
Example with ES6 Arrow Functions
Currying can also be implemented using ES6 arrow functions:

*/

const curryAdd = a => b => c => a + b + c;

// Usage
const curriedAdd2 = curryAdd(1)(2)(3); // 6
/*
In this version, each arrow function returns the next function in the sequence, 
ultimately returning the sum when all arguments are provided.

Practical Use Case
Currying can be particularly useful in scenarios where you need to create a set of similar 
functions with some shared configuration:
*/
function multiply(a) {
  return function(b) {
    return a * b;
  }
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
/**
 * 
In this case, double and triple are partially applied versions of the multiply function, 
pre-configured with the values 2 and 3, respectively.
 
 */
document.get
