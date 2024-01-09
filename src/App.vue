<template>
  <router-view />
  <div v-if="modalStore.open" id="modal">
    <div v-html="modalStore.content"></div>
    <button @click="closeModal" class="close-modal-button">
      Schließen <i class="fas fa-times"></i>
    </button>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modal.js'

export default {
  setup() {
    const modalStore = useModalStore()

    const closeModal = () => {
      modalStore.open = false
    }

    return { modalStore, closeModal }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#modal {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #cadee9;
  top: 0;
  left: 0;
  z-index: 99999;
  color: black;
}

.close-modal-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
}
</style>
