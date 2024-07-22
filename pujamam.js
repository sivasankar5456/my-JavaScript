// var x=5;
// for(var a=2;a<=20;a++){
// console.log(x*a);
// }


//(2)

// var a=23;
// if(a%11==0 || a%11==1){
//     console.log(true);
// }else{
//     console.log(false);
// }
//(3)

// var a=9;
// if(a%5==0 && a%3==0){
//     console.log(false);
// }else if(a%5==0 || a%3== 0){
//     console.log(true);
// }else{
//     console.log(false);
// }
//(4)

// var a=2;
// var b=4;
// if(a==6 ||b==6 || a+b==6 || b-a==6 || a-b==6){
//     console.log(true);
// }else{
//     console.log(false);
// }



// function greet(name){
//     console.log("hello",name);
// }
// greet("siva")
// greet("chandu")



// function add(a,b)
// {
//     sum=a+b
//     console.log(sum)
// }
// add(1,2);
// add(29,37)


// function print(a) 
// {
//     for (let i = 0; i < a.length; i++) 
//     {
//       console.log(a[i]);  
//     }
// }
// print('siva')

// function countWord(a) 
// {
//     word=0;

//     for (let i = 0; i < a.length; i++) 
//     {
//        if(a[i]==' '){
//         word++
//        }
        
//     }
//     console.log(a!='' ? word+1 : word);
// }
// countWord('hello world')


// function printWord(str) 
// {
//     str=str+' '
//     let word='';
//     for (let i = 0; i < str.length; i++) 
//     {
//         if(str[i]!=' ')
//         {
//             word=word+str[i]
//         }
//         else{
//             console.log(word);
//             word=' ';
//         }
        
//     }
    
// }
// printWord('hello world hi')

// function findWord(str,word) 
// {
//     var res=`word not present`
//     var count=1;
//     str=str+' '
// let w=' ';
// for (let i = 0; i < str.length; i++) 
// {
//     if(str[i]!= ' ')
//     {
//         w = w+str[i]
//     }
//     else{
//         if(w == word)
//         {
//             res=` word is present at the ${count} position`
//             break;
//         }
//         w='';
//         count++
//     }
// }
// console.log(res);
// }findWord('hello world how are you','world')

// function findsub(str,subStr) 
// {
//   var res=false;
//   for (let i = 0; i < str.length; i++) 
//   {
//    newStr='';
// for (var j = 0; j < (i+subStr.length); j++) 
// {
//     newStr=newStr+str[j]
// }
// if(newStr=subStr)
// {
//     res=`the given substring ${subStr} is present from the ${i}`
//     break;
// }
//   }  
//   console.log(res);
// }
// findsub('my name is gunda','is gunda')


// function createArray(str) 
// {
//     str=str+' ';
//     var word='';
//     let strArray=[];
//     for (let i = 0; i < str.length; i++) 
//     {
//         if(str[i]!=' ')
//         {
//             word=word+str[i]
//         }
//         else{
//             strArray.push(word)
//             word='';
//         }
        
//     }
//     console.log(strArray); 
// }createArray('pen pencil marker choc board')

// var a=10;
// var b=20;
// b=a+b
// a=b-a
// b=b-a
// console.log(a);
// console.log(b);

// var n=13
// if(n%2==0)
// {
//     console.log(n,"even");
// }

// let n=12;
// console.log(n%2==0 ? `${n} even` : `${n} odd`);


// let n=46;
// console.log(n%23==0 ? true: false );

// var a=42;
// if(a%20==0+1 || a%20==0+2)
// {
// console.log(true);
// }else{
//     console.log(false);
// }

// let n=18;
// if(n%20==18 || n%20==19)
// {
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let a=30003;
// let b=103;
// let c=21;
// if(a%10==b%10 || a%10==c%10 || c%10==b%10)
// {
//     console.log(true);
// }else{
//     console.log(false);
// }


// var x=3;
// for (let i = 1; i <= 10; i++) 
// {
//     console.log(x,"*"+i+"=",x*i);
// }

// var x=5;
// for (let i = 1; i <= 100; i++) {
//     if(i%x==0){
//         console.log(i);
//     }
// }

// var x=5;
// let count=0;
// for (let i = 1; i <= 100; i++) {
//     if(i%x==0){
//         count++
//     }
// }
// console.log(count);

// var n=5;
// let res=1;
// for (let i =n; i >=1; i--) {
//     {

//         res=res*n
//     }
    
// }console.log(res);

// let n=5;
// let sum=0;
// for (let i = 1; i <=n; i++) {
//    {
//     sum=sum+i
//    }
// }console.log(sum);

// var n=10;
// let count=0;
// for (let i = 1; i <=n; i++) {
//     if(n%i==0){
//         count++
//     }
    
