<template>
  <div class="w-full px-4 space-y-4">
    <div>
      <!-- search -->
    </div>

    <div>
      <!-- <div class="grid lg:grid-cols-3 gap-4"> -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard v-for="product in products.products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "~/components/products/ProductCard.vue";
import { useProductsStore } from "~/stores/products";

definePageMeta({
  layout: "products",
});

const products = useProductsStore();

useHead({
  title: "KVNG Art | Shop",
  meta: [{ name: "description", content: "KVNG Art Merch" }],
});
</script>

<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
  overflow-wrap: break-word;
  margin-block: 0;
  transform: scale(-1);
}
</style>
