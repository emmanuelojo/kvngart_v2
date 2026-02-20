<template>
  <div>
    <div v-if="productsStore.showSearchModal" class="fixed inset-0 z-[100] flex justify-end">
      <motion.div
        :initial="{ opacity: 0, backdropFilter: 'blur(0px)' }"
        :animate="{ opacity: 1, backdropFilter: 'blur(8px)' }"
        :exit="{ opacity: 0, backdropFilter: 'blur(0px)' }"
        class="absolute inset-0 bg-black/30 cursor-pointer"
        @click="handleToggleSearchModal"
      />

      <motion.div
        :initial="{ x: '100%' }"
        :animate="{ x: 0 }"
        :exit="{ x: '100%' }"
        :transition="{ type: 'spring', damping: 25, stiffness: 200 }"
        class="relative w-full md:w-[50vw] lg:w-[40vw] h-full bg-white shadow-2xl flex flex-col p-6 overflow-y-auto"
      >
        <div class="space-y-4 mb-8">
          <div class="relative flex items-center justify-between gap-4">
            <Search color="#1c1c1c" :size="14" />

            <input
              type="text"
              v-model="productsStore.searchTerm"
              class="flex flex-1 h-10 text-[#1c1c1c] placeholder:text-[#1c1c1c99] border border-none outline-none"
            />

            <button @click="handleToggleSearchModal" class="p-2 hover:bg-gray-100 rounded-full">
              <X />
            </button>
          </div>

          <Divider :height="2" />
        </div>

        <div class="w-full flex-1 overflow-y-auto py-4 pr-4 space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <SearchResultItem
              v-for="product in productsStore.filteredProducts"
              :key="product.id"
              :product="product"
              size="small"
            />
          </div>
          <p v-if="productsStore.filteredProducts.length === 0" class="text-[#1c1c1c99] text-center">No match found</p>
        </div>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onUnmounted, ref } from "vue";
import { motion } from "motion-v";
import { useProductsStore } from "~/stores/products";
import { X, Search } from "lucide-vue-next";
import SearchResultItem from "./SearchResultItem.vue";

const productsStore = useProductsStore();

const handleToggleSearchModal = () => {
  productsStore.toggleSearchModal();
};

watch(
  () => productsStore.showSearchModal,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Optional: Add padding-right if the scrollbar jumping bothers you
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  },
  { immediate: true }, // Run immediately when component is created
);

// Cleanup: Ensure scroll is restored if the component is destroyed
onUnmounted(() => {
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
});
</script>
