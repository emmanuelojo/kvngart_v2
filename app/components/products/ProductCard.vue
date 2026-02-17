<template>
  <div class="relative w-full h-auto overflow-hidden cursor-pointer">
    <div class="relative group w-full h-[250px] lg:h-[398px] bg-[#f7f6f9] overflow-hidden">
      <NuxtLink :href="`/products/${product.id}`">
        <img
          :src="product.images[0]"
          :alt="`${product.title} image`"
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 bg-gray-200"
        />
      </NuxtLink>

      <div
        class="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap items-center gap-1 transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-black/5 to-transparent"
      >
        <button
          v-for="(variation, index) in variations"
          :key="variation"
          @click="addVariation(variation)"
          :style="{ transitionDelay: `${index * 30}ms` }"
          class="group/btn overflow-hidden min-w-[45px] h-9 flex items-center justify-center text-xs text-[#1c1c1c] bg-white border border-[#e8e8e8] hover:border-[#1c1c1c] transition-colors"
        >
          <span class="relative h-[1.2em] overflow-hidden">
            <span class="flex flex-col transition-transform duration-300 ease-in-out group-hover/btn:-translate-y-1/2">
              <span class="flex items-center justify-center h-[1.2em]">
                {{ variation }}
              </span>
              <span class="flex items-center justify-center h-[1.2em]">
                {{ variation }}
              </span>
            </span>
          </span>
        </button>
      </div>
    </div>

    <NuxtLink :to="`/products/${product.id}`" class="flex flex-col lg:flex-row justify-between gap-2 px-1 py-4">
      <p class="text-xs text-[#1c1c1c] line-clamp-1 flex-1">
        {{ product.title }}
      </p>
      <p class="text-xs text-[#1c1c1c99] font-medium whitespace-nowrap">
        ₦
        {{ product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}

        <!-- $129,984,000.00 -->
      </p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import type { Product } from "~/types/Products";

const cartStore = useCartStore();

const props = defineProps<{
  product: Product;
}>();

const variations = ["XS", "S", "M", "L", "XL", "XXL"];

const addVariation = (variation: string) => {
  cartStore.addProductToCart(props.product, variation);

  // checkIfProductIsInCart();
};
</script>

<style scoped>
/* Add this to your <style scoped> */
.group-hover\/btn\:-translate-y-1\/2 {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
