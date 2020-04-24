import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '../services/EventService';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foxNewsData: [],
    CNNData: [],
    kingJamesData: [],
    postMaloneData: [],
    completed: false,
    isLoading: true
  },
  mutations: {
    APPEND_FOXNEWSDATA(state, foxNewsData){
      state.foxNewsData.push(foxNewsData);
    },
    APPEND_CNNDATA(state, CNNData){
      state.CNNData.push(CNNData);
    },
    APPEND_KINGJAMESDATA(state, kingJamesData){
      state.kingJamesData.push(kingJamesData);
    },
    APPEND_POSTMALONEDATA(state, postMaloneData){
      state.postMaloneData.push(postMaloneData);
    },
    SORT_METRICS(state){
      state.foxNewsData.sort((a,b) => (a[0] > b[0]) ? 1:-1);
      state.CNNData.sort((a,b) => (a[0] > b[0]) ? 1:-1);
      state.kingJamesData.sort((a,b) => (a[0] > b[0]) ? 1:-1);
      state.postMaloneData.sort((a,b) => (a[0] > b[0]) ? 1:-1);
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
    fetchMetrics({ commit }, date){
      let dateArr = date.split('-')

        EventService.getDailyMetrics(date)
          .then(response => {
            if(response.data.metrics.Items){
              for(let item of response.data.metrics.Items){
                commit('APPEND_FOXNEWSDATA', [Date.UTC(dateArr[0], dateArr[1], dateArr[2], item.Hour), item['from-gmail']]);
                commit('APPEND_CNNDATA', [Date.UTC(dateArr[0], dateArr[1], dateArr[2], item.Hour), item['to-gmail']]);
                commit('APPEND_KINGJAMESDATA', [Date.UTC(dateArr[0], dateArr[1], dateArr[2], item.Hour), item['from-other']]);
                commit('APPEND_POSTMALONEDATA', [Date.UTC(dateArr[0], dateArr[1], dateArr[2], item.Hour), item['to-other']]);
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
