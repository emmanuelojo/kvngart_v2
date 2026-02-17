<template>
  <nav class="relative w-full h-[65px] flex items-center justify-between gap-4 px-4 py-1 z-[100]">
    <div class="hidden lg:flex items-center gap-4">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        class="nav-item text-xs hover:text-[#daa520] font-semibold uppercase cursor-pointer"
      >
        {{ link.name }}
      </NuxtLink>
    </div>

    <button class="lg:hidden z-[110]" @click="isOpen = !isOpen">
      <div class="space-y-1.5">
        <span
          class="block w-6 h-0.5 bg-black transition-transform"
          :class="isOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span class="block w-6 h-0.5 bg-black" :class="isOpen ? 'opacity-0' : ''"></span>
        <span
          class="block w-6 h-0.5 bg-black transition-transform"
          :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </div>
    </button>

    <NuxtLink to="/">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20">
        <img :src="Logo" alt="logo" class="logo w-full h-full object-cover" />
      </div>
    </NuxtLink>

    <div class="flex items-center gap-4">
      <button
        @click="handleShowSearchSuggestions"
        @mouseover="searchHovered = true"
        @mouseout="searchHovered = false"
        class="cursor-pointer"
      >
        <Search :color="searchHovered ? '#daa520' : '#1c1c1c'" />
      </button>
      <div class="relative">
        <button
          @click="handleToggleCart"
          @mouseover="shopHovered = true"
          @mouseout="shopHovered = false"
          class="group text-xs font-semibold uppercase cursor-pointer"
        >
          <ShoppingBag :color="shopHovered ? '#daa520' : '#1c1c1c'" />
        </button>

        <div
          v-if="cartStore.cart.length > 0"
          class="absolute top-0 -right-1 flex items-center justify-center min-w-[6px] h-[6px] rounded-md bg-[#daa520]"
        ></div>
        <!-- <div
          v-if="cartStore.cart.length > 0"
          class="absolute top-0 -right-1 flex items-center justify-center min-w-[16px] h-[16px] text-[6px] text-white rounded-md bg-[#daa520]"
        >
          {{ cartStore.cart.length }}
        </div> -->
      </div>
    </div>

    <!-- <Presence> -->
    <motion.div
      v-if="isOpen"
      :initial="{ x: '-100%' }"
      :animate="{ x: 0 }"
      :exit="{ x: '-100%' }"
      :transition="{ type: 'spring', damping: 25, stiffness: 200 }"
      class="fixed inset-0 bg-white z-[105] flex flex-col p-8 pt-24 gap-6"
    >
      <motion.div
        v-for="(link, i) in navLinks"
        :key="link.path"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: i * 0.1 + 0.2 }"
      >
        <NuxtLink
          :to="link.path"
          class="text-lg hover:text-[#daa520] font-semibold uppercase cursor-pointer"
          @click="isOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </motion.div>
    </motion.div>
    <!-- </Presence> -->
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
// import { motion, Presence } from "motion-v";
import { motion } from "motion-v";
import { Search, ShoppingBag } from "lucide-vue-next";
import Logo from "~/assets/images/blk.png";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

const isOpen = ref(false);
const showSearchSuggestions = ref(false);
const searchHovered = ref(false);
const shopHovered = ref(false);

const navLinks = [
  { name: "home", path: "/" },
  { name: "about", path: "/#about" },
  { name: "services", path: "/#services" },
  { name: "portfolio", path: "/#portfolio" },
  { name: "contact", path: "/#contact" },
  { name: "shop", path: "/shop" },
];

const handleShowSearchSuggestions = () => {
  showSearchSuggestions.value = !showSearchSuggestions.value;
};

const handleToggleCart = () => {
  cartStore.toggleCartModal();
};

watch(isOpen, (val) => {
  if (val) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "";
});
</script>

<style scoped>
/* .router-link-active.router-link-exact-active {
  color: #daa520;
} */

.router-link-active:hover {
  color: #daa520;
}
</style>
