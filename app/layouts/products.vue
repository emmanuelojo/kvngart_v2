<template>
  <div class="w-full max-w-[1440px] mx-auto overflow-x-hidden">
    <Navbar />

    <slot />

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "~/components/home/Footer.vue";
import Navbar from "~/components/home/Navbar.vue";
</script>

<style scoped></style>
