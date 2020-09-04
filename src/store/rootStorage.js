export const state = () => ({
    currentCity: undefined,
    currentWeather: undefined

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

}
export const actions = {
    simpleAction({commit,state},data){
         commit('setTestMutation', data)
     },
}