const weatherContainer = document.querySelector("#weather");
const tempElement = document.querySelector("#temp");
const cityElement = document.querySelector("#city");

navigator.geolocation.getCurrentPosition(getSuccess, getError);

function getSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "eebd0bc2fd712e5573375fa6afd96287";
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.6599048&lon=126.7711669&appid=eebd0bc2fd712e5573375fa6afd96287&units=metric'

    fetch(url).then(response => response.json())
    .then(data => {
        tempElement.innerText = data.name;
        cityElement.innerText = data.main.temp;
    })
}

function getError() {
    alert("An Error occed with bringing your geoLocation.");
}