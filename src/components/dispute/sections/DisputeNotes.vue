<script setup lang="ts">
let list = [
  {
    admin: "Admin 1",
    message:
      "This is some information written by an admin and more words. More words indeed. This can be written and posted like a forum of sorts",
    date: "2025-05-05T13:00:00.000Z",
  },
  {
    admin: "Admin 1",
    message:
      "This is some information written by an admin and more words. More words indeed. This can be written and posted like a forum of sorts",
    date: "2025-05-05T13:00:00.000Z",
  },
  {
    admin: "Admin 1",
    message:
      "This is some information written by an admin and more words. More words indeed. This can be written and posted like a forum of sorts",
    date: "2025-05-05T13:00:00.000Z",
  },
  {
    admin: "Admin 1",
    message:
      "This is some information written by an admin and more words. More words indeed. This can be written and posted like a forum of sorts",
    date: "2025-05-05T13:00:00.000Z",
  },
  {
    admin: "Admin 1",
    message:
      "This is some information written by an admin and more words. More words indeed. This can be written and posted like a forum of sorts",
    date: "2025-05-05T13:00:00.000Z",
  },
  {
    admin: "Admin 1",
    message:
      "This is some information written by an admin and more words. More words indeed. This can be written and posted like a forum of sorts",
    date: "2025-05-05T13:00:00.000Z",
  },
];
</script>

<template>
  <div class="w-full lg:min-w-0 h-full bg-primary overflow-x-auto overflow-y-hidden rounded-lg">
    <div class="flex min-w-2xl lg:min-w-0 items-center gap-4 h-[8%]">
      <h2 class="font-bold p-4 m-0 box-border text-ellipsis w-3/12 text-center">
        Admin
      </h2>
      <div class="h-full w-[1px] bg-gray-300"></div>
      <h2 class="font-bold p-4 m-0 box-border text-ellipsis w-6/12 text-center">
        Notes
      </h2>
      <div class="h-full w-[1px] bg-gray-300"></div>
      <h2 class="font-bold p-4 m-0 box-border text-ellipsis w-3/12 text-center">
        Date
      </h2>
    </div>
    <div class="w-full min-w-2xl lg:min-w-0 h-[1px] bg-gray-300"></div>
    <div class="flex min-w-2xl lg:min-w-0 flex-col gap-4 w-full h-[72%] overflow-y-auto py-4">
      <div v-for="record in list" class="flex items-center gap-4 w-full h-fit">
        <p class="m-0 font-light box-border line-clamp-1 h-6 w-3/12 text-center">
          {{ record.admin }}
        </p>
        <div class="h-full w-[1px]"></div>
        <p class="m-0 font-light box-border h-fit w-6/12 text-left">
          {{ record.message }}
        </p>
        <div class="h-full w-[1px]"></div>
        <p class="m-0 font-light box-border h-fit w-3/12 text-center">
          {{ record.date }}
        </p>
      </div>
    </div>
    <div class="w-full min-w-2xl lg:min-w-0 h-[1px] bg-gray-300"></div>
    <div class="sticky left-0 w-full lg:min-w-0 h-[20%] p-4">
        <textarea class="bg-white text-black font-light w-full px-4 py-2 h-full rounded-lg"></textarea>
        <button class="absolute right-6 bottom-6 bg-primary p-2 rounded-lg">Send</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
textarea {
    resize: none;
}
</style>
