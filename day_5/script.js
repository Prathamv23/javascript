// console.log("1. first element");

// setTimeout(()=>{
//     console.log("2nd element");
// },2000);

// console.log("3. third element");

//promise

// const mypromise = new Promise((resolve,reject)=> {
//     let success = true;

//     if(success){
//         resolve("Data recieved");
//     }
//     else{
//         reject("Data rejected");
//     }

// })

// console.log(mypromise);

//async await
// async function data() {
//     const reponse = await fetch("https://jsonplaceholder.typicode.com/users")

//     console.log(reponse);

//     const data = await reponse.json();
//     console.log("json data")
//     console.log(data[1])
    
// }
// data();

//try-catch
// console.log("Try and catch")
// try{
//     async function jsdata(link) {
//         const response = await fetch(link)
        
//         const jsdata = await response.json();
//         console.log(jsdata)
//     }
//     jsdata("https://jsonplaceholder.typicode.com/users");
//     const prs = JSON.parse(1,"hello world");
//     console.log(prs);
// }
// catch(error){
//     console.log("Error is :",error.message);
// }

//fetch data from api
//  try{
//     async function fetchd() {
//         const myres = await fetch("https://jsonplaceholder.typicode.com/users");

//         const mydata = await myres.json();
//         console.log(mydata);
//     } 
    
//     fetchd();
// } catch(e){
//     console.log(e.message);
// }

//promises .then() and .catch()

// fetch("https://jsonplaceholder.typicode.com/users")

//     .then(function(response){
//         console.log("without async await")
//         return response.json();

//     })

//     .then(data => console.log(data))

//     .catch( e => console.log(e))

//show loading and error

const statuss = document.querySelector("#status");
const list = document.querySelector("#users_li");

async function userlist(){
    statuss.textContent = "Loading......";
   
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        statuss.textContent = "";

        data.forEach(n => {
            const li = document.createElement("li");
            li.textContent = `${n.name} (${n.email})`;
            list.appendChild(li);
            
        });
    }
    catch(err){
        statuss.textContent = `Something went wrong error:- ${err.message}`;
    }
}
userlist();

//