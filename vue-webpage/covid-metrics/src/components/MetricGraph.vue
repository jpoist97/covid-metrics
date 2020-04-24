<template>
    <div>
        <div v-if="$store.state.isLoading" class="loading graph-wrapper">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            <div class="loading-text">Loading Metrics...</div>
        </div>
        <div v-else>
            <highcharts :options="graphOptions[graphIndex]"/>
            <div>
                <button class="graph-button" :class="{ 'active-btn': graphIndex === 0 }" v-on:click="graphIndex=0">@FoxNews</button>
                <button class="graph-button" :class="{ 'active-btn': graphIndex === 1 }" v-on:click="graphIndex=1">@CNN</button>
                <button class="graph-button" :class="{ 'active-btn': graphIndex === 2 }" v-on:click="graphIndex=2">@KingJames</button>
                <button class="graph-button" :class="{ 'active-btn': graphIndex === 3 }" v-on:click="graphIndex=3">@PostMalone</button>
            </div>
        </div>



    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
  name: 'GraphGrid',
  components: {
      highcharts: Chart
  },
  data() {
    return{
        graphIndex: 0,
        graphOptions:[{
            chart:{
                type: 'spline',
                backgroundColor: '#212121'
            },
            title:{
                text: 'Tweets by @FoxNews',
                style: {
                    color: '#eeeeee'
                }
            },
            series: [{
                    name: '@FoxNews',
                    data: this.$store.state.foxNewsData,
                },
            ],
            yAxis: {
                title: {
                    text: 'Number of Tweets',
                    style: {
                        color: '#eeeeee'
                    }
                },
                gridLineColor: 'rgba(255, 255, 255, 0.3)',
                labels: {
                    style: {
                        color: '#eeeeee'
                    }
                },
                allowDecimals: false
            },
            xAxis: {
                type: 'datetime',
                lineColor: 'rgba(255, 255, 255, 0.3)',
                labels: {
                    style: {
                        color: '#eeeeee'
                    }
                }
            },
            tooltip:{
                formatter: function() {
                    let d = new Date(0);
                    d.setUTCMilliseconds(this.point.x);
                    return `Tweets: ${ this.point.y }<br>Date: ${ d.toDateString() }<br>Time: ${ d.toLocaleString('en-US', { hour: 'numeric', hour12: true }) }`
                }
            },
            time: {
                timezoneOffset: new Date().getTimezoneOffset()
            },
            plotOptions: {
                series:{
                    color: '#23b5d3'
                }
            },
            legend: {
                itemStyle: {
                    color: '#eeeeee'
                }
            }
        },
        {
            chart:{
                type: 'spline',
                backgroundColor: '#212121'
            },
            title:{
                text: 'Tweets by @CNN',
                style: {
                    color: '#eeeeee'
                }
            },
            series: [{
                    name: '@CNN',
                    data: this.$store.state.CNNData,
                },
            ],
            yAxis: {
                title: {
                    text: 'Number of Tweets',
                    style: {
                        color: '#eeeeee'
                    }
                },
                gridLineColor: 'rgba(255, 255, 255, 0.3)',
                labels: {
                    style: {
                        color: '#eeeeee'
                    }
                },
                allowDecimals: false
            },
            xAxis: {
                type: 'datetime',
                lineColor: 'rgba(255, 255, 255, 0.3)',
                labels: {
                    style: {
                        color: '#eeeeee'
                    }
                }
            },
            tooltip:{
                formatter: function() {
                    let d = new Date(0);
                    d.setUTCMilliseconds(this.point.x);
                    return `Tweets: ${ this.point.y }<br>Date: ${ d.toDateString() }<br>Time: ${ d.toLocaleString('en-US', { hour: 'numeric', hour12: true }) }`
                }
            },
            time: {
                timezoneOffset: new Date().getTimezoneOffset()
            },
            plotOptions: {
                series:{
                    color: '#23b5d3'
                }
            },
            legend: {
                itemStyle: {
                    color: '#eeeeee'
                }
            }
        },
        {
            chart:{
                type: 'spline',
                backgroundColor: '#212121'
            },
            title:{
                text: 'Tweets by @KingJames',
                style: {
                    color: '#eeeeee'
                }
            },
            series: [{
                    name: '@KingJames',
                    data: this.$store.state.kingJamesData,
                },
            ],
            yAxis: {
                title: {
                    text: 'Number of Tweets',
                    style: {
                        color: '#eeeeee'
                    }
                },
                gridLineColor: 'rgba(255, 255, 255, 0.3)',
                labels: {
                    style: {
                        color: '#eeeeee'
                    }
                },
                allowDecimals: false
            },
            xAxis: {
                type: 'datetime',
                lineColor: 'rgba(255, 255, 255, 0.3)',
                labels: {
                    style: {
                        color: '#eeeeee'
                    }
                }
            },
            tooltip:{
                formatter: function() {
                    let d = new Date(0);
                    d.setUTCMilliseconds(this.point.x);
                    return `Tweetss: ${ this.point.y }<br>Date: ${ d.toDateString() }<br>Time: ${ d.toLocaleString('en-US', { hour: 'numeric', hour12: true }) }`
                }
            },
            time: {
                timezoneOffset: new Date().getTimezoneOffset()
            },
            plotOptions: {
                series:{
                    color: '#23b5d3'
                }
            },
            legend: {
                itemStyle: {
                    color: '#eeeeee'
                }
            }
        },
        {
            chart:{
                type: 'spline',
                backgroundColor: '#212121'
            },
            title:{
                text: 'Tweets by @PostMalone',
                style: {
                    color: '#eeeeee'
                }
            },
            series: [{
                    name: '@PostMalone',
                    data: this.$store.state.postMaloneData,
                },
            ],
            yAxis: {
                title: {
                    text: 'Number of Tweets',
                    style: {
                        color: '#eeeeee'
                    }
                },
                gridLineColor: 'rgba(255, 255, 255, 0.3)',
                labels: {
                    style: {
                        color: '#eeeeee'
                    }
                },
                allowDecimals: false
            },
            xAxis: {
                type: 'datetime',
                lineColor: 'rgba(255, 255, 255, 0.3)',
                labels: {
                    style: {
                        color: '#eeeeee'
                    }
                }
            },
            tooltip:{
                formatter: function() {
                    let d = new Date(0);
                    d.setUTCMilliseconds(this.point.x);
                    return `Tweets: ${ this.point.y }<br>Date: ${ d.toDateString() }<br>Time: ${ d.toLocaleString('en-US', { hour: 'numeric', hour12: true }) }`
                }
            },
            time: {
                timezoneOffset: new Date().getTimezoneOffset()
            },
            plotOptions: {
                series:{
                    color: '#23b5d3'
                }
            },
            legend: {
                itemStyle: {
                    color: '#eeeeee'
                }
            }
        },
            ]
        
    }
  },
  created(){
    if(!this.$store.state.completed){
      let date = new Date();
      let curDate = date.getDate();

      for(let i = 0; i < 7; i++){
        date.setDate(curDate);
        this.$store.dispatch('fetchMetrics', `${ date.getUTCFullYear() }-${ date.getUTCMonth()}-${ date.getUTCDate() }`);
        curDate = date.getDate() - 1;
      }
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.graph-button{
    background-color: #eeeeee;
    border-radius: 25px;
    margin: 8px;
    width: 20%;
    outline: none;
}

.active-btn{
    background-color: #23b5d3;
    border: 1px solid #23b5d3;
    outline: none;
}


.loading-text{
    color: #eeeeee;
}


/** https://loading.io/css/ **/
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #23b5d3;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}

</style>
