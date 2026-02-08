<template>
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" :fill="colour">
    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
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
