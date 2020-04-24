'use strict'
const AWS = require('aws-sdk');
const axios = require('axios');

AWS.config.update({ region: 'us-west-1' });

//@kingjames, @foxnews, @cnn, and @postmalone
// picked the two news outlets bc they tweet every few minutes so we have more data to display
exports.handler = async (event, context) => {

    // Load client secrets from a local file.
    // let credentials = fs.readFileSync(__dirname + '/credentials.json');
    // let client = authorize(JSON.parse(credentials));
    
    // get the metrics from the past hour
    let metric = await getMetrics();

    // for(let i = 0; i < metrics.length; i++){
    //     await storeMetrics(metrics[i]);
    // }
    // store those metrics to the DynamoDB
    await storeMetrics(metric);
}



async function storeMetrics(metric){
    console.log(metric);
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-1' });

    // populate the data we want to put in Dynamo here
    const params = {
        TableName: 'covid-metrics',
        Item:{
            'date': metric.date,
            'cases': metric.cases
        }
    }

    // puts param into Dynamo
    try{
        await documentClient.put(params).promise();
    }catch (err){
        console.log(err);
    }
}

async function getMetrics() {

    let metric = [];

    await axios.get('https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true')
        .then(response => {
            // console.log(response.data);
            let cases = response.data.casesByDays;
            let d = new Date(cases[cases.length-1].date);
            metric.date = `${d.getUTCFullYear()}-${d.getUTCMonth() - 1}-${d.getUTCDate()}`;
            metric.cases = cases[cases.length-1].value;
        })
        .catch(error => {
            console.log(error);
        })

    
    return metric;
}