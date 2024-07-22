
let Data='https://api.github.com/users'
console.log(Data);
let a=fetch(Data)
.then((response)=>{return response.json()})
.then((data)=>{data=Data
    console.log(data);
})

console.log(a);