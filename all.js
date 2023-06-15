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
  const { name } = data;
  const { country } = data.sys;
  const { icon, description } = data.weather[0];
  const { temp, feels_like, temp_min, temp_max,humidity } = data.main;
  const { speed } = data.wind;
  const { dt } = data;
  //console.log(name,country,icon,description,temp,temp_min, temp_max, humidity,speed,dt);
  document.querySelector(".city").innerText = "Weather in "+ name;
  document.querySelector(".country").innerText = country;
  document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon +".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp +"°C";
  document.querySelector(".temp-max").innerText = "temp-max: " + temp_max + "°C";
  document.querySelector(".temp-min").innerText = "temp-min: " + temp_min + "°C";
  document.querySelector(".humidity").innerText = "humidity: "+ humidity +"%";
  document.querySelector(".wind").innerText = "wind speed:"+speed+"km/h";
  document.querySelector(".time-zone").innerText = "Local time:"+ dt;
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?"+ name + "')"
    },
    search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value)
   }
}

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})

document.querySelector(".search-bar")
 .addEventListener( "keyup", function (event) {
    if(event.key == "Enter"){
        weather.search();
    }
})
