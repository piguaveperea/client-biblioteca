import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    books:null
  },
  mutations: {
    setbook(state, payload){
      state.books = payload
    },
    settoken(state, payload){
      state.token = payload
    }
  },
  actions: {
    async Search({commit}, book){
      const res = await  axios.post('/book', {'book': book} )
      commit('setbook', res.data.books)
    },

    async TakeBook(_, book){
      const token = localStorage.getItem('token')
      console.log(token)
      if(token){
        axios.defaults.headers.common['token'] = token
        const res = await axios.post('/take_book', {'id': book})
        console.log(res.data)
      }else{
        router.replace('/signin')
      }
    },
    async SignIn( {commit}, credential){
      const res = await axios.post('/signin', credential)
      localStorage.setItem('token', res.data.token)
      commit('settoken', res.data.token)
    },
    async SignUp(_, credential){
      const res = await axios.post('/signup', credential)
      console.log(res.data)
    },
    async QuitBook(_, book){
      const token = localStorage.getItem('token')
      console.log(token)
      if(token){
        axios.defaults.headers.common['token'] = token
        const res = await axios.put('/quit_book', {'id': book})
        console.log(res.data)
      }else{
        router.replace('/signin')
      }
    }
  },
  modules: {
  },
  getters:{
    
  }
})
