const weather = {
    apiKey:"3df10de3b4c7b42d6331f1f7daef7f9d",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=metric&lang=cz&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        
        document.getElementById("card").style.display="block"
        
        let NAME = document.getElementById("name")
        let TEMP = document.getElementById("temp")
        let ICON = document.getElementById("icon")
        let DESC = document.getElementById("desc")
        let HUMIDITY = document.getElementById("humidity")
        let WIND = document.getElementById("wind")
        let ERR = document.getElementById("error")

        try {
        
            const { name } = data;
            const { temp, humidity } = data.main;
            const { icon, description } = data.weather[0];
            const { speed } = data.wind;
    
            console.log(name,temp,humidity, icon,description,speed)
    
            NAME.innerHTML = `Weather in ${name}`
            TEMP.innerHTML = `${temp}°C`
            ICON.src = `https://openweathermap.org/img/wn/${icon}.png`
            DESC.innerHTML = description
            HUMIDITY.innerHTML = `Vlhkost vzduchu: ${humidity}%`
            WIND.innerHTML = `Rychlost větru : ${speed} km/h`

            ERR.style.display = "none"


        } catch (err){

            ERR.style.display = "block"
            NAME.innerHTML = ""
            TEMP.innerHTML = ""
            ICON.src = ""
            DESC.innerHTML = ""
            HUMIDITY.innerHTML = ""
            WIND.innerHTML = ""
            ERR.innerHTML = `Error : ${err} \n <b>Město nenalezeno</b>`
        }

        

    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-input").value)
    }
};

document.getElementById("search-btn").addEventListener("click", ()=> {
    weather.search();
    document.querySelector(".search-input").value = ""
})

document.querySelector(".search-input").addEventListener("keyup", (key)=> {
    if (key.code == "Enter" || key.code == "NumpadEnter") {
        weather.search();
        document.querySelector(".search-input").value = ""
    }
})