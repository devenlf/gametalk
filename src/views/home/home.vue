<template>
  <div class="home">
        <v-silder/>
        <router-view/>
  </div>
</template>

<script>
import silder from "@/components/silder";
// import router from "@/router";
export default {
  name: "home",
  data() {
    return {
    };
  },
  components: {
    "v-silder": silder
  },
  created: function() {
    console.log(this.listData);
  },
  mounted: function() {}
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 80vh;
}
</style>
