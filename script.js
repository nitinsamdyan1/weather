// Hi! This is JavaScript

const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=3b8fa1e68ad57793a1835b2132de1863&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherImage = document.querySelector(".weather-image");

const checkWeather = async (city) => {
    const response = await fetch(apiUrl + "&q=" + city);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "flex";
        document.querySelector(".weather").style.display = "none";
    }

    else {

        let data = await response.json();
    
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " ºC";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".weather-status p").innerHTML = data.weather[0].main;
        weatherImage.src = "images/" + (data.weather[0].main).toLowerCase() + ".jpeg";
    
        document.querySelector(".weather").style.display = "flex";
        document.querySelector(".error").style.display="none";
    }

}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

// checkWeather("delhi");
