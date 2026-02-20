<template>
  <div class="w-full max-w-[1440px] mx-auto overflow-x-hidden">
    <Navbar />
    <Cart v-if="cartStore.showCartModal" />
    <SearchProducts v-if="productsStore.showSearchModal" />
    <slot />
    <ScrollToTop />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Footer from "~/components/home/Footer.vue";
import Navbar from "~/components/home/Navbar.vue";
import ScrollToTop from "~/components/ScrollToTop.vue";
import Cart from "~/components/products/Cart.vue";
import SearchProducts from "~/components/products/SearchProducts.vue";
import { fetchLocalCart } from "~/utils/localStorage";
import { useCartStore } from "~/stores/cart";
import { useProductsStore } from "~/stores/products";

const cartStore = useCartStore();
const productsStore = useProductsStore();

onMounted(() => {
  fetchLocalCart();
});
</script>

<style scoped></style>
