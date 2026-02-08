<template>
  <div class="w-full flex flex-col gap-4 px-5">
    <p>Top Selling</p>

    <div class="grid lg:grid-cols-3 gap-4">
      <div
        v-for="category in products.categories"
        :key="category.id"
        class="relative w-full h-[496px] lg:h-[575px] bg-gray-400 overflow-hidden"
      >
        <img
          :src="category.image"
          :alt="`${category.name} image`"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        <div class="absolute top-2 left-2 prose prose-justify-start">
          <p class="vertical-text text-white text-[70px] font-bold uppercase">{{ category.name }}</p>
        </div>

        <NuxtLink to="/shop" class="absolute left-4 bottom-4">
          <button
            class="w-[100px] h-10 flex items-center justify-center bg-white text-black text-xs font-semibold uppercase"
          >
            shop now
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/stores/products";

const products = useProductsStore();
</script>

<style scoped>
/* .prose-justify-start,
.prose-justify-left {
  text-align: start;
}

.prose {
  margin-trim: block;
  overflow-wrap: anywhere;
  width: 100%;
  display: block;
} */

.vertical-text {
  writing-mode: vertical-rl;
  overflow-wrap: break-word;
  margin-block: 0;
  transform: scale(-1);
}
</style>
