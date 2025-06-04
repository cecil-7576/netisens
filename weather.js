// f04b7704b728daff5fc6a980b2172b5a

const app = document.getElementById('app')
const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');


// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let todaysDate = new Date();
// let month = months[dateObj.getUTCMonth()];
// let day = dateObj.getUTCDate() - 1;
// let year = dateObj.getUTCFullYear();
let today = todaysDate.toLocaleDateString()

date.innerHTML = `${today}`;

const getWeather = async () => {
    try{
        const cityName = document.getElementById('searchBarInput').value;
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f04b7704b728daff5fc6a980b2172b5a&units=metric`, {
            headers: {
                Accept: 'application/json'
            }
        });

        const weatherData = await weatherDataFetch.json()
        console.log(weatherData);
        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].main}`;
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" />`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;
        tempMax.innerHTML = `${weatherData.main.temp_max}`;
        tempMin.innerHTML = `${weatherData.main.temp_min}`;

    } 
    catch (error) {
        console.log(error)
    }
}

// getWeather()