<template>
    <v-card
            class="ma-3"
            max-width="500"
    >
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="headline">Погода в регионе: {{city.name}}, {{city.country}}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{dateAndTime | formatDate}} , {{weatherData.weather.description}}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-row align="center">
            <v-col cols="6">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-weather-sunset-up</v-icon>
                    </v-list-item-icon>
                    <v-list-item-subtitle>восход: {{sunriseTime | formatTime}}</v-list-item-subtitle>
                </v-list-item>
            </v-col>
            <v-col cols="6">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-weather-sunset-down</v-icon>
                    </v-list-item-icon>
                    <v-list-item-subtitle>закат: {{sunsetTime | formatTime}}</v-list-item-subtitle>
                </v-list-item>
            </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-card-text>
            <v-row align="center">
                <v-col cols="7">
                    <v-row class="display-3">
                        {{weatherData.main.temp| formatTemperature}}&deg;C
                    </v-row>
                    <v-row>
                        <v-col>
                            min: {{weatherData.main.temp_min | formatTemperature}}&deg;C
                        </v-col>
                        <v-col>
                            max: {{weatherData.main.temp_max | formatTemperature}}&deg;C
                        </v-col>
                    </v-row>

                </v-col>
                <v-col cols="5">
                    <v-img
                            :src="weatherIconRef"
                            alt="Sunny image"

                    ></v-img>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-row>
            <v-col>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-send</v-icon>
                    </v-list-item-icon>
                    <v-list-item-subtitle>{{weatherData.wind.speed}} km/h</v-list-item-subtitle>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-soundcloud</v-icon>
                    </v-list-item-icon>
                    <v-list-item-subtitle>{{weatherData.clouds.all}}%</v-list-item-subtitle>
                </v-list-item>
            </v-col>
            <v-col>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-gauge</v-icon>
                    </v-list-item-icon>
                    <v-list-item-subtitle>{{weatherData.main.pressure}} Bar</v-list-item-subtitle>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-water-percent</v-icon>
                    </v-list-item-icon>
                    <v-list-item-subtitle>{{weatherData.main.humidity}}%</v-list-item-subtitle>
                </v-list-item>
            </v-col>
        </v-row>

    </v-card>
</template>

<script>
    const dateFormat = require('dateformat');

    export default {
        name: "WeatherInfo",

        props: {
            city: {
                type: Object,
                default: function () {
                    return {
                        name: 'No name',
                        id: 'No id',
                        country: 'XX',
                        coord: {
                            lon: 1,
                            lat: 1
                        }
                    }
                }
            },
            weatherData: {
                type: Object,
                default: function () {
                    return {
                        dt: '',
                        weather: {
                            main: 'no-data',
                            description: 'no-data',
                            icon: '02d'
                        },
                        main: {
                            temp: 0.0,
                            feels_like: 0.0,
                            temp_min: 0.0,
                            temp_max: 0.0,
                            pressure: 1000,
                            humidity: 50
                        },
                        wind: {
                            speed: 0.0,
                            deg: 0
                        },
                        clouds: {
                            all: 43,
                        },
                        sys: {
                            country: "USA",
                            sunrise: 1599023726,
                            sunset: 1599072313
                        },
                        timezone: 0

                    }
                }
            },

        },

        computed: {
            weatherIconRef() {
                const iconCode = this.weatherData.weather.icon;

                return 'http://openweathermap.org/img/wn/' + iconCode + '@4x.png';
            },
            sunriseTime() {
                return this.weatherData.sys.sunrise + this.weatherData.timezone
            },
            sunsetTime() {
                return this.weatherData.sys.sunset + this.weatherData.timezone
            },
            dateAndTime() {
                return this.weatherData.dt + this.weatherData.timezone
            }
        },

        filters: {
            formatDate: function (value) {
                return value ? dateFormat(new Date(value * 1000), "UTC:dddd, mmm d, yyyy") : '??'
            },
            formatTime: function (value) {
                return value ? dateFormat(new Date(value * 1000), "UTC:HH:MM:ss") : '??'
            },
            formatTemperature: function (value) {
                return value ? Math.round((value - 273.15) * 10) / 10 : '0.0'
            }
        },

        created() {

        }

    }
</script>

<style scoped>

</style>