<template>
    <v-main>


        <v-container fluid>
            <v-toolbar
                    dark
                    color="teal"
                    floating>
                <v-autocomplete
                        v-model="currentCity"
                        :items="foundCities"
                        :loading="isLoading"
                        :search-input.sync="citySearch"
                        item-text="name"
                        item-value="id"
                        cache-items
                        class="mx-3"
                        flat
                        hide-no-data
                        hide-details
                        return-object
                        clearable
                        prepend-icon="mdi-domain"
                        label="Поиск города"></v-autocomplete>
                <v-btn @click="updateWeatherByCityName" icon>
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
            <!--<v-autocomplete-->
                    <!--v-model="model"-->
                    <!--:items="foundCities"-->
                    <!--:search-input.sync="search"-->
                    <!--item-text="name"-->
                    <!--item-value="id"-->
                    <!--clearable-->
                    <!--placeholder="Введите город"-->
                    <!--prepend-icon="mdi-domain"-->
                    <!--return-object-->
            <!--&gt;</v-autocomplete>-->

            <weather-info
                    :city="currentCity"
                    :weatherData="weatherData">
            </weather-info>

        </v-container>
    </v-main>
</template>

<script>
    import WeatherInfo from "../components/WeatherInfo.vue";

    import {mapState, mapActions, mapMutations} from 'vuex';
    import citySearchApi from '../api/citySearchApi';

    export default {
        name: "mainBar",
        components: {WeatherInfo},

        data(){
            return{
                citySearch: null,
                foundCities:[],
                isLoading: false,
            }
        },
        computed: {
            addCityEnabled(){
                if(this.currentCity === undefined) return false;
                return this.storedCities.findIndex(city => city.id === this.currentCity.id) === -1;
            },
            // storedCities(){
            //     return this.$store.state.localStorage.cities;
            // },
            // weatherData(){
            //     return this.$store.state.mainStorage.currentWeather;
            // },
            currentCity: {
                get(){
                    return this.$store.state.mainStorage.currentCity;
                },
                set(val){
                    this.setCurrentCity(val);
                }
            },
        },
        methods:{

            ...mapState({
                storedCities: 'localStorage/cities',
                weatherData: 'mainStorage/currentWeather'
            }),
            ...mapActions({
                updateWeatherByCityName: 'mainStorage/updateWeatherByCityName',
                updateWeatherByCityId: 'mainStorage/updateWeatherByCityId'
            }),
            ...mapMutations({
                setCurrentCity: 'mainStorage/setCurrentCityMutation',
                addCityToStorage: 'localStorage/addCity'
            }),

            addCity(){
                if(this.currentCity){
                    this.addCityToStorage(this.currentCity());
                    this.citySearch = null;
                }
            },
            updateWeather(){

            }
            // ...mapActions({
            //     findCity: 'mainStorage/searchForCitiesAction'
            // }),
            //
            // ...mapMutations({
            //     setFoundCities: 'mainStorage/setFoundCitiesMutation'
            // })

        },
        watch:{
            citySearch (val) {
                if (val=== null || val === undefined || val.length < 4) {
                    this.foundCities = [];
                    return;
                }
                if(this.currentCity ) return;
                if (this.isLoading) return;

                this.isLoading = true;

                citySearchApi.findCities(val)
                    .then(response =>{
                        this.foundCities = response.data;
                    })
                    .catch(err=> {
                        console.log(err);
                    })
                    .finally(()=> this.isLoading = false);
            },
        }

    }
</script>

<style scoped>

</style>