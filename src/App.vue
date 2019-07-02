<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/subPage">subPage</router-link> |
      <router-link to="/vuexDemo">vuexDemo</router-link> |
      <router-link to="/axiosDemo">axiosDemo</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>

export default {
  data() {
    return {
    };
  },
  created() {
    console.log('App created!');
  },
  mounted() {
    console.log('app mounted');
  },
};
</script>
<style>

</style>
