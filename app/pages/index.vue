<template>
  <div class="w-full max-w-[1440px] mx-auto">
    <Navbar />
    <HeroSlider />
    <HeroSlider />
    <About />
    <TopSelling />
    <HeroSlider />
    <HeroSlider />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/home/Navbar.vue";
import HeroSlider from "~/components/home/HeroSlider.vue";
import About from "~/components/home/About.vue";
import TopSelling from "~/components/home/TopSelling.vue";
import Contact from "~/components/home/Contact.vue";
import Footer from "~/components/home/Footer.vue";
</script>

<style scoped></style>
