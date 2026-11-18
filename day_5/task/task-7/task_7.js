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