// }console.log(count==2 ? `${n} is prime number` : 'not a prime number');


// let n=100;
// for (let i = 1; i <= n; i++) 
// {
//     var count=0;
//     for (let j = 1; j <= i; j++) {
//        if(i%j==0)
//        {
//         count++
//        }
//     }
//     if(count==2){
//         console.log(i);
//     }
// }

// var n=5;
// var str="";
// for (let i = 1; i <= n ;i++) {
//    str=str+" * "
//    console.log(str);
// }


// var n=5;
// for (let i = 1; i <= n; i++) {
//     var str="";
//     for (let j = n; j >=i; j--) 
//     {
//        str= str+" * "
        
//     }
//     console.log(str);
// }

// var num=720
// var n=1;
// while (num>n) {
//     num=num/n
//     n++
// }console.log(n);

// var num=12345;
//  var sum=0;
//  while (num>0) {
//     var last=num%10
//     sum=sum+last;
//     num=parseInt(num/10)
//  }
//  console.log(sum);

// var num=1236;
// var rev=0;
// while (num>0) {
//    var last=num%10;
//    rev=rev*10+last;
//    num=parseInt(num/10); 
// }console.log(rev);

// var num=121;
// var temp=num;
// var palindrome=0
// while (num>0) {
//     var last=num%10;
//     palindrome=palindrome*10+last;
//     num=parseInt(num/10)
// }console.log(temp==palindrome ? `${temp} is palindrome` :`not a palindrome` );


// var num=152;
// var power=0;
// var temp=num;
// var sum=0;

// while (num>0) {
//     num=parseInt(num/10)
//     power++
// }
// var num=temp;
// while (num>0) {
//     var last=num%10;
//     sum=sum+last**power;
//     num=parseInt(num/10)
// }console.log(sum==temp ? `${sum} is armostrong` : `not a armstrong number`);

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


// var num=123435;
// var n=3;
// var count=0;
// while (num>0) {
//    var last=num%10;
//     if(last==n)
//     {
//         count++
//     }
//     num=parseInt(num/10);
   
// }console.log(count);

// var num=13;
// var a=0;
// var b=1;
// var sum=0;
// while (sum<num) {
//    sum=a+b;
//    console.log(sum); 
//    a=b;
//    b=sum;
// }



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

// function print(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
    
// }
// print([10,20,30,40])


// function print(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==0)
//         console.log(arr[i]);
//     }
    
// }
// print([10,20,30,40,3,5])

// function print(arr) {
//     var sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         sum=sum+arr[i]
//     }
//     console.log(sum);
// }
// print([10,20,30,40])

// function count(arr) {
//     var even=0;
//     var odd=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==0){
//             even++
//         }else{
//             odd++
//         }
//     }
    
//     console.log(even,"even");
//     console.log(odd,"odd");
// }
// count([1,2,3,4,5,6,7,8,9])

// function find(a,value) {
//     for (let i = 0; i < a.length; i++) {
//        if(a[i]==value){
//         console.log(value,"present");
//        }
//     }
// }
// find([2,3,4,5,6,7,8],5)


// function findMax(a) {
//   var  max=a[0];
//     for (let i = 0; i < a.length; i++) {
//         if(a[i]>max){
// max=a[i]
//         }
//     }
//     console.log(max);
// }
// findMax([23,45,13,2,8,9,10])

// function findMin(a) {
//     var  min=a[0];
//       for (let i = 0; i < a.length; i++) {
//           if(a[i]<min){
//   min=a[i]
//           }
//       }
//       console.log(min);
//   }
//   findMin([23,45,13,2,8,9,10])
  

// function asc(a) {
//     for (let i = 0; i < a.length; i++) {
//        for (let j = i; j < a.length; j++) {
//        if(a[i]>a[j])
//        {
// var temp=a[i];
// a[i]=a[j];
// a[j]=temp;
//        }
//        }
        
//     }
//     console.log(a);
// }
// asc([2,5,1,9,4,7,8])


// function dsc(a) {
//     for (let i = 0; i < a.length; i++) {
//        for (let j = i; j < a.length; j++) {
//        if(a[i]<=a[j])
//        {
// var temp=a[i];
// a[i]=a[j];
// a[j]=temp;
//        }
//        }
        
//     }
//     console.log(a);
// }
// dsc([2,5,1,9,4,7,8,4])

// function reverse(a) 
// {
//     for (let i = 0; i < (a.length-1)/2; i++) {
        
//     }
    

// }
// reverse([1,2,3,4,5])


// function printstr(str) {
    
// for (let i = 0; i < str.length; i++) 
// {
//     console.log(str[i]);
 
