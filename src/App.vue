<template>
  <router-view />
  <div v-if="modalStore.open" id="modal" v-html="modalStore.content"></div>
</template>

<script>
import { useModalStore } from '@/stores/modal.js'

export default {
  setup() {
    const modalStore = useModalStore()
    return { modalStore }
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
</style>
