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
            <v-btn @click="addCity">Add city</v-btn>
            <v-btn @click="deleteCity">Delete city</v-btn>
            <v-btn @click="clearStorage">Clear storage</v-btn>
            <weather-info
                    v-bind:weather="weatherData.weather"
                    :main="weatherData.main"
                    :wind="weatherData.wind"
                    :clouds="weatherData.clouds"
                    :sys="weatherData.sys"

            >

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

                    this.$store.commit('localStorage/addCity',this.city)
                    this.clearCity();
                    this.cityName = '';
                }

            },

            deleteCity(){
                this.$store.commit('localStorage/deleteCity',this.city)
            },
            clearStorage(){
                this.$store.commit('localStorage/clearCityStorage')
            },
            updateCity(responseData){
                this.city = {
                    name: responseData.name,
                    id: responseData.id,
                    country: responseData.sys.country,
                    coord: {
                        lon: responseData.coord.lon,
                        lat: responseData.coord.lat
                    }
                }
            },
            updateWeatherData(response){
                this.weatherData.dt = response.data.dt
                this.weatherData.weather = response.data.weather[0]
                this.weatherData.main = response.data.main
                this.weatherData.wind = response.data.wind
                this.weatherData.clouds = response.data.clouds
                this.weatherData.sys = response.data.sys
            },
            clearCity(){
                this.city = {
                    name:'',
                    id:'',
                    country:'',
                    coord:{
                        lon:'',
                        lat:''
                    }
                }
            }

        },
        data(){
            return{
                weatherData:{
                    dt:0,
                    weather: undefined,
                    main: undefined,
                    wind: undefined,
                    clouds: undefined,
                    sys: undefined,
                },
                city: {
                    name:'',
                    id:'',
                    country:'',
                    coord:{
                        lon:'',
                        lat:''
                    }
                },
                cityName:'',
                cityRules:[
                    v => !!v || 'City is required',
                ]


            }
        },
        computed: {
            isCityValid(){
                if(this.city === undefined) return false;

                return this.city.id;

            },
            trueValue(){
                return true;
            }

        }

    }
</script>

<style scoped>

</style>