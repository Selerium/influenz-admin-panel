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
  <div class="w-full h-full bg-primary rounded-lg">
    <div class="flex items-center gap-4 h-[8%]">
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
    <div class="w-full h-[1px] bg-gray-300"></div>
    <div class="flex flex-col gap-4 w-full h-[72%] overflow-y-auto py-4">
      <div v-for="record in list" class="flex items-center gap-4 w-full h-fit">
        <h2 class="m-0 box-border line-clamp-1 h-6 w-3/12 text-center">
          {{ record.admin }}
        </h2>
        <div class="h-full w-[1px]"></div>
        <h2 class="m-0 box-border h-fit w-6/12 text-left">
          {{ record.message }}
        </h2>
        <div class="h-full w-[1px]"></div>
        <h2 class="m-0 box-border line-clamp-1 h-6 w-3/12 text-center">
          {{ record.date }}
        </h2>
      </div>
    </div>
    <div class="w-full h-[20%] p-4 border-t border-gray-300 relative">
        <textarea class="bg-white text-black w-full px-4 py-2 h-full rounded-lg"></textarea>
        <button class="absolute right-6 bottom-6 bg-primary p-2 rounded-lg">Send</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
textarea {
    resize: none;
}
</style>
