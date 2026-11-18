//task-3  Merge {a:1, b:2} and {c:3, d:4} using spread.
let f_1={a:1},f_2={b:2},s_1={c:3},s_2={d:4};

let f_join={...f_1,...f_2};
let s_join={...s_1,...s_2};

console.log(f_join,s_join);