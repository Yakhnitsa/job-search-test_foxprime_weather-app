const cities_key = "weather-app-cities";
export default{

    addCity(city){
        const cities = this.getStoredCities();
        if(!cities.includes(item => item.id === city.id)){
            cities.push(city);
            window.localStorage.setItem(cities_key, JSON.stringify(cities))
            return true;
        }
        return false;

    },
    deleteCity(city){
        let cities = this.getStoredCities();
        cities = cities.filter(item => item.id !== city.id);
        window.localStorage.setItem(cities_key, JSON.stringify(cities));
    },
    getStoredCities(){
        // console.log(window);
        return [];
        // const jsonCities = window.localStorage.getItem(cities_key);
        // if(jsonCities === undefined || jsonCities === null){
        //     return [];
        // }
        // return JSON.parse(jsonCities);
    }
}