// }
// }printstr("siva sankar")

// function countWord(str) {
//     var word=0;
//     for (let i = 0; i < str.length; i++) {
//        if(str[i]==" "){
//         word++
//        }
        
//     }
//     console.log(str!=="" ? word+1 :word);
// }countWord("siva")


// function printWord(str) {
//     str=str+" "
//     var word="";
//     for (let i = 0; i < str.length; i++) {
//        if(str[i]!==" "){
// word=word+str[i]
//        }else{

//            console.log(word);
//            word=""
//        }
//     }
// }printWord("siva sankar chandu")


// function findWord(str,word) {
//     str=str+" ";
//     var w="";
//     var count=1;
//     var res="word is not present"
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]!=" ")
//         {
//             w = w + str[i]
//         }
//         else
//         {
//             if(w==word)
//             {
//                 res=`the given word ${word} is present at the ${count} position`;
//                 break
//             }
//             w="";
//             count++
//         }
//     }
//     console.log(res);
// }
// findWord("pen marker chac pencil dester","chac")


// function findsubstr(str,subStr) 
// {
//     var res=false;
//     for (let i = 0; i < str.length; i++) 
//     {
//         let newStr='';
//         for (let j = i; j < (i+subStr.length); j++) {
//            newStr=newStr+str[j] 
//         }
//         if (newStr==subStr) 
//         {
// res=true;
// newStr='';
            
//         }
        
//     }
//     console.log(res);
// }
// findsubstr('my name is silver','my name')

// function findsubstr(str,subStr) {
//     var res='substring is not present';

//     for (var i = 0; i < str.length; i++) 
//     {  
//         var newStr='';
//      for (var j = i; j < (i+subStr.length); j++) 
//      {
//        newStr=newStr+str[j]
//      } 
//      if (newStr==subStr) 
//      {
//         res=`the given ${subStr} is presnt from the position ${i}`;
      
//      }  
//     }
//     console.log(res);
// }
// findsubstr('my name is silver','is')


//function createArray(str) {
    //     str=str+' ';
    //     var word='';
    //     var newArray=[];
    //     var j=0;
    //     for (let i = 0; i < str.length; i++) {
    //         if(str[i]!==" ")
    //         {
    //             word=word+str[i]
    //         }else{
    //             newArray[j]=word;
    //             word='';
    //             j++
    //         }
    //     }
    //    console.log(newArray); 
    // }
    // createArray('hello world')


// function createArray(str,siva) {
//     str=str+siva;
//     var word='';
//     var newArray=[];
//     var j=0;
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]!==siva)
//         {
//             word=word+str[i]
//         }else{
//             newArray[j]=word;
//             word='';
//             j++
//         }
//     }
//    console.log(newArray); 
// }
// createArray('a friend need is friend indeed','n')


// function findMax(str) 
// {
//     str=str+' ';
//     var maxlength=0;
//     var maxWord=0;
//     word='';
// for (let i = 0; i < str.length; i++) {
    
//     if (str[i]!==' ') 
//     {
//         word=word+str[i]   
//     }
//     else
//     {
//       if(word.length>=maxlength)
//       {
// maxWord=word;
// maxlength=word.length
// }  
// word='';
//     }
// }
// console.log(maxWord);    
// }
// findMax('hello how are you sankar')


// function findMin(str) 
// {
//     str=str+' ';
//     var minlength=str.length;
//     var minWord=str;
//     word='';
// for (let i = 0; i < str.length; i++) {
    
//     if (str[i]!==' ') 
//     {
//         word=word+str[i]   
//     }
//     else
//     {
//       if(word.length<minlength)
//       {
// minWord=word;
// minlength=word.length
// }  
// word='';
//     }
// }
// console.log(minWord);    
// }
// findMin('hello how are you sankar')

// function findsubstr(str,substr) {
//     var res=false;
//     for (let i = 0; i < str.length; i++) {
//        var w='';
//        for (let j = i; j < (i+substr.length); j++) {
//         w=w+str[j]
//        }
//        if (w==substr) {
//         res=true;
//         w='';
//        }
        
//     }console.log(res);
// }findsubstr('my name is gunda','is g')


// function replace(str,subStr,replace) 
// {
//     var res='not present'
    
// for (var i = 0; i < str.length; i++) 
// {
//      var w='';
//      for (var j = i; j < (i+subStr.length); j++) {
//         w=w+str[j]
//      }
//      if(w==subStr)
//      {
// res = str.substring(0,i)+ replace + str.substring(j)
//      }
// }
// console.log(res);
// }
// replace('my name is silvr','silvr','silver')


// function print(a) {
//     var even=0;
//     var odd=0;

