//demo task
const students = [
{ name: "Pratham", marks: 88 },
{ name: "Rohan", marks: 92 },
{ name: "Manthan", marks: 98 }
];

const highest=students.reduce((best,s) => s.marks > best.marks ? s : best);

console.log("The Highest marks is "+highest.marks+" "+highest.name)

const total=students.reduce((sum,n) => sum+n.marks,0)

const average =  total/students.length;

console.log(average);