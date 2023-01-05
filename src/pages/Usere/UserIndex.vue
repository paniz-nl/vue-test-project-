<template>
    <div class="container mt-5">
        <div class="row g-4">
            <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            
            <div v-else class="col-md-4"  v-for="user in users" :key="user.id" >
                <UserCards :user="user"/>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import UserCards from './UserCards.vue';

        const users = ref([])
        const loading = ref(true)

        function getData(){
                
             axios.get("https://jsonplaceholder.typicode.com/users")
            .then(function (response){
                users.value = response.data;
                loading.value = false
            })
            .catch(function (error) {
            
            console.log(error);
            })
        };
        
        getData()

</script>


<style>

</style>