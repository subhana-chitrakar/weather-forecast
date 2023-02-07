// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
    key : "5ef8d9b6f6699d22d9cd8818be7802cf",
    baseUrl :"https://api.openweathermap.org/data/2.5/weather"
}

//Event listner function on key press
  const searchInputBox = document.getElementById('searchbox');

  searchInputBox.addEventListener('keypress', (event) => {
   
    if(event.key == 'Enter'){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.blackbox').style.display = "block";
    }
  })



//get weather report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showReport);
}

//show weather report
function showReport(weather){
console.log(weather);

   let city = document.getElementById('city');
   city.innerText = `${weather.name} , ${weather.sys.country}`;

   let temperature = document.getElementById('temp');
   temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;


   let minTemp =document.getElementById('min');
   minTemp.innerHTML =`min : ${Math.floor(weather.main.temp_min)}&deg;C /` ;

   let maxTemp = document.getElementById('max');
   maxTemp.innerHTML = `max : ${Math.ceil(weather.main.temp_max)}&deg;C`;

   let weatherDescrip = document.getElementById('descrip');
    weatherDescrip.innerText = `${weather.weather[0].main}`;

    let windspeed =document.getElementById('wind');
    windspeed.innerText = `wind speed : ${weather.wind.speed} km/hr`;

    let date = document.getElementById('date');
    let todayDate = new Date ();
    date.innerText = datemanage(todayDate);
 
    

    if(weatherDescrip.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        document.getElementById('imgid').src = "images/cloudy.png";
    }else if(weatherDescrip.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        document.getElementById('imgid').src = "images/clouds.png";
    }else if(weatherDescrip.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('images/snow.jpg')";
        document.getElementById('imgid').src = "images/snow.png";
    }else if(weatherDescrip.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('images/rain.jpg')";
        document.getElementById('imgid').src = "images/rain.png";
    }else if(weatherDescrip.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = "url('images/lightning.jpg')";
        document.getElementById('imgid').src = "images/thunderr.png";
    }else if(weatherDescrip.textContent == 'Sunny'){
            document.body.style.backgroundImage = "url('images/sunny.jpg')";
            document.getElementById('imgid').src = "images/sun.png";
    }else if(weatherDescrip.textContent == 'Haze'){
        document.body.style.backgroundImage = "url('images/haze.jpg')";
        document.getElementById('imgid').src = "images/haze.png";
}else if(weatherDescrip.textContent == 'Smoke'){
        document.body.style.backgroundImage = "url('images/smoke.jpg')";
        document.getElementById('imgid').src = "images/smoke.png";
}else if(weatherDescrip.textContent == 'Mist'){
    document.body.style.backgroundImage = "url('images/mist.jpg')";
    document.getElementById('imgid').src = "images/mist.png";
}
    
}
    



//date manage
function datemanage(dateArg){

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}