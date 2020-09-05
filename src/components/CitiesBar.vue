<template>
    <v-card>
        <v-toolbar
                color="teal"
                src="https://i.picsum.photos/id/1056/3988/2720.jpg?hmac=qX6hO_75zxeYI7C-1TOspJ0_bRDbYInBwYeoy_z_h08"
                dark
        >

            <v-toolbar-title>Сохраненные города</v-toolbar-title>
        </v-toolbar>



        <v-list two-line>
            <v-list-item
                    v-for="city in cities"
                    :key="city.id"
                    @click="setCurrentCityAndUpdateWeather(city)"
            >
                <v-list-item-avatar>
                    <v-icon>mdi-map-marker</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-text="city.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="city.country"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action @click.stop="deleteCity(city)">
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-close-circle</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>

        </v-list>

    </v-card>
</template>

<script>
    export default {
        name: "CitiesBar",
        data() {
            return {
                index: ''
            }
        },
        computed: {
            cities() {
                return this.$store.state.localStorage.cities;
            },
            currentCity() {
                return this.$store.state.mainStorage.currentCity;
            },

        },
        methods: {
            setCurrentCityAndUpdateWeather(city) {
                this.$store.commit('mainStorage/setCurrentCity', city);
                this.$store.dispatch('mainStorage/updateWeatherByCityId', city.id);
            },
            deleteCity(city) {
                this.$store.commit('localStorage/deleteCity', city)
            },
        }
    }
</script>

<style scoped>

</style>