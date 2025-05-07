<script setup lang="ts"></script>

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
        <a>Disputes</a>

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

        <img class="border h-12 w-12 rounded-lg" />
      </div>
      <img class="border h-12 w-12 rounded-lg block lg:hidden"
    </nav>
    <div class="mb-4 h-[1px] w-full bg-accent"></div>
  </div>
</template>

<style lang="scss" scoped></style>
