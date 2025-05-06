<script setup lang='ts'>
import { onMounted } from 'vue';

let list = [
    {actor: 'Brand', message: 'Sample message. I’m asking about something very important to our business deal.'},
    {actor: 'Influencer', message: 'Sample message. I’m asking about something very important to our business deal.'},
    {actor: 'Influencer', message: 'Sample message. I’m asking about something very important to our business deal.'},
    {actor: 'Brand', message: 'Sample message. I’m asking about something very important to our business deal.'},
    {actor: 'Influencer', message: 'Sample message. I’m asking about something very important to our business deal.'},
    {actor: 'Brand', message: 'Sample message. I’m asking about something very important to our business deal.'},
    {actor: 'Brand', message: 'Sample message. I’m asking about something very important to our business deal.'},
    {actor: 'Brand', message: 'Sample message. I’m asking about something very important to our business deal.'},
    {actor: 'Influencer', message: 'Sample message. I’m asking about something very important to our business deal.'},
]

onMounted(() => {
    let chatBox = document.getElementById('chatBox');
    if (chatBox)
        chatBox.scrollTop = chatBox.scrollHeight;
})
</script>
 
<template>
    <div id="chatBox" class="flex flex-col-reverse gap-4 w-full h-full p-4 bg-primary rounded-lg overflow-y-auto">
        <div v-for="message in list" :class="message.actor == 'Brand' ? 'bg-secondary' : 'bg-gray-300 ml-auto text-black'" class="p-4 w-2/3 rounded-lg">
            <h2 class="font-bold">{{ message.actor }}</h2>
            <p>{{ message.message }}</p>
        </div>
    </div>
</template>
 
<style scoped lang='scss'></style>