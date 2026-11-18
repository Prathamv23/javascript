//task-4 From the users array below, make a list of all names (map) and get users who live in Surat (filter).
const users=[
    {
        name:"Pratham",
        city:"surat",
        salary:25000
    },
    {
        name:"Miral",
        city:"maroli",
        salary:20000
    },
    {
        name:"Rohan",
        city:"vadodara",
        salary:18000
    },
    {
        name:"Bhagya",
        city:"surat",
        salary:29000
    },

];

const names=users.map(n => n.name);
const city=users.filter(n => n.city === "surat").map(n=>n.name);

console.log(names);
console.log(city);
