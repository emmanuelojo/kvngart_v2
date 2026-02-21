<template>
  <div class="px-4 pb-10 space-y-4">
    <Head>
      <Title> KVNG Art | {{ productDetails?.title ?? "" }} </Title>
      <Meta name="description" :content="productDetails?.description ?? ''" />
      <Meta
        name="image"
        :content="
          productDetails?.images[0] ?? 'https://res.cloudinary.com/dj3yahj56/image/upload/v1771009443/logo_vumptz.jpg'
        "
      />
    </Head>
    <div class="w-full flex flex-col lg:flex-row gap-4">
      <div class="w-full lg:w-1/2 h-[460px] lg:h-screen">
        <img
          :src="productDetails?.images[0]"
          :alt="`${productDetails?.title ?? ''}`"
          class="w-full h-full text-xs bg-gray-200"
        />
      </div>

      <div class="w-full lg:w-1/2 lg:max-w-[512px] mx-auto space-y-5 pt-4">
        <div class="space-y-2 md:space-y-4">
          <h1 class="text-xl md:text-[22px] lg:text-[26px] text-[#1c1c1c] font-semibold">
            {{ productDetails?.title }}
          </h1>
          <h6 class="md:text-lg lg:text-xl text-[#1c1c1c]">₦{{ productDetails?.price }}</h6>

          <!-- <div class="flex items-center gap-1">
            <div class="min-w-2 w-2 h-2 bg-[#1c1c1c] rounded-full"></div>

            <p class="text-xs text-[#1c1c1c]">Only 10 units left</p>
          </div> -->
        </div>

        <Divider />

        <div class="space-y-1">
          <p class="text-xs text-[#1c1c1c99]">
            Size: <span class="text-[#1c1c1c]">{{ selectedSize }}</span>
          </p>

          <div class="flex flex-wrap items-center gap-2">
            <button
              v-for="(variation, index) in variations"
              :key="variation"
              @click="addVariation(variation)"
              :disabled="showAnimation"
              :style="{ transitionDelay: `${index * 30}ms` }"
              class="min-w-[50px] h-9 flex items-center justify-center text-xs border border-[#e8e8e8] hover:border-[#1c1c1c]"
              :class="selectedSize === variation ? 'text-white bg-[#1c1c1c]' : 'text-[#1c1c1c] bg-white'"
            >
              {{ variation }}
            </button>
          </div>
        </div>

        <div>
          <button
            @click="addToCart"
            :disabled="showAnimation"
            :class="`${
              showAnimation ? 'bg-white border border-[#1c1c1c]' : 'bg-[#1c1c1c]'
            } group/btn overflow-hidden w-full h-10 flex items-center justify-center transition-colors`"
          >
            <div v-if="showAnimation">
              <Loader v-if="showAnimationLoader" colour="#000000" />
              <p v-else class="text-sm text-[#1c1c1c] uppercase">Added</p>
            </div>
            <span v-else class="relative h-[1.2em] overflow-hidden">
              <span
                class="flex flex-col transition-transform duration-300 ease-in-out group-hover/btn:-translate-y-1/2"
              >
                <span class="flex items-center justify-center h-[1.2em] text-sm text-white uppercase">
                  Add To Cart
                </span>
                <span class="flex items-center justify-center h-[1.2em] text-sm text-white uppercase">
                  Add To Cart
                </span>
              </span>
            </span>
          </button>
        </div>

        <ProductDetailsAccordion />
      </div>
    </div>

    <!-- NB: use category to recommend. if not enough products, randomize to fill up space -->
    <ProductsYouMayLike v-if="productDetails" :product="productDetails" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useProductsStore } from "~/stores/products";
import { useCartStore } from "~/stores/cart";
import Divider from "~/components/Divider.vue";
import Loader from "~/components/Loader.vue";
import ProductDetailsAccordion from "~/components/products/ProductDetailsAccordion.vue";
import ProductsYouMayLike from "~/components/products/ProductsYouMayLike.vue";
import type { CartProduct, Product } from "~/types/Products";

const route = useRoute();
const products = useProductsStore();
const cartStore = useCartStore();
const productId = +(route.params.id ?? 1);

const productDetails = products.getProduct(productId);

const variations = ["XS", "S", "M", "L", "XL", "XXL"];
const selectedSize = ref(variations ? variations[0] : "");
const addedToCart = ref(false);
const showAnimation = ref(false);
const showAnimationLoader = ref(false);
const showQuantityButtons = ref(false);
const productInCart = ref<CartProduct | null>(null);

const checkIfProductIsInCart = () => {
  if (productDetails) {
    const foundProduct = cartStore.cart.find((item: Product) => item.id === productDetails.id);
    if (foundProduct) {
      productInCart.value = foundProduct;
      showQuantityButtons.value = true;
      addedToCart.value = true;
    } else {
      productInCart.value = null;
      showQuantityButtons.value = false;
      addedToCart.value = false;
    }
  }
};

const addVariation = (variation: string) => {
  if (productDetails) {
    selectedSize.value = variation;
    cartStore.addProductToCart(productDetails, variation);
  }
};

const addToCart = () => {
  if (productDetails) {
    cartStore.addProductToCart(productDetails, selectedSize.value);
    addedToCart.value = true;
    showAnimation.value = true;
    showAnimationLoader.value = true;

    setTimeout(() => {
      checkIfProductIsInCart();
      showQuantityButtons.value = true;
      showAnimationLoader.value = false;
    }, 2000);

    setTimeout(() => {
      showAnimation.value = false;
    }, 5000);
  }
};

definePageMeta({
  layout: "products",
  // title: `${productDetails?.title ?? "KVNG Art"}`,
  // description: `${
  //   productDetails?.description ??
  //   "2D and 3D architecture sketching, drawings, modeling, animation and renders. Portraits. Digital, ink, pencil hyper-realistic portraits of all sizes."
  // }`,
});
</script>

<style scoped></style>
