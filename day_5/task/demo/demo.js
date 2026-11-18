//demo task Show a list of users on the page
//Type out the example in "Show Loading and Error" above and run it. Then show each user's city next to the email .

const st= document.getElementById("status");
const u_list = document.getElementById("users_li");

async function user_lists(){
    st.textContent = "Loading........";
    try{
        
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        st.textContent ="";
        data.forEach(n => {
            const li = document.createElement("li");
            li.textContent = `email:- ${n.email} city:- (${n.address.city})`;
            u_list.appendChild(li);            
        });
    }
    catch(e){
        st.textContent = `Error :- ${e.message}`;
    }
}

user_lists();
