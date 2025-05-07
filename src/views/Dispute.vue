<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import TaskDetails from "../components/dispute/TaskDetails.vue";
import DisputeDetails from "../components/dispute/DisputeDetails.vue";

let route = useRoute();
let router = useRouter();

const disputeId = route.params.id;
</script>

<template>
  <div class="w-full h-[80dvh] flex flex-col justify-between items-center">
    <!-- back/accept/reject buttons -->
    <div class="flex w-full justify-between h-[5%]">
      <button
        class="pointer py-2 w-52 rounded-lg border border-secondary bg-secondary"
        @click="router.go(-1)"
      >
        Back
      </button>
      <div class="flex gap-2 w-fit">
        <button
          class="pointer py-2 w-52 rounded-lg border border-secondary bg-valid"
        >
          Accept Dispute
        </button>
        <button
          class="pointer py-2 w-52 rounded-lg border border-secondary bg-invalid"
        >
          Reject Dispute
        </button>
      </div>
    </div>
    <!-- task/dispute -->
    <div class="flex w-full h-[90%] gap-4">
      <TaskDetails />
      <DisputeDetails />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
