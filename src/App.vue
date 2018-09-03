<template>
  <div id="app">
    <el-row>
      <v-header/>
    </el-row>
    <el-row class="main-body">
    <router-view/>
    </el-row>
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
body,
html {
  margin: 0px;
  width: 100%;
  height: 100%;
}
.main-body {
  min-width: 1080px;
  max-width: 1540px;
  margin: 0 auto;
  width: 80%;
  height: 80vh;
}
</style>
