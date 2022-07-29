const tempElement = document.querySelector(".temperature-value p");

// App data
const weather = {};
weather.temperature = {
  unit: "celsius",
};

// Change to 'F' for Fahrenheit
var tempUnit = "C";

const KELVIN = 273.15;
// Use your own key for the Weather, Get it here: https://openweathermap.org/
const key = "OPENWEATHER API KEY GOES HERE";

// Set Position function
setPosition();

function setPosition(position) {
  // Here you can change your position
  // You can use https://www.latlong.net/ to get it! (I use San Francisco as an example)
  let latitude = YOUR_LATITUDE;
  let longitude = YOUR_LONGITUDE;

  getWeather(latitude, longitude);
}

// Get the Weather data
function getWeather(latitude, longitude) {
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

  console.log(api);

  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      let celsius = Math.floor(data.main.temp - KELVIN);
      weather.temperature.value =
        tempUnit == "C" ? celsius : (celsius * 9) / 5 + 32;
    })
    .then(function () {
      displayWeather();
    });
}

// Display Weather info
function displayWeather() {
  tempElement.innerHTML = `${weather.temperature.value}°<span class="darkfg">${tempUnit}</span>`;
}
