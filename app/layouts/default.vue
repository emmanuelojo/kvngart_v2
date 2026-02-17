<template>
  <div class="w-full max-w-[1440px] mx-auto overflow-x-clip">
    <Navbar />
    <Cart v-if="cartStore.showCartModal" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "~/components/home/Navbar.vue";
import Cart from "~/components/products/Cart.vue";
import { fetchLocalCart } from "~/utils/localStorage";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

onMounted(() => {
  fetchLocalCart();
});
</script>

<style scoped></style>
