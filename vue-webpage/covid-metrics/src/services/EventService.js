import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://metricsapi-env.eba-3e3yt2se.us-west-1.elasticbeanstalk.com'
})

export default{
    getDailyMetrics(date){
        return apiClient.get(`/covid/metrics?date=${ date }`);
    },
    getAllMetrics(){
        return apiClient.get(`/covid/metrics`);
    }
}