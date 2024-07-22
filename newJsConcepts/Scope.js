/*
1.what is scope?

In JavaScript, objects and functions are also variables.
Scope determines the accessibility of variables, objects, and functions from different parts of the code.

Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scope:

1)Block scope
2)Function scope
3)Global scope

Block Scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:
*/


/*
Lexical Scope
Lexical scoping means that organizing and accessing variables are controlled by 
where we write our functions and code blocks.

For example, a function that is written inside another function has 
access to the variables of the parent function despite where the function is invoked.

So the lexical scoping means that the scope is defined at the location 
where the variable or function is defined, and not where they run.

Let's check the below example to understand this. 
*/


// const userName = "Peter";
// function sayUserName() {
//   console.log(userName);
// }
// function sayUserNameAgain() {
//   const userName = "Sarah";
//   // Invoke the first function
//   sayUserName();
// }
// sayUserNameAgain(); // Peter
/*
Let's see what has happened here:

When the sayUserNameAgain() function is called, it creates a local variable userName and sets its value as Sarah.
In the next line, the sayUserName() function is called, and sayUserName() function is defined outside the sayUserNameAgain() function.
sayUserName() function logs the userName variable, but userName is not defined in the sayUserName() scope.
So we have to go up one scope to the global scope to get the value of userName which is Peter.
Even though we have userName = "Sarah" right above where the sayUserName() function invokes, we have never accessed that value.
This is because lexical scoping requires us to go where the functions are defined, not where they run.
I hope now you understand what lexical scope is. So let's move on to the scope chain.
*/
/*
 A lexical environment is a data structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function object or primitive value].

Lexical in general means in hierarchy or in a sequence.Whenever a new execution context(EC) is created a new lexical environment  is created and it is referenced in local EC in memory space.

Lexical Environment: Local Memory + Lexical Environment of its Parent

So in short, a lexical environment is a place where variables and functions live or physically present during the program execution.

*/ 
// This is what a lexical environment conceptually look like:
// LexicalEnvironment = {
//     Identifier:  <value>,
//     Identifier:  <function object>
//   }
  
  //code example
  
//   function a() {
//     var b = 10;
//     c();
//     function c() {
//       console.log(b); //it prints the right value. How? See ans below Summary part
//     }
//    }
   
//    a();
//    console.log(b); // now when cursor comes here, it prints NOT DEFINED!
  
  /*
  function c is lexically inside function a. 
  - So in EC of c(), variables and fun in c (none) + reference of lexical env of parent a() is there
  - LE of a() in turn is its memory space + reference to LE of parent (Global EC)
  - LE of Global EC points to its memory space + *NULL* (as no parent for Global EC).
  
  */
/*
Scope Chain
The scope chain is how Javascript looks for variables. When looking for variables through the nested scope, 
the inner scope first looks at its own scope. If the variable is not assigned locally, 
which is inside the inner function or block scope, 
then JavaScript will look at the outer scope of said function or block to find the variable. 
If Javascript could not find the variable in any of the outer scopes on the chain, it will throw a reference error.

Let's take an example and go through this process step by step. Check the below code.
*/
// // Global variable
// const userName = "Peter";
// // Outer function
// function calcAge(birthyear) {
//   const currentYear = 2021;
//   const age = currentYear - birthyear;
//    // inner block
//   if (age <= 60) {
//     var working = true;
//     const message = `${userName} is still employed!`;
//     console.log(message);
//   }
//   // inner function
//   function yearsToRetire() {
//     const retirement = 60 - age;
//     console.log(`${userName} will be retired in ${retirement} years!`);
//   }
//   yearsToRetire();
// }
// calcAge(1975);


/*
In the above example,

We have a global variable called userName.
We have an outer function calcAge(), which is in the global scope.
We have an inner function, yearsToRetire(), nested inside calcAge() function.
Also, we have an if block inside the calcAge() function.
With the above example, let's try to understand how the scope chain works.



First, we have the global scope, which has only one variable, userName. 
There is a function declared in the global scope, which is calcAge(). But to keep things simple, 
let's focus on the variables. And keep in mind that function and variables work the same way in the scope chain.



If you remember, each function creates its own scope. 
So inside the global scope, the first function scope is created with the calcAge() function.

Inside the calcAge() function there are two variables declared, 
which are currentYear and age. Also, we have access to the global variable userName inside the calcAge() function.

If we have any need to access the variable userName inside this function, 
then JavaScript looks inside the calcAge() function to see whether the variable is declared inside the scope. 
When JavaScript can't find it there, it will reach out to the outer scope, that is the global scope.




Next, inside the first scope, there is a second function, yearsToRetire(), 
which also creates its own scope containing the retirement variable set to 60 - age. 
Now we have a nested structure of scopes with one scope inside the other.

We have a string that needs access to userName variable inside this function. 
Since JavaScript cannot find this variable within the local scope, 
it will look up in the scope chain until it finds the variable and uses it.

Also, inside this yearsToRetire() function scope we also have the access to variables inside the caclAge function scope, 
since caclAge is the parent scope and outer scope of yearsToRetire() function.



There is an if block inside the calcAge() function, which has the two variables declared inside that. 
However, as I explained earlier, the variable declared with var is not block scoped. 
So the variable working will be a part of the calcAge() function scope. 
Since the working is in the calcAge() function scope, the yearsToRetire() function scope also has access to it.

The scope chain applies to block scope as well. Therefore, 
the if block scope gets access to all the variables from its outer scope. 
So the block scope can access the variable inside the calcAge() function scope and global scope.

Another important thing to remember is that the if block scope does not have access to any variables 
in the yearsToRetire() function scope, and vice versa. The reason for this is lexical scoping.

The way we can access variables depends on where the scope is placed or where it is written in the code. 
In this scenario, none of these two scopes is written inside one another. 
We could say that they are sibling scopes since they are both child scopes of the calcAge() function scope. 
So, according to the lexical scoping, they cannot access each other's variables. Scope chain only works upwards, 
not sideways.



So this is how the scope chain works. If one scope needs to use a certain variable but cannot find it in the scope, 
it will look up in the scope chain and check whether it can find a variable on one of the outer scopes. 
If the variable is available in the outer scope, then the child scope has the access to it. 
If it is not there in any outer scopes, the JavaScript will throw a reference error. 
So this process is called variable lookup.
*/

/*
JavaScript Closures
Remember self-invoking functions? What does this function do?
*/
// Example
// const add = (function () {
//   let counter = 0;
//   return function () {counter += 1; return counter}
// })();

// add();
// add();
// add();
/*
 ↓
html extension of above code
 ↓

<html>
<body>

<h2>JavaScript Closures</h2>

<p>Counting with a local variable.</p>

<button type="button" onclick="myFunction()">Count!</button>

<p id="demo">0</p>

<script>
const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})();

function myFunction(){
  document.getElementById("demo").innerHTML = add();
}
</script>

</body>
</html>

// the counter is now 3
Example Explained
The variable add is assigned to the return value of a self-invoking function.

The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

A closure is a function having access to the parent scope, even after the parent function has closed.

*/