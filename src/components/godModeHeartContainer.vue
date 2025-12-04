<script setup lang="ts">
import { defineProps, defineComponent } from 'vue'

const props = defineProps({
  wrongAnswers: {
    type: Number,
    required: true
  }
})

defineComponent({
  name: 'heartsContainer',
  methods: {}
})
const logNoOfHearts = (noOfHearts: number) => {
  console.log(noOfHearts)
}
</script>

<template>
  <div class="flex z-10 w-[550px] flex-wrap mt-5">
    <div
      v-for="noOfHearts in 10"
      :key="noOfHearts"
      class="heart"
      v-show="props.wrongAnswers < noOfHearts"
      @click="logNoOfHearts(noOfHearts)"
    ></div>
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
