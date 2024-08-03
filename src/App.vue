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
  <nav class="w-full bg-white border-b sticky top-0 z-50  border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-10">
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

  <div class="flex relative">
    <aside class="w-[20rem] px-3 py-4 ps-11 h-full flex-none">
      <form class="max-w-sm mx-auto">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea id="message" rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."></textarea>
      </form>
    </aside>
    <main class="w-full h-full border-0 border-l flex-1">
      <article class="flex gap-2 p-2 w-[35rem]" v-for="n in 10">
        <div class="pt-2">
          <img class="w-10 h-10 rounded-full" src="/panomonasabe.jpeg" alt="Rounded avatar">
        </div>
        <div class="w-full space-y-3">
          <div class="flex flex-col justify-start">
            <label class="font-semibold text-lg">name</label>
            <div class="flex gap-1 text-xs">
              <label>@email</label>
              <span>·</span>
              <label>date</label>
            </div>
          </div>
          <div class="text-base leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
            repellendus aliquam porro cum
            voluptates, exercitationem dolore tempore amet explicabo? Recusandae atque possimus eaque accusamus sapiente
            exercitationem voluptate sint dignissimos fugit?</div>
          <div>
            <img class="h-auto max-w-lg rounded" src="/panomonasabe.jpeg" alt="image description">
          </div>
        </div>
      </article>
    </main>
  </div>
</template>
