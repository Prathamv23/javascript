//task-2 Get users from JSONPlaceholder and show a list of names.

const userss = document.getElementById("users_name");
const errorr = document.querySelector("#error")

async function user_list(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        data.forEach(n => {
            const lis = document.createElement("li");
            lis.textContent = `${n.name}`;
            userss.appendChild(lis);    
        });
        
    }catch(e){
        errorr.textContent = `Error:- ${e}`;
    }
}

user_list();
