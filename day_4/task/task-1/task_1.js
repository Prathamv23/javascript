//task-1 On button click, change the heading color (red, then blue, then green).

let t1_count = 0;
let head = document.getElementById("heading");
const t1_btn = document.getElementById("task-1");

t1_btn.addEventListener("click",()=>{
    t1_count++;
    if (t1_count===1){
        head.style.color = "red";
    }
    else if(t1_count===2){
        head.style.color="blue";
    }
    else if(t1_count===3){
        head.style.color="green";
        t1_count=0;
    }
    else{
        head.style.color="black";
    }
});
