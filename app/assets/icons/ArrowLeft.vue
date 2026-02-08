<template>
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" :fill="colour">
    <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  colour: {
    type: String,
    default: "#e3e3e3",
  },
});
</script>

<style scoped></style>
