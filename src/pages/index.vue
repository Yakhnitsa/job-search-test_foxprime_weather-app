<template>
    <div>


        <!---->
        <v-app>
            <v-app-bar app>
                My weather application
            </v-app-bar>

            <main-bar>Something wrong with it</main-bar>

            <v-footer app>

            </v-footer>
        </v-app>
    </div>


</template>
<script>
    import MainBar from '../components/MainBar.vue'

    export default {
        components: {
            MainBar
        },
    }
</script>
