// looping statment

// looping statements can be used to execute some set of statments retpeatedly for multiple time.

/* we have 5 SVGUnitTypes
// 1) for loop: when we know the start and end condition clearly we can use for loop.

working: statement of for will be executed unless the end condtion is true,
 and once the end condition  bocomes false for loop will be terminated


 2) while loop 
 3)do while loop
4) for in (will be done in section 3)
 5) for of (will be done in section2)

 */

// (1) print the numbers from 10 to 25

// for (var a=10; a<=25 ; a++)
// {
//     console.log(a);
// }
//    or
// for (var a=10; a<=25 ; a=a+1)
// {
//     console.log(a);
// }


// (2) print the numers from 25 to 1


// for (var a=25; a>=1 ; a--)
//  {
//      console.log(a);
//  }

//     or
// for (var a=25; a>=1 ; a=a-1)
//  {
//      console.log(a);
//  }



//(3) print the table value of 3 from 1 to 10

// for(var a=1; a<=10;a++)
// {
//     console.log(a*3);
// }



//(4) print the table value of given variable from 1 to 10
/*
var x=3;

for(var a=1;a<=10;a++){
    // console.log("3*"+a+"=" ,a*x );
     console.log(x, "*" ,a, "=" ,a*x);
    // console.log(x+ "*" +a+ "=" +a*x);
}
*/
 // (5) print all the even numbers from 1 to 100;

// for(var a=1;a<=100; a++)

// {
// if(a%2==0){
//     console.log(a);
// }
// }


//(6) print all the odd numbers from 1 to 100;

// for(var a=1;a<=100;a++)
// {
   
//     if(a%2!=0){
//         console.log(a);             // here calling printing inside the flower braces

//     }
// }


//(7) print all the numbers which is divisible by x (or) multiple of x from 1 to 100

// var x=5;

// for(var a=1;a<=100; a++)

// {
// if(a%x==0){
//     console.log(a);
// }
// }

//(8) check how many times x value is divisible from 1 to 100 (or) count of numbers which are divisible by x


// var x=3;
// var count=0;
// for(var a=1;a<=100; a++)

// {
// if(a%x==0)
// {
//     count++;
// }
// }
// console.log(count);    // here printing statemaent is outside of flower braces because we have taken count++ inside of braces


//(9) print the factoreal of a number

// var num=5;
// var res=1;

// for(var a=num; a>=1;a--){
    
//         {
//             (res=res*a)
//         }
    
// }
// console.log(res);


//(10) print the summation  of a number



// var num=5;
// var res=0;

// for(var a=num; a>=1;a--){
    
//         {
//             (res=res+a)
//         }
    
// }
// console.log(res);


//prime  it is divisible by 1 && itself only

//(11) print if the number is prime or not

// var num=13;

// var count=0;
// for(var a=1;a<=num;a++)
// {
//     if(num%a==0){
//         count++
//     }
// }
// if(count==2){
//     console.log("given number is prime");
// }
// else{
//     console.log("given is not a prime");
// }

//       or

// var num=13;

// var count=0;
// for(var a=1;a<=num;a++)
// {
//     if(num%a==0){
//         count++
//     }
// }
//  console.log(count==2?"prime number" : "not a  prime");

//   or
// var num=9;

// var count=0;
// for(var a=2;a<=num-1;a++)
// {
//     if(num%a==0){
//         count++
//     }
// }
//  console.log(count==0?"prime number" : "not a  prime number");


// nested for loop : calling for loop inside another for loop is called a nested loop.

//(12) print the prime numbers from 1 to 100

// var num=100;

// for(var a=1;a<=num;a++){
//     var count=0;
// for(var b=1;b<=a;b++)
// {
//     if(a%b==0){
//         count++
//     }
// }
// if(count==2){
//     console.log(a);
// }

// }

//  star printing patterns
//  (13)
// var n=5;
// var str="";

// for(var a=1;a<=n;a++)
// {
//     str=str + " *"
// }
// console.log(str);

// for 10str ten times

// var n=10;

// for(var a=1;a<=n;a++){

//     var str=" ";

// for(var b=1;b<=n;b++)
// {

//     str=str+" * "
// }
// console.log(str);
// }


//pattern 1

// var n=5;
// for(var i=1;i<=n;i++){

// var str="";
// for(var j=1;j<=i;j++){
//     str=str+" * "
// }
// console.log(str);
// }


//pattern 2

// var n=5;

// for(var i=1;i<=n;i++){

//     var str="";
//     for(var j=n;j>=i;j--)
//     {
//         str=str+" * "
//     }
//     console.log(str);
// }

// or

// var n=5;
// for(var i=n;i>=1;i--)
// {
// var str="";
// for(var j=1;j<=i;j++){

//     str=str+"* "
// }
// console.log(str);
// }

// pattern 3

//piramid

// var n=5;
// for(var i=n;i>=1;i--)
// {
//     var str="";
//     for(var j=1;j<=n;j++){
//         j>=i ? str=str+" *": str=str+" ";
//     }
//     console.log(str);
// }

//pattern 3

// var n=5;

// for(var i=n;i>=1;i--)
// {
//     var str="";
//     for(var j=1;j<=n;j++){
//         j>=i ? str=str+" *": str=str+"  ";
//     }
//     console.log(str);
// }

// pattern 4

// var n=5;
// for(var a=1;a<=n;a++){
//     var str="";
//     for(var b=1;b<=n;b++){
//         b>=a ? str=str+" *" :str=str+"  "
//     }
//     console.log(str);
// }


