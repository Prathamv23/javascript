//task-4  From ages = [12, 25, 17, 30, 18] , use filter to keep only 18 or above.

const ages=[12,25,17,30,18];

const young = ages.filter(n => { if(n>=18) return n} );

console.log(young);
