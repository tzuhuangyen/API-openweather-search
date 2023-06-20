let weather = {
    apiKey:"57b7bf0692eda0cd47cf923161c78646",
    fetchWeather: function(city){
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        +"&units=metric&appid=" 
        + this.apiKey
        )
        .then((res) => res.json())
        .then((data)=>this.displayWeather(data));
    },
    // displays weather data on the webpage
    displayWeather: function(data) {
    const { name, timezone, dt } = data;
    const { country } = data.sys;
    const { icon, description } = data.weather[0];
    const { temp, feels_like, temp_min, temp_max,humidity } = data.main;
    const { speed } = data.wind;
    
    // calculate local time
    console.log(dt);
    let localTime = new Date((dt + timezone) * 1000); //DAY MM DD YYYY HH MM
    let hours = localTime.getUTCHours();
    let minutes = localTime.getUTCMinutes();
    let formattedTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
    console.log(name, country, icon, description, temp, temp_min, temp_max, humidity, speed, timezone);
    
    // display weather data on webpage
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".country").innerText = country;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon +"@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp.toFixed(1) +"°C";
    document.querySelector(".temp-max").innerText =  temp_max.toFixed(1) + "°C";
    document.querySelector(".temp-min").innerText =  temp_min.toFixed(1) + "°C";
    document.querySelector(".humidity").innerText =  humidity + " %";
    // document.querySelector(".wind").innerText = "wind speed:"+speed+"km/h";
    document.querySelector(".time").innerText = "Local time: "+ formattedTime;
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?"+ name + "')"
    },
    // clears search bar and fetches weather data for the entered city
    search: function() {
        let searchBar = document.querySelector(".search-bar");
        this.fetchWeather(searchBar.value);
        searchBar.value = "";
   }
}
 // event listener for search button click
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});
 // event listener for enter key press in search bar
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

