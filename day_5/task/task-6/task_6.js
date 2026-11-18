//task-6 Joke app: click a button to get a new joke (setup and punchline).

const joke = document.querySelector("#joke");
const answer = document.querySelector("#answer");
const btn = document.querySelector("#jk_btn");

btn.addEventListener("click", async () => {

    try {
        joke.textContent = "Loading joke...";
        answer.textContent = "";

        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        if (!response.ok) {
            joke.textContent = "Something went wrong!";
        }


        const data = await response.json();

        joke.textContent = data.setup;
        answer.textContent = data.delivery;

    } 
    catch (error) {
        joke.textContent = "Failed to load joke!";
        answer.textContent = error.message;
    }

});
