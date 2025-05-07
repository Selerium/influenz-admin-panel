<script setup lang="ts">
import { ref } from "vue";
import Details from "./sections/Details.vue";
import ActivityLog from "./sections/Log.vue";
import Chat from "./sections/Chat.vue";
import Notes from "./sections/Notes.vue";

const chosenValue = ref<number>(0);
</script>

<template>
  <div class="flex flex-col w-1/2 h-full box-border">
    <div class="flex w-full">
      <!-- selection for bigger screens -->
      <button
        @click="chosenValue = 0"
        :class="chosenValue == 0 ? 'bg-secondary' : 'bg-primary'"
        class="hidden lg:block w-1/4 rounded-t-lg py-2 font-bold"
      >
        Dispute Details
      </button>
      <button
        @click="chosenValue = 1"
        :class="chosenValue == 1 ? 'bg-secondary' : 'bg-primary'"
        class="hidden lg:block w-1/4 rounded-t-lg py-2 font-bold"
      >
        Activity Log
      </button>
      <button
        @click="chosenValue = 2"
        :class="chosenValue == 2 ? 'bg-secondary' : 'bg-primary'"
        class="hidden lg:block w-1/4 rounded-t-lg py-2 font-bold"
      >
        Chat History
      </button>
      <button
        @click="chosenValue = 3"
        :class="chosenValue == 3 ? 'bg-secondary' : 'bg-primary'"
        class="hidden lg:block w-1/4 rounded-t-lg py-2 font-bold"
      >
        Admin Notes
      </button>
      <!-- selection for smaller screens -->
      <select @change="chosenValue = $event.target ? $event.target.value : chosenValue" class="w-full rounded-t-lg py-2 font-bold bg-secondary text-center lg:hidden">
        <option class="py-2 bg-primary" value="0">Dispute Details</option>
        <option class="py-2 bg-primary" value="1">Activity Log</option>
        <option class="py-2 bg-primary" value="2">Chat History</option>
        <option class="py-2 bg-primary" value="3">Admin Notes</option>
      </select>
    </div>
    <div
      class="flex flex-wrap items-start content-start h-full w-full p-4 gap-4 box-border overflow-y-auto bg-secondary rounded-b-lg"
    >
      <Details v-if="chosenValue == 0" />
      <ActivityLog v-if="chosenValue == 1" />
      <Chat v-if="chosenValue == 2" />
      <Notes v-if="chosenValue == 3" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
