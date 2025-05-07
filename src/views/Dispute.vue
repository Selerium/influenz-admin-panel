<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import TaskTab from "../components/dispute/TaskTab.vue";
import DisputeTab from "../components/dispute/DisputeTab.vue";
import { ref } from "vue";

let route = useRoute();
let router = useRouter();

const disputeId = route.params.id;
const disputeAnswer = ref<number>(0);
const checkbox1 = ref<boolean>(false);
const checkbox2 = ref<boolean>(false);
const checkbox3 = ref<boolean>(false);

function submitAnswer() {
  // send answer to backend
  if (checkbox1.value && checkbox2.value && checkbox3.value)
    router.push('/disputes');
}
</script>

<template>
  <div class="w-full gap-2 lg:gap-0 h-[80dvh] flex flex-col justify-between items-center">
    <!-- back/accept/reject buttons -->
    <div class="flex flex-wrap gap-2 lg:gap-0 lg:flex-nowrap w-full justify-between h-fit lg:h-[5%]">
      <button
        class="pointer grow lg:grow-0 py-1.5 font-bold w-52 rounded-lg border border-secondary bg-tertiary"
        @click="router.go(-1)"
      >
        Back
      </button>
      <div class="flex flex-wrap lg:flex-nowrap gap-2 w-fit">
        <button
        @click="disputeAnswer = 1"
          class="pointer grow lg:grow-0 py-1.5 font-bold w-52 rounded-lg border border-secondary bg-valid"
        >
          Accept Dispute
        </button>
        <button
        @click="disputeAnswer = 2"
          class="pointer grow lg:grow-0 py-1.5 font-bold w-52 rounded-lg border border-secondary bg-invalid"
        >
          Reject Dispute
        </button>
      </div>
    </div>
    <!-- task/dispute -->
    <div class="flex flex-col lg:flex-row w-full h-[90%] gap-4">
      <TaskTab class="not-[lg]:w-full" />
      <DisputeTab class="not-[lg]:w-full" />
    </div>

    <!-- modal for rejection/approval -->
    <div v-if="disputeAnswer != 0" class="absolute z-10 w-dvw h-dvh top-0 left-0 flex items-center justify-center">
      <div @click="disputeAnswer = 0" class="w-full h-full bg-black opacity-50"></div>
      <div class="bg-secondary absolute rounded-lg border border-accent flex flex-col items-center justify-center px-8 py-10 gap-2">
        <h1 class="font-bold text-2xl">Are You Sure?</h1>
        <p class="w-2/3 text-center font-light">This action is permanent and cannot be undone. (Action: <strong class="font-bold">{{ disputeAnswer == 1 ? 'Approve' : 'Reject' }} Dispute</strong>)</p>
        <div class="flex gap-2 justify-start items-center w-2/3">
          <input v-model="checkbox1" type="checkbox">
          <label class="font-light">I have read through the dispute form</label>
        </div>
        <div class="flex gap-2 justify-start items-center w-2/3">
          <input v-model="checkbox2" type="checkbox">
          <label class="font-light">I have read and checked task details</label>
        </div>
        <div class="flex gap-2 justify-start items-center w-2/3">
          <input v-model="checkbox3" type="checkbox">
          <label class="font-light">I have explained my reasoning in the Admin Notes section</label>
        </div>
        <button @click="submitAnswer" :disabled="!checkbox1 || !checkbox2 || !checkbox3" class="w-2/3 rounded-lg bg-primary border py-2 px-4 border-background font-bold">I Confirm My Decision</button>
        <button @click="disputeAnswer = 0" class="w-2/3 rounded-lg bg-tertiary border py-2 px-4 border-background font-bold">Go Back</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
button {
  transition: 250ms;
}

button:disabled {
  cursor: not-allowed;
  opacity: 75%;
}

button:disabled:hover{
  border-color: var(--color-background);
}
</style>
