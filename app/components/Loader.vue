<template>
  <div class="bouncer">
    <div :style="{ backgroundColor: colour }"></div>
    <div :style="{ backgroundColor: colour }"></div>
    <div :style="{ backgroundColor: colour }"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  colour?: string;
}

const props = withDefaults(defineProps<Props>(), {
  colour: "#FFFFFF",
});
</script>

<style>
/* bouncing balls */
.bouncer {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 30px;
  height: 20px;
  gap: 4px;
}
.bouncer div {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: bouncer 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite alternate;
}
.bouncer div:nth-child(2) {
  animation-delay: 0.1s;
  opacity: 0.8;
}
.bouncer div:nth-child(3) {
  animation-delay: 0.2s;
  opacity: 0.6;
}
.bouncer div:nth-child(4) {
  animation-delay: 0.3s;
  opacity: 0.4;
}

@keyframes bouncer {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>
