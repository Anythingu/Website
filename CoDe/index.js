const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "33b017193edf7b6781e64f270df8808e";

weatherForm.addEventListener("submit", event => {

event.preventDefault();

const city = cityInput.value;

if(city){

}
else{
    displayError("Please enter a city")
}

});

async function getWeatherData(city){

}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    cardText.content = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}


