<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { initFlowbite } from 'flowbite';
import { onBeforeMount } from 'vue';
import Sidebar from './components/Sidebar.vue';

onBeforeMount(() => {
  initFlowbite();
})
</script>

<template>
  <nav class="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <a href="https://flowbite.com" class="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div class="flex items-center lg:order-2">
          <a href="#"
            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log
            in</a>
          <a href="#"
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get
            started</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="flex relative h-[89vh]">
    <aside class="w-80 px-3 py-4 h-full border-0 border-r">
      <form class="max-w-sm mx-auto">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea id="message" rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."></textarea>
      </form>
    </aside>
    <main>
      <div>
        hello
      </div>
    </main>
  </div>
</template>
