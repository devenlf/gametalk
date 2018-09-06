<template>
<el-col :span="18">
  <div class="list">
    <div class="listBox">
      <template v-for="(list,index) in currentPageList">
        <el-card class="box-card list-body" :key="index">
          <img :src="list.logoLink" :alt="list.gameDes">
          <el-tooltip class="gameName" effect="dark" :content="list.gameDes" placement="top-start">
            <el-button>{{list.gameName}}</el-button>
          </el-tooltip>
          <el-row>
            <el-col class="bottom-list" :span="24">
              <el-col class="pingjia list-son" :span="12"><i class="el-icon-edit"></i>{{list.tieziNum}}</el-col>
              <el-col class="pingjia list-son" :span="12"><i class="el-icon-view"></i>{{list.liulanNum}}</el-col>
            </el-col>
          </el-row>
        </el-card>
      </template>
    </div>
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
      currentPageList: ""
    };
  },
  created: function() {
    let page = 0;
    let row = 100;
    getListData(page, row).then(respose => {
      this.currentPageList = respose.data.gameList;
    });
  }
};
</script>

<style lang="scss">
.list {
  overflow: hidden;
  width: 100%;
  height: 80vh;
  padding-left: 3vw;
}
.listBox{
  overflow: auto;
}
.list-son {
  margin-top: 5%;
  text-align: center !important;
  i {
    margin-right: 12%;
  }
}
.list-body {
  width: 30%;
  height: 240px;
  img {
    width: 98%;
    height: 130px;
    display: block;
    margin: auto;
  }
  float: left;
  margin: 2% 1%;
}
.gameName {
  width: 98%;
  margin-left: 1%;
  margin-top: 3%;
  padding: 5% 0;
}
</style>
