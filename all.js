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

    displayWeather: function(data){
    const { name, timezone, dt  } = data;
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
    console.log(localTime,formattedTime)

    console.log(name,country,icon,description,temp,temp_min, temp_max, humidity,speed,timezone);

    document.querySelector(".city").innerText = "Weather in "+ name;
    document.querySelector(".country").innerText = country;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon +"@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp.toFixed(1) +"°C";
    document.querySelector(".temp-max").innerText =  temp_max.toFixed(1) + "°C";
    document.querySelector(".temp-min").innerText =  temp_min.toFixed(1) + "°C";
    document.querySelector(".humidity").innerText =  humidity + " %";
//   document.querySelector(".wind").innerText = "wind speed:"+speed+"km/h";
    document.querySelector(".time").innerText = "Local time: "+ formattedTime;
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?"+ name + "')"
    },
    searchClear: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
    document.querySelector(".search-bar").value = ""; // clear the search bar

   }
}

document.querySelector(".search button").addEventListener("click",function(){
    weather.searchClear();
})

document.querySelector(".search-bar")
 .addEventListener( "keyup", function (event) {
    if(event.key == "Enter"){
        weather.search();
    }
})

