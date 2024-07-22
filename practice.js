// var n=13;
// var count=0;
// for(var a =1; a<=n; a++)
// {
//     if(n%a==0){
//         count++
//     }
// }
// if(count==2){
//     console.log(n,'is prime');
// }else{
//     console.log(n,'is not prime');
// }
 //or
// var num=14;
// var count=0;
// for(var a=1;a<=num;a++){
// if(num%a==0){
//     count ++
// }

// }
// console.log(count==2 ?'num is prime' :'num is not prime')


// var n=100;
// for(var a=1;a<=n;a++){
//     var count=0;
// for(var b=1;b<=a;b++){
// if(a%b==0){
//     count++
// }
// }
// if(count==2){
//     console.log(a);
// }
// }


//(8) check how many times x value is divisible from 1 to 100 (or) count of numbers which are divisible by x
// var x=3;

// for(var a=1;a<=100;a++)
// {
// if(a%x==0){
//     console.log(a);
// }
// }

//(8) check how many times x value is divisible from 1 to 100 (or) count of numbers which are divisible by x

// var x=3;
// count =0;

// for(var a=1;a<=100;a++)
// {
// if(a%x==0){
//     count++
// }
// }
// console.log(count);

//(9) print the factoreal of a number

// var n=5;
// var res=1;
// for(var a=n;a>=1;a--){
// {
//     res=res*a
// }
// }console.log(res);

//(10) print the summation  of a number

// var n=6;
// var res=0;

// for(var a=n;a>=1;a--){
//     {
//         res=res+a
//     }
// }console.log(res);

//(11) print if the number is prime or not
// var n=80;
// var count=0;
// for(var a=1;a<=n;a++){
// if(n%a==0){
//     count++
// }

// }console.log(count==2 ? "prime": "not prime");
//  //     or
//  if(count==2){
//     console.log(n,"is prime");
// }else{
//     console.log(n,"is not prime");
// }

//(12) print the prime numbers from 1 to 100

// var n=100;
// for(var a=1;a<=n;a++){
//     var count=0;
//     for(var b=1;b<=a;b++){
//         if(a%b==0){
//             count++
//         }
//     }if(count==2){
//         console.log(a);
// }
// }

//  star printing patterns

// var n=10;
// var str="";

// for(var a=1;a<=n;a++){

// str=str+"*"

// }
// console.log(str);

// for 10str ten times

// var n=5;
// for(var a=1;a<=n;a++){
// var str=""
// for(var b=1;b<=a;b++){
// str=str+" *"
// }
// console.log(str);
// }

// pattern 2

// var n=5;

// for(var a=1;a<=n;a++){
//     var str=" "
//     for(var b=n;b>=a;b--){
//         str=str+" *"
//     }
//     console.log(str);
// }

// var n=5;

// for(var a=n;a>=1;a--){
//     var str=" "
//     for(var b=1;b<=n;b++){
//        b>=a ? str=str+" *" :str=str+"  "
//     }
//     console.log(str);
// }


// var n=5;
// for(var a=n;a>=1;a--){
//     var str=""
//     for(var b=1;b<=a;b++){
//         str=str+"*"
//     }
//     console.log(str);
// }

// var n=5;
// for(var a=1;a<=n;a++){
//     var str="";
//     for(var b=1;b<=a;b++){
//         str=str+"*"
//     }console.log(str);
// }

// var n=5;
// for(var a=n;a>=1;a--){
//     var str="";
//     for(var b=1;b<=a;b++){
//         str=str+"*"
//     }console.log(str);
// }

// var n=3;
// for(var a=n;a>=1;a--){
//     var str="";
//     for(var b=1;b<=n;b++){
//         b>=a ? str=str+" *" :str=str+"  "
//     }
//     console.log(str);
// }


// var n=5;
// for(var a=1;a<=n;a++){
//     var str="";
//     for(var b=1;b<=n;b++){
//         b>=a ? str=str+" *" :str=str+"  "
//     }
//     console.log(str);
// }

// var n=3;
// for(var a=1; a<=n;a++){
//     var str=""
//     for(var b=1;b<=a;b++){
//         str=str+"* "
//     }console.log(str);
// }

