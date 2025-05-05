<script setup lang="ts"></script>

<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="flex flex-col rounded-lg p-8 justify-center items-center gap-8 min-h-96 min-w-2xs w-1/4 h-3/5 border-accent border-2">
            <img src="/influenz-logo.png"/>
            <h1>Admin Panel</h1>
            <form class="flex flex-col items-center gap-4 w-full">
                <div class="flex flex-col items-start w-full">
                    <label class="w-full p-2">Username</label>
                    <input class="w-full p-2 rounded-lg border-black border-2 bg-white text-black" type="text" placeholder="Username" >
                </div>
                <div class="flex flex-col items-start w-full">
                    <label class="w-full p-2">Password</label>
                    <input class="w-full p-2 rounded-lg border-black border-2 bg-white text-black" type="password" placeholder="Password" >
                </div>
                <button class="mt-8 py-2 w-1/2 rounded-lg bg-secondary">Log In</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>