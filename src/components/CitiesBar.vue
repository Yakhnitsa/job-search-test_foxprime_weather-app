<template>
    <v-card>
        <v-toolbar
                color="teal"
                src="https://i.picsum.photos/id/1056/3988/2720.jpg?hmac=qX6hO_75zxeYI7C-1TOspJ0_bRDbYInBwYeoy_z_h08"
                dark
        >

            <v-toolbar-title>Сохраненные города</v-toolbar-title>
        </v-toolbar>
        <v-list flat>
            <v-list-item-group v-model="currentCity">
                <v-list-item v-for="(city, i) in cities"
                             :key="i"
                             :value="city"
                >
                    <v-list-item-icon>
                        <v-icon>
                            mdi-map-marker
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="city.name"></v-list-item-title>
                    </v-list-item-content>
                    <v-btn icon fab
                           @click="deleteCity(city)">
                        <v-icon>mdi-close-circle</v-icon>
                    </v-btn>
                </v-list-item>
            </v-list-item-group>
        </v-list>

    </v-card>
</template>

<script>
    export default {
        name: "CitiesBar",
        data() {
            return{
                index:''
            }
        },
        computed:{
            cities(){
                return this.$store.state.localStorage.cities;
            },
            currentCity:{
                get: function () {
                    return this.$store.state.mainStorage.currentCity;
                },
                set: function (city) {
                    this.$store.commit('mainStorage/setCurrentCity',city);
                    this.updateWeatherByCityId(city.id);
                }
            },

        },
        methods:{
            updateWeatherByCityId(cityId){
                this.$store.dispatch('mainStorage/updateWeatherByCityId',cityId);
            },
            deleteCity(city){
                this.city = undefined;
                this.$store.commit('localStorage/deleteCity',city)
            },

        }
    }
</script>

<style scoped>

</style>