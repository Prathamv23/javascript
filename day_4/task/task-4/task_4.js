//task-4 Form validation: name (not empty), email (contains @ ), password (more than 6 characters). Show red error text for each mistake.

const name_n = document.querySelector("#name");
const email = document.querySelector("#mail");
const password = document.querySelector("#pass");
const sub = document.querySelector("#sb_btn");


const form = document.querySelector("#myform")

form.addEventListener("submit",(e) => {
    e.preventDefault();
    const error = document.querySelector("#err");
    const name = name_n.value;
    const emaill = email.value;
    const pass = password.value;

    if(!name){
        error.textContent = "Error:- Enter name!!";
    }
    else if(!emaill.includes("@")){
        error.textContent = "Error:- Enter valid email";
    }
    else if(pass.length < 6){
        error.textContent = "Error:- Password length should be atleast 6";
    }
    else{
        error.textContent = "";
        alert("Form submitted");
    }

} );
