<script setup lang="ts">
import { defineProps, defineComponent } from 'vue'

const props = defineProps({
  wrongAnswers: {
    type: Number,
    required: true
  }
})

defineComponent({
  name: 'heartsContainer'
})
</script>

<template>
  <div class="flex z-10 mt-6">
    <div v-if="props.wrongAnswers === 0" class="heart"></div>
    <div v-if="props.wrongAnswers <= 1" class="heart"></div>
    <div v-if="props.wrongAnswers <= 2" class="heart"></div>
  </div>
</template>

<style scoped>
.heart {
  position: relative;
  width: 100px;
  height: 90px;
}

.heart::before,
.heart::after {
  content: '';
  position: absolute;
  top: 0;
  width: 52px;
  height: 80px;
  border-radius: 50px 50px 0 0;
  background: red;
}

.heart::before {
  left: 50px;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}

.heart::after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
</style>
