//task-3 Get posts ( /posts ) and show the first 10 titles. (hint:- data.slice(0,10))

const titles = document.querySelector("#post-titles");
const err = document.querySelector("#p_error");

async function load_title(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const n_data = data.slice(0,10);
        console.log(n_data);

        n_data.forEach(n =>{
            const li= document.createElement("li");
            li.textContent = `${n.title}`;
            titles.appendChild(li);
        });
    }
    catch(e){
        err.textContent = `Error:- ${e.message}`;
    }
}

load_title()
