

// var str = `string`;
// console.log(typeof str);



//  (1) print every characters of the string

// var str = 'siva sankar';
// for (let i = 0; i< str.length; i++) 
// {
//     console.log(str[i]);
// }


// (2)  waft print every characters of the string

// function printChar(str) 
// {for (let i = 0; i < str.length; i++) {

//     console.log(str[i]);
// }

// }
// printChar('chandu,siva sankar')


// (3) waft to count the number of words in the  given string

// function count(str) 
// {
//     let word=0;
//     for (let i = 0; i <str.length; i++) 
//     {
//      if(str[i]==" ")
//      {
//         word++
//      }     
//     }
//     console.log(str!="" ? word+1 : word);
// }
// count('hello world')

// (4) waft print words in the string

// function printWod(str) 
// {
//     let word='';
//       str=str+' ';
//     for (let i = 0; i < str.length; i++) 
//   {

//         if(str[i]!=' ')
//         {
//             word=word +str[i]
//         }
//         else
//         {
//             console.log(word);
//             word=''
//         } 
//     }  
// }
// printWod('hello world hi')


// (5) waft find the given word is present or not


// function findWord(str, word) 
// {
//     var count = 1;
//     var res = 'word is not present';
//     str = str + ' ';
//     let w = ' ';
//     for (let i = 0; i < str.length; i++) 
//     {
//         if (str[i] != ' ')  // not a space concat
//         {
//             w = w + str[i]
//         }
//         else           // char is a space so word has formed 
//         {
//             if (w == word)    // formed word is it same as given word
//             {
//                 res = `word is present in ${count} position`;
//                 break ;                    // break is for first occurence position when we have multiple values
//             }
//             w = ''                       // each time reassaigning w value to empty
//             count++                   // count the number of words
//         }

//     }
//     console.log(res);
// }
// findWord('white board marker pen marker', 'marker')

// (6) waft find the given sub string in the string

// function find(str,subStr) 
// {
//     let res=false;
   
//     for (let i = 0; i < str.length; i++) 
//     {
//         let  newStr='';
//         for (let j = i; j <(i+subStr.length); j++)
//          {
            
//            newStr=newStr+str[j] 
//         }
//                                                    // console.log(newStr); to check how it is working
//         if(newStr==subStr)
//         {
//             res=true;
//             break;
//         }
//     }
//   console.log(res);
  
// }
// find('my name is gunda', 'my n')


// (7) waft find the given sub string in the string and subString index position

// function find(str,subStr) 
// {
//     let result=false;
   
//     for (var i = 0; i < str.length; i++) 
//     {
//         let  newStr='';
//         for (var j = i; j <(i+subStr.length); j++)
//          {
            
//            newStr=newStr+str[j] 
//         } 
//                                                    console.log(newStr); to check how it is working

//         if(newStr==subStr)
//         {
//            result= `The given subString ${subStr} is present from ${i} index position`;
//             break;
//         }
//     }
//   console.log(result);
  
// }
// find("my name is gunda", "is gunda")

// assignment

// (1) there is a string .in that string every word is  stored superately in the new array and new array will be printed

// function createArray(str) 
// {
//     str=str+' ';
//     var word='';
//     strArray=[];
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!=' ')
//         {
//             word=word+str;
        
//         }
//         else{
//             strArray.push(word);   // not working 
//             word='';
//         }
//     }
//     console.log(strArray);
// }
// createArray('longer gap of time')


//  or

// function createArray(str) 
// {
//     str=str+' ';
//     var word='';
//     strArray=[];
//     var j=0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!=' ')
//         {
//             word=word+str[i];
        
//         }
//         else{
//             strArray[j]=(word);
//             j++;
//             word='';
//         }
//     }

//     console.log(strArray);
// }
// createArray('longer gap of time')



// (2)remove the sub string in mainString and print the new arrray

// function createArray(str,splitter) 
// {
//     str=str+splitter;
//     var word='';
//     strArray=[];
//     var j=0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!=splitter)
//         {
//             word=word+str[i];
        
//         }
//         else{
//             strArray[j]=word;
//             j++;
//             word='';
//         }
//     }

//     console.log(strArray);
// }
// createArray('a friend in need is friend indeed','n')



// 05-07-2022
// (1) find the largest word in the sentense

