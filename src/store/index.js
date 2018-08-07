import Vue from 'vue'
import vuex from 'vuex'
import cookie from "js-cookie";

Vue.use(vuex)

let store = new vuex.Store({//store对象
  state: {
    showtop: "",
    baseurl: "http://localhost:3000/"
  },
  getters: {
    not_show(state) {//这里的state对应着上面这个state
      return state.showtop;
    }
  },
  mutations: {
    isShow(state) {
      if (cookie.get('userInfo')) {
        state.showtop = true
      } else {
        state.showtop = false
      }
    }
  },
  actions: {
    is_show({ commit }) {
      commit('isShow')
    }
  }
})

export default store;