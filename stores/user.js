import { defineStore } from 'pinia'
export const useUserStore = defineStore('counter', {
  state: () => ({
    name:'1234',
    email: "lambert@gmail.com",
    password: "11111111",
    token:'',
    isLogin:false
  }),
  actions: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
})