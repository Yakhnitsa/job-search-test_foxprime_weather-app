import weatherApi from '../api/weatherApi'

export const state = () => ({
    currentCity: undefined,
    currentWeather: undefined,
    errorMessage:'',
    testData:''
});

export const mutations = {
    setCurrentCity(state,city){
        state.currentCity = city
    },

    setCurrentWeather(state,data){
        state.currentWeather = data
    },

    setTestMutation(state,value){
        state.testData = value
    },
    clearError(state){
        state.errorMessage = ''
    },
    setErrorMessage(state,message){
        state.errorMessage = message
    }

};

export const actions = {
    simpleAction({commit,state},data){
        console.log("simple action");
        commit('setTestMutation', data)
    },

    async updateWeatherByCityId({commit,state},cityId){
        try{
            const response = await weatherApi.updateWeatherByCityId(cityId)
            if(response.status === 200){
                const data = await response.data;
                const weather = getWeatherFromResponseData(data);
                const city = getCityFromResponseData(data);
                commit('setCurrentWeather',weather);
                commit('setCurrentCity',city)
            }
        }catch(error){
            console.log(error);
            commit('setErrorMessage',"Не удалось обновить погоду для региона: id=" + cityId);
        }
    },
    async updateWeatherByCityName({commit,state},cityName){
        try{
            const response = await weatherApi.updateWeatherByCityName(cityName)
            if(response.status === 200){
                const data = await response.data;
                const weather = getWeatherFromResponseData(data);
                const city = getCityFromResponseData(data)
                commit('setCurrentWeather',weather)
                commit('setCurrentCity',city)

            }
        }catch(error){
            console.log(error);
            commit('setErrorMessage','Не удалось обновить погоду для региона: name=' + cityName);
        }
    },
};

function getCityFromResponseData(responseData){
    return {
        name: responseData.name,
        id: responseData.id,
        country: responseData.sys.country,
        coord: {
            lon: responseData.coord.lon,
            lat: responseData.coord.lat
        }
    }
}

function getWeatherFromResponseData(responseData){
    return {
        dt : responseData.dt,
        weather : responseData.weather[0],
        main : responseData.main,
        wind : responseData.wind,
        clouds : responseData.clouds,
        sys : responseData.sys,
    }
}