<template>
  <div class="banner">
      <img src="../../static/images/logo.jpg">
      <div class="line">
        <div class="user-info" v-if="ifShowFooter">
          欢迎来到游戏世界 <span class="name">{{username}}</span> <span class="signout">【退出】</span>
        </div>
      </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: "HelloWorld",
  data() {
    return {
      username: "Lifei",
      showtop:store.state.showtop
    };s
  },
  computed:{
    ifShowFooter(){
        console.log(store.state.showtop)
        return store.state.showtop
    }
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
