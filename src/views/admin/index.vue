<template>
  <div class="admin">
        <v-silderAdmin/>
        <router-view/>
  </div>
</template>

<script>
import silderAdmin from "@/components/silderAdmin";
export default {
  name: "admin",
  data() {
    return {
    };
  },
  components: {
    "v-silderAdmin": silderAdmin
  },
  created: function() {
    console.log(this.listData);
  },
  mounted: function() {}
};
</script>

<style scoped>
.admin {
  width: 100%;
  height: 80vh;
}
</style>
