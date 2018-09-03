<template>
  <div class="login-box">
<div style="margin: 20px;"></div>
  <h4 class="box-title">欢迎登录</h4>
<el-form :label-position="'right'" label-width="80px" :model="formLabelAlign">
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password" v-model="formLabelAlign.password"></el-input>
  </el-form-item>
</el-form>
<el-row class="submit-line">
  <el-col :span="18">
    <el-button v-if="isLogin" type="primary" class="submit-btn" @click="gotoLogin">登录</el-button>
    <el-button v-else type="primary" plain class="submit-btn" @click="gotoRegister">注册</el-button>
  </el-col>
  <el-col :span="6">
    <el-switch class="chooseLogin" v-model="isLogin" active-text="登录" inactive-text="注册">
</el-switch>
  </el-col> 
</el-row>
  </div>
</template>

<script>
import { loginFunc } from "@/api/user";
import { Message } from "element-ui";
export default {
  name: "login",
  data() {
    return {
      isLogin: true,
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
          if (Response.data.state === 2) {
            let cookieInfo = {};
            cookieInfo.name = Response.data.name;
            cookieInfo.token = Response.data.token;
            this.$cookie.set("userInfo", cookieInfo);
            this.$router.push({ path: "/" });
          } else {
            Message.error(Response.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    gotoRegister() {
      console.log(this.$router);
      this.$router.push({ path: "/register" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chooseLogin {
  margin-top: 10px;
}
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
  margin: 0px 42%;
}
</style>
