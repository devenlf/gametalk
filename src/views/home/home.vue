<template>
  <div class="home">
        <v-silder/>
        <router-view/>
  </div>
</template>

<script>
import silder from "@/components/silder";
export default {
  name: "home",
  data() {
    return {
    };
  },
  components: {
    "v-silder": silder
  },
  mounted: function() {
    
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 600px;
}
</style>