// var n=2;
// for(var a=n; a>=1;a--){
//     var str=""
//     for(var b=1;b<=a;b++){
//         str=str+"* "
//     }console.log(str);
// }

// var num=720;
// var n=1;
// while(num>n){
//     num=num/n;
//     n++
// }console.log(n);


// var num=123;
// while(num>0){
//     var last=num%10;
//     console.log(last);
//     num=(num-last)/10
// }


// var num=1234;
// var count=0;
// while(num>0){
// num=parseInt(num/10)
// count ++
// }console.log(count);

// var num=12345;
// var sum=0;
// while(num>0){
//     var last=num%10;
//     sum=sum+last;
//     num=(num-last)/10
// }console.log(sum);

// var num=1234;
// var rev=0;
// while(num>0){
//     var last=num%10;
//     rev=(rev*10)+last;
// num=parseInt(num/10);
// }console.log(rev);

// factorial number of given number


// var num=120;
// var n=1;
// while(num>n){
//     num=num/n 
// n++
// }console.log(n);


// print all the digits in the given number in revrse


// var n=123;

// while(n>0){

//     var last=n%10
//     console.log (last);

//     n=parseInt(n/10)
// } 

// reverse given numbers 

// var n=123;
// var rev=0;
// while(n>0){

//     var last=n%10
//     rev=(rev*10)+last
//     n=parseInt(n/10)
// }console.log(rev);


// count the number of digits in the given number.

// var num=1234;
// var count=0;
// while(num>0){

//     num=parseInt(num/10)
//     count++
// }console.log(count);


// var n=5;
// var sum=0;
// for(var a=n;a>=1;a--){
//     sum=sum+a
// }console.log(sum);


// var n=13;
// var count=0;
// for(var a=n;a>=1;a--){

//     if(n%a==0){
//         count++
//     }
// }console.log(count==2 ? "num is prime" : "num is not prime");


// var n=100;
// for(var a=n;a>=1;a--){
//     var count=0;
//     for(var b=1;b<=a;b++){
//         if(a%b==0){
//             count++
//         }
//     } 

// if(count==2){
//     console.log(a);
// }
// }


// var n=5;
// var str="";
// for(var a=1;a<=n;a++){
//     str=str+" * "
// }console.log(str);


// var n=5;
// for(var a=1;a<=5;a++){
//     var str="";
//     for(var b=1;b<=5;b++){
//         str=str+" * "
//     }
// console.log(str);
// }

// var n=5;
// for(var a=1;a<=n;a++){
//     var str="";
//     for(var b=1;b<=a;b++){
//      str=str+" * "
//     }
//     console.log(str);
// }

// var n=5;
// for(var a=n;a>=1;a--){
//     var str="";
//     for(var b=1;b<=a;b++){
//         str=str+" * "
//     }
//     console.log(str);
// }

// var n=5;
// for(var a=n;a>=1;a--){
// var str="";
// for(var b=1;b<=n;b++){
//     str=str+" *"
// }
// console.log(str);
// }

// var n=123;

// while(n>0){

// var last=n%10;
// console.log(last);

// n=parseInt(n/10);
// }


// var num=1234567890;
// var count=0;

// while(num>0){

// num= parseInt(num/10)
// count++


// }console.log(count);

// var num=123456;
// var sum=0;
// while(num>0){
//     var last=num%10;
//     sum=sum+last;
//     num=parseInt(num/10);
// }console.log(sum);

// var num=1234;
// var rev=0;
// while(num>0){
//     var last=num%10;
//     rev=(rev*10)+last;
//     num=parseInt(num/10)
// }console.log(rev);

// var num=120;
// var temp=num;
// var rev=0;
// while(num>0){
//     var last=num%10;
//     rev=(rev*10)+last;
//     num=parseInt(num/10);
// }num=temp;
// console.log(rev==num ? "palindrome" : "not palindrome");

// var num=5;
// var temp=num;
// var power=0;
// var sum=0;
// while(num>0){
//     num=parseInt(num/10)
//     power++
// }num=temp;
// while(num>0){

