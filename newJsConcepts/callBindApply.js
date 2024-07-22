// note: call, bind, apply are  not applicable on arrow functions. if you use this methods make sure it is normal js function
// 1.what is call, bind, apply 

/*
call:
The call() method is predefined javascript method.
It can be used to invoke with an owner object as an arguments along with arguments provided individually.
With call(), an object can use a method belongs to another object 
*/

function getName(){ // here we have not passed parameters. directly using with this it will work because of call() method
    console.log('==========================call==========================')
    console.log(`name: ${this.fname} ${this.lname}`)
    this.func()
}

let person_={
    fname:'siva',
    lname:'sankar',
    func:()=>{
     console.log('func called')
    }
}
// getName.call(person_)


function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
    console.log('==========================call==========================')
  }
  
  const person = { name: 'Alice' };
  
//   greet.call(person, 'Hello', '!'); // Hello, Alice!
//   In this example, greet is called with this set to person, and the arguments 'Hello' and '!'.

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/*
apply:
The apply method calls a function with a given this value, and arguments provided as an array 
*/

function getName2(city1,city2,city3){
    // console.log('==========================apply==========================')

    console.log(`name: ${this.fname} ${this.lname} \ncities: ${city1}, ${city2}, ${city3}`)
}

let person2={
    fname:'silver',
    lname:'sankar'
}
let cities = ['mumbai', 'pune', 'hyderabad']
// getName2.apply(person,cities)
// getName2.call(person,cities)

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
    // console.log('==========================apply==========================')

  }
  
  const person2_ = { name: 'Bob' };
  
//   greet.apply(person2_, ['Hi', '.']); // Hi, Bob. (unlike call(), here greet and panctuations are sent as an array)

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


/*
bind:
it allows yout to create new function from existing function. 
change the new functions this context and provide any arguments you want 
that new function to be invoked with
*/

function getName3(city){
    console.log('==========================bind==========================')
    console.log(`name: ${this.fname} ${this.lname} \ lives in: ${city}`)
}

let person3={
    fname:'rama',
    lname:'krishna'
}

const bindName = getName3.bind(person3)
bindName('mumbai')

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
    console.log('==========================bind==========================')
  }
  
  const person3_ = { name: 'Charlie' };
  
  const greetPerson = greet.bind(person3_, 'Hey');
  greetPerson('!'); // Hey, Charlie!
  /*
  In this example, greetPerson is a new function with this permanently set to person, 
  and the first argument 'Hey' pre-filled. When greetPerson is called with '!', 
  it completes the call with the pre-filled this and argument.
  */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1.what is the difference between call, bind, apply 

/*
Call: The call() method invokes a function with a given this value and arguments provided one by one

Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

Bind: returns a new function, allowing you to pass any number of arguments

Call and Apply are pretty much interchangeable. Both execute the current function immediately. 
You need to decide whether it’s easier to send in an array or a comma separated list of arguments. 
You can remember by treating Call is for comma (separated list) and Apply is for Array.

Use Cases
call: When you need to invoke a function with a specific this context and arguments immediately.

apply: When you need to invoke a function with a specific this context and arguments, 
especially when arguments are in the form of an array.

bind: When you need a function with a specific this context and some pre-set arguments, which can be called later.

These methods are especially useful in functional programming and event handling, 
where controlling the context (this) is essential.

*/


/*
what is synthetic event in react js

In React, a synthetic event is a cross-browser wrapper around the browser's native event. 
React's synthetic events aim to normalize the behavior of events across different browsers, 
providing a consistent interface that works the same regardless of the environment.
*/












