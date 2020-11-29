<template>
    <v-main>


        <v-container fluid>
            <v-toolbar
                    dense
                    floating
            >
                <!--<v-text-field-->
                        <!--hide-details-->
                        <!--prepend-icon="mdi-map-search"-->
                        <!--single-line-->
                        <!--v-model="cityName"-->
                <!--&gt;</v-text-field>-->
                <v-autocomplete
                        v-model="model"
                        :items="foundCities"
                        :search-input.sync="search"
                        item-text="name"
                        item-value="id"
                        label="Поиск города"
                        solo
                        chips
                        clearable
                ></v-autocomplete>

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

    import {mapState, mapActions, mapMutations} from 'vuex';

    export default {
        name: "mainBar",
        components: {WeatherInfo},

        data(){
            return{
                cityName:'',
                model:'',
                search:'',
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
            foundCities(){
                return this.$store.state.mainStorage.foundCities;
            }
        },
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
            ...mapActions({
                findCity: 'mainStorage/searchForCitiesAction'
            }),

            ...mapMutations({
                setFoundCities: 'mainStorage/setFoundCitiesMutation'
            })

        },
        watch:{
            search(val){
                if(val == null || val.length < 3){
                    this.setFoundCities([]);
                }
                this.findCity(val);
            }
        }

    }
</script>

<style scoped>

</style>