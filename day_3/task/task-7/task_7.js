//task-7 Sort employees by salary (high to low) and find the total salary. (Hint: [...employees].sort((a, b) => b.salary - a.salary) )
const employeess = [
{ name: "A", salary: 30000 },
{ name: "B", salary: 50000 },
{ name: "C", salary: 40000 }
];

const sal=[...employeess].sort((a,b) => b.salary - a.salary)
const total_sal=employeess.reduce((sum,n) => sum+n.salary,0)

console.log(sal);
console.log(total_sal);
