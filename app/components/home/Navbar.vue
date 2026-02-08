<template>
  <nav class="relative w-full h-[65px] flex items-center justify-between gap-4 px-4 py-1">
    <div class="flex items-center gap-4">
      <NuxtLink to="/" class="text-xs font-semibold uppercase"> home </NuxtLink>
      <NuxtLink to="/shop" class="text-xs font-semibold uppercase"> about </NuxtLink>
      <NuxtLink to="/shop" class="text-xs font-semibold uppercase"> portfolio </NuxtLink>
      <NuxtLink to="/#contact" class="text-xs font-semibold uppercase"> contact </NuxtLink>
      <NuxtLink to="/shop" class="text-xs font-semibold uppercase"> shop </NuxtLink>
    </div>

    <NuxtLink to="/">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20">
        <img :src="Logo" alt="logo" class="logo w-full h-full object-cover" />
      </div>
    </NuxtLink>

    <div class="flex items-center gap-4">
      <button @click="handleShowSearchSuggestions" class="cursor-pointer">
        <Search colour="#000000" />
      </button>

      <!--  v-if="showSearchSuggestions" -->
      <div v-if="showSearchSuggestions" class="absolute top-12 right-4 w-fit">
        <SearchSuggestions />
      </div>

      <NuxtLink
        to="/cart"
        @mouseover="cartHovered = true"
        @mouseout="cartHovered = false"
        class="group text-xs font-semibold uppercase"
      >
        <ShoppingCart :colour="cartHovered ? '#daa520' : '#000000'" />
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Search from "~/assets/icons/Search.vue";
import ShoppingCart from "~/assets/icons/ShoppingCart.vue";
import Logo from "~/assets/images/blk.png";
import SearchSuggestions from "../products/SearchSuggestions.vue";

const cartHovered = ref(false);
const showSearchSuggestions = ref(false);

const handleShowSearchSuggestions = () => {
  showSearchSuggestions.value = !showSearchSuggestions.value;
};

onMounted(() => {
  document.addEventListener("click", () => {
    // handleShowSearchSuggestions();
    // showSearchSuggestions.value = false;
  });
});
</script>

<style scoped>
.router-link-active.router-link-exact-active {
  color: #daa520;
}
</style>
