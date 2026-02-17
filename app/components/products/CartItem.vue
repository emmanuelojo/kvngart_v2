<template>
  <div class="w-full flex gap-4">
    <img :src="product.images[0]" :alt="`${product.title}`" class="min-w-20 w-20 h-24 text-xs bg-[#f7f6f9]" />

    <div class="w-full flex justify-between">
      <div class="grid space-y-3 w-[65%]">
        <div>
          <p class="text-xs text-[#1c1c1c] font-semibold line-clamp-2">
            {{ product.title }}
          </p>
          <p v-if="product.variation" class="text-xs text-[#1c1c1c99]">
            {{ product.variation }}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 border border-[#e8e8e8]">
            <button
              @click="handleDecreaseQuantity"
              :disabled="product.quantity < 1"
              class="w-10 h-[30px] flex items-center justify-center"
            >
              <Minus :size="14" />
            </button>

            <p class="text-xs text-[#1c1c1c]">
              {{ product.quantity }}
            </p>

            <button @click="handleIncreaseQuantity" class="w-10 h-[30px] flex items-center justify-center">
              <Plus :size="14" />
            </button>
          </div>

          <button
            @mouseover="removeHovered = true"
            @mouseout="removeHovered = false"
            @click="handleRemoveProduct"
            class="w-fit h-[30px] flex items-center justify-center gap-1"
          >
            <Trash :size="14" :color="removeHovered ? '#1c1c1c' : '#1c1c1c99'" />

            <p :class="`text-xs ${removeHovered ? 'text-[#1c1c1c]' : 'text-[#1c1c1c99]'}`">Remove</p>
          </button>
        </div>
      </div>

      <div class="w-[35%]">
        <p class="flex justify-end text-xs text-[#1c1c1c99] font-semibold whitespace-nowrap">
          ₦{{ product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import { Minus, Plus, Trash } from "lucide-vue-next";
import { ref } from "vue";
import type { CartProduct } from "~/types/Products";

const props = defineProps<{
  product: CartProduct;
}>();

const cartStore = useCartStore();

const removeHovered = ref(false);

const handleDecreaseQuantity = () => {
  cartStore.decreaseQuantity(props.product.id, props.product.variation);
};

const handleIncreaseQuantity = () => {
  cartStore.addProductToCart(props.product, props.product.variation);
};

const handleRemoveProduct = () => {
  cartStore.removeProductFromCart(props.product.id, props.product.variation);
};
</script>

<style scoped></style>