//     for (let i = 0; i < a.length; i++) {
//         if(a[i]%2==0)
//         {
//             even++
//         }else{
//             odd++
//         } 
//     }
//     console.log(even);
//     console.log(odd);
// }
// print([2,3,4,5,6,7,8])


// function find(a,b) {
//     var res=false;
// for (let i = 0; i < a.length; i++) 
// {
//     if(a[i]==b){
//         res=true;
//     }
// }
// console.log(res);
// }
// find([1,2,3,4,58,8,9],10)


// function findMax(a) {
    
//     let max=a[0];
//     for (let i = 0; i < a.length-1; i++) {
//         if(a[i]>max)
//         {
//             max=a[i]
//         }
//     }
//     console.log(max);
// }
// findMax([1,2,3,4,56,32,1,7])


// function asc(a) {
    
// for (let i = 0; i < a.length-1; i++) {

//    for (let j = i; j < (i+a.length); j++) {
    
//     if(a[i]>a[j])
//     {
//         var temp=a[i];
//         a[i]=a[j];
//         a[j]=temp
//     }

//    }

// }
// console.log(a);
// }
// asc([23,1,7,45,13,654])

// function dsc(a) {
    
//     for (let i = 0; i < a.length-1; i++) {
    
//        for (let j = i; j < (i+a.length); j++) {
        
//         if(a[i]<a[j])
//         {
//             var temp=a[i];
//             a[i]=a[j];
//             a[j]=temp
//         }
    
//        }
    
//     }
//     console.log(a);
//     }
//     dsc([23,1,7,45,13,654])


// function reverse(a) {
//     var newArray=[];
//     for (let i = a.length-1; i >=0; i--) {
//       for (let j = 0; j < newArray.length; j++) {
//         a[i]=newArray[j]
                              //not working
//       }
//     }console.log(newArray);
// }
// reverse([1,6,3,4])



// function reverse(a) 
// {
//     for (let i = 0; i < (a.length-1)/2; i++) 
//     {
//        var temp=a[i];
//        a[i]=a[a.length-1-i];
//        a[a.length-1-i]=temp;
//     }
//     console.log(a);
// }
// reverse([1,2,5,6])

// var num=5;
// var res=1;
// for (let i = num; i >0; i--) {
//    res=res*i
    
// }
// console.log(res);

// var num=720;
// var n=1;
// while (num>n) 
// {
// num=num/n;
// n++
// }
// console.log(num);

// var num=1234;
// var res=0;
// while (num>0) {
//     var last=num%10;
//     res=res*10+last
//     num=parseInt(num/10)
// }
// console.log(res);


// var num=1234;
// var count=0;
// while (num>0) 
// {
//     num=parseInt(num/10);
//     count++
// }
// console.log(count);


// var num=1234;
// var sum=0;

// while (num>0) {
//     var last=num%10;
//     sum=sum+last;
//     num=parseInt(num/10)
// }console.log(sum);


// var num=121;
// var temp=num;
// var rev=0;
// while (num>0) 
// {
//     var last=num%10;
//     rev=rev*10+last;
//     num=parseInt(num/10);
// }
// console.log(rev==temp ? 'num is palindrome' : 'num is not a palindrome');


// var num=153;
// var temp=num;
// var power=0;
// var sum=0;

// while (num>0) {
//     num=parseInt(num/10)
//     power++
// }
// num=temp;
// while (num>0) {
//     var last=num%10;
//     sum=sum+(last**power);
//     num=parseInt(num/10)
// }
// num=temp;
// console.log(sum==num ? 'given num is armstrong' :'not a armstrong');


// var n=1000;
// for (let num = 1; num <= n; num++) {
    
    
// var temp=num;
// var power=0;
// var sum=0;

// while (num>0) {
//     num=parseInt(num/10)
//     power++
// }
// num=temp;
// while (num>0) {
//     var last=num%10;
//     sum=sum+(last**power);
//     num=parseInt(num/10)
// }
// num=temp;
// if(num==sum){
//     console.log(num);
// }
// }


// var num=13;
// var a=0;
// var b=1;
// var sum=0;
// console.log(a);
// console.log(b);
// while (sum<num) {
//     sum=a+b
//     console.log(sum);
//     a=b;
//     b=sum
    
// }


// var num1=123456;
// var num2=34;
// var n1=num1;
// var n2=num2;
// var div=1;
// var count=0;

// while (num2>0) {
//     count++
//     num2=parseInt(num2/10);
// }
// while (count>0) {
//     div=div*10;
//     count--
// }
// while (num1>0) {
//     var last=num1 % div;
//     if (last==n2) {
       
//         console.log('num is present');
//     }
//     num1=parseInt(num1/10)
// }
















