//task-6  Find the youngest user in users .
const users_n = [
{ name: "Ravi", age: 22, city: "Surat" },
{ name: "Meera", age: 25, city: "Mumbai" },
{ name: "Amit", age: 19, city: "Surat" },
{ name: "Neha", age: 28, city: "Pune" }
];

const young=users_n.reduce((y,n)=> n.age<y.age ? n : y)

console.log(young)
