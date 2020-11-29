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
            <v-autocomplete
                    v-model="model"
                    :items="foundCities"
                    :search-input.sync="search"
                    item-text="name"
                    item-value="id"
                    chips
                    clearable
                    placeholder="Введите город"
                    prepend-icon="mdi-domain"
                    return-object
            ></v-autocomplete>
            <v-autocomplete
                    v-model="apiModel"
                    :items="foundCities"
                    :loading="isLoading"
                    :search-input.sync="apiSearch"
                    color="white"
                    hide-no-data
                    hide-selected
                    item-text="name"
                    item-value="name"
                    label="Public APIs"
                    placeholder="Start typing to Search"
                    prepend-icon="mdi-database-search"
                    return-object
            ></v-autocomplete>
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
    import citySearchApi from '../api/citySearchApi';

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
                ],
                descriptionLimit: 60,
                entries: [],
                foundCities:[],
                isLoading: false,
                apiModel: null,
                apiSearch: null,
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
            // foundCities(){
            //     return this.$store.state.mainStorage.foundCities;
            // },

            items () {
                return this.entries.map(entry => {
                    const Description = entry.Description.length > this.descriptionLimit
                        ? entry.Description.slice(0, this.descriptionLimit) + '...'
                        : entry.Description;

                    return Object.assign({}, entry, { Description })
                })
            },
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
                console.log(val);
                if(val == null || val.length < 3){
                    this.setFoundCities([]);
                    return;
                }
                this.findCity(val);
            },
            apiSearch (val) {
                // Items have already been loaded
                if (this.items.length > 0 || val.length < 4) {
                    this.foundCities = [];
                    return;
                }

                // Items have already been requested
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
                // Lazily load input items
                // fetch('https://api.publicapis.org/entries')
                //     .then(res => res.json())
                //     .then(res => {
                //         const { count, entries } = res
                //         this.count = count
                //         this.entries = entries
                //     })
                //     .catch(err => {
                //         console.log(err)
                //     })
                //     .finally(() => (this.isLoading = false))
            },
        }

    }
</script>

<style scoped>

</style>