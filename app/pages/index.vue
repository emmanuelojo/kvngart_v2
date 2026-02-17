<template>
  <div class="w-full max-w-[1440px] mx-auto">
    <HeroSlider />
    <About />
    <Services />
    <TopSelling />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import HeroSlider from "~/components/home/HeroSlider.vue";
import About from "~/components/home/About.vue";
import Services from "~/components/home/Services.vue";
import TopSelling from "~/components/home/TopSelling.vue";
import Footer from "~/components/home/Footer.vue";

useSeoMeta({
  title: "KVNG Art",
  ogTitle: "KVNG Art",
  description:
    "2D and 3D architecture sketching, drawings, modeling, animation and renders. Portraits. Digital, ink, pencil hyper-realistic portraits of all sizes.",
  ogDescription:
    "2D and 3D architecture sketching, drawings, modeling, animation and renders. Portraits. Digital, ink, pencil hyper-realistic portraits of all sizes.",
  ogImage: "https://res.cloudinary.com/dj3yahj56/image/upload/v1771009443/logo_vumptz.jpg",
  twitterCard: "summary_large_image",
});

const runtimeConfig = useRuntimeConfig();
</script>

<style scoped></style>
