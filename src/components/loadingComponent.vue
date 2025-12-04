<script setup lang="ts"></script>

<template>
  <section>
    <div class="flex justify-center items-center h-screen">
      <div class="loader"></div>
    </div>
  </section>
</template>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid red;
  border-left: 16px solid yellow;
  border-bottom: 16px solid red;
  border-right: 16px solid yellow;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  background: radial-gradient(circle at 30% 107%, #ff7a18 0%, #af002d 5%, #ff7a18 45%);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
