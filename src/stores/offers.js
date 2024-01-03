import { defineStore } from 'pinia'

export const useOfferStore = defineStore('offerStore', {
  state() {
    return { offers: [{ id: '', categoryID: '', companieID: '', title: '', description: '' }] }
  },
  actions: {
    initOffers(offer) {
      this.offers = offer
    }
  }
})
