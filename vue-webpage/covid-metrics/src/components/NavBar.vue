<template>
<div class="home-navbar">
  <b-navbar toggleable="lg" class="light-blue" type="dark">
    <b-navbar-brand>
      <router-link class="nav-link" :to="{ name: 'home' }">covid metrics</router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link class="nav-link" :to="{ name: 'about' }">about</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
            <b-nav-item>
              <router-link class="nav-link" :to="{ name: 'contact' }">contact me</router-link>
            </b-nav-item>
        </b-navbar-nav>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

export default {
  name: 'NavBar',
  components: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home-navbar{
  margin-bottom: 16px;

}

.light-blue{
  /* background-color: #a9b7c0; */
  /* box-shadow: 0 0.25rem 0.25rem rgba(0,0,0,.25), inset 0 -1px 5px rgba(0,0,0,.25); */
}

.nav-link{
  text-decoration: none;
  height: fit-content;
  color: #eeeeee;
}


</style>