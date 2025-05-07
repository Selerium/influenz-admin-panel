<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-2 grow w-full lg:w-1/3 lg:min-w-72 h-fit">
    <h2 class="font-bold">Dispute Initiator</h2>
    <input
      class="py-2 px-4 bg-gray-300 font-light text-black h-14 w-full rounded-lg"
      disabled
      value="Initiator Name"
    />
  </div>
  <div class="flex flex-col gap-2 grow w-full lg:w-1/3 lg:min-w-72 h-fit">
    <h2 class="font-bold">Dispute Task ID/Name</h2>
    <input
      class="py-2 px-4 bg-gray-300 font-light text-black h-14 w-full rounded-lg"
      disabled
      value="ID / Name"
    />
  </div>
  <div class="flex flex-col gap-2 grow w-full lg:w-1/3 lg:min-w-72 h-fit">
    <h2 class="font-bold">Dispute Type</h2>
    <input
      class="py-2 px-4 bg-gray-300 font-light text-black h-14 w-full rounded-lg"
      disabled
      value="Selected Option"
    />
  </div>
  <div class="flex flex-col gap-2 grow w-full lg:w-1/3 lg:min-w-72 h-fit">
    <h2 class="font-bold">Date Submitted</h2>
    <input
      class="py-2 px-4 bg-gray-300 font-light text-black h-14 w-full rounded-lg"
      disabled
      value="xx/xx/xxxx"
    />
  </div>
  <div class="flex flex-col gap-2 w-full h-1/2 grow">
    <h2 class="font-bold">Description Of Issue</h2>
    <textarea
      class="py-2 px-4 h-full bg-gray-300 text-black w-full rounded-lg"
      disabled
      value="Selected Option"
    />
  </div>
  <div class="flex flex-col gap-2 grow w-full lg:w-1/3 lg:min-w-72 h-fit">
    <h2 class="font-bold">Contact Email</h2>
    <input
      class="py-2 px-4 bg-gray-300 font-light text-black h-14 w-full rounded-lg"
      disabled
      value="example@example.com"
    />
  </div>
  <div class="flex flex-col gap-2 grow w-full lg:w-1/3 lg:min-w-72 h-fit">
    <h2 class="font-bold">Attachment For Dispute</h2>
    <div
      class="flex justify-between items-center bg-primary rounded-lg h-14 w-full py-2 px-4 gap-4"
    >
      <img class="h-10 w-10 border" />
      <div class="flex flex-col grow">
        <h4 class="font-bold">File Name.pdf</h4>
        <p>xx/xx/xxxx</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
