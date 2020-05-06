import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '../services/EventService';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    confirmedData: [],
    deathData: [],
    recoveredData: [],
    activeData: [],
    completed: false,
    isLoading: true
  },
  mutations: {
    APPEND_CONFIRMEDDATA(state, data){
      state.confirmedData.push(data);
    },
    APPEND_DEATHDATA(state, data){
      state.deathData.push(data);
    },
    APPEND_RECDATA(state, data){
      state.recoveredData.push(data);
    },
    APPEND_ACTIVEDATA(state, data){
      state.activeData.push(data);
    },
    SORT_METRICS(state){
      state.confirmedData.sort((a,b) => (a[0] > b[0]) ? 1:-1);
      state.deathData.sort((a,b) => (a[0] > b[0]) ? 1:-1);
      state.recoveredData.sort((a,b) => (a[0] > b[0]) ? 1:-1);
      state.activeData.sort((a,b) => (a[0] > b[0]) ? 1:-1);
    },
    FINISH_LOAD(state){
      // Waiting a small amount of time so that Highcharts can plot properly
      setTimeout(() => {
        state.isLoading = false;
        state.completed = true;
      }, 250)
    }
  },
  actions: {
    fetchMetrics({ commit }){

        EventService.getAllMetrics()
          .then(response => {
            if(response.data.metrics.Items){
              for(let item of response.data.metrics.Items){
                let dateArr = item.date.split('-');
                commit('APPEND_CONFIRMEDDATA', [Date.UTC(dateArr[0], dateArr[1]-1, dateArr[2], 12), item.cases]);
                commit('APPEND_DEATHDATA', [Date.UTC(dateArr[0], dateArr[1]-1, dateArr[2], 12), item.deaths]);
                commit('APPEND_RECDATA', [Date.UTC(dateArr[0], dateArr[1]-1, dateArr[2], 12), item.recovered]);
                commit('APPEND_ACTIVEDATA', [Date.UTC(dateArr[0], dateArr[1]-1, dateArr[2], 12), item.active]);
              }
            }
          })
          .then(() => {
            commit('SORT_METRICS');
          })
          .then(() => {
            commit('FINISH_LOAD');
          })
          .catch(error => {
            console.log("error "+ error);
          })

    },
  },
  modules: {
  }
})
