<template>
    <v-main>

        <!-- Provides the application the proper gutter -->
        <v-container fluid>
            <v-toolbar
                    dense
                    floating
            >
                <v-text-field
                        hide-details
                        prepend-icon="mdi-map-search"
                        single-line
                        v-model="cityName"
                ></v-text-field>

                <v-btn @click="updateWeather" icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn

                        :disabled="!isCityValid"
                        @click="addCity" icon>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-toolbar>

            <v-btn @click="test">
                Test button
            </v-btn>

            <weather-info
                    v-bind:city="currentCity"
                    v-bind:weatherData="weatherData">
            </weather-info>

        </v-container>
    </v-main>
</template>

<script>
    import weatherApi from '../api/weatherApi'
    import WeatherInfo from "../components/WeatherInfo.vue";

    export default {
        name: "mainBar",
        components: {WeatherInfo},
        methods:{
            async updateWeather(){

                weatherApi.updateWeatherByCityName(this.cityName)
                    .then(response =>{
                        this.updateWeatherData(response)
                        this.updateCity(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    });
            },
            addCity(){
                if(this.isCityValid){

                    this.$store.commit('localStorage/addCity',this.currentCity);
                    this.cityName = '';
                }

            },

            deleteCity(){
                this.$store.commit('localStorage/deleteCity',this.city)
            },
            clearStorage(){
                this.$store.commit('localStorage/clearCityStorage')
            },
            test(){
                this.$store.dispatch('mainStorage/simpleAction','some value')
            },
            updateCity(responseData){
                const city = {
                    name: responseData.name,
                    id: responseData.id,
                    country: responseData.sys.country,
                    coord: {
                        lon: responseData.coord.lon,
                        lat: responseData.coord.lat
                    }
                };
                this.$store.commit('mainStorage/setCurrentCity',city)
            },

            updateWeatherData(response){
                const weater = {
                    dt : response.data.dt,
                    weather : response.data.weather[0],
                    main : response.data.main,
                    wind : response.data.wind,
                    clouds : response.data.clouds,
                    sys : response.data.sys,
                };
                this.$store.commit('mainStorage/setCurrentWeather',weater)
            },

        },
        data(){
            return{
                cityName:'',
                cityRules:[
                    v => !!v || 'City is required',
                ]


            }
        },
        computed: {
            isCityValid(){
                if(this.currentCity === undefined) return false;
                return this.currentCity.id;
            },
            weatherData(){
                return this.$store.state.mainStorage.currentWeather;
            },
            currentCity(){
                return this.$store.state.mainStorage.currentCity;
            },
        }

    }
</script>

<style scoped>

</style>