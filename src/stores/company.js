import { defineStore } from 'pinia'

export const useCompanyStore = defineStore('companyStore', {
  state() {
    return { companys: [] }
  },
  actions: {
    initCompany(company) {
      this.companys = company
    }
  }
})
