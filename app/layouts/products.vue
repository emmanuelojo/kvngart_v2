<template>
  <div class="w-full max-w-[1440px] mx-auto overflow-x-hidden">
    <Navbar />

    <slot />

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Footer from "~/components/home/Footer.vue";
import Navbar from "~/components/home/Navbar.vue";
import { fetchLocalCart } from "~/utils/localStorage";

onMounted(() => {
  fetchLocalCart();
});
</script>

<style scoped></style>
