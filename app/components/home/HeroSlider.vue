<template>
  <div id="example">
    <section ref="containerRef" class="hero-section">
      <div class="hero-sticky">
        <motion.div class="hero-background" :style="{ scale, filter: `blur(${blur})` }">
          <img :src="BgImage" alt="Prague" />
        </motion.div>

        <motion.div class="hero-content" :style="{ opacity, y }">
          <h1 class="impact">KVNG Art</h1>
        </motion.div>
      </div>
    </section>

    <!-- <section class="content-section">
      <p class="big">Fin</p>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { motion, useScroll, useTransform } from "motion-v";
import BgImage from "~/assets/images/about/bg.jpg";

const containerRef = ref(null);

// Track scroll of the 200vh section
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end end"],
});

/**
 * Image: Zoom Out Effect
 * Starts at 1.5x scale and shrinks to 1x
 */
const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
const blur = useTransform(scrollYProgress, [0, 0.5], ["0px", "10px"]);

/**
 * Text: Fade and Move
 * Fades opacity from 1 to 0.2 and moves it slightly up
 */
const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
</script>

<style scoped>
#example {
  width: 100%;
  height: auto;
  overflow: visible;
}

.hero-section {
  height: 200vh;
  position: relative;
}

.hero-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  will-change: transform, opacity, filter;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  z-index: 10;
  will-change: transform, opacity;
}

.hero-content h1 {
  font-size: clamp(30px, 25vw, 200px);
  color: white;
  margin: 0;
  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
}

.content-section {
  background: var(--layer);
  position: relative;
  z-index: 20;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
}

@media (prefers-reduced-motion: reduce) {
  .hero-background {
    transform: none !important;
    filter: none !important;
  }
  .hero-content {
    transform: none !important;
  }
}
</style>
