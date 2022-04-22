const API_KEY = '954d084ebd099da0eb708ad54f53d12c';

function onGeoOk(position) {
    console.log(position)
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const weatherbox = document.querySelector('.weather')
    weatherbox.classList.remove('hidden')

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector('.weather h3')
        weather.innerText = `Weather : ${data.weather[0].main}`;
        const city = document.querySelector('.weather span')
        city.innerText = `  ${data.name}`;
});

}

function onGeoError() {
    alert("Can't locate you. No weather For you.")
}

const weatherWidth = document.querySelector('.weather__city').style.width;
document.querySelector('.weather__city').style.width = Number(weatherWidth) + 10;

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
