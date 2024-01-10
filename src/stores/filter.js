import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filtersStore', {
  state() {
    return {
      location: '',
      employmentType: '',
      education: '',
      howWork: []
    }
  },
  actions: {
    updateLocation(location) {
      this.location = location
    },

    initFilter(filterData) {
      this.howWorkOptions = filterData.howWork
    }
  }
})
