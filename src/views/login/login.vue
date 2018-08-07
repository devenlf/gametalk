<template>
  <div class="login-box">
<div style="margin: 20px;"></div>
  <h4 class="box-title">欢迎登录</h4>
<el-form :label-position="'right'" label-width="80px" :model="formLabelAlign">
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.password"></el-input>
  </el-form-item>
</el-form>
<el-row class="submit-line">
  <el-button type="primary" class="submit-btn" @click="gotoLogin">登录</el-button>
</el-row>
  </div>
</template>

<script>
import { loginFunc } from "@/api/user";
export default {
  name: "login",
  data() {
    return {
      formLabelAlign: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    gotoLogin() {
      loginFunc(this.formLabelAlign.username, this.formLabelAlign.password)
        .then(Response => {
          let cookieInfo = {};
          cookieInfo.name = Response.data.name;
          cookieInfo.token = Response.data.token;
          this.$cookie.set("userInfo", cookieInfo);
          this.$router.push({path:'/'})
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-box {
  max-width: 600px;
  margin: 200px auto 0px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  padding: 20px 50px;
}
.box-title {
  font-family: "微软雅黑";
  text-align: center;
}
.submit-btn {
  padding: 12px 100px;
  margin: 0px 32%;
}
</style>
