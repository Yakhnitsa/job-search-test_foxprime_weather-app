<template>
    <div>


        <!---->
        <v-app>
            <v-navigation-drawer v-model="drawer" app>
                <cities-bar></cities-bar>
            </v-navigation-drawer>
            <v-app-bar
                    src="https://i.picsum.photos/id/1056/3988/2720.jpg?hmac=qX6hO_75zxeYI7C-1TOspJ0_bRDbYInBwYeoy_z_h08"
                    elevation="3"
                    app>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer">
                    <v-badge
                            color="green"
                            :content="citiesCount"
                            :value="citiesCount"
                    >
                        <v-icon>mdi-city</v-icon>
                    </v-badge>
                </v-app-bar-nav-icon>
                <v-toolbar-title>Simple weather application</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip left open-delay="200" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon
                               elevation="1"
                                href="https://github.com/Yakhnitsa/job-search-test_foxprime_weather-app" target="_blank"
                                v-on="on">
                            <v-icon large>mdi-github</v-icon>
                        </v-btn>
                    </template>
                    <span>Открыть проект на Github</span>
                </v-tooltip>


            </v-app-bar>

            <main-bar></main-bar>


            <v-footer app>

            </v-footer>
            <v-snackbar
                    :timeout="-1"
                    :value="hasErrors"
                    absolute
                    centered
                    color="danger"
                    elevation="10"
                    rounded="3">
                {{errorText}}
                <template v-slot:action="{ attrs }">
                    <v-btn
                            color="red"
                            icon
                            @click="hasErrors = false">
                        <v-icon large>mdi-close-circle-outline</v-icon>
                    </v-btn>
                </template>
                <!--<v-btn-->
                        <!--color="red"-->
                        <!--icon-->
                        <!--@click="hasErrors = false">-->
                    <!--<v-icon large>mdi-close-circle-outline</v-icon>-->
                <!--</v-btn>-->
            </v-snackbar>
        </v-app>
    </div>


</template>
<script>
    import MainBar from '../components/MainBar.vue'
    import CitiesBar from "../components/CitiesBar.vue";

    export default {
        components: {
            CitiesBar,
            MainBar
        },
        data(){
            return {
                drawer: true,
            }
        },
        computed:{
            citiesCount(){
                return this.$store.state.localStorage.cities.length;
            },
            hasErrors:{
                get(){
                    return true;
                },
                set(value){
                    console.log(value);
                }
            },
            errorText(){
                return 'Не удалось выполнить запрос';
            }
        }

    }
</script>