//     var last=num%10;
//     sum=(last**power)+sum;
// num=parseInt(num/10);
// }num=temp;
// console.log("sum is",sum);
// console.log(sum==num ? "Armstrong":"Not Armstrong");

// var n=2000;
// for(var  num=1;num<=n;num++){

// var temp=num;
// var power=0;
// var sum=0;
// while(num>0){
//     num=parseInt(num/10);
//     power++
// }
// num=temp;
// while(num>0){
//     var last=num%10;
//     sum=sum+last**power;
//     num=parseInt(num/10);
// }
// num=temp;
// if(num==sum){
//     console.log(num);
// }

// }

// var num=122;
// var digit=2;
// while(num>0){
//     var last=num%10
//     console.log(last==digit ? "digit is present" :"");
//     num=parseInt(num/10)
// }
                      // arrays

// function print(a)
// {
//     for(let i=0 ; i<a.length;i++)
//     {
//         console.log(a[i]);
//     }
// }
// print([1,2,3])

// function even(a) 
// {
//     for(let i=0;i<a.length; i++)
//     {
//         if(a[i]%2==0)
//         {
//             console.log(a[i]);
//         }
//     }
// }
// even([12,3,1,24,5,56,4])


// function evenodd(a) 
// {
//     var Even=0;
//     var Odd=0;

//  for(let i=0;i<a.length;i++)
//  {
//     if(a[i]%2==0)
//     {
//         Even++
//     }
//     else
//     {
//         Odd++
//     }
//  }   
//  console.log(` the given array has ${Even} even numbers` );
//  console.log(` the given array has ${Odd} odd numbers` );
// }
// evenodd([1,2,3,4,5,6,7,8,9,10])


// function sumOfAll(a)
// {
//     let sum=1;
//     for(let i=0;i<a.length;i++)
//     {
//         sum=sum+a[i]
//     }
//     console.log(sum);
// }
// sumOfAll([1,2,3,4,5])
// sumOfAll([1,2,3])

// function even(a) {
//     let Even=0;
//     let Odd=0;
//     for(let i=0;i<a.length;i++)
//     {
//         if(a[i]%2==0)
//         {
//             Even++
//         }
//         else{
//             Odd++
//         }
//     }
//     console.log(Even);
//     console.log(Odd);
// }
// even([1,2,3,4,5,6,8])

// function find(a,value)
// {
//     let result=false;
//     for(let i=0;i<a.length;i++)
//     {
//         if(a[i]==value){
            
//         result=true;
        
//         }
        
//     }
//     console.log(result);
// }
// find([1,2,3,4,5,3],3)

// function find(a,value) {
// let result=-1;
//     for(let i=0 ; i<a.length;i++)
//     {
//         if(a[i]==value){
//         result = i;
//         }
//     }
//     console.log(result)
// }
// find([1,2,3,4,5],3)


// function printALl(a) 
// {
//  for (let i = 0; i< a.length; i++) 
//  {
  
//     console.log(a[i]);
//  }   
// }
// printALl([1,2,34,5])



// function printEven(a) 
// {
//     for (let i = 0; i < a.length; i++) {
//        if(a[i]%2==0)
//        {
//         console.log(a[i],'even');
//        }
        
//     }
// }
// printEven([1,2,3,4,5,6,7,8])

// function sumAll(a) 
// {
//     let sum=0;
//     for (let i = 0; i < a.length; i++) 
//     {
//        sum=sum+a[i]
//     }
//     console.log(sum);
    
// }
// sumAll([10,20,30,40])
// sumAll([3,4,8,10])


// function countEvenOdd(a) 
// {
//     let even=0;
//     let odd=0;
//     for (let i = 0; i < a.length; i++) {
//        if(a[i]%2==0)
//        {
//         even++
//        }
//        else
//        {
//         odd++
//        }
//     }
//     console.log(odd,'odd');
//     console.log(even,'even');
// }
// countEvenOdd([1,2,3,4,5,6,7,8,9])

// function findValue(a,val) 
// {  
//     let result=-1;
//     for (var i = 0; i < a.length; i++) 
//     {
//         if(a[i]==val)
//         {
//            result=a[i]
     
//         }
        
