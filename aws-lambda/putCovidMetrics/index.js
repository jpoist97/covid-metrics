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
            'cases': metric.cases,
            'deaths': metric.deaths,
            'active': metric.active,
            'recovered': metric.recovered
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

    let metric;

    await axios.get(`https://api.covid19api.com/total/dayone/country/united-states`)
        .then(response => {
            // for(let i = 0; i < response.data.length; i++){
            //     metrics.push({                
            //         date: response.data[i].Date.split('T')[0],
            //         cases: response.data[i].Confirmed,
            //         deaths: response.data[i].Deaths,
            //         active: response.data[i].Active,
            //         recovered: response.data[i].Recovered
            //     });
            // }

            let d = new Date(response.data[response.data.length-1].Date);
            // let date = `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`;
            metric= {
                date: response.data[response.data.length-1].Date.split('T')[0],
                cases: response.data[response.data.length-1].Confirmed,
                deaths: response.data[response.data.length-1].Deaths,
                active: response.data[response.data.length-1].Active,
                recovered: response.data[response.data.length-1].Recovered
            };
        })
        .catch(error => {
            console.log(error);
        })

    return metric;
}

// async function getMetrics() {

//     let metric = [];

//     await axios.get('https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true')
//         .then(response => {
//             // console.log(response.data);
//             let cases = response.data.casesByDays;
//             let d = new Date(cases[cases.length-1].date);
//             metric.date = `${d.getUTCFullYear()}-${d.getUTCMonth() - 1}-${d.getUTCDate()}`;
//             metric.cases = cases[cases.length-1].value;
//         })
//         .catch(error => {
//             console.log(error);
//         })

    
//     return metric;
// }