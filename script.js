const apiKey = "209a66d3d48c6d4f6f8fa5d2d141ac84";

function getWeather() {

    let city = document.getElementById("cityInput").value;

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        if(data.cod != 200){

            document.getElementById("weatherResult").innerHTML =
            "City not found 😭";

            return;
        }

        let temperature = data.main.temp;
        let weather = data.weather[0].description;
        let mainWeather = data.weather[0].main;
        let humidity = data.main.humidity;
        let wind = data.wind.speed;
        
        if(mainWeather === "Clear"){

    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')";

}

else if(mainWeather === "Clouds"){

    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda')";

}

else if(mainWeather === "Rain"){

    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0')";

}

else if(mainWeather === "Snow"){

    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1517299321609-52687d1bc55a')";

}
        document.getElementById("weatherResult").innerHTML =
        `
        <h2>${city}</h2>

        <h1>${temperature}°C</h1>

        <p>${weather}</p>

        <p>Humidity: ${humidity}%</p>

        <p>Wind Speed: ${wind} km/h</p>
        `;
    });

}

document.getElementById("searchBtn").addEventListener("click", getWeather);

document.getElementById("cityInput").addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        getWeather();

    }

});