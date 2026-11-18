//task-3  In the Counter, do not let the number go below 0.

let count = 0;
const display = document.querySelector("#countt");
const minusbtn=document.querySelector("#minus");
function update() {
    display.textContent = count;

}
document.querySelector("#add").addEventListener("click", () => {
        count++;
        update();
});
document.querySelector("#minus").addEventListener("click", () => {
    if(count!=0){
        count--;
        update();
    }
});
document.querySelector("#reset").addEventListener("click", () => {
        count = 0;
        update();
});
