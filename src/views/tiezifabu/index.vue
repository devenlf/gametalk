<template>
<el-col :span="18">
  <div class="fabu">
    <el-card class="box-card">
      <el-form ref="form" class="fabuFrom" :model="form" label-width="80px">
       <el-form-item label="帖子标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="发帖内容">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="图片上传">
          <el-upload
            class="upload-demo"
            :action="activeUrl"
            :headers="myHeaders"
            :limit="3"
            :on-success="uploadSuccess"
            :file-list="fileList2"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>          
      </el-form-item>
       <el-form-item>
        <el-button type="primary" @click="onSubmit">提交发布</el-button>
        <el-button @click="clearAll">取消</el-button>
      </el-form-item>
      </el-form>
   </el-card>
  </div>
</el-col>
</template>

<script>
import { fabuTiezi } from "@/api/game";
import Cookies from "js-cookie";
import store from "@/store";
export default {
  name: "tiezi",
  data() {
    return {
      gameId: this.$route.query.id,
      form: {
        name: "",
        desc: ""
      },
      activeUrl: process.env.BASE_URL + "admin/upload",
      fileList2: [],
      imgList: [],
      myHeaders: {
        token: Cookies.get("token")
      }
    };
  },
  created: function() {},
  methods: {
    uploadSuccess(response, file, fileList) {
      this.imgList = fileList;
    },
    onSubmit() {
      let data = {};
      data.gameId = this.gameId;
      data.name = Cookies.get("nickName");
      data.title = this.form.name;
      data.content = this.form.desc;
      data.imageArray = [];
      this.imgList.forEach(img => {
        data.imageArray.push(img.response.filename);
      });
      fabuTiezi(data).then(Response => {
        console.log(Response);
        this.clearAll()
      });
    },
    clearAll() {
      this.form.name=""
      this.form.desc=""
      this.fileList2=[]
      this.imgList=[]
    }
  }
};
</script>

<style lang="scss">
.fabu {
  width: 100%;
  position: relative;
}
.box-card {
  width: 98%;
  margin-left: 1%;
  margin-top: 2%;
}
.fabuFrom {
  width: 80%;
}
</style>