//     }
//     console.log(result);
// }
// findValue([1,2,3,6,4,5,6,1],3)

// function findMax(a) 
// {
//     let max=a[0];
//     for (let i = 0; i < a.length; i++) 
//     {
//        if(a[i]>=max)
//        {
//         max=a[i]
//        }
//     }
//     console.log(max);
// }
// findMax([1,20,4,30,5])


// function findMax(a) 
// {
//     let min=a[0];
//     for (let i = 0; i < a.length; i++) 
//     {
//        if(a[i]<=min)
//        {
//         min=a[i]
//        }
//     }
//     console.log(min);
// }
// findMax([20,4,30,5])

// var str='siva sanakar';
// for (let i = 0; i < str.length; i++) 
// {
    
//     console.log(str[i]);
// }

// function print(a) 
// {

//     for (let i = 0; i < a.length; i++) 
//     {
        
//         console.log(a[i]);
//     }
    
// }
// print('siva sankar')


// function count(str) 
// {
//     let word=0;
//     for (let i = 0; i < str.length; i++) 
//     {
//         if(str[i]==' ')
//         {
//             word++
//         }
//     }
//     console.log(str!='' ? word+1 : word); 
// }
// count('hello my dear')


// function printWord(str) 
// {
//     word='';
//     str=str+' ';
//     for (let i = 0; i < str.length; i++) 
//     {
//     if(str[i]!=' ')
//     {
//         word=word+str[i]
//     }   
//        else
//        {
//         console.log(word);
//         word='';
//        } 
//     } 
// }
// printWord('hello word')

// function findWord(str,word) 
// {
//    var count=1;
//    var res='word is not present';
//    str=str+' ';
//    var w='';
//    for (let i = 0; i < str.length; i++) 
//    {
//     if(str[i]!= ' ')
//     {
//         w = w + str[i];
//     }
//     else
//     {
//         if(w == word)
//         {
//             res=` word is present in ${count} position`;
            
//         }
//         w='';
//         count++
//     }
//    }
//    console.log(res);
// }
// findWord('shankar chandu shiva','shiva')

// function findWord(str,word) 
// {
//     var res ='word is not found';
//     var count=1;
//     str=str+' ';
//     var w=' ';
//     for (let i = 0; i < str.length; i++) 
//     {
// if(str[i]!=' ')
// {
//     w=w + str[i];
// }
// else{
//     if(w==word)
//     {
//         res=` word is present in ${count} position`;
//         break;
//     }
//     w='';
//     count++
// }    
//     }
//     console.log(res);

// }
// findWord('siva sankar chandu sekhar chandu','chandu')

// function find(str,subStr) 
// {
//     let res=false;
//     for (let i = 0; i < str.length; i++) {
//         let newStr='';
//         for (let j = i; j < (i+subStr.length); j++) 
//         {
//             newStr=newStr+str[j];
//         }
//         if(newStr==subStr)
//         {
// res=true;
// break;
//         }
        
//     }
//     console.log(res);
// }
// find('my name is silver','my n')


// function find(str,subStr) 
// {
//   var  res='not present';
//   for (let i = 0; i < str.length; i++) 
//   {
//     let newStr='';
//     for (let j = i; j < (i+subStr.length); j++) {
//     newStr=newStr+str[j];
//     }
//     if(newStr==subStr)
//     {
//         res=`the given substring ${subStr} is present from ${i} index position`;
//         break;
//     }
//   }
//     console.log(res);
// }
// find('my name is silver','is silver')

// function largest(str) 
// {
//    str=str+' ';
//    var maxWord='';
//    var maxlength=0;
//    var word='';
//    for (let i = 0; i < str.length; i++) {
//     if(str[i]!=' ')
//     {
//         word=word+str[i]
//     }
//     else
//     {
// if(word.length>maxlength)
// {
//     maxlength=word.length;
//     maxWord=word;
// }
// word='';
//     }
    
//    }
//    console.log(maxWord);
// }
// largest('my name is shiva shankar')


