// Function to get the query parameter from the URL using URLSearchParams
function getQueryParam(parameter) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(parameter);
}

// Function to determine the greeting based on time and country
function DetermineGreeting() {
    const ip = getQueryParam('ip');
    const currentTime = new Date().getHours();

    let country = "";

    if (ip % 2 === 0) {
        country = "England";
    } else if (ip % 10 === 0) {
        country = "America";
    } else {
        country = "India";
    }

    const greetings = document.getElementById('greeting');

    if (currentTime >= 5 && currentTime < 12) {
        greetings.textContent = `Good Morning ${country}`;
    } else if (currentTime >= 12 && currentTime < 18) {
        greetings.textContent = `Good Afternoon ${country}`;
    } else {
        greetings.textContent = `Good Night ${country}`;
    }
}

// Execute after the page has loaded
window.addEventListener('load', DetermineGreeting);
