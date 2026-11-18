//task-7 Remove duplicates from [1, 2, 2, 3, 3, 3, 4] to get [1, 2, 3, 4] . 

const arr_dupli = [1,2,2,3,3,3,4];

const rm_dupli = new Set(arr_dupli);

console.log(rm_dupli);
