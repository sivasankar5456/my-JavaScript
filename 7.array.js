
// ARRAYS 

// var x=[10,"hello",true,undefined,NaN,null]
// console.log(x);

/* 
ARRAY: using arrays are we can store multiple values in one variable.
To declare array we have array literal  called []

SYNTAX : var arrayName=[value1,value2,.....]
Array in javascript can hold mltiple values
Array in javascript is heterogenious
Array in javascript is not fixed in size.
Array in javasript is flexible.
     Array size can be accessed by length property (arrayName.lenth)

Array values will be stored in one block and each and every values are stored seperately inside
the buckets and those buckets are identified by index positions.

Index starts from 0 and end at lenth-1

//how to access an array 

To access entire array we can call array name.
to access array values seperately,we can use index
postions ex: arrayName[index].

*/

//  var a=[10,20,30,40,50,60,70] 

// console.log(`middle value `,a[(a.length-1)/2] ,`---> index posoision `, (a.length-1)/2); //to get middle element of an array (for odd length only)


// console.log(a);
// console.log(a.length);   //  is used to know lenth of array
// console.log(a.length-1);   //  is used to access last value


// var a = [10, 20, 30, 40, 50];

/*    

 */

// for (var i=0;i<=a.length-1;i++)
// {

//     console.log(a[i]);
// }

// (1) write a funtion to (WATF) print all the values of an array

// function printAll(arr)
// {
// for (let i=0;i<=arr.length-1;i++)
// {
//     console.log(arr[i]);
// }
// }
// var a=[10,20,30,40,50]
// printAll(a)

//    or

// printAll([10,20,30,40,50])  // here without declaration directly given inputs inside printAll



//(2) WATF  print even values of an array.

// function printEven(a){

//     for (let i = 0; i < a.length-1; i++) {

//         if(a[i]%2==0){
//             console.log(a[i]);
//         }

//     }
// }
// printEven([1,2,3,4,5,6,7,8,9,10])

//(3) watf print the sum of all thge values in an array

// function sumOfAll(a) {
//     let sum=0;

//     for(let i=0;i<a.length;i++)
//     {
//         sum= sum + a[i];
//     }

//     console.log(sum);
// }
// sumOfAll([1,2,3]);
// sumOfAll([10,20,30,40])


//(4) watf print the count number of even numbers and odd numbrs in a given array.

// function countEvenOdd(a) {

//     let countEven = 0;
//     let countOdd = 0;
//     for (let i = 0; i < a.length; i++) 
//     {

//         // if(a[i]%2==0)
//         // {
//         //     countEven++;
//         // } 
//         //else
//         //{
//         //     countOdd++;
//         //}

//         // or
//         a[i]%2==0 ? countEven++ : countOdd++
//     }
//     console.log(` the given array has ${countEven} even numbers`);
//     console.log(` the given array has ${countOdd} Odd numbers`);

// }
// countEvenOdd([1, 9, 12, 34, 123, 31, 64, 234, 567, 68, 649])

//(5)  WATF find a given value in an array

// function max(a,value) 
// {
//     let result=-1;
//     for (let i = 0; i < a.length; i++) 
//     {

//      if(a[i]==value)
//      {
//         result=i;
//         break; // if we use break it will give first value, without break it gives last value
//      }  

//     }
//     console.log(result);
// }
// max([2,1,8,4,8,3,9],8)

//(6) find max value

//    function findMax(a)
//    {

//         let max =a[0];
//         for(let i=0;i<a.length;i++)
//         {
//              if(a[i]>= max)
//              {
//                   max=a[i]
//              }
//         }
//         console.log(max);
//    }
//    findMax([2,3,4,34,1,245,76,34])

// (7) find minimum value

// function findMin(a)
// {

//      let min =a[0];
//      for(let i=0;i<a.length;i++)
//      {
//           if(a[i]<= min)
//           {
//                min=a[i]
//           }
//      }
//      console.log(min);
// }
// findMin([2,3,4,34,245,76,345])

// (8) waft sort the array in ascending order

