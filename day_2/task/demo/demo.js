//demo task The cart has item prices. If the total is more than 500, give a 10% discount.

const cart=[200,300,400,100,50,60];

// function total(total,value){
//     return total+value;
// }

const sum= cart.reduce((total,price) => total+price,0);

console.log(sum);

function apply_discount(f_amount){
    if(f_amount>500){
        return f_amount - f_amount*0.10;
    }
    else{
        return f_amount;
    }

}
console.log("your total is "+apply_discount(sum));
