<template>
<el-col class="box" :span="18">
  <div class="tiezi">
     <h1 class="logoFont">{{TieziName}}</h1>
     <el-row class="fabubtn">
          <el-button @click="fabuActive"  type="primary">发布帖子</el-button>
     </el-row>
  </div>
</el-col>
</template>

<script>
import { getListData } from "@/api/game";
import store from "@/store";
export default {
  name: "tiezi",
  data() {
    return {
      gameId: this.$route.query.id,
      TieziName: this.$route.query.name
    };
  },
  created: function() {
    console.log(this.$route.query.id, this.$route.query.name);
  },
  methods:{
    fabuActive(){
       this.$router.push({path:'/home/fabuActive',query:{id:this.gameId}})
    }
  }
};
</script>

<style lang="scss">
.box{
  height: 100%
}
.tiezi {
  width: 100%;
  margin-top: 0%;
}
.logoFont {
  font-family: "Microsoft YaHei";
  margin-left: 2%;
}
.fabubtn {
  padding-left: 85%;
}
</style>