// function asc(a) 
// {
//      for (var i = 0; i<=a.length-2; i++) 
//      {
//           for (var j = i+1; j<a.length; j++) 
//           {
//                if(a[i] >=a[j]) 
//                {
//                     var temp =a[i]
//                     a[i] = a[j]
//                     a[j]=temp
//                }
//           }
//      }
// console.log(a);
// }    
// asc([3,123, 4, 2, 1, 5])
// or

// function asc(a) {
//     for (let i = 0; i < a.length; i++) {
//        for (let j = i; j < a.length; j++) {
//         if(a[i]>=a[j])
//         {
//             var temp=a[i]  // here a value stored
//            a[i]=a[j]   // here a[i] value become a[j]
//             a[j]=temp  // here temp stored in a[j]
//         }
//        } 
//     }
//     console.log(a);
// }
// asc([1,2,3,4,45,90,1000,23,45,123,2000]);

// (9) waft sort the array in decending order


// function dsc(a) 
// {
//      for (var i = 0; i<=a.length-2; i++) 
//      {
//           for (var j = i+1; j<a.length; j++) 
//           {
//                if(a[i] <a[j]) 
//                {
//                     var temp =a[i]
//                     a[i] = a[j]
//                     a[j]=temp
//                }
//           }
//      }
// console.log(a);
// }    
// dsc([3,123, 4, 2, 1, 5])

// or  but with return 

//       
// function dsc(a) 
// {
//      for (var i = 0; i<=a.length-2; i++) 
//      {
//           for (var j = i+1; j<a.length; j++) 
//           {
//                if(a[i] >=a[j]) 
//                {
//                     var temp =a[i]
//                     a[i] = a[j]
//                     a[j]=temp
//                }
//           }
//      }
//      return a;
// }    
// console.log(dsc([3,123, 4, 2, 1, 5]));
// or

//function dsc(a) {
     //     for (let i = 0; i < a.length; i++) {
             
     //         for (let j = i; j < a.length; j++) {
                 
     //             if(a[i]<=a[j])
     //             {
     //                 var temp=a[i];
     //                 a[i]=a[j]
     //                 a[j]=temp;
     //             }
     //         }
     //     }
     //     console.log(a);
     // }
     // dsc([1,34,75,3,108,15,1555,20,567])

// (10) waft reverse an array

// function reverse(a) 
// {
//      for(var i=0;i<=(a.length-1)/2;i++)
//      {
//           var temp=a[i];

//           a[i]=a[a.length-1-i];
          
//           a[a.length-1-i]=temp;
//      }
//      console.log(a);
// }
// reverse([1,2,3,7])

   // or
// function reverse(a)
// {
// for
     
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                   /* some funtions and how it works in array */ /* array inbuilt method */


//// (1)   pop()
// var a =[1,2,3,4,5,6]
//               a.pop()           // pop is used to delete the last element of an array
//               console.log(a);

// console.log( a.pop() );  // --> if we use pop directly inside of console.log it gives the removed 
// //element as out put

// (2)   push()
// var a=[1,2,3,4,5]
//            a.push(7);     // it is used to add an element at end of an array
// console.log(a);           // here you can push more than one element ex console.log(a.push(6,7))
// console.log(a.push());    // --> it will return length of new array

// (3)    shift()
// var a=[1,2,3,4,5]
//   a.shift();       // is used to delete the first element of an array
// console.log(a);    
// console.log(a.shift());        //--> here it return the removed element 

// (4)   unshift()
// var a=[1,2,3,4,5]
// a.unshift(6)       // it adds new element to the start of an array
// console.log(a);
// console.log(a.unshift());


// (5)  includes()
// var a=[1,2,3,4,5]
// const z=a.includes(5)
// console.log(z); // it wont change the original arrray.
//                             // it gives the boolean value if given number is present inside the array
//                             // it give true .if number not present it gives the false.

// (6) indexOf()

//  var a=[1,2,3,4,2,5]

// console.log(a.indexOf(2));  // it will gives the index position.if number dont present it gives the -1 and
// it gives the only first occurence

// (7)  lastIndexOf
// var a=[1,2,3,4,2,5]
// a.lastIndexOf(2);
// console.log(a);
// console.log(a.lastIndexOf());  // it will gives the index position.if number dont present it gives
// the -1 and it gives the only last index position


