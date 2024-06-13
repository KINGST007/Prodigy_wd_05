const apiKey = '1d9f78e30b2044005ce9938e00c57fb2';

function getWeather() {
    const cityInput = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem fetching the weather data:', error);
            alert('Unable to fetch weather. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <div>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
    `;
}
