// (3)
// Given 3 int values, a b c, return their sum. However, if any of the values is
//  a teen -- in the range 13..19 inclusive -- then that value counts as 0,
//   except 15 and 16 do not count as a teens. 

// noTeenSum(1, 2, 3) → 6
// noTeenSum(2, 13, 1) → 3
// noTeenSum(2, 1, 14) → 3
// var a=10;
// var b=10;
// var c=14;

// var ra = a>=13 && a<=19 && a!=15 && a!=16;
// var rb = b>=13 && b<=19 && b!=15 && b!=16;
// var rc = c>=13 && c<=19 && c!=15 && c!=16;

// if(ra==false && rb==false && rc==false){
//     console.log(a+b+c);
// }else if (ra && rb && rc) {
//     console.log(c);
// } else if (ra && rb) {
//     console.log(c);
// } else if (ra && rc) {
//     console.log(b);
// } else if (rb && rc) {
//     console.log(a);
// } else if (ra) {
//     console.log(a+b);
// } else if (rb) {
//     console.log(a+b);
// } else {
//     console.log(a+b);
// } 

//(9)
// We want make a package of goal kilos of chocolate. We have small bars (1 kilo each)
//  and big bars (5 kilos each). Return the number of small bars to use, 
//  assuming we always use big bars before small bars. Return -1 if it can't be done.


// makeChocolate(4, 1, 9) → 4
// makeChocolate(4, 1, 10) → -1
// makeChocolate(4, 1, 7) → 2


// var small=3;
// var big=2;
// var goal=12


// if(small*1+big*5 >=goal && goal%5<=small){
//     if(goal/5 <= big ){
//       console.log(goal%5);
//     }else{
//       console.log(goal-big*5);
//     }
    
// }else{
//    console.log(-1);;
// }



