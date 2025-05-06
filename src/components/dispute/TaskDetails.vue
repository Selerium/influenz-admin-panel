<script setup lang='ts'></script>
 
<template><div class="flex flex-col w-1/2 h-full rounded-lg bg-primary">
    <!-- task header -->
    <div class="flex justify-between items-center p-4">
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <h1>Task Title</h1>
          <h4>campaign name | brand name</h4>
        </div>
        <div class="flex gap-4 items-center">
          <div
            class="flex gap-2 px-2 py-1 text-black items-center bg-tab-date rounded-lg"
          >
            <img class="h-4 w-4 border" />
            <p>23 Aug 2024</p>
          </div>
          <div
            class="flex gap-2 px-2 py-1 items-center bg-tab-money rounded-lg"
          >
            <img class="h-4 w-4 border" />
            <p>0.023 ETH</p>
          </div>
          <p>Assigned To: <strong>Admin 1</strong></p>
        </div>
      </div>
      <img class="h-16 w-16 border rounded-full" />
    </div>
    <div class="w-full h-[1px] bg-gray-300"></div>
    <!-- description -->
    <div
      class="flex flex-col justify-start items-start gap-4 overflow-y-auto overflow-x-hidden grow p-4"
    >
      <h2 class="font-bold">Description</h2>
      <p>
        The full brief of what’s expected will be displayed here.
        
        This will most probably be a fully markdown editable paragraph that will give
        information about the task itself.
        - It can use bullet points!
        - It can use text formatting options.
        
        Users should describe the task well
        enough that it is clear what is required for the influencer that is
        tasked with carrying out this bounty.
      </p>
    </div>
    <div class="w-full h-[1px] bg-gray-300"></div>
    <!-- attachments -->
    <div class="flex h-1/3">
        <!-- employee attachments -->
        <div class="flex flex-col grow p-4 gap-4">
            <h2 class="font-bold">Employee Attachments</h2>
            <div class="flex flex-col gap-4 w-full h-full overflow-y-auto overflow-x-hidden">
                <div class="flex justify-between items-center bg-secondary rounded-lg h-14 w-full p-2 gap-4">
                    <img class="h-10 w-10 border">
                    <div class="flex flex-col grow">
                        <h4 class="font-bold">File Name.pdf</h4>
                        <p>xx/xx/xxxx</p>
                    </div>
                </div>
                <div class="flex justify-between items-center bg-secondary rounded-lg h-14 w-full p-2 gap-4">
                    <img class="h-10 w-10 border">
                    <div class="flex flex-col grow">
                        <h4 class="font-bold">File Name.pdf</h4>
                        <p>xx/xx/xxxx</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-full w-[1px] bg-gray-300"></div>
        <!-- influencer submission -->
        <div class="flex flex-col grow p-4 gap-4">
            <h2 class="font-bold">Influencer Submission</h2>
            <div class="flex flex-col gap-4 w-full h-full overflow-y-auto overflow-x-hidden">
                <div class="flex justify-between items-center bg-secondary rounded-lg h-14 w-full p-2 gap-4">
                    <img class="h-10 w-10 border">
                    <div class="flex flex-col grow">
                        <h4 class="font-bold">File Name.pdf</h4>
                        <p>xx/xx/xxxx</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  </div></template>
 
<style scoped lang='scss'></style>