<template>
  <div class="list">
      {{msg}}
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      msg: "主页"
    };
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 600px;
}
</style>
