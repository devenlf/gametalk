<template>
  <div class="banner">
      <img src="../../static/images/logo.jpg">
      <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
.banner {
  width: 100%;
  img{
    min-width: 300px;
    max-width: 400px;
    display: block;
    margin: 0 auto;
  }
  .line{
    width: 100%;
    height: 30px;
    background: #1F1934
  }
}
</style>
