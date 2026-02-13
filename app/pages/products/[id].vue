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
          <h6 class="md:text-lg lg:text-xl text-[#1c1c1c]">$ {{ productDetails?.price }}</h6>

          <div class="flex items-center gap-1">
            <div class="min-w-2 w-2 h-2 bg-[#1c1c1c] rounded-full"></div>

            <p class="text-xs text-[#1c1c1c]">Only 10 units left</p>
          </div>
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
              @click="selectedSize = variation"
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
            class="group/btn overflow-hidden w-full h-10 flex items-center justify-center bg-[#1c1c1c] transition-colors"
          >
            <span class="relative h-[1.2em] overflow-hidden">
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

    <ProductsYouMayLike />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useProductsStore } from "~/stores/products";
import Divider from "~/components/Divider.vue";
import ProductDetailsAccordion from "~/components/products/ProductDetailsAccordion.vue";
import ProductsYouMayLike from "~/components/products/ProductsYouMayLike.vue";

const route = useRoute();
const products = useProductsStore();
const productId = +(route.params.id ?? 1);

const productDetails = products.getProduct(productId);

const variations = ["XS", "S", "M", "L", "XL", "XXL"];
const selectedSize = ref(variations[0]);

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
