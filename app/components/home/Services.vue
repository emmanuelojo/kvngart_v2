<template>
  <section id="services" class="h-[650px] md:h-auto px-4 overflow-visible">
    <div class="intro-section py-10">
      <h1 class="impact text-center">What We Do</h1>
    </div>

    <div ref="containerRef" class="scroll-container">
      <div class="sticky-wrapper">
        <motion.div class="gallery" :style="{ x }">
          <div
            v-for="item in items"
            :key="item.id"
            class="gallery-item"
            :style="{
              '--item-color': item.color,
              '--item-image': `url(${item.image})`,
            }"
          >
            <div class="item-content">
              <span class="item-number">0{{ item.id }}</span>
              <h2>{{ item.label }}</h2>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { motion, useScroll, useTransform } from "motion-v";
import ServicesImage1 from "~/assets/images/services/archi.JPEG";
import ServicesImage2 from "~/assets/images/services/branding.JPEG";
import ServicesImage3 from "~/assets/images/services/graphics.JPEG";
import ServicesImage4 from "~/assets/images/services/illustrations.JPEG";
import ServicesImage5 from "~/assets/images/services/photo.JPEG";
import ServicesImage6 from "~/assets/images/services/portraits.JPEG";

/**
 * ==============   Data & Constants   ================
 */
interface GalleryItem {
  id: number;
  color: string;
  label: string;
  image: string;
}

const items: GalleryItem[] = [
  { id: 1, color: "#ff0088", label: "Architecture", image: ServicesImage1 },
  { id: 2, color: "#dd00ee", label: "Portraits", image: ServicesImage2 },
  { id: 3, color: "#9911ff", label: "Graphics", image: ServicesImage3 },
  { id: 4, color: "#0d63f8", label: "Photography", image: ServicesImage4 },
  { id: 5, color: "#0cdcf7", label: "Branding", image: ServicesImage5 },
  { id: 6, color: "#ff0088", label: "Illustrations", image: ServicesImage6 },
];

const ITEM_WIDTH = 400;
const GAP = 30;

const containerRef = ref<HTMLElement | null>(null);

// Initialize scroll tracking
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end end"],
});

// Calculate translation distance
const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);

// Create the transform (Motion-Vue handles the reactive binding)
const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);
</script>

<style scoped>
/* Scoped styles ensure zero leakage to other Nuxt pages */
#example {
  height: auto;
  overflow: visible;
}

h1 {
  /* font-size: clamp(36px, 8vw, 72px); */
  font-size: clamp(20px, 8vw, 40px);
  color: #1c1c1c;
  margin: 0;
  text-transform: uppercase;
  font-weight: 600;
}

.scroll-container {
  /* height: 300vh; */
  height: 110vh;
  position: relative;
}

.sticky-wrapper {
  position: sticky;
  top: 0;
  /* height: 100vh; */
  height: 700px;
  /* width: 400px; */
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* overflow: visible; */
  overflow: hidden;
}

.gallery {
  display: flex;
  gap: 30px;
  will-change: transform;
  /* padding-left: 10%;  */
  /* Optional: starts the first item offset from the left */
}

.gallery-item {
  flex-shrink: 0;
  width: 400px;
  height: 500px;
  position: relative;
  overflow: hidden;
  background-image: var(--item-image);
  background-size: cover;
  background-position: center;
}

.gallery-item::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, var(--item-color));
  mix-blend-mode: multiply;
}

.item-content {
  position: absolute;
  bottom: 30px;
  left: 30px;
  z-index: 1;
}

.item-number {
  font-size: 14px;
  color: var(--item-color);
  font-family: monospace;
  display: block;
  margin-bottom: 8px;
}

.gallery-item h2 {
  font-size: 28px;
  font-weight: 600;
  color: #f5f5f5;
  margin: 0;
}

@media (max-width: 600px) {
  .scroll-container {
    height: 110vh;
  }
  .sticky-wrapper {
    height: 50vh;
    width: 100%;
  }
  .gallery {
    gap: 15px;
  }
  .gallery-item {
    width: 280px;
    height: 350px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery {
    transform: none !important;
  }
  .scroll-container {
    height: auto;
  }
  .sticky-wrapper {
    position: relative;
    height: auto;
    width: 100%;
    overflow-x: auto;
    padding: 50px 0;
  }
}
</style>
