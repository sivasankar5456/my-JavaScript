
// oops (object oriented programming  system)

/* object defintion:- 


/ any entity which has properties and behaviours is called as objects 
what is object in java

 object in js is collection of keys and value pairs
 for one key there shoud be a one value

 why do we require object

 to introduce an entity to the virtual world we can ues objects in java script

 to access entire object we call object name

 how to  create object in js
 we can crate the objects in js by using 3 different ways.
 1) object literal
 2) oncstructor funtion
 3) classs


 1) object literal: by using object literal we can declare an object 
 by creatin multiple key and value paris by seperating them using coma(,)
if you want to call the object. you can use object name to call it

2)key: key in an object can be a normal variable or even a string

3)
 
*/

// let i=Math.max()>Math.min();
// let j=Math.min()>Math.max();

// console.log(i);
// console.log(j);

// for creation of object we have object literal that is {curly braces}
/* 
--laptop--
brand - create doc
price - use app
ram - browsing
storage - game use cdoc

-- car --
brand 
price
colour
model
features
*/

// i want to introduce laptop to virtual world
// var laptop = ['HP', 1000, '1TB', '12GB']; // in arrays it correct but oops we use different manner

// with key and value
// var laptop = {        // we are storing different kind of data types.here  storing with key and value
//     brand: 'HP',
//     price:100000,
//     storage:'1TB',
//     RAM: ' 12Gb',
//     'front camera':true,
//     'back-camera': undefined,
//     sensors: ['proxy','finger print'],
//     xyz:NaN,
//     abcd: null,
//     features:{ facelock: 'yes'},  // we are  using object inside this is nested object
//     createDocs:()=>{             // funtion inside of a object we call it as method
//         console.log('creating');
//     }
// }

//  console.table(laptop,laptop.createDocs());  // instead of log we have so many to use in js
                        // // by table it gives the out put as table
// console.log(laptop.RAM); // to call value seprately.
//                       //when object key is a normal variable we can use dot(.) operator and call tyje property
                      // syntax object.variable name

// console.log(laptop['front camera']); // when we have variable as string



// laptop.createDocs(); // if you want to invoke the funtion you need (brackts) to invoke it
//                                // it is method here not function
// console.log(laptop.features.facelock);
// console.log(laptop.sensors);
// console.log(laptop.sensors[1]);

/* 
4)when the key is a normal property access it by using dott(.) or array literal but without braces

5) when key has a valies of funtyion, cal  it by using. operators and  invoke tha method by using()
*/
// how to update an object properties

// console.log(laptop.price);

// laptop.price=50000;
// console.log(laptop.price);  // here it is updated

//how to update inside object in the object



// to delete

// delete laptop.features
// console.table(laptop);  // here it is deleted the features from table.


// add and delete object          --> class

// var obj={
//     x:10,
//     y:30,
// }

// delete obj.x;
// obj.z=20;          // z is added to the obj
// console.log(obj);




//  var b={
//     i:10,
//     j:20,
//     k:30,
//     l:40,
//     m:50
//  }

// for (const x in b) 
// {
    
//    console.log(b[x]);
// //    console.log(x);

//     }


    // var a=[10,20,30,40,50]

    // let i=0;
// for (let x of a) {
// //  console.log(a[x]);  // wrong

// // x=i+=100

//  console.log(x);   
// }

// check diffrence between for in for of

// for (const x in a) {

//  console.log(a[x]);  // her it gives the values

// //  console.log(x);  // here it gives the index position 
// }





// function a() 
// {
//     var x=10;
//     function b() 
//     {
//         //var x=20;             // scope chain means child will access the value of parent here
//         function c()            // gec global execution ennironment
//         {
//             //var x=30;
//             console.log(x);
//         } c()
//     }b()
// }a()

// lexical environment :
//for each and every execution content have its lexical environment
// it is a envirnonment which helps the scope chain to access the parent 


// function find(item) 
// {
//   let products = {};
//   for (let i = 0; i < item.length; i++) 
//   {
//    var present = false;
//    var prod = item[i].product;
//    for (const key in products) 
//    {
//     if(key == prod)
//     {
//       present = true;
//     }
//    }
//    if(present == false)
//    {
//     products[prod] = 1;
//    }
//    else
//    {
//     products[prod] = products[prod] + 1;
//    }
//   }
//   console.log(products);
// }
// find
// ([
//   {product : "tv",no : 20},
//   {product : "ac",no : 30},
//   {product : "tv",no : 120},
//   {product : "ac",no : 130},
//   {product : "fm",no : 100}
// ]);






// function findTotalNum(item)
// {
//     let products = {};
//     for (let i = 0; i < item.length; i++)
//     {
//         var present=false;
//         var prod= (item[i].product);
//         for (const key in products)
//         {
//             if (key==prod)
//             {
//                 present=true;
//             }
//         }
//         if (present==false)
//         {
//              //if key is not present and a new key and a value for that Key is no.
//              products[prod]=item[i].no;
//         }
//         else  //if key is present again add the value of no.
//         {
//             products[prod]=products[prod]+item[i].no;
//             //ex: After Creating a new key for products
//             //    Initially we have - TV:20
//             //If key is present....
//             //products[pro]= 20 + item[2].no
//             //TV= 20 + item[2].no
//             //TV= 20 + 50
//             // TV:70
//         }
//     }
//  console.log(products);
// }
// findTotalNum([{product:"TV", no:20},
//             {product:"AC", no:20},
//             {product:"TV", no:50},
//             {product:"AC", no:120},
//             {product:"FM", no:10},
//             {product:"FM", no:150},
//         ])

// var d1=new Date();
// console.log(d1.toLocaleString());
// console.log(d1.toString());



// promise

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










