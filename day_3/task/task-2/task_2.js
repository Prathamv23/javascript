//task-2 Make an object about yourself (name, age, hobbies array, address object). Use destructuring to get name and city
const personal={
    name:"Pratham",
    age:21,
    hobbies:[
        "Cycling",
        "Reading",
        "Travelling",
    ],
    address:{
        city:"Surat",
        town:"Adajan",
        pincode:395004
    }
}

const {name,age}=personal;
console.log(personal.address.city);
console.log(name,age);