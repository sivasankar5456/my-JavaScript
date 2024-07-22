/*
A generator function in JavaScript is a special type of function that can pause execution 
and resume at a later time. This feature allows for more efficient management of asynchronous 
operations, lazy evaluation, and can be used to create iterators.

Key Characteristics of Generator Functions:
Function Declaration: A generator function is declared using the 
function* syntax (an asterisk * after the function keyword).

Yield Keyword: Inside a generator function, the yield keyword is used to pause the function 
execution and return a value. When yield is called, the function's execution is paused, 
and the yielded value is returned to the caller.

Iterator Interface: Generator functions return a special type of iterator called a Generator. 
This generator adheres to the iterator protocol, meaning it has a next() method that resumes 
execution of the generator function from where it left off.
*/

// Basic Example
// Here’s a basic example to illustrate the use of a generator function:
function* simpleGenerator() {
    yield 'Hello';
    yield 'World';
    yield '!';
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 'Hello', done: false }
console.log(gen.next()); // { value: 'World', done: false }
console.log(gen.next()); // { value: '!', done: false }
console.log(gen.next()); // { value: undefined, done: true }



/*
Explanation:
Declaration: The generator function simpleGenerator is declared with the function* syntax.
Yield: Within the function, yield is used to pause execution and return a value.
Iteration: Calling gen.next() resumes the generator function execution until the next yield 
statement. The next method returns an object with two properties: value (the yielded value) 
and done (a boolean indicating whether the generator has completed).
*/


/*
Practical Use Case: Fibonacci Sequence
*/
function* fibonacciGenerator() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fibGen = fibonacciGenerator();

console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3
console.log(fibGen.next().value); // 5
console.log(fibGen.next().value); // 8

/*
Explanation:
Infinite Loop: The while (true) loop allows the generator to produce an infinite sequence.
Lazy Evaluation: Each call to fibGen.next() computes the next Fibonacci number, 
ensuring values are generated only when needed.
*/

// Advanced Usage: Asynchronous Generators

/*
With the introduction of async iterators in ES2018, JavaScript also supports asynchronous 
generator functions, which use async function* syntax. These functions can await inside 
their bodies and  are useful for handling asynchronous data streams.
*/

async function* asyncGenerator() {
    let i = 0;
    while (i < 3) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
        yield i++;
    }
}

(async () => {
    const asyncGen = asyncGenerator();
    for await (const value of asyncGen) {
        console.log(value); // 0, 1, 2 (each logged after 1 second)
    }
})();
/*
Explanation:
Async Function Declaration: The function is declared with async function*.
Await: await is used to handle asynchronous operations within the generator.
For-await-of Loop: The for await...of loop iterates over the async generator.
Generator functions provide powerful capabilities for handling sequences, asynchronous operations, 
and more, making them a valuable tool in JavaScript development.
*/


