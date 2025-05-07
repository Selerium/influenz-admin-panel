<script setup lang="ts">
import { ref } from 'vue';
import router from '../router';

const username = ref<String>();
const password = ref<String>();

function submitLoginForm() {
    console.log(username.value);
    console.log(password.value);

    router.push('/disputes');
}
</script>

<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="flex flex-col rounded-lg p-8 justify-center items-center gap-8 min-h-fit lg:min-h-96 min-w-2xs w-1/4 lg:h-3/5 border-accent border-2">
            <img src="/influenz-logo.png"/>
            <h1>Admin Panel</h1>
            <form @submit.prevent="submitLoginForm" id="loginForm" class="flex flex-col items-center gap-4 w-full">
                <div class="flex flex-col items-start w-full">
                    <label class="w-full p-2">Username</label>
                    <input v-model="username" class="w-full p-2 rounded-lg border-black border-2 bg-white text-black" type="text" placeholder="Username" >
                </div>
                <div class="flex flex-col items-start w-full">
                    <label class="w-full p-2">Password</label>
                    <input v-model="password" class="w-full p-2 rounded-lg border-black border-2 bg-white text-black" type="password" placeholder="Password" >
                </div>
                <button type="submit" class="pointer mt-8 py-2 w-1/2 rounded-lg border border-secondary bg-secondary">Log In</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>