/* normal function                   anonymous functionn                   arrow function

function  fn_name(p)                          function               | var y=()=>
{                                  |var x=function ()                |{
                                   |                                 | console.log('hello');
}                                  | console.log('hello');           |}
                                   |   }                             |y()
                                   |     x()
                                   | }


*/

// var y=()=> 
// {
//  return 10;
// }          
// console.log(y());

// or 
// var y=()=> 10;
// {
 
// }
// console.log(y());

//      or

// var y=()=>10;
// console.log(y());


//  (8)        reverse()

// var a=[1,2,3,4,5,1]
//  a.reverse();    // it reverse the array. And gives the modified array
// console.log(a);

// (9)  sort()         ---> character sorting

// var a=[100,9,25,3,23,13,5,67]        // it wont work for numbers properly especially for double digits and morethan double digit
// a.sort()
// console.log(a);

// var a=['apple','cat','horse','bull']
// a.sort()                                       // it works for alphabets(characters)
// console.log(a);

// var a=[100,281,106,487,126,56]   // it modifies the original array
// a.sort((x,y)=>{return x-y})           // if you want to sort numbers  you need to give arguments inside sort it can be single are double
// console.log(a);                       // (x,y)=>{return x-y} --> ascending order . if (x,y)=>{return y-x} --> descending order

//   (10) silce()       parameters--> (srtart, end)


 var a=[10,20,30,40,50]     // it is not a modifier
//                        // it slice the elements of array (slice the part of an array) by passing the value inside of console.log(a.slice(2));.
// console.log(a.slice(1,4));// number of values
// // console.log(a.slice(2));
// console.log(a)

//  a.slice(2)   // it is wrong ,it wont work like this
//  console.log(a);
// let z=a.slice(2)   // but like this we can use  based on occation
//  console.log(z);
//  console.log(a);

// var a=[1,2,3,4,5,6,7]              // by parameters start index position and end index position  you can select which part of the array 
// console.log(a.slice(1,4));     // we want to pritnt .   and it has default value

// (11)  splice ()             parameters -->(start,end) // it modifies the original array

// splice is used to -----> add ,replce, remove

// var a=[1,2,3,4,5]            //by using splice you can delete values from any part of the array. 
// a.splice(2)                  // pop is for end , shift is for first but splice anywhere you want by index position
// console.log(a);             // here it is splicing 2 values not index position

// console.log(a.splice(2)); // return 3,4,5


// var a=[10,20,30,40,50,60,70,80]
// a.splice(1,4)               // by parameters start and end position you can delet which part of the array you want to delete by index position
// console.log(a);             // it can delete multiple values


//    adding the values by splice

// var a=[10,20,30,40,50]
// a.splice(4,0,60)               // here we added by using splice.And multiple value can be added.
// console.log(a);                // a.splice(4,0,60) by like this we added value at the 4th index position
//                                // first and second are parameters after that values 



// using splice replacing value

// var a=[10,20,30,40,50,60,70,80]      // here we have replaced 30 value by 25
// a.splice(2,1,25)               
// console.log(a);  

// //  ex
// var a=[10,20,30,40,50]
// a.splice(1,4,75,100)

//  console.log(a); 

// (12)   fill()

// var a=[1,2,3,4,5]     
// a.fill(10,1,3)         // here it has includes the start value and excludes the end value      
// console.log(a);        //and from start position adds given value 10 here
//                          // only one value is repeatedly added

// (13)    toString()

// var a=[10,20,30,40,50]         // originally array is object data type by using to string it converted to string data type
// console.log(a.toString());    // string it wont chnage the data type it just print in string manner
// console.log(typeof(a))         //object
// console.log(typeof a)         //object
 
// to change the data type of array

// a=a.toString();
// console.log(a)
// console.log(typeof(a))         //string

                              // arrow function

// array inbuilt method   in arrow function

/*
1.write a program to multipy 2 with every array element of numbers
 and store them inside new array without effecting original array
*/ 

