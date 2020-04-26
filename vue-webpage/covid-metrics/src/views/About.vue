<template>
  <div class="about">
      <h1>About this webpage</h1>
      <p>
        This webpage displays daily metrics on the number of Covid-19 cases in the United States. All statistics are pulled from 
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fcases-in-us.html">cdc.gov</a>. 
        I pull data about every hour to update my database. 
      </p>
      <h1>Purpose</h1>
      <p>
        If you've seen my gmail-metrics webpage, you'll notice this page is very similar. The purpose of this project was to
        continue using the following technologies and to write my code in a way that it could be easily re-used. Below is a 
        list of the technologies used to create this project.
      </p>

      <h1>AWS Lambda Function</h1>
      <p>In order to get the metrics I wanted to display on this website, I used an AWS Lambda function
        written in Javascript to access the an API for statistics on Covid-19 cases. After I got the metrics from the API, my lambda
        function stored those metrics into a DynamoDB table.
      </p>
      <h1>Node.js/Express Endpoint</h1>
      <p>Now that I have my data stored in a DynamoDB table, I wanted an easy way to get to that data in my
        web application. To do this I wrote a Node.js service that would query the DynamoDB table for metrics
        given proper query parameters. To access this service, I used Express to deploy a simple web server 
        to act as an endpoint for my Node.js service. I deployed the service to AWS using AWS Elastic Beanstalk.
        You can access the enpoint itself by going to <a href="http://metricsapi-env.eba-3e3yt2se.us-west-1.elasticbeanstalk.com/">metrics-api</a>.
      </p>
      <h1>Vue.js Webpage</h1>
      <p>To tie it all together and display the metrics I was gathering, I built a Vue.js webpage. I used Vuex
        for state management and Vue router to display multiple pages. I deployed my Vue.js webpage using an AWS
        S3 Bucket and created the charts with highcharts-vue.
      </p>


  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>

h5{
  color: #eeeeee;
  text-align: left;
  width: fit-content;
  border-bottom: 3px solid #fcab64;
}

p{
  color: #eeeeee;
  text-align: left;
  font-size: 16px;
}

.icon-row{
  /* background-color: #e7e7e7; */
  border-radius: 25px;
  width: 90%;
  margin: 0 auto;
  height: 100px;
}

img{
  background-color: #e7e7e7;
  border-radius: 25px;
  height: 100px;
  width: 100px;
  float: left;
}

.about{
  margin: 0 auto;
  width: 75%;
  padding-bottom: 20px;
}


</style>