// function smallest(str) 
// {
//    str=str+' ';
//    var minWord=str;
//    var minlength=str.length;
//    var word='';
//    for (let i = 0; i < str.length; i++) {
//     if(str[i]!=' ')
//     {
//         word=word+str[i]
//     }
//     else
//     {
// if(word.length<minlength)
// {
//     minlength=word.length;
//     minWord=word;
// }
// word='';
//     }
    
//    }
//    console.log(minWord);
// }
// smallest('my name is  shiva shankar')

// function createArray(str) 
// {
//     str=str+' ';
//    var word='';
//     var newArray=[];
//     for (let i = 0; i < str.length; i++) 
//     {
//        if(str[i]!=' ')
//        {
//         word=word+str[i]
//        }
//        else
//        {
// newArray.push(word);
// word='';
//        }
//     }
//     console.log(newArray);
// }
// createArray('hello my name is silver')

// function createArray(str) 
// {
//     str=str+' ';
//    var word='';
//     var newArray=[];
//     var j=0;
//     for (let i = 0; i < str.length; i++) 
//     {
//        if(str[i]!=' ')
//        {
//         word=word+str[i]
//        }
//        else
//        {
// newArray[j]=(word)
// j++;
// word='';
//        }
//     }
//     console.log(newArray);
// }
// createArray('hello my name is silver')

// function removeChar(str,splitter) 
// {
//     str=str+splitter;
//     var word='';
//     var newArray=[];
    
//     for (let i = 0; i < str.length; i++) 
//     {
//         if(str[i]!=splitter)
//         {
//             word=word+str[i];
//         }
//         else{
//             newArray.push(word)
//             word='';
//         } 
//     }
//     console.log(newArray);
// }
// removeChar('a friend in need is friend indeed','n')

// find  given stirng is palindrome or not

// var string='dad'
// var str='';
// var temp=string;
// for (let i = string.length-1; i>=0; i--) 
// {

//     str=str+string[i]
//     string=temp;
    
// }
// console.log(str==temp ? 'palindrome' :' not a palindrome');

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


// function find(str,subStr) 
// {
//     var res='not present';
//     for (let i = 0; i < str.length; i++) 
//     {
//       var newStr='';
//       for (let j = i; j < (i+subStr.length); j++) 
//       {
//         newStr=newStr+str[j];

//       } 
//         if(newStr==subStr)
//         {
//             res=`the given substring ${subStr} is present from ${i} index`
//             break;
//         }
//     }
//     console.log(res);
// }
// find('my name is silver','e is')

//str.replace(str[j],Replace);
// replace the word in given string

// function change(str,subStr,Replace) 
// {
//     var res='word not found';
//     for (let i = 0; i < str.length; i++) 
//     {
//         var newStr='';
//         for (var j = i; j < (i+subStr.length); j++) 
//         {
//             newStr=newStr+str[j];  
//         }
//         if(newStr=subStr)
//         {
//             res=` the given string ${subStr} is present ${i} `
//             break;
//         }
        
//     }
// console.log(res);
// }
// change('my name ts silver','ts','is')


//replace the word

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

 //var str=['a','b','c','d','e'];

// console.log(str[(str.length-1)/2]);
// str[str.length]='siva';
// console.log(str);
// function a(b) {
//   for (let i = 0; i < b.length; i++) {
    
    
//     console.log(b[i]);
//   }
// }a([10,29,30,40])

// function a(b) {
//   for (let i = 0; i < b.length; i++) {
//     if(b[i]%2==0){

//       console.log(b[i]);
//     }
//   }
// }a([1,2,3,4,5,6,7,8])

// function add(a) {
//   var sum=0;
//   for (let i = 0; i < a.length; i++) {
//     sum=sum+a[i]
    
//   }
//   console.log(sum);
// }add([1,2,3,4,5])

// function sum(a) {
  
//   for (let i = 0; i < a.length; i++) {
//     if(a[i]%2==0){
      
//       console.log(a[i],'even');
//     } 
//     else if(a[i]%2!=0){
//       console.log(a[i],'odd');
//     }else{
//       console.log(0);
//     }
//   }
// }sum([1,2,3,4,5,])

// function count(a) {
//   var even=0;
//   var odd=0;
//   for (let i = 0; i < a.length; i++) {
//     a[i]%2==0 ? even++ : odd++
//     }
//     console.log(even,'even');
//   console.log(odd,'odd');
// }count([1,2,3,4,5,6,7])

