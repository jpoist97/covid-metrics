import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '../services/EventService';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    covidData: [],
    completed: false,
    isLoading: true
  },
  mutations: {
    APPEND_COVIDDATA(state, data){
      state.covidData.push(data);
    },
    SORT_METRICS(state){
      state.covidData.sort((a,b) => (a[0] > b[0]) ? 1:-1);
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
            console.log(response);
            if(response.data.metrics.Items){
              for(let item of response.data.metrics.Items){
                let dateArr = item.date.split('-');
                commit('APPEND_COVIDDATA', [Date.UTC(dateArr[0], dateArr[1], dateArr[2]), item.cases]);
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
