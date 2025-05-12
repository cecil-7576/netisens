var app;
var date;
var city;
var tempImg;
var description;
var temp;
var temp_max;
var temp_min;

let todaysDate = new Date()
let today = todaysDate.toLocaleDateString()

date = `${today}`;

const weatherApp = async ()=>{

    try {
        let cityName;
    const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f04b7704b728daff5fc6a980b2172b5a&units=metric`, {
        headers: {
            accept: 'application/json'
        }
    })

    const weatherData = await weatherDataFetch.json();
    console.log(weatherData);

    city.innerHTML = `${weatherData.name}`;
    tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" />`;
    description.innerHTML = `${weatherData.main}`;
    temp.innerHTML = `<h3>${Math.round(weatherData.main.temp)}°C</h3>`;
    temp_max.innerHTML = `${weatherData.main.temp_max}`;
    temp_min.innerHTML = `${weatherData.main.temp_min}`
    } 
    
    catch (error){
        console.log(error)
    }
    
}

weatherApp()

