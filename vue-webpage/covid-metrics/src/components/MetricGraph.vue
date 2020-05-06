<template>
    <div>
        <div v-if="$store.state.isLoading" class="loading graph-wrapper">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            <div class="loading-text">Loading Metrics...</div>
        </div>
        <div v-else>
            <highcharts :options="graphOptions"/>
            <p>You can toggle the data shown by clicking on the legend. <br> This website displays daily figures for the number of Covid-19 cases in the United States. All statistics are pulled from <a href="https://github.com/CSSEGISandData/COVID-19">Johns Hopkins CSSE</a>. <br> Figures were made accessible by <a href="https://covid19api.com/#details">covid19api</a> written by Kyle Redelinghuys.</p>
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
        graphOptions:{
            chart:{
                type: 'spline',
                backgroundColor: '#212121'
            },
            title:{
                text: 'Covid-19 Cases in The United States',
                style: {
                    color: '#eeeeee'
                }
            },
            series: [{
                    name: 'Deaths',
                    data: this.$store.state.deathData,
                    tooltip: {
                      customTooltipPerSeries: function() {
                          let d = new Date(0);
                          d.setUTCMilliseconds(this.point.x);
                          return `Deaths: ${ this.point.y }<br>Date: ${ d.toDateString() }`
                      }
                    },
                    color: '#d52941',
                },{
                    name: 'Cases',
                    data: this.$store.state.confirmedData,
                    tooltip: {
                      customTooltipPerSeries: function() {
                          let d = new Date(0);
                          d.setUTCMilliseconds(this.point.x);
                          return `Cases: ${ this.point.y }<br>Date: ${ d.toDateString() }`
                      }
                    },
                    color: '#fcab64'
                },{
                    name: 'Recovered',
                    data: this.$store.state.recoveredData,
                    tooltip: {
                      customTooltipPerSeries: function() {
                          let d = new Date(0);
                          d.setUTCMilliseconds(this.point.x);
                          return `Recovered: ${ this.point.y }<br>Date: ${ d.toDateString() }`
                      }
                    },
                    color: '#7ae582'
                },{
                    name: 'Active',
                    data: this.$store.state.activeData,
                    tooltip: {
                      customTooltipPerSeries: function() {
                          let d = new Date(0);
                          d.setUTCMilliseconds(this.point.x);
                          return `Active: ${ this.point.y }<br>Date: ${ d.toDateString() }`
                      }
                    },
                    color: '#23b5d3'
                },
            ],
            yAxis: {
                title: {
                    text: 'Number of Cases/Deaths',
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

                    return this.series.tooltipOptions.customTooltipPerSeries.call(this);
                }
            },
            // time: {
            //     timezoneOffset: new Date().getTimezoneOffset()
            // },
            legend: {
                itemStyle: {
                    color: '#eeeeee'
                }
            },
            plotOptions: {
              series: {
                marker: {
                  enabled: false
                }
            }
    },
        },
        
    }
  },
  created(){
    if(!this.$store.state.completed){
      this.$store.dispatch('fetchMetrics');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  background: #fcab64;
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
