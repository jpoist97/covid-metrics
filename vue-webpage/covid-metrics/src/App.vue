<template>
<body>
    <div id="app">
    <NavBar/>
      <div class="container">
            <router-view/>
      </div>
  </div>
</body>

</template>

<script>
// @ is an alias to /src

import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
      NavBar
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

*{
    background-color: #212121;
    font-family: 'Exo 2', sans-serif;
    /* background: linear-gradient(150deg, #fdcd3b 20%, #ffed4b 20%); */
}

</style>
