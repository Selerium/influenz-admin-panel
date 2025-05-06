<script setup lang="ts">
import Navbar from "../components/Nav.vue";
import router from "../router";

function viewDisputeDetails(id: number) {
  router.push(`/disputes/${id}`);
}

let list = [
  {
    ID: 0,
    taskTitle: "Create Instagram Story",
    brand: "Glow Cosmetics",
    influencer: "Emily Ray",
    campaignName: "Summer Glow 2025",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 1",
    date: "2025-05-01T10:00:00.000Z",
  },
  {
    ID: 1,
    taskTitle: "YouTube Product Review",
    brand: "TechNova",
    influencer: "Carlos Tech",
    campaignName: "Gadget Launch X1",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 2",
    date: "2025-05-02T14:30:00.000Z",
  },
  {
    ID: 2,
    taskTitle: "TikTok Unboxing",
    brand: "StyleLoop",
    influencer: "Jade Parker",
    campaignName: "Spring Style Drop",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 3",
    date: "2025-04-28T09:00:00.000Z",
  },
  {
    ID: 3,
    taskTitle: "Blog Write-Up",
    brand: "EcoClean",
    influencer: "Sam Writes",
    campaignName: "Green Homes Initiative",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 1",
    date: "2025-04-30T11:15:00.000Z",
  },
  {
    ID: 4,
    taskTitle: "Instagram Reel",
    brand: "Zest Water",
    influencer: "Lina Boost",
    campaignName: "Hydration Nation",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 4",
    date: "2025-05-03T12:45:00.000Z",
  },
  {
    ID: 5,
    taskTitle: "Facebook Live Q&A",
    brand: "WellNest",
    influencer: "Doc Tanya",
    campaignName: "Mind & Body Wellness",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 2",
    date: "2025-05-04T16:00:00.000Z",
  },
  {
    ID: 6,
    taskTitle: "Giveaway Announcement",
    brand: "ChocoFix",
    influencer: "SweetCravings",
    campaignName: "Treat Yourself Campaign",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 1",
    date: "2025-05-05T13:00:00.000Z",
  },
  {
    ID: 7,
    taskTitle: "Pinterest Pin Series",
    brand: "HomeBright",
    influencer: "Martha DIY",
    campaignName: "Bright Ideas",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 3",
    date: "2025-05-06T08:30:00.000Z",
  },
  {
    ID: 8,
    taskTitle: "Twitter Poll Engagement",
    brand: "SnackLab",
    influencer: "MarkieTweets",
    campaignName: "Snack Smart",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 4",
    date: "2025-05-01T17:00:00.000Z",
  },
  {
    ID: 9,
    taskTitle: "Podcast Mention",
    brand: "FitCore",
    influencer: "ActiveAndy",
    campaignName: "Stronger Together",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 2",
    date: "2025-04-29T07:00:00.000Z",
  },
  {
    ID: 10,
    taskTitle: "YouTube Shorts",
    brand: "SnapStyle",
    influencer: "VidQueen",
    campaignName: "Flash Trends",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 1",
    date: "2025-05-02T15:45:00.000Z",
  },
  {
    ID: 11,
    taskTitle: "LinkedIn Article",
    brand: "ProNet",
    influencer: "CareerKendra",
    campaignName: "Networking Smarter",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 3",
    date: "2025-04-27T10:20:00.000Z",
  },
  {
    ID: 12,
    taskTitle: "IGTV Interview",
    brand: "GlowGear",
    influencer: "WellnessWendy",
    campaignName: "Radiant Routines",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 2",
    date: "2025-05-06T19:00:00.000Z",
  },
  {
    ID: 13,
    taskTitle: "Snapchat Takeover",
    brand: "PopWear",
    influencer: "TrendyTim",
    campaignName: "Street Pop Vibes",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 4",
    date: "2025-05-03T11:00:00.000Z",
  },
  {
    ID: 14,
    taskTitle: "Instagram Carousel Post",
    brand: "PetHaven",
    influencer: "FurryFriends",
    campaignName: "Pet Joy",
    initiator: "Influencer",
    status: "Open",
    admin: "Admin 1",
    date: "2025-05-05T14:00:00.000Z",
  },
];
</script>

<template>
  <div class="w-full h-[80dvh] flex flex-col gap-4 justify-start items-center">
    <div
      class="h-full w-full box-border rounded-lg bg-primary overflow-x-scroll overflow-y-hidden"
    >
      <div class="p-4 w-full min-w-7xl flex justify-between items-center">
        <h1 class="m-0 font-bold">Dispute Manager</h1>
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
          @click="viewDisputeDetails(record.ID)"
          class="flex items-center gap-2 w-full px-4 border-gray-300 h-16 bg-primary scale-100 hover-scale"
        >
          <h2 class="w-[4%] text-center line-clamp-1">{{ record.ID }}</h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">
            {{ record.taskTitle }}
          </h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">{{ record.brand }}</h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">
            {{ record.influencer }}
          </h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">
            {{ record.campaignName }}
          </h2>
          <div class="h-full w-[1px]"></div>
          <h2 class="w-[12%] text-center line-clamp-1">
            {{ record.initiator }}
          </h2>
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
