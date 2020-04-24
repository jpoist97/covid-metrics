<template>

  <div id="home">
    <b-container>
      <h1>Twitter Metrics</h1>
      <MetricGraph/>
    </b-container>

  </div>
</template>

<script>
// @ is an alias to /src

// import GraphTab from '../components/GraphTab.vue'
import MetricGraph from '../components/MetricGraph'

export default {
  name: 'Home',
  components: {
      // GraphTab,
      MetricGraph
  }
}
</script>

<style>
#home {
  font-family: Rubik, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #101741;
  margin-top: 0px;
}
h1{
  text-align: left;
  color: #eeeeee;
  width: fit-content;
  /* text-decoration: underline;
  text-decoration-color: #d52941 */
  border-bottom: 3px solid #23b5d3
}
</style>
