import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 999,
    list: [1, 5, 8, 10, 30, 50]
  },
  getters: {
    filteredList: state => {
      return state.list.filter(i => i < 10);
    },
    listLength: (state, getters) => {
      return getters.filteredList.length;
    }
  },
  mutations: {
    plus(state, n = 1){
      state.count = state.count + n;
    },
    minus(state, n = 1){
      state.count = state.count - n;
    }
  },
  actions: {
    increment(state){
      return new Promise(resolve => {
        setTimeout(function(){
          let n = Math.round(Math.random()) ? 2 : -1;
          state.commit('plus', n);
          resolve();
        }, 1000);
      })
    }
  },
  modules: {
  }
})
