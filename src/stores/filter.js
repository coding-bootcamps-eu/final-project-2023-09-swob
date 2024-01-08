import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filtersStore', {
  state() {
    return {
      location: '',
      employmentType: '',
      education: '',
      howWork: [] // Annahme: Hier werden die Optionen für "howWork" gespeichert
      // Weitere Filter-Optionen hinzufügen, wenn benötigt
    }
  },
  actions: {
    updateLocation(location) {
      this.location = location
    },
    // Füge hier Methoden für andere Filter hinzu, wenn benötigt

    initFilter(filterData) {
      // Annahme: filterData enthält Informationen für verschiedene Filter, einschließlich "howWork"
      this.howWorkOptions = filterData.howWork
      // Füge hier weitere Initialisierungen für andere Filter hinzu, wenn benötigt
    }
  }
})
