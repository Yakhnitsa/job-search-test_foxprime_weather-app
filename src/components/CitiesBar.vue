<template>
    <div>
        <h1>Сохраненные города</h1>
        <h1>{{ $store.state.localStorage.cities }}</h1>
        <v-list flat>
            <v-list-item-group v-model="city">
                <v-list-item v-for="(city, i) in cities"
                             :key="i"
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="city.name"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

    </div>
</template>

<script>
    export default {
        name: "CitiesBar",
        data() {
            return{
                city:''
            }
        },
        computed:{
            cities(){
                return this.$store.state.localStorage.cities;
            }
        }
    }
</script>

<style scoped>

</style>