// function find(a,val) 
// {
//     res=false;
//     for (let i = 0; i < a.length; i++) {
//        if(a[i]==val){
//         res=true;
//     }
// }
// console.log(res);
// }
// find([1,2,3,4,5,6,7],4)

// function finMmax(a) {
//     let max=a[0];

//     for(let i = 0; i < a.length; i++) 
//     {
//         if(a[i]>=max)
//         {
//             max=a[i]
//         }
//     }
//     console.log(max);
// }
// finMmax([1,2,3,4,10,5,6,7])

// function finMin(a) {
//     let min=a[0];

//     for(let i = 0; i < a.length; i++) 
//     {
//         if(a[i]<=min)
//         {
//             min=a[i]
//         }
//     }
//     console.log(min);
// }
// finMin([1,2,3,4,10,5,6,7])

// function asc(a) {
//     for (let i = 0; i < a.length; i++) {
//        for (let j = i; j < a.length; j++) {
//         if(a[i]>=a[j])
//         {
//             var temp=a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//        } 
        
//     }
//     console.log(a);
// }
// asc([1,2,3,4,45,90,1000,23,45,123]);


// function dsc(a) {
//     for (let i = 0; i < a.length; i++) {
        
//         for (let j = i; j < a.length; j++) {
            
//             if(a[i]<=a[j])
//             {
//                 var temp=a[i];
//                 a[i]=a[j]
//                 a[j]=temp;
//             }
//         }
//     }
//     console.log(a);
// }
// dsc([1,34,75,3,108,15,1555,20,567])

// function str(a) {
//     for (let i = 0; i < a.length; i++) {
        
//         console.log(a[i]);
        
//     }
// }
// str('siva')

// function count(a) {
//     word=0;
// for (let i = 0; i < a.length; i++) {
//     if(a[i]==' ')
//     {
//         word++
//     }
// }
// console.log(a!=''? word+1 : word);
// }
// count('hi hello world')

// function printWord(str) {
//     str=str+' ';
//     word='';
//     for (let i = 0; i < str.length; i++) 
//     {
//         if(str[i]!=' ')
//         {
//             word=word+str[i];
//         }
//         else{
//             console.log(word);
//             word='';
//         }
//     }
// }
// printWord('hell how are you')

// function find(str,word) {
//     count=1;
//     res='word is not prersent'
//     str=str+' ';
//     w='';
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]!=' ')
//         {
// w=w+str[i]
//         }
//         else
//         {
//             w==word;
//             res=`word is present at ${count}`
//             break;
//         }
//         w='';
//         count++
//     }
//     console.log(res);
// }
// find('hell hi how beautiful you are','you')


//(6) waft find the given sub string in the string

// function find(str,subStr) 
// {
//   let res=false;
//    for (let i = 0; i < str.length; i++) 
//    {
//     let newStr='';
//     for (let j = i; j < (i+subStr.length); j++) 
//     {
//         newStr=newStr+str[j]
//     }
//     if(newStr==subStr)
//     {
//         res=true;
//         break
//     }
//    }
//    console.log(res);
// }
// find('my name is  silver','is  si')



// function findTotal(item) 
// {
// let products={};
// for (let i = 0; i < item.length; i++) 
// {
//     var present=false;
//     var prod=(item[i].pr)
    
// }
    
// }
// findTotal([{product:"TV", no:20},
// {product:"AC", no:20},
// {product:"TV", no:50},
// {product:"AC", no:120},
// {product:"FM", no:10},
// {product:"FM", no:150},
// ])


// function roll() 
//         {
// var random=parseInt(Math.random()*10)

// setTimeout(()=>{
//     if(random>=1 && random<=6)
//     {
//         console.log(random);
//     }else{
//         console.log(3);
//     }
// },2000)

//         }
//         roll()


function foo(a,b,c) {
    a++;
    b="new sting";
    c["key"] ="new value"
    console.log(a)
    console.log(b)
    console.log(c["key"])
}

var a=1,
b="old sting",
c={"key":"old value"}
foo(a,b,c)





























