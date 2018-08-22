<template>
 <el-col :span="6"  class="silder-bar">
<el-menu
      default-active="2"
      :router="true"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="(data,index) in listData">
      <el-menu-item :key="index" :index="data.path">
        <i :class="data.class"></i>
        <span slot="title">{{data.name}}</span>
      </el-menu-item>
      </template>

    </el-menu>
 </el-col>
 

</template>

<script>
import childRouter from "@/router/children-list";
export default {
  name: "App",
  data() {
    return {
      listData: childRouter
    };
  },
  created: function() {
    console.log(childRouter);
  }
};
</script>

<style lang="scss">
.silder-bar {
  height: 100%;
  background: #545c64;
  ul {
    width: 100%;
  }
}
</style>