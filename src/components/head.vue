<template>
  <div class="banner">
      <img src="../../static/images/logo.jpg">
      <div class="line">
        <div class="user-info" v-if="false">
          欢迎来到游戏世界 <span class="name">{{username}}</span> <span class="signout">【退出】</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      username: "Lifei"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
.banner {
  width: 100%;
  img {
    min-width: 300px;
    max-width: 400px;
    display: block;
    margin: 0 auto;
  }
  .line {
    width: 100%;
    height: 40px;
    background: #007acc;
  }
  .user-info {
    height: 100%;
    line-height: 40px;
    text-align: right;
    margin-right: 10%;
    color: black;
    .name {
      color: #ffffff;
    }
  }
}
</style>
