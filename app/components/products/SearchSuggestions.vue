<template>
  <div class="w-[90%] max-w-[400px] lg:w-[400px] h-[320px] bg-white shadow-md p-2 space-y-4 overflow-hidden">
    <div class="h-[250px] overflow-y-scroll">
      <div v-for="i in 25" :key="i" :class="`${i !== 25 ? 'border-b ' : ''} py-1 border-gray-300`">
        <NuxtLink :to="`/products/${i}`" @click="toggleSearchSuggestions">Product {{ i }}</NuxtLink>
      </div>
    </div>

    <p class="text-center">No match found</p>
  </div>
</template>

<script setup lang="ts">
const toggleSearchSuggestions = () => {};
</script>

<style scoped></style>
