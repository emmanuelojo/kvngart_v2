<template>
  <section id="about" class="about-section">
    <div class="parallax-bg" :style="{ backgroundImage: `url(${BgImage})` }"></div>

    <div class="content-wrapper">
      <p class="reveal-text pb-10">(Architect & Visual Designer)</p>

      <p class="reveal-text">
        I am a creative entrepreneur, with skills in graphics design, architecture design and photography.
      </p>

      <p class="reveal-text">I bring your ideas and briefs to life as beautiful and creative designs</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import BgImage from "~/assets/images/about/profile.jpg";
</script>

<style scoped>
.about-section {
  position: relative;
  /*min-height: 150vh;*/ /* Gives room to scroll */
  height: 130vh;
  background: #000;
}

.parallax-bg {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
  opacity: 0.6; /* Slight dimming for text readability */
}

.content-wrapper {
  position: relative;
  z-index: 2;
  margin-top: -70vh; /* Pulls text up over the sticky background */
  padding: 100px 10%;
  display: grid;
  place-content: center;
}

/* .reveal-text {
  font-size: 3.5rem;
  line-height: 1.2;
  Starting Gray
  color: rgba(255, 255, 255, 0.2); 
  max-width: 900px;
  font-weight: 700;
} */

.reveal-text span {
  transition: color 0.5s ease;
  display: inline-block;
  margin-right: 10px;
}

/* This class will be added by JavaScript */
.reveal-text span.active {
  color: #fff; /* Final White */
}

.parallax-about {
  height: 200vh; /* Extra height to allow for scrolling */
  view-timeline-name: --section-scroll;
}

.sticky-wrapper {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.reveal-text {
  font-size: 2rem;
  font-weight: bold;
  max-width: 800px;
  text-align: center;

  /* The Secret Sauce: Gradient Mask */
  color: gray;
  background: linear-gradient(to bottom, white 50%, gray 50%);
  background-size: 100% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  /* Animation linked to scroll */
  animation: reveal linear both;
  animation-timeline: --section-scroll;
  animation-range: entry 20% exit 80%;
}

@keyframes reveal {
  from {
    background-position: 0% 100%;
  }
  to {
    background-position: 0% 0%;
  }
}

@media (max-width: 768px) {
  .reveal-text:nth-child(1) {
    font-size: 1.7rem;
  }
  .reveal-text:nth-child(2) {
    font-size: 1.2rem;
  }
  .reveal-text:nth-child(3) {
    font-size: 1.2rem;
  }
}
</style>
