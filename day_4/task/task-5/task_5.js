//task-5 dark- theme light theme with localstorage

localStorage.setItem("theme","dark");
localStorage.setItem("count",1);
const tg_btn=document.getElementById("toggle");

tg_btn.addEventListener("click",() => {
    if(localStorage.getItem("count")==0){
        localStorage.setItem("theme","light");
        localStorage.setItem("count",1);
    }
    else if(localStorage.getItem("count")==1){
        localStorage.setItem("theme","dark");
        localStorage.setItem("count",0);
    }
   document.body.style.backgroundColor = localStorage.getItem("theme") == "dark" ? "black" : "white";
   tg_btn.textContent = localStorage.getItem("theme") == "dark" ? "Light Mode" : "Dark Mode";
    
} );
