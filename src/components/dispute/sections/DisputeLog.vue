<script setup lang="ts">
let list = [
  {
    ID: 0,
    actor: "Influencer",
    details: "Task Completion Submitted",
    date: "2025-05-05T13:00:00.000Z",
  },
  {
    ID: 1,
    actor: "Brand",
    details: "Task Rejected",
    date: "2025-05-05T13:00:00.000Z",
  },
  {
    ID: 2,
    actor: "Brand",
    details: "Task Rejected",
    date: "2025-05-05T13:00:00.000Z",
  },
  {
    ID: 4,
    actor: "Influencer",
    details: "Form Submitted",
    date: "2025-05-05T13:00:00.000Z",
  },
];
</script>

<template>
  <div class="w-full min-w-2xl lg:min-w-0 h-fit lg:h-full bg-primary rounded-lg overflow-x-auto">
    <div class="flex gap-4 h-fit lg:h-[8%]">
      <h2 class="font-bold p-4 m-0 box-border text-ellipsis w-2/12 text-center">
        ID
      </h2>
      <div class="h-full w-[1px] bg-gray-300"></div>
      <h2 class="font-bold p-4 m-0 box-border text-ellipsis w-3/12 text-center">
        Actor
      </h2>
      <div class="h-full w-[1px] bg-gray-300"></div>
      <h2 class="font-bold p-4 m-0 box-border text-ellipsis w-4/12 text-center">
        Activity Log
      </h2>
      <div class="h-full w-[1px] bg-gray-300"></div>
      <h2 class="font-bold p-4 m-0 box-border text-ellipsis w-3/12 text-center">
        Date
      </h2>
    </div>
    <div class="w-full h-[1px] bg-gray-300"></div>
    <div class="flex flex-col gap-4 w-full h-[92%] overflow-y-auto">
      <div v-for="record in list" class="flex gap-4 w-full h-fit">
        <h2 class="p-4 m-0 box-border line-clamp-1 h-10 w-2/12 text-center">
          {{ record.ID }}
        </h2>
        <div class="h-full w-[1px]"></div>
        <h2 class="p-4 m-0 box-border line-clamp-1 h-10 w-3/12 text-center">
          {{ record.actor }}
        </h2>
        <div class="h-full w-[1px]"></div>
        <h2 class="p-4 m-0 box-border h-fit w-4/12 text-center">
          {{ record.details }}
        </h2>
        <div class="h-full w-[1px]"></div>
        <h2 class="p-4 m-0 box-border h-fit w-3/12 text-center">
          {{ record.date }}
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
