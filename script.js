function getWeather(){
    const city =document.getElementById("city").value;
    const apiKey="44adc59286905e09e59931b41d72107d";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url).then(response=>response.json())
    .then(data=>{
        if(data.cod==404){
            document.getElementById("result").innerHTML="City not found";
            return;
        }
        document.getElementById("result").innerHTML=
        `<h3>${data.name}</h3>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>💧 Humidity: ${data.main.humidity} %</p>
                <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
                <p>☁ Weather: ${data.weather[0].description}</p>`;

    })
    .catch(error=>{
        document.getElementById("result").innerHTML="Error Fetching Data";
    });
}