// var array=[1,2,3,4,5]
// var b=[]
// function multiply() {
//      for (let i = 0; i < array.length; i++) {
//           b[b.length]=array[i]*2;
//      }
//      console.log(array);
//      console.log(b);
// }
// multiply()
/*
2.write a program to convert every elemtn of colors arry
 to uppercase without effecting original array and store in new array
*/

// var colors=['red','white','yellow']
// let newC=[]
// function upercase(params) {
//      for (let i = 0; i < colors.length; i++) {
//           newC[newC.length]= colors[i].toUpperCase();
//      }
//      console.log(newC);
//      console.log(colors);
// }
// upercase()
// to make above kind of operations we have following inbuilt methods to make code simple and faster

// (1)   map()           --> imp for react

// var a= [1,2,3,4,5];

// var b=a.map((val,i,arr)=>{return val*3});
// console.log(b);
// a.map((val,i,arr)=>{return val*3});
// console.log(a); // it won't work like  this because it is not a modifier means it won't change the original array


// var b=a.map((val,i,arr)=>{return val%3==0});
// console.log(b);  here it gives the  false and true for this kind of operations we have filter method



//   (2) filter  ()           --> imp for react

// var a =[1,3,4,6,7,9,10,12,14,15,17,18]
//                                            // it filter the array and return the new array value based on conditons
// var b=a.filter((val)=>{return val%3==0});
// console.log(b);

// var a= [1,2,3,4,5,6,9];

// var b=a.filter((val)=>{return val*3}); here it cant perfom  because we are not filtering anything
// console.log(b);



//  (3) forEach    general syntax--> (a.forEach(v,i,a)=>{})
// var a=[10,20,30,40,50,60]           //first parameter for value 2nd parameter for index valuem 3rd parameter is array itself
// a.forEach((val,y)=>{console.log(val*2,y);}) // here  we can use any letter or word for parameters

// var a=[10,20,30,40,50,60]
//  // first parameter for value 2nd parameter for index value 3rd value for how many times wanted to print by index length
//  a.forEach((val,y,a)=>{console.log(a);})  // here it printed array a times

// instead of for loop we can use for each
// but difference is foreach it has predefined value


// var a=[10,20,30,40,50,60]
// var sum=0;
// a.forEach((val)=>
// {
//      sum=sum+val
// }
// );
// console.log(sum);

// var a=[10,20,30,40,50,60];
// a.forEach(
//      (val,y,z)=>
//      {console.log(val *2,y,z);}
// )

/*here it is exaclty work like the map method but slight change map mthod returns value but forEach returns undefined
example given below. 
we use forEach when we don't have to return any value but perform some operations

*/
// example for diffrence between map and forEach

// var a=[10,20,30,40,50]

// var b=a.map((val,i)=>{
//      return val
// })

// var c=a.forEach((val,i)=>{
//      return val
// })

// console.log(b);
// console.log(c);

 //(4)  some 

//  var a= [1,2,7,6,4,5,8];
//                                           // it works like  OR operator
// var result=a.some((val)=>{return val%3==0});
// console.log(result);


// (5)          every

// var a= [12,24,3,42,3];
//                                                // it work like AND  operator
// var result=a.every((val)=>{return val%3==0});
// console.log(result);










// swaps

// let arr=[10,20,30,40]

// // arr[arr.length]=60
// // or
// // arr.push(60)


// let z=arr[0];
// arr[0]=arr[arr.length-1]
// arr[arr.length-1]=z
// console.log(arr)

// let arr=[10,20,30,40]
// let z=arr[arr.length-1];

// arr[arr.length-1]=arr[0]
// arr[0]=z;

// // arr.unshift(100)
// // or
// arr.splice(0,0,100)

// console.log(arr)

// let a=10;
// let b=20;

// // let arr=[a,b]=[b,a]
// [a,b]=[b,a]


// // console.log(arr)
// // console.log(typeof arr)
// console.log(a)
// console.log(b)

// let a=[10,20,30,40,50]
// console.log(a.slice(1,4))
// // console.log(a)

// let b=[100,200,300,400,500]
// b.splice(1,2,"sdfghj")
// console.log(b)