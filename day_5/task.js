//demo task Show a list of users on the page
//Type out the example in "Show Loading and Error" above and run it. Then show each user's city next to the email .

// const st= document.getElementById("status");
// const u_list = document.getElementById("users_li");

// async function user_lists(){
//     st.textContent = "Loading........";
//     try{
        
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         st.textContent ="";
//         data.forEach(n => {
//             const li = document.createElement("li");
//             li.textContent = `email:- ${n.email} city:- (${n.address.city})`;
//             u_list.appendChild(li);            
//         });
//     }
//     catch(e){
//         st.textContent = `Error :- ${e.message}`;
//     }
// }

// user_lists();

//task-1 Use setTimeout to show "Welcome" on the page after 3 seconds.

// const txt = document.querySelector("#head");

// setTimeout(()=>{
//     txt.textContent ="Welcome"
// },3000);

//task-2 Get users from JSONPlaceholder and show a list of names.

// const userss = document.getElementById("users_name");
// const errorr = document.querySelector("#error")

// async function user_list(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();

//         data.forEach(n => {
//             const lis = document.createElement("li");
//             lis.textContent = `${n.name}`;
//             userss.appendChild(lis);    
//         });
        
//     }catch(e){
//         errorr.textContent = `Error:- ${e}`;
//     }
// }

// user_list();

//task-3 Get posts ( /posts ) and show the first 10 titles. (hint:- data.slice(0,10))

// const titles = document.querySelector("#post-titles");
// const err = document.querySelector("#p_error");

// async function load_title(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         const n_data = data.slice(0,10);
//         console.log(n_data);

//         n_data.forEach(n =>{
//             const li= document.createElement("li");
//             li.textContent = `${n.title}`;
//             titles.appendChild(li);
//         });
//     }
//     catch(e){
//         err.textContent = `Error:- ${e.message}`;
//     }
// }

// load_title()

//task-4 Add a loading text/spinner and an error message. Test the error by using a wrong URL.

// const loader = document.getElementById("loader");
// loader.textContent = "Loading..........";
// async function test_api(){
//     try{
//         //real api
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//         //wrong url
//         //const response = await fetch("https://wrong-api-url-12345.com/posts");

//         const data = await response.json();
//         console.log(data);
//         loader.textContent = "api running properly";

//     }catch(e){
//         loader.textContent = `${e}`;
//     }
// };

// test_api()

//task-5  Build a search box: as you type, the user list filters by name. (Hint: filter + includes + toLowerCase() )

// const name_li = document.querySelector("#names");
// const input = document.querySelector("#srch");

// let users = [];


// async function n_list() {

//     try {

//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const data = await response.json();

//         users = data;

//         displayUsers(users);

//     }
//     catch(e) {
//         console.log(e);
//     }

// }

// function displayUsers(data) {

//     name_li.innerHTML = "";

//     data.forEach(ele => {

//         const li = document.createElement("li");

//         li.textContent = ele.name;

//         name_li.appendChild(li);

//     });

// }

// input.addEventListener("input", function() {

//     let n = input.value.toLowerCase();

//     let filter_name = users.filter(user =>
//         user.name.toLowerCase().includes(n)
//     );

//     displayUsers(filter_name);

// });


// n_list();

//task-6 Joke app: click a button to get a new joke (setup and punchline).

// const joke = document.querySelector("#joke");
// const answer = document.querySelector("#answer");
// const btn = document.querySelector("#jk_btn");

// btn.addEventListener("click", async () => {

//     try {
//         joke.textContent = "Loading joke...";
//         answer.textContent = "";

//         const response = await fetch(
//             "https://official-joke-api.appspot.com/random_joke"
//         );

//         if (!response.ok) {
//             joke.textContent = "Something went wrong!";
//         }


//         const data = await response.json();

//         joke.textContent = data.setup;
//         answer.textContent = data.delivery;

//     } 
//     catch (error) {
//         joke.textContent = "Failed to load joke!";
//         answer.textContent = error.message;
//     }

// });

//task-7 Weather app: use latitude and longitude of a city and show the temperature from Open-Meteo.

const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");

const btn = document.querySelector("#get_weather");
const result = document.querySelector("#result");
const status = document.querySelector("#status");


btn.addEventListener("click", async () => {

    try {
        const lat = Number(latitude.value);
        const lon = Number(longitude.value);

        result.textContent = "Loading...";
        status.textContent = "";

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;

        const response = await fetch(url);

        const data = await response.json();

        const temperature = data.current.temperature_2m;

        result.textContent = `Temperature: ${temperature}°C`;

        status.textContent = `Last updated: ${data.current.time}`;

    }
    catch (error) {

        result.textContent = "Unable to get weather!";
        status.textContent = error.message;

    }

});

