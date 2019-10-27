import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// let maxLength = 8;

var store = new Vuex.Store({
  state: {
    displayNumber: "",
    total: null,
    operator: null,
  },
  getters: {
    displayNumber: state => state.displayNumber,
    total: state => state.total,
    operator: state => state.operator,
  },
  mutations: {
    // Mutates the state, can be async:await
    append: (state, payload) => state.displayNumber = `${state.displayNumber}${payload}`,
    delete: state => state.displayNumber = state.displayNumber.slice(0, -1),
    reset: state => {
      state.displayNumber = "";
      state.total = null;
      state.operator = null;
    },
    clear: state => state.displayNumber = "",
    add: (state) => state.displayNumber = (parseFloat(state.total) + parseFloat(state.displayNumber)).toString(),
    subtract: (state) => state.displayNumber = parseFloat(state.total - state.displayNumber).toString(),
    divide: (state) => state.displayNumber = parseFloat(state.total / state.displayNumber).toString(),
    multiply: (state) => state.displayNumber = parseFloat(state.total * state.displayNumber).toString(),
    negPos: state => {
      {
        if (state.displayNumber.startsWith('-')) {
          state.displayNumber = state.displayNumber.replace('-', '');
        } else {
          state.displayNumber = '-' + state.displayNumber;
        }
      }
    },
    decimal: state => {
      {
        if (state.displayNumber.indexOf('.') === -1) {
          state.displayNumber += '.';
        }
      }
    },
    setOperator: (state, payload) => {
      state.operator = payload;
    },
    resetOperator: state => {
      state.operator = null;
      state.total = null;
    },
    setDisplay: (state, payload) => {
      state.displayNumber = payload;

    },
    commitDisplay: (state) => {
      state.total = state.displayNumber;
      state.displayNumber = '';
    }
  },
  actions: {
    // Commits mutations
    append({ commit, state }, payload) {
      {
        if (payload === '0' && !state.displayNumber) {
          return;
        }
        //  else if (state.displayNumber.length <= maxLength) {
        commit('append', payload)
        // }
      }
    },
    delete: ({ commit }) => commit('delete'),
    reset: ({ commit }) => commit('reset'),
    clear: ({ commit }) => commit('clear'),
    negPos: ({ state, commit }) => {
      if (!state.displayNumber) {
        commit('append', '0');
      }
      commit('negPos')
    },
    decimal: ({ state, commit }) => {
      if (!state.displayNumber) {
        commit('append', '0');
      }
      commit('decimal')
    },
    setOperator: ({ state, commit, dispatch }, payload) => {
      dispatch('result');
      commit('setOperator', payload)
      if (!state.total) {
        commit('commitDisplay')
      }
    },
    result: ({ state, commit, dispatch }) => {
      if (state.total && state.operator && state.displayNumber) {
        switch (state.operator) {
          case '/':
            commit('divide');
            break;
          case 'x':
            commit('multiply');
            break;
          case '-':
            commit('subtract');
            break;
          case '+':
            commit('add');
            break;

          default:
            break;
        }
        commit('resetOperator');
        dispatch('validateDisplay');
      }
    }, validateDisplay: ({ state, commit }) => {
      let split = state.displayNumber.split('.');
      if (split[1]) {
        let decimals = split[1]
        if (decimals.length > 3) {
          commit('setDisplay', parseFloat(state.displayNumber).toFixed(3))
        }
      }
      // if (split[0].length > maxLength) {
      //   // This shouldn't be here but ¯\_(ツ)_/¯
      //   Vue.$toast.error('Number too big!')
      //   dispatch('reset');
      // }
    }
  },
  modules: {
  }
});

export default store;