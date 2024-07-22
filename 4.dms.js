
//(1)swap

// var a =10;
// var b =20;
// var temp=b;
// b=a
// a=temp
// console.log(a);
// console.log(b);

//swap
// var a= 10;
// var b= 20;
//  a=a+b;
//  b=a-b
// a=a-b
// console.log(a);
// console.log(b);
// (or)

// var a= 10;
// var b= 20;
//  a=a*b;
//  b=a/b
// a=a/b
// console.log(a);
// console.log(b);




// if condition
//(2)
// var num =12;

// if (num%2 == 0) {
//     console.log(true);   
// }
// it will execute only when condition is true (or) if body will execute only when condition is true
// if (number%2 != 0) {
//     console.log(true);   
// }


// (3)write a program to check the given number is even number or odd number


// var a= 13;
// if (a%2 == 0) {
//     console.log(a,"even number");
// } else {
//     console.log(a,"odd number");
// }

//(or)
// var num= 12;
// if (num%2 == 0) {
//     console.log(num+"even number");
// } else {
//     console.log(num+"odd number");
// }

//(4) pritn true if the given number is divisible by 23 , if not print false.

// var num= 46;

// if (num%23 == 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//(5) Return true if the given non-negative number is 1 or 2 more than a multiple of 20.

//more20(20) → false
//more20(21) → true
//more20(22) → true

// var a=42

// if (a%20==1 || a%20==2) {
//     console.log(true);
// } else{
//     console.log(false);
// }


//(6) Return true if the given non-negative number is 1 or 2 less than a multiple of 20.
// So for example 38 and 39 return true, but 40 returns false. 


// less20(18) → true
// less20(19) → true
// less20(20) → false

// var a= 120
// if (a%20==18 || a%20==19) {
//     console.log(true);
// } else {
//     console.log(false);
// }


//(7) Given three ints, a b c, return true if two or more of them have the same rightmost digit. 
// The ints are non-negative.
// lastDigit(23, 19, 13) → true
// lastDigit(23, 19, 12) → false
// lastDigit(23, 19, 3) → true

// var a = 21;
// var b = 15;
// var c = 35;


// if ( a%2 == b%2 || b%2 == c%2 || c%2 == a%2  ) {
//     console.log(true);
// } else {
    
//     console.log(false);
// }

//(8) the number 6 is a truly greay number. Given two itn values, a and b ,
// return true if either one is 6 or if their sum or difference is 6.


// var a =4;
// var b =2;
// if (a==6 || b== 6 || a+b== 6 || a-b== 6 || b-a==6) {
//     console.log(true);
// } else {
//     console.log(false);
// }



 //(9) Given three ints, a b c,retrn true if one of them is 10 or more less than one of the others
 
 //lessBy10(1, 7, 11) → true
 //lessBy10(1, 7, 10) → false
 //lessBy10(11, 1, 7) → true

// var a = 10;
// var b = 1;
// var c = 11;
// if (a-b>=10 || b-c>=10 || c-a>=10 || b-a>=10 || c-b>=10 || a-c>=10 ) {
//     console.log(true);
// } else {
//     console.log(false);
// }


//(10) When squirrels get together for a party, they like to have cigars.
// A squirrel party is successful when the number of cigars is between 40 and 60, inclusive.
// Unless it is the weekend, in which case there is no upper bound on the number of cigars.
// Return true if the party with the given values is successful, or false otherwise.


// cigarParty(30, false) → false
// cigarParty(50, false) → true
// cigarParty(70, true) → true

// var isWeekend=true;
// var cigar= 60;

// if ((cigar>=40 && cigar<=60) || (isWeekend==true && cigar>=40)) {
//     console.log(true);
// } else {
//     console.log(false);
// }


//(11) You and your date are trying to get a table at a restaurant. 
// The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date"
//  is the stylishness of your date's clothes. The result getting the table is 
//  encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish,
//   8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or
//    less, then the result is 0 (no). Otherwise the result is 1 (maybe).


// dateFashion(5, 10) → 2
// dateFashion(5, 2) → 0
// dateFashion(5, 5) → 1

// var you=29
// var date=3


// if(you<=2  ||date<=2){
//     console.log(0);
//   }else if(you>=8 || date>=8) {
//     console.log(2);
//   } else{
//     console.log(1);
//   }

// (13)Return true if the given non-negative number is a multiple of 3 or 5, 
// but not both.


// old35(3) → true
// old35(10) → true
// old35(15) → false

// var n=5

// if (n%3 ==0 && n%5==0){
//   console.log(false);
//   } else  if(n%3==0 || n%5==0){
//   console.log(true);
//   }else{
//   console.log(false);
//   }

//(14) Given a non-negative number "num", return true if num is within 2 of a multiple of 10.
//  Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2. 


// nearTen(12) → true
// nearTen(17) → false
// nearTen(19) → true
  
// if(num%10==0 || num%10==1 || num%10==2 || num%10==8 || num%10==9){
//   console.log(true);
//   }else{
//    console.log(false);
//   }


//(15) The squirrels in Palo Alto spend most of the day playing. In particular, 
// they play if the temperature is between 60 and 90 (inclusive). Unless it is summer,
//  then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer,
//   return true if the squirrels play and false otherwise.


// squirrelPlay(70, false) → true
// squirrelPlay(95, false) → false
// squirrelPlay(95, true) → true
// var isSummer=true;
//var temp=69;

// if((isSummer==false && temp>=60 && temp<=90) || (isSummer==true && temp>=60 && temp<=100)){
//   console.log(true);
// }else{
//   console.log(false);
// }
// (or)

