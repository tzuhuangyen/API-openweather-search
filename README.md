# API-openweather-search
 The application allows users to search for the weather of a specific city and displays the relevant weather information on the screen. 
 The application uses the OpenWeatherMap API to fetch weather data for the searched city.
 
 The JavaScript code defines a  `weather`  object with an  `apiKey`  property, which stores the API key to access the OpenWeatherMap API. The  `weather`  object also contains two methods:  `fetchWeather()`  and  `displayWeather()` .
 The  `fetchWeather()`  method takes a city name as an argument and fetches the weather data for that city using the OpenWeatherMap API. The fetched data is then passed to the  `displayWeather()`  method.

 
 The search functionality is implemented using an event listener on the search button and the search bar. When the search button is clicked or the "Enter" key is pressed within the search bar, the  `weather.search()`  method is called, which in turn calls the  `fetchWeather()`  method with the value entered in the search bar.
 
 The background image of the page is dynamically updated based on the searched city using the Unsplash API.
 
 In summary, this code creates a simple weather application that allows users to search for the weather of a specific city and displays the relevant weather information on the screen. The application fetches weather data from the OpenWeatherMap API and dynamically updates the HTML elements and background image based on the searched city.
