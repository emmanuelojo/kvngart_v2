<template>
  <div class="space-y-4 md:space-y-6">
    <div class="flex items-center gap-2">
      <div class="min-w-4 w-4 h-4 bg-[#1c1c1c]"></div>

      <h1 class="text-sm md:text-xl text-[#1c1c1c] font-semibold uppercase">you may also like</h1>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProductCard v-for="product in products.products.slice(0, 4)" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "~/components/products/ProductCard.vue";
import { useProductsStore } from "~/stores/products";

const products = useProductsStore();
</script>

<style scoped></style>
