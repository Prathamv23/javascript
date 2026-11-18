//demo task  Counter app (+ /-/ Reset)

let count=0
const counter=document.querySelector("#countt");

const addbtn= document.querySelector("#add");
const minusbtn= document.querySelector("#minus");
const resetbtn= document.querySelector("#reset");

function update(){
   counter.innerHTML = count;
}

addbtn.addEventListener("click",()=>{
    count++;
    update();
});

minusbtn.addEventListener("click",() => {
    count--;
    update();
});

resetbtn.addEventListener("click", () => {
    count=0;
    update();
});
