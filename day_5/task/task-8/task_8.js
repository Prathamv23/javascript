//task-8 debounce 500ms

const form = document.querySelector("#myform");
const input = document.querySelector("#inp");
const submit = document.querySelector("#sub");
const list = document.querySelector("#names");

const users = [
    "pratham",
    "rohan",
    "manthan",
    "meet",
    "bhagya",
    "miral",
    "swayam"
];

function display(data){

    list.innerHTML="";
    data.forEach(ele => {
        const li = document.createElement("li"); 
        li.textContent = ele;

        list.appendChild(li);
        console.log(li.textContent);
        
    });
}
function debounce(fn,delay){
    let timer;

    return function(){
        clearTimeout(timer);
        timer = setTimeout(() =>{
            fn();
        },delay);
    };

}

input.addEventListener("input",debounce(function(){
    let name = input.value.toLowerCase();

    let filter_name = users.filter(nm => nm.toLowerCase().includes(name));

    display(filter_name);


},500));

display(users);

