<template>
    <v-main>


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

                <v-tooltip bottom open-delay="200" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                v-on="on"
                                :disabled="!addCityEnabled"
                                @click="addCity" icon>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <span>Добавить город</span>
                </v-tooltip>
            </v-toolbar>
            <weather-info
                    v-bind:city="currentCity"
                    v-bind:weatherData="weatherData">
            </weather-info>

        </v-container>
    </v-main>
</template>

<script>
    import WeatherInfo from "../components/WeatherInfo.vue";

    export default {
        name: "mainBar",
        components: {WeatherInfo},
        methods:{
            updateWeather(){
                this.$store.dispatch('mainStorage/updateWeatherByCityName',this.cityName);
            },
            addCity(){
                if(this.currentCity){
                    this.$store.commit('localStorage/addCity',this.currentCity);
                    this.cityName = '';
                }

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
            addCityEnabled(){
                if(this.currentCity === undefined) return false;
                return this.storedCities.findIndex(city => city.id === this.currentCity.id) === -1;
            },
            storedCities(){
                return this.$store.state.localStorage.cities;
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