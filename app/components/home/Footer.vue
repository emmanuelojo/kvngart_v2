<template>
  <section id="footer" class="max-w-[1440px] flex justify-center mx-auto">
    <div class="w-full bg-[#daa520] py-3 bottom-0">
      <p class="text-xs md:text-base flex text-center justify-center items-center gap-2">
        <span class="mx-1"> Copyright <i class="fa fa-copyright"></i> {{ year }} </span>

        <span> | </span>
        <span>
          <a href="https://jekon-dev.netlify.app" target="_blank"> Emmanuel Ojo </a>
        </span>
        <span> | </span>
        <span>All Rights Reserved.</span>
      </p>

      <div class="relative">
        <transition name="fade">
          <div
            id="pagetop"
            class="absolute right-2 md:right-4 bottom-16 flex items-center justify-center bg-[#daa520]/[0.4] hover:bg-[#daa520]/[0.7] px-3 pt-1 pb-1.5 text-white cursor-pointer"
            @click="toTop"
          >
            <!-- <i class="text-3xl flex justify-center items-center text-white fa fa-angle-up"> </i> -->
            ^
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const year = ref(new Date().getFullYear());
</script>
