import { defineStore } from 'pinia'

export const useCompanyStore = defineStore('companyStore', {
  state() {
    return { companys: [{ id: '', logo: '', name: '' }] }
  },
  actions: {
    initCompany(company) {
      this.companys = company
    }
  }
})
