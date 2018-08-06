<template>
  <div id="app">
    <v-header/>
    <router-view/>
  </div>
</template>

<script>
import banner from "@/components/head";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "v-header": banner
  }
};
</script>

<style>
body {
  margin: 0px;
}
</style>
