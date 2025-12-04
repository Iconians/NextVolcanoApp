<script setup lang="ts">
const props = defineProps({
  isModalOpen: Boolean,
  closeModal: Function
})
</script>

<template>
  <section class="parent">
    <div :class="{ isModalOpen: props.isModalOpen, modal: true }">
      <div class="modal-content">
        <h4 class="text-2xl header-color-change">Warning</h4>
      </div>
      <div class="w-3/4 m-auto">
        <p class="text-xl pb-5 color-change">Play the Master Game at your own risk</p>
        <p class="text-base">
          There are 100 questions to answer so if you think you can prove your as smart as a
          Volcanologist give it a shot
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.parent {
  position: relative;
}

.parent .isModalOpen {
  display: block;
}

.modal {
  border-radius: 30px;
  position: relative;
  display: none;
  position: absolute;
  z-index: 100;
  left: -50px;
  /* top: -100px; */
  top: 90px;
  right: -50px;
  bottom: 0px;
  height: 200px;
  background-color: rgba(0, 0, 0, 1);
}

.modal-content {
  padding: 20px;
  width: 100%;
}

.times {
  position: absolute;
  font-size: 30px;
  right: 25px;
  top: 10px;
  cursor: pointer;
}

.header-color-change {
  animation: headerColorChange 2s infinite;
}

.color-change {
  animation: colorChange 2s infinite;
}

@keyframes headerColorChange {
  0% {
    color: yellow;
  }
  50% {
    color: red;
  }
  100% {
    color: yellow;
  }
}

@keyframes colorChange {
  0% {
    color: red;
  }
  50% {
    color: yellow;
  }
  100% {
    color: red;
  }
}
</style>
