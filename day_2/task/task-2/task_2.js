//task-2  In [4, 9, 2, 15, 7] , find the biggest and smallest number. 

const arr=[4,9,2,15,7];

const max= Math.max.apply(null,arr);

console.log(max);

const minimum = min_element(arr);

console.log(minimum);

function min_element(n){
    min=n[0];
    for(let i=0;i<n.length;i++){
        if (n[i] < min){
            min=n[i];
        }
    }
    return min;
}
