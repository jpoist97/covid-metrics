# Covid-Metrics
> Displays daily metrics on COVID-19 cases in the United States.

Vue.js webpage that displays daily metrics on COVID-19 cases in the United States as reported by the CDC. The repository is brocken into the following two folders. You can find the live website [here](http://covid-metrics.s3-website-us-west-1.amazonaws.com/).

## aws-lambda

Inside this directory you can find all of the code I used in my AWS-Lambda function that is called every hour to update the metrics on my webpage. 

Technologies Used:
  * AWS-Lambda
  * DynamoDB
  * Node.js

## vue-webpage

Inside this directory you can find all of the code I used to make my Vue.js webpage.

Technologies Used:
  * Vue.js
  * Vuex
  * Vue-router
