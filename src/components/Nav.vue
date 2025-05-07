<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const activeLink = ref<boolean>(false);
const modalPopup = ref<boolean>(false);

watch(() => route.name, () => {
  activeLink.value = (route.name == 'disputes');
});
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <nav class="w-full h-16 box-content py-4 flex justify-between items-center">
      <div class="flex gap-2 items-center h-full">
        <img src="/influenz-logo.png" class="hidden lg:block h-2/3 w-auto" />
        <img
          src="/small-influenz-logo.svg"
          class="block lg:hidden h-2/3 w-auto"
        />
        <h1>Admin Panel</h1>
      </div>
      <div class="hidden lg:flex gap-4 h-full items-center">
        <RouterLink :class="activeLink ? 'font-bold text-accent' : 'font-normal'" class="link" to="/disputes">Disputes</RouterLink>

        <!-- connected wallet css and html -->
        <!-- <div class="flex items-center h-full">
          <div
            class="w-40 h-2/3 rounded-l-lg bg-gray-300 flex items-center justify-center text-black"
          >
            <p>0x00000000</p>
          </div>
          <div
            class="w-40 h-2/3 rounded-r-lg bg-secondary flex items-center justify-center"
          >
            <p>4.2034 ETH</p>
          </div>
        </div> -->

        <img @click="modalPopup = true" class="border h-12 w-12 rounded-lg" />
      </div>
      <img @click="modalPopup = true" class="border h-12 w-12 rounded-lg block lg:hidden" >
    </nav>
    <div class="mb-4 h-[1px] w-full bg-accent"></div>
  </div>
  <div v-if="modalPopup" class="absolute z-10 w-dvw h-dvh top-0 left-0 flex items-center justify-center">
    <div @click="modalPopup = false" class="w-full h-full bg-black opacity-50"></div>
    <div class="bg-secondary absolute rounded-lg border border-accent flex flex-col items-center justify-center px-8 py-10 gap-2">
      <h1>Logged In As: <strong>Admin 1</strong></h1>
      <button @click="modalPopup = false; router.push('/')" class="w-full rounded-lg bg-tertiary border py-2 px-4 border-background font-bold">Log Out</button>
      <button @click="modalPopup = false" class="w-full rounded-lg bg-tertiary border py-2 px-4 border-background font-bold">Back</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link:hover {
  color: var(--color-accent);
}
</style>
