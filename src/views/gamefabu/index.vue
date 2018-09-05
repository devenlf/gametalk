<template>
 <div class="listUpdata">
   <el-card class="box-card">
    <el-form class="from-body" ref="form" :model="form" label-width="90px">
      <el-form-item  label="游戏名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item  label="游戏描述">
        <el-input v-model="form.describe"></el-input>
      </el-form-item>
      <el-form-item  label="游戏链接">
          <el-input v-model="form.link"></el-input>
      </el-form-item>
      <el-form-item label="LOGO上传">
          <el-upload
            class="upload-demo"
            action="http://localhost:3000/admin/upload"
            :limit="1"
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
</template>

<script>
import { Message } from "element-ui";
import { uploadFabu } from "@/api/admin";
export default {
  name: "listAdmin",
  data() {
    return {
      form: {
        name: "",
        describe: "",
        link: "",
        logoname: ""
      },
      fileList2: []
    };
  },
  methods: {
    onSubmit() {
      uploadFabu(this.form).then((Response) => {
        if(Response.data.status===1){
          Message.success(Response.data.message)
          this.clearAll()
        }
      });
    },
    uploadSuccess(response, file, fileList) {
      this.form.logoname = response.filename;
    },
    clearAll(){
      this.fileList2=[];
      this.form.name="",
      this.form.describe="",
      this.form.link="",
      this.form.logoname=""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  type="text/css">
.from-body {
  width: 30vw;
  min-width: 500px;
}
</style>
