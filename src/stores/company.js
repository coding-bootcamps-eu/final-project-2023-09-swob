import { defineStore } from 'pinia'

export const useCompanyStore = defineStore('companyStore', {
  state() {
    return { companys: [] }
  },
  actions: {
    initCompany(companies) {
      this.companys = companies
    },
    async loadCompanyById(companyId) {
      try {
        const response = await fetch(
          `https://23-september.swob.api.cbe.uber.space/companies/${companyId}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch company data')
        }

        const companyData = await response.json()
        return companyData
      } catch (error) {
        console.error(error)
        throw error // Handle error as needed
      }
    }
  }
})
