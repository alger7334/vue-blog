import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    incrementData:666,
    count3: 3,
    count2: 2,
    count: 0,
    todos: [{
        id: 1,
        text: '文字内容1',
        done: true
      },
      {
        id: 2,
        text: '文字内容2',
        done: false
      }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    // 处理状态 只能同步进行修改数据
    changeCount(state, msg) {
      state.count += msg;
    },
    changeCount2(state, msg) {
      state.count2 += msg;
    },
    changeCount3(state, msg) {
      state.count3 += msg;
    },
    increment(state){
      state.incrementData += 1;

    }
  },
  actions: {
    //actions 调用mutations 里的方法，可以异步进行
    increment (context) {
      context.commit('increment')
    },
    increment2 (commit) {
      //另一种简化的写法
      setTimeout(() => {
        commit('increment')
        //这里可以异步执行
      }, 1000)
    },
    
  },
  modules: {}
})