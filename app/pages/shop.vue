<template>
  <div class="w-full max-w-[1440px] mx-auto border border-green-500">
    <Navbar />

    <div>
      <div class="grid lg:grid-cols-3 gap-4">
        <div
          v-for="product in products.products"
          :key="product.id"
          class="relative w-full h-[496px] lg:h-[575px] bg-gray-400 overflow-hidden"
        >
          <img
            :src="product.images[0]"
            :alt="`${product.title} image`"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />

          <div class="absolute top-2 left-2 prose prose-justify-start">
            <p class="vertical-text text-white text-[70px] font-bold uppercase">{{ product.title }}</p>
          </div>

          <NuxtLink to="/shop">
            <button
              class="absolute left-4 bottom-4 w-[100px] h-10 flex items-center justify-center bg-white text-black text-xs font-semibold uppercase"
            >
              shop now
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/home/Navbar.vue";
import { useProductsStore } from "~/stores/products";

definePageMeta({
  layout: "products",
});

const products = useProductsStore();
</script>

<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
  overflow-wrap: break-word;
  margin-block: 0;
  transform: scale(-1);
}
</style>
