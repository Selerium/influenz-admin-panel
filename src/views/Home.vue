<script setup lang="ts">
import Navbar from "../components/Nav.vue";

let list = [
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    {ID: 0, taskTitle: "Title of Task", brand: "Brand Name", influencer: "Influencer Name", campaignName: "Campaign's Name", initiator: "Influencer", status: "Open", admin: "Admin 1", date: "2020-07-30T18:00:00.000Z"},
    ]
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4 justify-start items-center">
    <Navbar />
    <div class="mb-4 h-[1px] w-full bg-accent"></div>
    <div
      class="h-9/10 w-full box-border rounded-lg bg-primary overflow-x-scroll"
    >
      <div class="p-4 w-full min-w-7xl flex justify-between items-center">
        <h1 class="m-0">Dispute Manager</h1>
        <input
          class="w-72 p-2 rounded-lg border-black border-2 bg-white text-black"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div
        class="font-bold flex items-center gap-2 w-full min-w-7xl px-4 border-y border-gray-300 h-16 bg-secondary overflow-y-scroll"
      >
        <h2 class="w-[4%] text-center">ID</h2>
        <div class="h-full w-[1px] bg-gray-300"></div>
        <h2 class="w-[12%] text-center">Task Title</h2>
        <div class="h-full w-[1px] bg-gray-300"></div>
        <h2 class="w-[12%] text-center">Brand</h2>
        <div class="h-full w-[1px] bg-gray-300"></div>
        <h2 class="w-[12%] text-center">Influencer</h2>
        <div class="h-full w-[1px] bg-gray-300"></div>
        <h2 class="w-[12%] text-center">Campaign Name</h2>
        <div class="h-full w-[1px] bg-gray-300"></div>
        <h2 class="w-[12%] text-center">Initiator</h2>
        <div class="h-full w-[1px] bg-gray-300"></div>
        <h2 class="w-[12%] text-center">Status</h2>
        <div class="h-full w-[1px] bg-gray-300"></div>
        <h2 class="w-[12%] text-center">Admin</h2>
        <div class="h-full w-[1px] bg-gray-300"></div>
        <h2 class="w-[12%] text-center">Date</h2>
      </div>
      <div class="w-full min-w-7xl h-10/12 overflow-y-scroll overflow-x-clip">
        <div
          v-for="record in list"
          class="flex items-center gap-2 w-full px-4 border-gray-300 h-16 bg-primary scale-100 hover-scale"
        >
          <h2 class="w-[4%] text-center line-clamp-1">{{ record.ID }}</h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">{{ record.taskTitle }}</h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">{{ record.brand }}</h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">{{ record.influencer }}</h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">{{ record.campaignName }}</h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">{{ record.initiator }}</h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">{{ record.status }}</h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">{{ record.admin }}</h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">{{ record.date }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
}
</style>
