const apikey="7f232c83766de306ef164650b7658313";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function chackWeather(city){
    const response=await fetch(apiurl + city +&appid=${apikey});
    let data=await response.json();

   

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src="images/mist.png"
    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src="images/snow.png"
    }

    document.querySelector(".weather").style.display="block"
    
}

searchbtn.addEventListener("click",()=>{
    chackWeather(searchBox.value);
})
