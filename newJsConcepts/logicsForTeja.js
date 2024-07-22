/*
onst input = 'welcome'
const output = 'wElCoMe'
*/

// function convertAlternateToUpperCase(str) {
// // let output='';
//   for (let i = 0; i < str.length; i++) {
//   //  output += i%2==0 ? str[i].toLowerCase() : str[i].toUpperCase()
//   }
//   console.log(i)
//   // console.log(output)
// }
// convertAlternateToUpperCase('welCOME')


// console.log('a');
//  setTimeout(() => {
//   console.log('b');
//  }, 1000);
//  setTimeout(() => {
//   console.log('c');
//  }, 0);
//  console.log('d');



// console.log(a)
// var a=10;
// console.log(a)


// function x() {
//   let num = 11; //x lexical enivoronment + golbal variables
//   function y() {
// // let num =22;
//     function z() {
//       // let num = 33
//       console.log(num);
//     }
//     z();

//   }
//   y();
// }

// x();

// setTimeout(() => {
//   console.log("c");
// }, 0);
// console.log("d");

// function counter() {
//   let count = 0;
//   return function k() {
//     count++;
//     return count;
//   };
// }
// // function k(){
// //  return 'siva'
// // }
// // let c=k;
// // console.log(c())
// let count1 = counter();
// let count2 = counter();
// console.log(count1());
// console.log(count1());

// console.log(count2());
// console.log(count2());
// console.log(counter());
// console.log(counter());

// check given number is prime or not

// function checkPrimeNumber(num) {
//  let count =0;
//   for (let i = num; i > 0; i--) {
//    if(num%i==0){
//     count++
//    }
//   }
//   count == 2 ? console.log(`number ${num} is prime`) : console.log(`number ${num} is not a prime`)
// }
// checkPrimeNumber(1)

function fibanocci(num) {
let a=0;
let b = 1;
let sum=0;
console.log(a)
console.log(b)
while (sum<num) {
 sum = a+b;
 console.log(sum)
 a=b;
 b = sum;
  
}
 
}
fibanocci(100)


