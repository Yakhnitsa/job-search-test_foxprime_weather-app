<template>
    <div>
        <h4>Погода в регионе</h4>
        <p>{{city}}</p>
        <span>{{weatherData.weather}}</span>
        <span>{{weatherData.main}}</span>
        <span>{{weatherData.wind}}</span>
        <span>{{weatherData.clouds}}</span>
        <span>{{weatherData.sys}}</span>
    </div>
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