// function largest(str) 
// {
//     str=str+' ';
//     var maxWord='';
//     var maxlength=0;
//     var word='';
//     for (let i = 0; i < str.length; i++) 
//     {
//         if(str[i]!=' ')
//         {
//         word=word+str[i];
//         }
// else{
//     if(word.length > maxlength)     // if we use greater than it gives largest value
//                                       // i f we use greater than equal to gives the largest value last occurence
//    {
// maxlength=word.length;
// maxWord=word;
//    }
//    word='';
// }
//     }
//    console.log(maxWord); 
// }
// largest("my name is shiva shankar")


// find the smallest word in the 

// function smallest(str) 
// {
//     str=str+' ';
//     var minword=str;
//     var minlength=str.length;
//     var word='';
//     for (let i = 0; i < str.length; i++) 
//     {
//        if(str[i]!=' ')
//        {
//         word=word+str[i]
//        }
//        else
//        {
//         if(word.length < minlength)
//         {
//             minlength=word.length
//             minword=word
//         }
//         word='';
//        }
//     }
//     console.log(minword);
// }
// smallest('my name is silver')






















//  in built methods in string

// (1) charAt

// var str='hello everyone';
//                            // it is used to access single character in string
//                            // here it prints baseds on index postion of sting
// console.log(str.charAt(1));// it has only one parameter

// (2)charCodeAt 

// var str='hallo everyone';
//                                 // it gives the  unique code of a charcter
// console.log(str.charCodeAt(1));

// (3) concat()

// var str='hello everyone';
// var b='hi'                 // it conacts the strings. for this we have operator + and method conacat
// console.log(str.concat(b,' how are you')); 

//  (4)endsWith()
//  var str='hello everyone';
//                                    // it checks the given  string present at the end or not
//                                    // it gives boolean value
// console.log(str.endsWith('one'));
       
//     (5) startsWith()
//     var str='hello everyone';
//                                     //
// console.log(str.startsWith('hello'));

// (6) includes()

// var str='hello everyone hi';
//                                   // it checks the given string present any where in the string and  gives the boolean value
// console.log(str.includes('every')); //assingment : try to use includes to find the sub string present the main string or not

// (7) indexOf()

// var str='hello everyone';
//                                   // it gives the index poition where string starts. if word or letter is not present gives the -1
// console.log(str.indexOf('ver'));     

// (8) lastIndexOf()

// var str='hello everyone hello';
//                                      // it gives the last index position. if it not present it gives the -1.
// console.log(str.lastIndexOf('hello'));


// (9) repeat()
// var str='hello everyone';
//                              // the given string is concatinated given number of times 
// console.log(str.repeat(5));

// (10) replace()
// var str='hello everyone';
//                                     // it replace the string with new string
// console.log(str.replace('hello','hi'));

// (11 a)  substring()
// var str='abcdef';
//                                // in strings we dont use slice. instead of slice we use substring here
//                                // it includes the start index and excludes the 2nd parameter(end index postion)
// console.log(str.substring(1,3));
// console.log(str.substring(3));



// (12)substr()

// let a = 'abcdef'        // 1st parameter for start index position 2nd parameter for number of values we want to print
// console.log(a.substr(3,3));
// var str='abcdef';
// console.log(str.substr(3,3));

// (13)

// var str='MY naMe IS silver $'

// console.log(str.toUpperCase(str));
// console.log(str.toLowerCase(str));

// (14)
// var str=' my name is silver '
// console.log(str.trim().length);// start and end space  will be deleted
// console.log(str.length);
//                                         // it wonly work for space is present at beigging and  end it only delete space

//(15)

// var str='my name is silver'

// console.log(str.split(" "));

// // or
// var b=str.split(" ")
// console.log(b)

// var str=' my name is silver '

// console.log(str.length);

// console.log(str);

// console.log(str.trimEnd().length);

// console.log(str);
//  console.log(str.trimStart().length);




















// assignment

// find given string is paindrome or not

// function find(string) 
// {
// var str='';
// for (let i = string.length-1; i>=0; i--) 
// {

//     str=str+string[i]
   
// }
// console.log(str==string ? 'palindrome' :' not a palindrome');
// }
// find('dad')
// find('mad')
// find('1234321')
// find('madam')

// (2) waft to find and replace the word

// function find(str,subStr,replace) 
// {
//     var res='not present';
//     for (var i = 0; i < str.length; i++) 
//     {
//       var word='';
//       for (var j = i; j < (i+subStr.length); j++) 
//       {
//         word=word+str[j];
//       } 
//         if(word==subStr)
//         {
//             res=  str.substring(0,i) +  replace  +  str.substring(j)
//         }
//     }
//     console.log(res);
// }
// find('my name is slvr','slvr','silver')





















