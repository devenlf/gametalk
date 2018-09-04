<template>
<el-col :span="18">
  <div class="list">
      <!-- <template v-for="(list,index) in listArray"> -->
        <!-- <el-card class="box-card list-body" :key="index">
/        </el-card> -->
      <!-- </template> -->
  </div>
</el-col>
</template>

<script>
import { getListData } from "@/api/game";
import Cookies from "js-cookie";
import store from "@/store";
export default {
  name: "list",
  data() {
    return {
      baseUrl: "",
      listArray: ""
    };
  },
  created: function() {
    
  }
};
</script>

<style lang="scss">
.list {
  width: 100%;
  height: 80vh;
}
.list-body {
  width: 30%;
  height: 240px;
  img {
    width: 98%;
    height: 140px;
    display: block;
    margin: auto;
  };
  float: left;
  margin: 2% 1%
}
</style>
