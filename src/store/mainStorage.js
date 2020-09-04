import weatherApi from '../api/weatherApi'

export const state = () => ({
    currentCity: undefined,
    currentWeather: undefined,
    testData:''
});

export const mutations = {
    setCurrentCity(state,city){
        state.currentCity = city
    },

    setCurrentWeather(state,weather){
        state.currentWeather = weather
    },
    setTestMutation(state,value){
        state.testData = value
    }

};

export const actions = {
    simpleAction({commit,state},data){
        console.log("simple action");
        commit('setTestMutation', data)
    },

    updateWeatherByCityId({commit,state},cityId){
        weatherApi.updateWeatherByCityId(cityId)
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
    }
};