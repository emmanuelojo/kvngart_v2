<template>
  <div>
    <div v-if="cartStore.showCartModal" class="fixed inset-0 z-[100] flex justify-end">
      <motion.div
        :initial="{ opacity: 0, backdropFilter: 'blur(0px)' }"
        :animate="{ opacity: 1, backdropFilter: 'blur(8px)' }"
        :exit="{ opacity: 0, backdropFilter: 'blur(0px)' }"
        class="absolute inset-0 bg-black/30 cursor-pointer"
        @click="handleToggleCartModal"
      />

      <motion.div
        :initial="{ x: '100%' }"
        :animate="{ x: 0 }"
        :exit="{ x: '100%' }"
        :transition="{ type: 'spring', damping: 25, stiffness: 200 }"
        class="relative w-full md:w-[50vw] lg:w-[40vw] h-full bg-white shadow-2xl flex flex-col p-6 overflow-y-auto"
      >
        <div class="relative flex items-center justify-between mb-8">
          <button @click="handleToggleCartModal" class="p-2 hover:bg-gray-100 rounded-full">
            <X />
          </button>

          <div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
            <ShoppingBag color="#1c1c1c" :size="14" />
            <h2 class="text-sm text-[#1c1c1c]">Cart ({{ cartStore.cartItemCount }})</h2>
          </div>

          <button v-if="cartStore.cartItemCount > 0" @click="cartStore.clearCart" class="cursor-pointer">
            <p class="text-sm text-[#1c1c1c]">Clear All</p>
          </button>
        </div>

        <div class="w-full flex-1 overflow-y-auto py-4 pr-4 space-y-4">
          <CartItem v-for="product in cartStore.cart" :key="product.id" :product="product" />

          <p v-if="cartStore.cartItemCount === 0" class="text-[#1c1c1c99] text-center">No item in your cart</p>
        </div>

        <div v-if="cartStore.cartItemCount > 0" class="border-t pt-4 space-y-4">
          <div class="flex items-center justify-between gap-4">
            <p class="text-xs text-[#1c1c1c] uppercase">Total</p>
            <p class="text-xs text-[#1c1c1c] font-semibold whitespace-nowrap">
              ₦
              {{ cartStore.cartTotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
            </p>
          </div>
          <button @click="checkout" class="w-full bg-black text-white py-3 font-medium">Checkout</button>
        </div>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onUnmounted, ref } from "vue";
import { motion } from "motion-v";
import { useCartStore } from "~/stores/cart";
import { X, ShoppingBag } from "lucide-vue-next";
import CartItem from "./CartItem.vue";
import type { CartProduct } from "~/types/Products";

const cartStore = useCartStore();

const { $paystack } = useNuxtApp();
const runtimeConfig = useRuntimeConfig();

const showEmail = ref(false);
const email = ref("");

const handleToggleCartModal = () => {
  cartStore.toggleCartModal();
};

const checkout = () => {
  const items = cartStore.cart.map((item: CartProduct) => ({
    id: item.id,
    name: item.title,
    variation: item.variation ?? "",
    quantity: item.quantity,
    price: item.price,
  }));

  // Create a nice readable summary for Paystack
  const orderSummary = items
    .map((i) => `${i.name} (${i.variation}) x${i.quantity} — ₦${i.price.toLocaleString()}`)
    .join("\n");

  $paystack.newTransaction({
    key: runtimeConfig.public.paystackPublicKey,
    email: "john1@mailinator.com", //email.value ?? "john1@mailinator.com",
    amount: cartStore.cartTotal * 100,
    // currency:cartStore.currency,
    metadata: {
      custom_fields: [
        {
          display_name: "Order Details",
          variable_name: "order_details",
          value: orderSummary,
        },
      ],
    },
    onSuccess: (transaction: any) => {
      // toast.success("Payment successful");

      cartStore.clearCart();
      cartStore.toggleCartModal(false);
      showEmail.value = false;
    },
    onLoad: (response: any) => console.log("onLoad: ", response),
    onCancel: () => {
      // toast.info("Payment modal closed");
      console.log("onCancel");
    },
    onError: (error: any) => {
      // toast.error(error.message ?? "An error occurred");
      console.log("Error: ", error.message);
    },
  });
};

// Watch the cart's visibility to toggle body scroll
watch(
  () => cartStore.showCartModal,
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
