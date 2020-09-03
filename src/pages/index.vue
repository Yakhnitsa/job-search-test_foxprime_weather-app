<template>
    <div>


        <!---->
        <v-app>
            <v-navigation-drawer v-model="drawer" app>
                <cities-bar></cities-bar>
            </v-navigation-drawer>
            <v-app-bar app>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </v-app-bar>

            <main-bar></main-bar>


            <v-footer app>

            </v-footer>
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
        }

    }
</script>
