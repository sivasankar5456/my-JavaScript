/* 
destructuring: means we can take out the values of array or string from the index postion where ever we want*/



var a=[10,20,30,40,50];
                     
 var [x,y,...z]=a; // ...z is rest operator // // if combine few  it as a spread operator

 console.log(x);  // x it storing the first value
console.log(y);  // y is storing the nex value
console.log(z);  // rest operator storing the all vlues after x,y

// spread operator

// var a=[10,20,30,];
// var b=[40,50,60,70];
// var c=[...a,...b]  // if combine all it as a spread operator
// console.log(c);

// high order function : the function which accepts another  function as an 
//argument is called as higher order function.

// first order functoin : the fucntion which is sent as an 
//argument for another function is called as first order function.
