<template>
  <div class="relative w-full h-auto overflow-hidden cursor-pointer">
    <div class="relative group bg-[#f7f6f9] overflow-hidden" :class="size">
      <img
        :src="product.images[0]"
        :alt="`${product.title} image`"
        @click="handleViewProductDetails"
        class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 bg-gray-200"
      />

      <div
        class="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap items-center gap-1 transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-black/5 to-transparent"
      >
        <button
          v-for="(variation, index) in variations"
          :key="variation"
          @click="addVariation(variation)"
          :style="{ transitionDelay: `${index * 30}ms` }"
          :class="[
            'group/btn overflow-hidden min-w-[45px] h-9 flex items-center justify-center text-xs transition-all duration-300',
            activeVariation === variation
              ? 'bg-[#1c1c1c] text-white border-[#1c1c1c]'
              : 'bg-white text-[#1c1c1c] border-[#e8e8e8] hover:border-[#1c1c1c]',
          ]"
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

    <div class="py-4 px-1 space-y-1">
      <h1 @click="handleViewProductDetails" class="text-xs text-[#1c1c1c] line-clamp-2">
        {{ product.title }}
      </h1>
      <h6 class="text-xs text-[#1c1c1c99]">₦{{ product.price }}</h6>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "~/stores/cart";
import { useProductsStore } from "~/stores/products";
import type { Product } from "~/types/Products";

interface Props {
  size?: string;
  product: Product;
}

const props = withDefaults(defineProps<Props>(), {
  size: "large",
});

const cartStore = useCartStore();
const productsStore = useProductsStore();
const router = useRouter();

const variations = ["XS", "S", "M", "L", "XL", "XXL"];

const activeVariation = ref<string | null>(null);

const addVariation = (variation: string) => {
  cartStore.addProductToCart(props.product, variation);

  activeVariation.value = variation;

  setTimeout(() => {
    activeVariation.value = null;
  }, 2000);
};

const handleViewProductDetails = () => {
  productsStore.toggleSearchModal();
  router.push(`/products/${props.product.id}`);
};
</script>

<style scoped>
/* Add this to your <style scoped> */
.group-hover\/btn\:-translate-y-1\/2 {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

.large {
  @apply w-full h-[250px] lg:h-[398px];
}

.small {
  @apply w-full h-[198px] md:h-[312px];
}
</style>
