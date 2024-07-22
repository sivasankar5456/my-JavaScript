
// (3)

// var n = 100;

// for (var a = 1; a <= n; a++) {
//     var count = 0;
//     for (var b = 1; b <= a; b++) {
//         if (a % b == 0) {
//             count++
//         }
//     }
//     if (count == 2) {
//         console.log(a);
//     }

// }


// (4)

// function findSubstr(str, subStr) {
//     var res = 'substring is not present'

//     for (let i = 0; i < str.length; i++) {
//         var newStr = '';
//         for (let j = i; j < (i + subStr.length); j++) {

//             newStr = newStr + str[j]
//         }
//         if (newStr == subStr) {
//             res = 'substring is present'
//         }
//     }
//     console.log(res);
// }
// findSubstr('my name is silver', 'is sihg')


//     (5)

// var num = 13;
// var a = 0;
// var b = 1;
// console.log(a);
// console.log(b);
// var sum = 0;
// while (sum < num) {
//     sum = a + b;
//     console.log(sum);
//     a = b;
//     b = sum;

// }

// (6)

// function createArray(str) {
//     str = str + ' '
//     var word = ''
//     var newArray = []
//     var j = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             word = word + str[i]
//         }
//         else {
//             newArray[j] = word
//             j++
//             word = '';
//         }

//     }
//     console.log(newArray);
// }
// createArray('I love learning')


//     (2)


// function revArmstrong(n) {

//     var rev = 0;
//     while (n > 0) {
//         var end = n % 10;
//         rev = rev * 10 + end
//         n = parseInt(n / 10)
//     }

//     var num = rev;
//     var temp = num;
//     var power = 0;
//     var sum = 0;
//     while (num > 0) {
//         num = parseInt(num / 10)
//         power++
//     }
//     num = temp;
//     while (num > 0) {
//         var last = num % 10
//         sum = sum + last ** power;
//         num = parseInt(num / 10)
//     }
//     num = temp;
//     console.log(sum == num ? `The num when reversed to ${rev} it is armstrong number` : 'not armstrong');
// }
// revArmstrong(351)
// revArmstrong(15)


























