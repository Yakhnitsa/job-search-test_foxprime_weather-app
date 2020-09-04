export const state = () => ({
    cities:[]
});

export const mutations = {
    addCity(state,city){
        const index = state.cities.findIndex(item => item.id === city.id );
        if(index === -1){
            state.cities.push(city);
        }
    },

    deleteCity(state,city){
        const index = state.cities.findIndex(item => item.id === city.id );
        state.cities.splice(index,1);
    },

    clearCityStorage(state){
        state.cities = []
    }

}