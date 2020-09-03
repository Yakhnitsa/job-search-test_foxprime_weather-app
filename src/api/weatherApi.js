const API_KEY='29314bfb91473cf56c499c71455aa652';
const axios = require('axios');
const url = 'https://api.openweathermap.org/data/2.5/weather';

export default {
    async updateWeatherByCityName(cityName){
        const params = {
            appid : API_KEY,
            q: cityName
        };

        return await axios.get(url,{params})
    },

    async updateWeatherByCityId(cityId){
        const params = {
            appid : API_KEY,
            id: cityId
        };

        return await axios.get(url,{params})
    },
}
//
// function loadWeatherByCityId(cityId){
//     const params = {
//         appid : API_KEY,
//         id: cityId
//     };
//     return this.$axios.get(url,{params});
// }
//
// function loadWeatherByCityName(cityName){
//     const params = {
//         appid : API_KEY,
//         q: cityName
//     };
//     return this.$axios.get('',{params});
// }
