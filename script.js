const API_key = `60564bb5fbdda74e4f808b0f43334379`;
const form = document.querySelector('form');
const weather = document.querySelector('#weather');
const search = document.querySelector('#search');


const getweather = async (city_name) => {
    weather.innerHTML = `<h5>Loding....</h5>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showweather(data);
}

const showweather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h5>City not Found !</h5>`
        return;
    };
    weather.innerHTML = `<div>
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" width="80px" height="80px">
                        </div>
                        <div>
                            <h2>${data.main.temp}°C</h2>
                            <h4>${data.weather[0].main}</h4>
                            <h5>min temp ${data.main.temp_min}°C</h5>
                            <h5>max temp ${data.main.temp_max}°C</h5>
                        </div>`
}


form.addEventListener('submit', function (event) {
    getweather(search.value);
    event.preventDefault();

})
