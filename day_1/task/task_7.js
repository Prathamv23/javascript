//task-7  Print all prime numbers from 1 to 50 
let start=1;
let end=50;

while(start<=end){
    let count=0;

    for(let i=1; i<=start;i++){
        if(start%i===0){
            count++;

        }

    }

    if(count === 2){
        console.log(start);
    }
    start++;
}
