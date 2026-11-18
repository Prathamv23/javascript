//task-2 Type your name in an input, click a button, and show "Hello, name!" below.

let input=document.querySelector("#f_name");
const p_btn = document.querySelector("#n_btn") ;
const display = document.querySelector("#p_name");

p_btn.addEventListener("click",() => {
    const name = input.value;
    display.textContent = `Hello ${name}`;
});
