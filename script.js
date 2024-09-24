async function getWeather() {
    const city = document.getElementById('city').value.trim(); // Trim extra spaces
    const apiKey = 'fe0e9b80403a6faa65015b868acfc3d1'; // Your actual OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Ensure the input is not empty
    if (!city) {
        document.getElementById('weather-result').innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }

    try {
        const response = await fetch(url);
        
        // Handle non-200 status codes
        if (!response.ok) {
            throw new Error(`City not found: ${response.status}`);
        }
        
        const data = await response.json();

        // Display weather data
        document.getElementById('weather-result').innerHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
    } catch (error) {
        // Display error message
        document.getElementById('weather-result').innerHTML = `<p>Error: ${error.message}</p>`;
        console.error("Error fetching weather data:", error); // Log error for debugging
    }
}

