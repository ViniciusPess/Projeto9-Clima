window.addEventListener('load', function() {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            
            var apiKey = '398fb94ad0c57fcc2728df266ab39173'; 
            var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=' + apiKey;

            fetch(url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    
                    displayWeatherInfo(data);
                })
                .catch(function(error) {
                    console.log('Ocorreu um erro ao obter os dados meteorológicos:', error);
                });
        });
    } else {
        console.log('A geolocalização não é suportada neste navegador.');
    }
});

function displayWeatherInfo(data) {
    var weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = '';

   
    var temperature = document.createElement('div');
    temperature.classList.add('weather-item');
    temperature.innerHTML = '<span class="weather-label">Temperatura:</span><span class="weather-value">' + data.main.temp + '°C</span>';

    var humidity = document.createElement('div');
    humidity.classList.add('weather-item');
    humidity.innerHTML = '<span class="weather-label">Umidade:</span><span class="weather-value">' + data.main.humidity + '%</span>';

    var windSpeed = document.createElement('div');
    windSpeed.classList.add('weather-item');
    windSpeed.innerHTML = '<span class="weather-label">Velocidade do Vento:</span><span class="weather-value">' + data.wind.speed + ' m/s</span>';

    
    weatherInfo.appendChild(temperature);
    weatherInfo.appendChild(humidity);
    weatherInfo.appendChild(windSpeed);
}
