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
                        :disabled="!city"
                        @click="addCity" icon>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-toolbar>
            <v-btn @click="addCity">Add city</v-btn>
            <v-btn @click="deleteCity">Delete city</v-btn>
            <v-btn @click="clearStorage">Clear storage</v-btn>
        </v-container>
    </v-main>
</template>

<script>
    import weatherApi from '../api/weatherApi'

    export default {
        name: "mainBar",
        methods:{
            async updateWeather(){

                weatherApi.updateWeatherByCityName(this.cityName)
                    .then(response =>{
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    });
            },
            addCity(){
                this.city = {id: 2643743, name: "London" };
                this.$store.commit('localStorage/addCity',this.city)
            },

            deleteCity(){
                this.city = {id: 2643743, name: "London" };
                this.$store.commit('localStorage/deleteCity',this.city)
            },
            clearStorage(){
                this.$store.commit('localStorage/clearCityStorage')
            }
        },
        data(){
            return{
                weatherData:undefined,
                city: undefined,
                cityName:'',
                cityRules:[
                    v => !!v || 'City is required',
                ]


            }
        }

    }
</script>

<style scoped>

</style>