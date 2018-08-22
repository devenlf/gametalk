<template>
<el-col :span="18">
  <div class="friends">
    这是交友页面
  </div>
</el-col>
</template>

<script>
import { getListData } from "@/api/game";
import store from "@/store";
export default {
  name: "list",
  data() {
    return {
      baseUrl: store.state.baseurl,
      listArray: ""
    };
  },
  created: function() {
    getListData().then(data => {
      this.listArray = data.data.imageInfo;
      console.log(this.listArray.imageInfo);
    });
  }
};
</script>

<style lang="scss">
.list {
  width: 100%;
  height: 800px;
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
