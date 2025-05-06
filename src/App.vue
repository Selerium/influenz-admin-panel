<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './components/Nav.vue';
import { useRoute } from 'vue-router';

let route = useRoute();

onMounted(() => {
  console.log(route.name);
});
</script>

<template>
  <div class="flex flex-col justify-start items-center w-full h-full">
    <Navbar class="h-[15dvh]"/>
    <RouterView class="w-full max-h-[85dvh] grow"/>
  </div>
</template>

<style lang="scss" scoped></style>