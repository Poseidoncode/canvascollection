import { defineStore } from 'pinia'


export const useStore = defineStore({
 
  id: 'globalState',
 
  state: () => ({
    count: 1,
    data: {
      name: 'Jerry',
      sex: '男'
    }
  }),
  
  getters: {
    
    doubleCount: (state) => state.count * 2,
    tripleCount() {
      return this.count * 3
    }
  },
  actions: {
    updateData (newData, count) {
     
      this.data = { ...newData }
      this.count = count
      
     
      this.$patch({
        data: { ...newData },
        count
      })
    }
  }
})