import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://metricsapi-env.eba-3e3yt2se.us-west-1.elasticbeanstalk.com'
})

export default{
    getMetrics(date, hour){
        return apiClient.get(`/gmail/metrics?date=${ date }&hour=${ hour }`);
    },
    getDailyMetrics(date){
        return apiClient.get(`/gmail/metrics?date=${ date }`);
    }
}