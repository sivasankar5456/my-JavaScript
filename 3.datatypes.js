// 1) string combinations
// var a = 10;
// var b ='ten'
                 // string + number = string
                 
// console.log(a+b);

                      
//2)
// var a = true;
// var b ='ten'
                  // string + boolean = string
// console.log(a+b);

// 3)
// var a;
// var b ='ten'
                // string + undefined = string
// console.log(a+b);
// 4)

// var a = '10'
// var b = 'ten'
                  // string + string = string
// console.log(a+b);

//5) number combination
// var a = 10;
// var b = 'ten';
                   // number + string = sting
// console.log(a+b);

// 6)
// var a = 10;
// var b = 20;
                   // number + number = number
// console.log(a+b);

// 7)
// var a = 10;
// var b = true;
            // ( here in js true value = 1 and false value= 0 in arithmetic operations)
            // number + boolean = number
// console.log(a+b);

// 8) 
// var a = 10;
// var b;
          // (here NaN (Not a Number)will be printed)
          // number + boolean = number 
// console.log(a+b);

// 9) boolean combination
// var a = true;
// var b = 'ten'
              // boolean +  string = string
// console.log(a+b);

// 10)
// var a = 10;
// var b = true;
            // ( here in js true value = 1 and false value= 0 in arithmetic operations)
            // number + boolean = number
// console.log(a+b);

// 11)
// var a = true;
// var b = true;
                 // boolean + boolean = number
// console.log(a+b);

// 12)
// var a = true;
// var b;
                // (here NaN (Not a Number)will be printed) 
                // boolean + undefined = number
// console.log(a+b);

// 13)
// var a;
// var b;
            // (here NaN (Not a Number)will be printed) 
            // undefined + undefinfed = number
// console.log(a+b);


// var p =new Promise((resolve, reject)=>{
//     var age=17;
//     if (age>=18) {
//         resolve("he can vote")

//     }else{
//         reject("he can not vote")
//     }

// })

// p
// .then((valueOfresolve)=>{console.log(valueOfresolve);})
// .catch((valueOfreject)=>{console.log(valueOfreject);})

// var a="Y"
// console.log(a.charCodeAt(0));
/*
datatypes: data types are 2
1.primitive data type
2.non-primitive data type
*/ 
// 1.primitive data type=when  it copy every time it creates new memory inside stack memory
/* 

1)string
2)number
3)boolean
4)undifined
5)symbol
6)bigInt

*/

// var a="siva";
// let b=a; // here it creating new memory in that memory b value is storing.
// a="chandu"; // here after re-initialization for a it creating new memory copy becauese it is primitive datatype
// console.log(a);
// console.log(b);

// //2.non-primitive
// //object data tpes

// //2.non-primitive data type = it copies addreses  so it is heap memory
// //in non-premitive datatype you change value anywhere and print anywhere the last changed value printed even before change the value u try to print

// var f={g:10}
// var m=f;
// f.g=20;
// console.log(m);
// console.log(f);


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var c=['something','is','fishy']
// var d=c; // here c addres copied to 'd' also

// let e=[...c] // in spread operator we are storing each value of c seperately so every value stored superately

// c[1]='was';// afer storing seperately we are replacing new value to c[1] index position
// console.log(d);// here it prints 'was' in the place of c[1] because it is a non-primitive datatype here same addres stored 
// console.log(c); // here it prints 'was'
// console.log(e);// here c[1] is printed 'is' because we have stored value in spread opeartor and printing spread operator .when we want to work like
// // primitive datattype we use spreasd operator like this


var a=2
for (var i = 0; i <a; i++) {  // function scope
console.log(i,'inside');    
}
console.log(i,"outside");














