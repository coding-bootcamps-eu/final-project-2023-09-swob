import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('categoryStore', {
  state() {
    return { categorys: [] }
  },
  actions: {
    initCategory(category) {
      this.categorys = category
    }
  }
})
