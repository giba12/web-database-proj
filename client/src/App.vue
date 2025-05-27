
<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d3d6f1;
}
</style>

<template>
  <div id="app">
    <DeviceInventory />
  </div>
</template>

<script>
import DeviceInventory from './components/DeviceInventory.vue';

export default {
  name: 'App',
  components: {
    DeviceInventory,
  },
};
</script>