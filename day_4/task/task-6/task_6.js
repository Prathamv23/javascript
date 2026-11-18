//task-6 To-Do List: type a task, click "Add" to add it to the list, and each item has a "Delete" button. (Hint: createElement , appendChild , remove )


const form = document.querySelector("#myform");
const input = document.querySelector("#input");
const task_list = document.querySelector("#mytask");
const filter_buttons = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let current_filter = "all";

function save_tasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks)
}

function display_tasks() {
    task_list.innerHTML = "";

    tasks.forEach((task, index) => {

        if (current_filter === "done" && !task.done) {
            return;
        }

        if (current_filter === "pending" && task.done) {
            return;
        }

        const li = document.createElement("li");
        li.className = "li";

        const text = document.createElement("span");
        text.textContent = task.name;
        text.className = "todo-text";

        if (task.done) {
            text.classList.add("checked-off");
        }

        text.addEventListener("click", () => {
            tasks[index].done = !tasks[index].done;

            save_tasks();
            display_tasks();
        });

        const dlt = document.createElement("button");
        dlt.textContent = "Delete";
        dlt.type = "button";
        dlt.className = "dlt-btn";

        dlt.addEventListener("click", () => {
            tasks.splice(index, 1);

            save_tasks();
            display_tasks();
        });

        li.appendChild(text);
        li.appendChild(dlt);

        task_list.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task_name = input.value.trim();

    if (task_name === "") {
        alert("Please enter a task");
        return;
    }

    const new_task = {
        name: task_name,
        done: false
    };

    tasks.push(new_task);

    save_tasks();
    display_tasks();

    input.value = "";
});

filter_buttons.forEach((button) => {

    button.addEventListener("click", () => {

        current_filter = button.dataset.filter;

        filter_buttons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        display_tasks();
    });

});

display_tasks();