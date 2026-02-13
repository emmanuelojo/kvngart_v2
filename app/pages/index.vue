<template>
  <div class="w-full max-w-[1440px] mx-auto">
    <HeroSlider />
    <About />
    <Services />
    <TopSelling />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import HeroSlider from "~/components/home/HeroSlider.vue";
import About from "~/components/home/About.vue";
import Services from "~/components/home/Services.vue";
import TopSelling from "~/components/home/TopSelling.vue";
import Footer from "~/components/home/Footer.vue";
</script>

<style scoped></style>
