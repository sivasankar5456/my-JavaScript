// function currying

// const addition=(x)=>{

//     return (y)=>{

//         return (z)=>{
//             return x+y+z
//         }
//     }
// }
// console.log(addition(12)(10)(5));


// call method 

// function getName() {
    
// console.log(this.Fname + " " + this.Lname)

// }

// let person={
//     fname:"siva",
//     Lname:"sankar"
// }
// getName.call(person)


// function getName(city1,city2,city3) {
    
// console.log(this.Fname + " " + this.Lname + " "+ city1 + " "+city2 + " "+ city3)

// }

// let person={
//     Fname:"siva",
//     Lname:"sankar"
// }

// let cities=["hyderabad","mumbai","delhi"];


// getName.call(person,cities)


// function getName(city1,city2,city3) {
    
//     console.log(this.Fname + " " + this.Lname + " "+ city1 + " "+city2 + " "+ city3)
    
//     }
    
//     let person={
//         Fname:"siva",
//         Lname:"sankar"
//     }
    
//     let cities=["hyderabad","mumbai","delhi"];
    
    
//     getName.apply(person,cities)
    





// const arr = [3,4,3,5,6,3,4,8,5,23,2,4]
// // "2 counted: 1 times."
// // "3 counted: 3 times."
// // "4 counted: 3 times."
// // "5 counted: 2 times."
// // "6 counted: 1 times."
// // "8 counted: 1 times."
// // "23 counted: 1 times."


// for (let i = 0; i < arr.length; i++) {

//     if(arr[i]==3 || arr[i]==4)
//     {

//         console.log(`${arr[i]} counted: 3 times`)
//     }else if (arr[i]==5){
//         console.log(`${arr[i]} counted: 2 times`)

//     }else
//     {
//         console.log(`${arr[i]} counted: 1 times`)

//     }
// }



// let a=[10,14,19,29,7,18]

// let b=a.filter((i)=>{return i>=18})
// console.log(b)

let a=[1,2,3,4,5]

let b=a.reduce((sum,i,z)=>{
    // console.log(z,"z");
    console.log(sum,"sum");
    console.log(i,"i");

    return sum+i

})
console.log(b)




