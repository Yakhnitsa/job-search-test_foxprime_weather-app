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

        </v-container>
    </v-main>
</template>

<script>

    export default {
        name: "mainBar",
        methods:{
            updateWeather(){
                console.log("Something done...")
            },
            addCity(){
                console.log(this.cityName);
            }
        },
        data(){
            return{
                formValid: false,
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