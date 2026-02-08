<template>
  <div class="w-full max-w-[1440px] mx-auto">
    <Navbar />

    <slot />
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/home/Navbar.vue";
</script>

<style scoped></style>
