//task-5  Use JSON.stringify on an object, then JSON.parse it, and check the data is the same.
const products=[{
    name:"Mouse",
    price:200,
    stock:5000
},
{
    name:"Monitor",
    price:300,
    stock:5000
}];

let strfy=JSON.stringify(products);
console.log(strfy);
console.log(typeof(strfy))

const obj=JSON.parse(strfy);
console.log(obj);
console.log(typeof obj)

if(strfy.value===obj.value){
    console.log("same");
}
else{
    console.log("Not same");
}
