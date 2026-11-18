//task-1 Use setTimeout to show "Welcome" on the page after 3 seconds.

const txt = document.querySelector("#head");

setTimeout(()=>{
    txt.textContent ="Welcome"
},3000);

