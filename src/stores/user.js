import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state() {
    return { users: [] }
  },
  actions: {
    initUsers(user) {
      this.users = user
    }
  }
})
