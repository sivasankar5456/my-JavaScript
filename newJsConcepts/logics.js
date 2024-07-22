function alternateCase(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += i % 2 === 0 ? input[i].toLowerCase() : input[i].toUpperCase();
  }
  return output;
}

const input = "welcome";
// const output = alternateCase(input);cl
// console.log(output); // Output: wElCoMe

// rotate array from given index

function rotatedArray(array, index) {
  let arr1 = [];
  let arr2 = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (i >= index) {
      arr2[arr2.length] = array[i];
    } else {
      arr1[i] = array[i];
    }
  }
  let arr = [...arr2, ...arr1];
  console.log(arr);
}
// rotatedArray([1, 2, 3, 4, 5, 6], 2);
function movieZerosToEnd(array) {
  // this is copied from rotatedArray and made little changes
  let arr1 = [];
  let arr2 = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0) {
      arr2[arr2.length] = array[i];
    } else {
      arr1[arr1.length] = array[i];
    }
  }
  let arr = [...arr1, ...arr2];
  console.log(arr);
}
// movieZerosToEnd([4, 0, 5, 0, 1, 0, 3, 0, 12])
// // or

function rotateArray(arr, index) {
  const rotatedArrsingle = [];
  for (let i = 0; i < arr.length; i++) {
    rotatedArrsingle[rotatedArrsingle.length] = arr[(i + index) % arr.length];
    // console.log(i,(i + index) % arr.length)
  }
  // console.log(rotatedArrsingle,arr.length);
}
// rotateArray([1, 2, 3, 4, 5, 6,7], 3);

const str = "1123143215555577777";

function removeDuplicates(str) {
  const convertArr = str.split("");
  const result = convertArr.filter((item, index) => {
    console.log(
      convertArr.indexOf(item) == index,
      convertArr.indexOf(item),
      index
    );
    return convertArr.indexOf(item) == index;
  });
  return result.join("");
}
// console.log(removeDuplicates(str)); //123457

// count the number of digits in given
function countNumberOfDigits(num) {
  // num= String(num)
  // num= JSON.stringify(num)
  // num= num.toString()
  // console.log(num.length,'length')
  var count = 0;
  while (num > 0) {
    num = parseInt(num / 10);
    count++;
  }

  console.log("count: ",count);
}
// countNumberOfDigits(123450);

function reverseEachWordInString(str) {

  let newStr = str.split('').reverse().join('')

  let output = newStr.split(' ').reverse().join(' ')
  console.log(output)
}
reverseEachWordInString('siva sankar')

