const API_KEY='29314bfb91473cf56c499c71455aa652';
const axios = require('axios');
const url = 'http://api.openweathermap.org/data/2.5/weather'

function loadWeatherByCityId(cityId){
    const params = {
        appid : API_KEY,
        id: cityId
    };
    return axios.get(url,{params});
}

function loadWeatherByCityName(cityName){
    const params = {
        appid : API_KEY,
        q: cityName
    };
    return axios.get('',{params});
}
