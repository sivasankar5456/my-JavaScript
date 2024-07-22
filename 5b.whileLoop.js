// (1) for loop

// print the factoreal of a number
// var num=5; 
// var res=1;

// for(var a=num; a>=1;a--){
    
//         {
//             (res=res*a)
//         }
    
// }
// console.log(res);

//  (2) while loop
// 
//while loop can be used when we doesn't know exact number of iterations.
//
//while loop will execute the statements repetedly unless the condition becomes false


//(1) factorial number of given number

// var num=120;
// var n=1;

// while(num>n)
// {
//     num= num / n;
//     n++;
// }

// console.log(n);

//(2) print all the digits in the given number in revrse
//

// var num=7869;

// while(num>0){
// var last=num%10;
// console.log(last);
// //num = parseInt(num/10) 
// // or

//  num =(num-last)/10
// }

//(3) count the number of digits in the given number.

// var num=12345;
// var count=0;
// while(num>0)
// {
// num=parseInt(num/10);
// count++

// }
// console.log(count);

//(4) print the sum of the digits in the given number.

// var num=12356;
// var sum=0;
// while(num>0){
//     var last=num%10
// sum=sum+last;
// num=parseInt(num/10)
// }
// console.log(sum);

//(5) reverse the given number
 
// var num=1234;
// var rev=0;
// while(num>0){
//     var last=num%10;
//     rev=(rev*10)+last;
//     num=parseInt(num/10);
// }
// console.log(rev);

//(6) check wether the given number is palindrome or not (palindrom means if you reverse
// number the number  is same. ex":- 101 palindrome is 101)

// var num=121;
// var tempmemory=num;
// var rev=0;

// while(num>0){
//     var last=num%10;
//     rev=(rev*10)+last;
//     num=parseInt(num/10);
// }
// num=tempmemory;

// console.log(rev==num? "palindrome": "not a palindrome");


// 20-06-2022

//(7) check the number whether it is amstrong or not?

// var num=153;
// var temp=num;
// var power=0;
// var sum=0;

// while(num>0){
//     num=parseInt(num/10);
//     power++
// } 
// num=temp;
// while(num>0){
// var last=num%10;

//     sum=sum+last**power;
//     num=parseInt(num/10)
// }
// num=temp;
// console.log("sum is",sum);
// console.log(num==sum ? "Armstrong number" : "number is not Armstrong number");

//     or
// if(num==sum){
//     console.log(num,"is armstrong");
// }else{
//     console.log(num,"is not armstrong");
// }

//(8) print the armstrong numbers from 1 to 2000.

// var n=2000;
// for(var num=1 ; num<=n;num++){

//     var temp=num;
//     var power=0;
//     var sum=0;

//     while(num>0){
//         num=parseInt(num/10);
//         power++
//     } 
//     num=temp;
//     while(num>0){
//     var last=num%10;
    
//         sum=sum+last**power;
//         num=parseInt(num/10)
//     }
//     num=temp;
//     if(num==sum){
//         console.log(num);
//     }
// }


// (9) check the given digit is present in the number or not


// var num=7699;
// var n=6;
// while(num>0){
// var last=num%10;
// console.log(last==n ? "digit is present" : "")

// num = parseInt(num/10) 
// }

// // or

// var num=12345;
// var n=3;

// while (num>0) {
//    var last=num%10;
//     if(last==n)
//     {
//         console.log(`${n} is present`);
//     }
//     num=parseInt(num/10);
   
// }

// 20-06-2022 assignment
//(10) check the frequency of the given digit in the number.
//(means check  the given number how many times  is present in number)

// var num=235433;
// var count=0;
// var digit=3;
// while(num>0){
//     var last=num%10;
//     if(last==digit){
//         count++;
//     }num=parseInt(num/10);
// }
// // console.log(count);
// //or

// console.log("the digit",digit,"is repeated",count,"times");



//(11) print the fibanocci series upto given number.


// var num=13;
// var a=0;
// var b=1;
// var sum=0;
// console.log(a);
// console.log(b);
// while(sum<num){

// sum=a+b;
// console.log(sum);
// a=b;
// b=sum;
// }

//check the given number num2  is in the num or Not.

//ex: var num1=11232;
// var num2=12    is present in the num1 or not. if 12 is present or if 123 is present print true.


// function search(num1,num2)
// {
// var n1=num1;
// var n2=num2;
// var length=2;
// while(num2>0)
// {
//     num2=parseInt(num2/10)
//     length++;
// }
// while(num1>0)
// {
//     var n1=num1;
//     var count=1
//     var num="";
//     while(count<=length)                       //// not working
//     {
// var  last=n1%10;
// num=last+num;
// n1=parseInt(n1/10);
// count++
//     }
//     if(num==num2)
//     {return true;}
//     num1 =parseInt(num1/10)
// }
// }





//     or

// var num1=123456789;
// var num2=123;
// var count=0;
// var div=1;
// var n1=num1;
// var n2=num2;
// while(num2>0)
// {
//   count++
//   num2=parseInt(num2/10);
// }
// while(count>0)
// {
// div=div*10;
// count--
// }
// while(num1>0)
// {
//     var last=num1%div;
//     if(last==n2)
//     {
//         console.log('the given numer'+n2+'is present in'+n1);
//     }
//     num1=parseInt(num1/10);
// }




