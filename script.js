const apiKey = YOUR_API_KEY;
const url = (city) => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no`;

const cities = ['Shanghai', 'Boston', 'Lucknow', 'Kolkata', 'Las Vegas', 'Sharjah'];

// Initialize predefined cities on page load
function init() {
    for (let city of cities) {
        getWeather(city);  // Fetch weather data for each city in the table
    }
    getWeather('Delhi', true);  // Display default city data in main section
}

window.onload = init;

// Fetch and display weather data
const getWeather = (city, isMainDisplay = false) => {
    async function fetchWeather() {
        try {
            const response = await fetch(url(city));
            const data = await response.json();

            if (isMainDisplay) {
                // Display data in the main section for the searched or default city
                document.getElementById('cityName').innerHTML = city;
                document.getElementById('temp').innerHTML = data.current.temp_c + "°C";
                document.getElementById('temp2').innerHTML = data.current.temp_c;
                document.getElementById('feels_like').innerHTML = data.current.feelslike_c + "°C";
                document.getElementById('humidity').innerHTML = data.current.humidity + "%";
                document.getElementById('humidity2').innerHTML = data.current.humidity;
                document.getElementById('cloud_pct').innerHTML = data.current.cloud + "%";
                document.getElementById('wind_speed').innerHTML = data.current.wind_kph + " kph";
                document.getElementById('wind_speed2').innerHTML = data.current.wind_kph;
                document.getElementById('wind_degrees').innerHTML = data.current.wind_degree + "°";
                document.getElementById('sunrise').innerHTML = data.location.localtime; // Approx. sunrise
                document.getElementById('sunset').innerHTML = data.location.localtime;  // Approx. sunset
                document.getElementById('min_temp').innerHTML = data.forecast.forecastday[0].day.mintemp_c + "°C";
                document.getElementById('max_temp').innerHTML = data.forecast.forecastday[0].day.maxtemp_c + "°C";

            } else {
                // Display data in the table for predefined cities
                document.getElementById(`${city}-temp`).innerHTML = data.current.temp_c + "°C";
                document.getElementById(`${city}-feels_like`).innerHTML = data.current.feelslike_c + "°C";
                document.getElementById(`${city}-humidity`).innerHTML = data.current.humidity + "%";
                document.getElementById(`${city}-cloud_pct`).innerHTML = data.current.cloud + "%";
                document.getElementById(`${city}-wind_speed`).innerHTML = data.current.wind_kph + " kph";
                document.getElementById(`${city}-wind_degrees`).innerHTML = data.current.wind_degree + "°";
                document.getElementById(`${city}-sunrise`).innerHTML = data.location.localtime;
                document.getElementById(`${city}-sunset`).innerHTML = data.location.localtime;
                document.getElementById(`${city}-min_temp`).innerHTML = data.forecast.forecastday[0].day.mintemp_c + "°C";
                document.getElementById(`${city}-max_temp`).innerHTML = data.forecast.forecastday[0].day.maxtemp_c + "°C";
            }

        } catch (error) {
            console.error(`Error fetching weather data for ${city}:`, error);
        }
    }
    fetchWeather();
};

// Event listener for the search button
document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();  // Prevent form submission
    const city = document.getElementById('city').value;
    getWeather(city, true);  // Fetch and display data in the main section
});
