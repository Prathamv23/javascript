//task-8 From [5, 12, 8, 3, 20] , keep the even numbers (filter), square them (map), and find their total (reduce). Chain all three methods.

const task_8 = [5,12,8,3,20];

function chain_three_method(num){

    const even = num.filter(n => {if (n%2===0) return n});
    console.log(even);

    const square = even.map(n => n**2);
    console.log(square);

    const total = square.reduce((sum,n)=> sum+n,0);
    console.log(total);

}

new_output=task_8.filter(n => {if (n%2===0) return n}).map(n => n**2).reduce((sum,n) => sum+n,0)

console.log("new chain "+new_output);

chain_three_method(task_8);
