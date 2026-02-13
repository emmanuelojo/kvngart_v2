<template>
  <div class="space-y-4">
    <Divider />

    <section class="space-y-3">
      <div class="flex items-center justify-between gap-4">
        <p class="text-xs text-[#1c1c1c] uppercase">description</p>

        <button @click="toggleDescription = !toggleDescription" class="p-2 cursor-pointer">
          <div v-if="toggleDescription">
            <ChevronUp color="#1c1c1c" style="font-size: 20" />
            <!-- ^ -->
          </div>
          <div v-else>
            <ChevronDown color="#1c1c1c" style="font-size: 20" />
            <!-- > -->
          </div>
        </button>
      </div>

      <p v-show="toggleDescription" class="text-xs text-[#1c1c1c]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus voluptas consectetur soluta dolore quo
        nam recusandae illo non eos dicta, est magnam alias minima, vitae odit? Culpa, fugiat maiores.
      </p>
    </section>
    <Divider />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ChevronDown, ChevronUp } from "lucide-vue-next";

const toggleDescription = ref(false);
</script>

<style scoped></style>
