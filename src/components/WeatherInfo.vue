<template>
    <v-card>
        <!--<h4>Погода в регионе</h4>-->
        <!--<p>{{city}}</p>-->
        <!--<span>{{weatherData.weather}}</span>-->
        <!--<span>{{weatherData.main}}</span>-->
        <!--<span>{{weatherData.wind}}</span>-->
        <!--<span>{{weatherData.clouds}}</span>-->
        <!--<span>{{weatherData.sys}}</span>-->
        <v-card
                class="mx-auto"
                max-width="400"
        >
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title class="headline">Погода в регионе</v-list-item-title>
                    <v-list-item-title class="headline">{{city.name}}, {{city.country}}</v-list-item-title>
                    <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-card-text>
                <v-row align="center">
                    <v-col class="display-3" cols="6">
                        23&deg;C
                    </v-col>
                    <v-col cols="6">
                        <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                                alt="Sunny image"
                                width="92"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-send</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-cloud-download</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>

            <!--<v-slider-->
                    <!--v-model="time"-->
                    <!--:max="6"-->
                    <!--:tick-labels="labels"-->
                    <!--class="mx-4"-->
                    <!--ticks-->
            <!--&gt;</v-slider>-->

            <!--<v-list class="transparent">-->
                <!--<v-list-item-->
                        <!--v-for="item in forecast"-->
                        <!--:key="item.day"-->
                <!--&gt;-->
                    <!--<v-list-item-title>{{ item.day }}</v-list-item-title>-->

                    <!--<v-list-item-icon>-->
                        <!--<v-icon>{{ item.icon }}</v-icon>-->
                    <!--</v-list-item-icon>-->

                    <!--<v-list-item-subtitle class="text-right">-->
                        <!--{{ item.temp }}-->
                    <!--</v-list-item-subtitle>-->
                <!--</v-list-item>-->
            <!--</v-list>-->

            <v-divider></v-divider>

            <v-card-actions>
                <v-btn text>Full Report</v-btn>
            </v-card-actions>
        </v-card>
    </v-card>
</template>

<script>
    export default {
        name: "WeatherInfo",
        props: {
            city:{
                type: Object,
                default: function(){
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
            weatherData:{
                type: Object,
                default: function () {
                    return {
                        dt:'',
                        weather:{
                            main: 'no-data',
                            description: 'no-data',
                            icon: '?'
                        },
                        main:{
                            temp: 0.0,
                            feels_like: 0.0,
                            temp_min: 0.0,
                            temp_max: 0.0,
                            pressure: 1000,
                            humidity: 50
                        },
                        wind:{
                            speed: 0.0,
                            deg: 0
                        },
                        clouds:{
                            all: 43,
                        },
                        sys:{
                            country: "USA",
                            sunrise: 1599023726,
                            sunset: 1599072313
                        }

                    }
                }
            },
            // dt:'',
            // weather: {
            //     type: Object,
            //     default: function () {
            //         return {
            //             main: 'no-data',
            //             description: 'no-data',
            //             icon: '?'
            //         }
            //     }
            // },
            // main: {
            //     type: Object,
            //     default: function(){
            //         return{
            //             temp: 0.0,
            //             feels_like: 0.0,
            //             temp_min: 0.0,
            //             temp_max: 0.0,
            //             pressure: 1000,
            //             humidity: 50
            //         }
            //     }
            //
            // },
            // wind: {
            //     type: Object,
            //     default: function(){
            //         return{
            //             speed: 0.0,
            //             deg: 250
            //         }
            //     }
            // },
            // clouds: {
            //     type: Object,
            //     default: function(){
            //         return{
            //             all: 43,
            //         }
            //     }
            // },
            // sys: {
            //     type: Object,
            //     default: function(){
            //         return{
            //             country: "USA",
            //             sunrise: 1599023726,
            //             sunset: 1599072313
            //         }
            //     }
            // }
        },

        created(){

        }


    }
</script>

<style scoped>

</style>