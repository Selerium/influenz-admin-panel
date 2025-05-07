<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './components/Nav.vue';
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';

let route = useRoute();
const enableNav = ref<boolean>(false);

watch(() => route.name, () => {
  enableNav.value = (route.name != 'login');
});
</script>

<template>
  <div class="flex flex-col justify-start items-center w-full h-full">
    <Navbar v-if="enableNav" class="h-[15dvh]"/>
    <RouterView :class="enableNav ? 'max-h-[85dvh]' : 'max-h-full'" class="w-full grow"/>
  </div>
</template>

<style lang="scss" scoped></style>