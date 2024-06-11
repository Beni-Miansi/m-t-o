document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '970062103b6807cd41afe3e7ee2d5d0c';
    const city = 'Dakar'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    async function fetchWeather() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            const data = await response.json();
            updateWeather(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données météorologiques:', error);
        }

    }

    function updateWeather(data) {
        const location = document.getElementById('location');
        const temperature = document.getElementById('temperature');
        const description = document.getElementById('description');

        location.textContent = data.name;
        temperature.textContent = `${data.main.temp}°C`;
        description.textContent = data.weather[0].description;
    }

    document.getElementById('refresh-btn').addEventListener('click', fetchWeather);

    fetchWeather();
});

