🎯 Project Overview 
    This is a simple weather forecast web application built using React and the Open-Meteo API.
The app allows users to search for any city and instantly view real-time weather details such as temperature, humidity, wind speed, and sky conditions in a clean card-style UI.

⚙️ Features
    🌍 Search weather by city name
    🌡️ Display current temperature, condition, humidity, wind, sunrise, and sunset
    ⚡ Fetches data using the Open-Meteo Forecast and Geocoding APIs
    💻 Simple and responsive card-based UI

🧠 Tech Stack
    Frontend: React (with hooks and context)
    API: Open-Meteo (Geocoding + Forecast)
    Styling: CSS

🚀 How It Works
    User enters a city name in the search bar.
    The app uses the Open-Meteo Geocoding API to get latitude and longitude.
    It then fetches real-time weather data from the Open-Meteo Forecast API.
    Weather details are displayed neatly in a styled card component.

📦 Setup Instructions
    Clone the repository:
        git clone <your-repo-url>
    Navigate to the project folder:
        cd weather-app
    Install dependencies:
        npm install
    Run the app:
        npm start

🧾 API Reference
    Open-Meteo Forecast API
    Open-Meteo Geocoding API