//constructor

// function constructorFunction(brand,color,price)                     
// {

//     this.brand=brand;  // this key word points the current object
//     this.color=color;
//     this.price=price;
    
// }
// var bike=new constructorFunction('bajaj','black',20000);  // to create the new object we have new keyaword
// console.log(bike);              // here this key word points the bike objects
// console.log(bike.brand);              // here this key word points the bike objects

// var bike2=new constructorFunction('honda','red',40000); // here this keyword pointed the bike2
// console.log(bike2);
// // all of the above is called as constructor

// // we dont use it much.we use object by using object literal literal and by class


//        -----------class------------
// through the constructor function we cant achieve methods

// class class1{
// function sample() 
// {         
//                             //  this is wrong
//     console.log('this is funtion');
    
// }
// }


// class class1{
//      sample() 
//     {                                       // here it is method no need of using function keyword
//         console.log('this is funtion');
//                                              // to use this we need to create object
//     }
//     }

    // you need to give constructor name as constructor istself,it is a keyword
    
/* 

*class defintion:- class in java script is blue print of an object.

*inside the class we can declare properties and methods
we can declare a consturctor function inside the class

*constructor function is a special type of mehtod because it is executed 
automatically when ever we crete an  object of that class.

*since it is execute automatically ,let jus take a help
of consturctor and create type properties for our object

*inside the class function should be declared woithout funtion key word.

*funtion inside the class or object are called as mehtods

*using the class we can create an object by using new key word followed by class name.

syntax:var obj=new calssNAME();



*/

/* 
syntax for class:

class classname 
{
    consturctor(parameter1,parameter2,......)
    {
        this.newProperty =parameter1;
        this.newProperty =parameter2;
    }


method1()
{
    statements
}
method2(prameters)
{
    statements
}
}
*/

// class class1
// {
//     constructor()
//     {
//         console.log("this is constructor function");
//     }
//     sample()
//     {
//         console.log("this is sample function");
//     }
// }
// var c1=new class1()
// console.log(c1)
// c1.sample()

// constructor is called special because it works without invoking it here constructor automatically invoked
// but sample here we need to invoke it

// encapsulation
/* 
encapsulation is preotection for constructor or (functions)methods without touching 
class we cant access the properties  that is encapsulation

*/



// inheritance


// class watsapp1
// {
//     constructor(user)
//     {
//         this.user=user;
    
//     }
//     sendMessage()
//     {
// console.log("send message");
//     }
//     uploadDp()
//     {
//         console.log("profile pic updated");
//     }
// }
// // var gunda=new watsapp1("gunda");

// // console.log(gunda);
// // gunda.uploadDp()
// class watsapp2 extends watsapp1       // single inheritance
// {
//     sendVoiceMessage()
//     {
//         console.log("recording audio to send voice note");
//     }
// }
// // var gunda=new watsapp2("gunda");
// // console.log(gunda);
// // gunda.uploadDp()
// // gunda.sendVoiceMessage()

 // class watsapp3 extends watsapp2         // multi level inheritance
// {
//   voiceCall()
//   {
//     console.log(" make a audio call");
//   }  
// }
// var w3= new watsapp3("silver")
// w3.sendMessage()
// w3.sendVoiceMessage()
// w3.voiceCall()


// super key word 



// class c1{
//     constructor(user){
//         this.user=user;  
//     }
//     sample()
//     {
//         console.log("this is a sample");
//     }
// }

// class c2 extends c1{ 
//     constructor(user,id)
//     {
// super(user); // by this super keyword we are using c1 constructor in c2  this is a herarchical inheritance 
//              // whithout super keyword it can not be done
//              // instead of using this.user=ser; again we use super keyword.
//         this.id=id;
//     }
//     sample2()
//     {
//         console.log("this is a sample of c2");
//     }
// }
// // var a= new c2('gunda',1)
// // console.log(a);
// class c3 extends c2{
//     constructor(user,id,standard){
//         super(user,id,standard)
//         this.standard=standard;
    
//     }
//     sample3()
//     {
//         console.log("this is a sample of c3");
//     }
// }
// var a= new c3('gunda',1,"5th")
// console.log(a);



// class cls1{
//     constructor(a,b,c)
//     {
//       this.a
//     }
// }
// var bike1=new cls1("horse","red",100000);
// console.log(bike1);


// class db{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let person = new db('abc',20)
// console.log(person);



// class cls2{
//     constructor(branda,color,prize)
//     {
//         this.a=branda;
//         this.b=color;
//         this.c=prize;
//     }
// }
// var bike2=new cls2("horse","red",100000);
// console.log(bike2);




// var a="sivasankar";
// var count=0;
// for (var i = 0; i < a.length; i++) 
// {
//     if(a[i]=="a")
//     {
// count++
//     }

// }
// console.log(count);





// for (var i = 0; i < 2; i++) {
    
//     console.log(i);
    
// }
// console.log(i);




// function s(a,b,c) 
// {
//     this.color=a;
//     this.brand=b;
//     this.prize=c;
// }

// var bike=new s("red","pulser",2000000)

// console.log(bike);


// class sib{
    
// constructor(a,b,c)
//     {
//         this.brand=a;
//         this.color=b;
//         this.prize=c;
//     }
// }
// var s = new sib("red","pulser",2000000)
// console.log(s);



// let a = 'abcde'
// let str = a.substr(1,2)
// console.log(str);


// let a=[1,2,3,4];
// let b=[];

// console.log(Boolean (b));
// console.log(Boolean (a));


//  let d1 = new Date();

// console.log(d1.toString());
// console.log(d1.toDateString());
// console.log(d1.toTimeString());


// console.log(d1.toLocaleString());
// console.log(d1.toLocaleDateString());
//console.log(d1.toLocaleTimeString());






