// var temp=75;
// var isSummer=false

// if(!isSummer && temp>=60 && temp<=90){
//   console.log(true);
// } else if (isSummer && temp>=60 && temp<=100){
//   console.log(true);
// }else{
//   console.log(false);
// }

//(16) Your cell phone rings. Return true if you should answer it. Normally you answer,
//  except in the morning you only answer if it is your mom calling. In all cases,
//   if you are asleep, you do not answer.


// answerCell(false, false, false) → true
// answerCell(false, false, true) → false
// answerCell(true, false, false) → false

// if(isAsleep){
//   console.log(false);
// } else if(isMorning && isMom || !isMorning){
//   console.log(true);
// }else{
//   console.log(false);
// }

//(17) You have a blue lottery ticket, with ints a, b, and c on it. This makes three pairs, 
// which we'll call ab, bc, and ac. Consider the sum of the numbers in each pair.
//  If any pair sums to exactly 10, the result is 10. Otherwise if the ab sum is
//   exactly 10 more than either bc or ac sums, the result is 5. Otherwise the result is 0.


// blueTicket(9, 1, 0) → 10
// blueTicket(9, 2, 0) → 0
// blueTicket(6, 1, 4) → 10

// var a=9;
// var b=1;
// var c=0;

// if(a+b==10 || b+c==10 || c+a==10){
//   console.log(10);
// } else if(a+b==10+b+c || a+b==10+c+a ){
//   console.log(5);
// }else{
//   console.log(0);;
// }

//(18) You are driving a little too fast, and a police officer stops you. 
// Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
//  2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive,
//   the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day,
//    your speed can be 5 higher in all cases.


// caughtSpeeding(60, false) → 0
// caughtSpeeding(65, false) → 1
// caughtSpeeding(65, true) → 0

// var isBirthday=true;
// var speed=70:

// if( !isBirthday && speed<=60 || isBirthday && speed<=65){
//   console.log(0);
// }else if (speed>=61 && speed<=80 && !isBirthday || isBirthday && speed<=85){
//   console.log(1);
// }else if(!isBirthday && speed>=81 || speed>=86) {
//   console.log(2);
// }else{
//   console.log(2);
// }

//(19) Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating 
// if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring.
//  Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". 
//  Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".


// alarmClock(1, false) → "7:00"
// alarmClock(5, false) → "7:00"
// alarmClock(0, false) → "10:00"

// var day=5;
// var vacation=true;

// if (vacation && day==0 || vacation && day==6){
//   console.log("off");
//   } else if((!vacation && day==0 || day==6) || (vacation && day>=1 && day<=6)){
//     console.log("10:00");
//   }else if(!vacation && day>=1 && day<=5){
//     console.log("7:00");
//   }else{
//     console.log("invalid day");
//   }
  
//(20) Given a number n, return true if n is in the range 1..10, inclusive.
//  Unless outsideMode is true, in which case return true if the number is less or
//   equal to 1, or greater or equal to 10.


// in1To10(5, false) → true
// in1To10(11, false) → false
// in1To10(11, true) → true

// var n =11;
// var outsideMode=true;

// if(n>=11 && !outsideMode || n<=0 && !outsideMode){
//     console.log(false);
//     } else if(n>=1 && !outsideMode || n<=10 && !outsideMode){
//       console.log(true);
//     }else if(outsideMode && n<=1 || n>=10 && outsideMode) {
//       console.log(true);
//     }else{
//       console.log(false);
//     }

// or
// if(outsideMode && (n<=1 || n>=10)) {
//     console.log(true);
//   }else if(!outsideMode && (n>=1 && n<=10)){
//     console.log(true);
//   }else{
//     console.log(false);
//   }

//(21) We'll say a number is special if it is a multiple of 11 or if it is one more 
// than a multiple of 11. Return true if the given non-negative number is special.
//  Use the % "mod" operator -- see Introduction to Mod


// specialEleven(22) → true
// specialEleven(23) → true
// specialEleven(24) → false


// if(n%11==0 || n%11==1){
//     console.log(true);
//   }else{
//     console.log(false);
//   }

//(22) Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19
//  inclusive, are extra lucky. So if either value is a teen, just return 19.


// teenSum(3, 4) → 7
// teenSum(10, 13) → 19
// teenSum(13, 2) → 19

// var a=13;
// var b=10;


// if(a>=13 && a<=19 || b>=13 && b<=19){
//     console.log(19);
//   }else{
//     console.log(a+b);
//   }

//(23) We are having a party with amounts of tea and candy. Return the int outcome of the party encoded 
// as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. 
// However, if either tea or candy is at least double the amount of the other one, the party is great (2). 
// However, in all cases, if either tea or candy is less than 5, the party is always bad (0).


// teaParty(6, 8) → 1
// teaParty(3, 8) → 0
// teaParty(20, 6) → 2
// var tea =20;
// var candy=40;
// if(tea<5 || candy<5){
//     console.log(0);
//   }else if (tea>=candy+candy || candy>=tea+tea) {
//     console.log(2);
//   }else if (tea==5 || candy==5){
//     console.log(1);
//   }else{
//     console.log(1);
//   }

// ternary  opearator

// syntax:
// (condition)? statement1:statement2
// when statement1 is ge executed if it is false statement2 will be executed
//  it is alternative for only if and else





//print true if given value is in the range 10 to 20;

var a =18;

console.log(a>=10 && a<=20 ?"a is in the range":"a is not in range");

// condition ? statement1 : statment2
// when condition is true statement 1 will be executed
// when condition is false statement2 will be executed

