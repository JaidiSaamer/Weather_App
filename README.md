# Weather App

A simple web application that fetches and displays weather data for selected cities using the [WeatherAPI](https://www.weatherapi.com/). This app allows users to search for specific cities and view the weather data for default cities on load.

## Features

- Displays current weather information, including:
  - Temperature, Feels Like, Humidity, Cloud Percentage, Wind Speed, and Wind Degree.
- View weather data for multiple pre-selected cities.
- Search functionality to view weather details for any specific city.

## Technologies Used

- **HTML**: Structure of the web app.
- **CSS**: Styling of the user interface.
- **JavaScript**: Handling of user interactions and API calls.
- **Bootstrap**: For responsive design.
- **WeatherAPI**: Fetches real-time weather data.

## Installation

1. Clone the repository or download the files.
2. Open `index.html` in a web browser to use the app.

## Usage

1. **Default City Data**: Upon opening, the app displays weather data for selected default cities.
2. **Search Functionality**: Enter a city name in the search box and click "Search" to view the weather data.
3. **Weather Cards**: View detailed weather information in organized cards.

## Code Structure

- **index.html**: Main HTML file containing the structure and elements.
- **script.js**: JavaScript file that handles API calls, data fetching, and DOM manipulation.

## Setup

This project requires an API key from WeatherAPI.

1. Obtain your API key from [WeatherAPI](https://www.weatherapi.com/).
2. Replace `YOUR_API_KEY` in the code with your own key or set it in an environment variable as follows:

   ```plaintext
   API_KEY=your_actual_key_here


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for more details.
