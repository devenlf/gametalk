<template>
  <div class="banner">
      <img src="../../static/images/logo.jpg">
      <div class="line">
        <div class="user-info" v-if="welcomeState">
          欢迎来到游戏世界 <span class="name">{{welcomeName}}</span> <span @click="outLogin" class="signout">【退出】</span>
        </div>
      </div>
  </div>
</template>

<script>
import store from "@/store";
import Cookies from "js-cookie";

export default {
  name: "HelloWorld",
  data() {
    return {
    };
  },
  computed: {
    welcomeState() {
      return store.state.welcomeShow;
    },
    welcomeName() {
      return store.state.name;
    }
  },
  methods:{
    outLogin(){
      Cookies.remove('nickName');
      Cookies.remove('token');
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
.banner {
  width: 100%;
  min-width: 1180px;
  img {
    width: 20vw;
    height: 16vh;
    min-height: 120px;
    min-width: 300px;
    display: block;
    margin: 0 auto;
  }
  .line {
    width: 100%;
    height: 4vh;
    min-height: 30px;
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
.signout{
  cursor: pointer;
}
</style>
