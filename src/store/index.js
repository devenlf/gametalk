import Vue from 'vue'
import vuex from 'vuex'
import cookie from "js-cookie";

Vue.use(vuex)

let store = new vuex.Store({//store对象
  state: {
    welcomeShow:"",
    name:""
  },
  getters: {
    welcomeChangeValue:state=>{
      return state.welcomeShow
    }
  },
  mutations: {
    welcomeChange(state,bool){
      state.welcomeShow=bool
    },
    welcomeName(state,name){
      state.name=name
    }
  }
})

export default store;