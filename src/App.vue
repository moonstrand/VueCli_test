<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <h2>{{ name }}</h2>
  <router-view />
</template>

<script>
export default {
  data () {
    return {
      name: process.env.VUE_APP_USER_NAME
    }
  }
}
</script>

<style lang="scss">
@import "bootstrap";
</style>
