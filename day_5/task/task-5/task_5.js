//task-5  Build a search box: as you type, the user list filters by name. (Hint: filter + includes + toLowerCase() )

const name_li = document.querySelector("#names");
const input = document.querySelector("#srch");

let users = [];


async function n_list() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        users = data;

        displayUsers(users);

    }
    catch(e) {
        console.log(e);
    }

}

function displayUsers(data) {

    name_li.innerHTML = "";

    data.forEach(ele => {

        const li = document.createElement("li");

        li.textContent = ele.name;

        name_li.appendChild(li);

    });

}

input.addEventListener("input", function() {

    let n = input.value.toLowerCase();

    let filter_name = users.filter(user =>
        user.name.toLowerCase().includes(n)
    );

    displayUsers(filter_name);

});


n_list();
