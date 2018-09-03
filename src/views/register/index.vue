<template>
  <div class="register">
     <el-card class="box-card">
        <el-row class="list-li">
         <el-col class="name-text" :span="6">昵称</el-col>
         <el-col :span="12"><el-input v-model="nickname" @focus="activeInput(0)" placeholder="请输入昵称"></el-input></el-col> 
         <el-col class="errorInfo" :span="6"><el-alert
          v-if="nickErrorInfo"
          :title="nickErrorInfo"
          :closable="false"
          type="error">
        </el-alert></el-col>
       </el-row>
       <el-row class="list-li">
         <el-col class="name-text" :span="6">用户名</el-col>
         <el-col :span="12"><el-input v-model="username" @focus="activeInput(1)" placeholder="请输入用户名"></el-input></el-col>
         <el-col class="errorInfo" :span="6"><el-alert
          v-if="userErrorInfo"
          :title="userErrorInfo"
          :closable="false"
          type="error">
        </el-alert></el-col> 
       </el-row>
       <el-row class="list-li">
         <el-col class="name-text" :span="6">密码</el-col>
         <el-col :span="12"><el-input v-model="password" @focus="activeInput(2)" placeholder="请输入密码"></el-input></el-col> 
         <el-col class="errorInfo" :span="6"><el-alert
          v-if="passwordErrorInfo"
          :title="passwordErrorInfo"
          :closable="false"
          type="error">
        </el-alert></el-col> 
       </el-row>
       <el-row class="list-li">
         <el-col class="name-text" :span="6">确认密码</el-col>
         <el-col :span="12"><el-input @focus="activeInput(3)" v-model="confirmPassword" placeholder="请确认密码"></el-input></el-col> 
         <el-col class="errorInfo" :span="6"><el-alert
          v-if="confirmErrorInfo"
          :title="confirmErrorInfo"
          :closable="false"
          type="error">
        </el-alert></el-col>
       </el-row>
       <el-row class="list-li">
         <el-col class="name-text" :span="6">E-mail</el-col>
         <el-col :span="12"><el-input @focus="activeInput(4)" type="email" v-model="Email" placeholder="请输入Email"></el-input></el-col> 
         <el-col class="errorInfo" :span="6"><el-alert
           v-if="emailErrorInfo"
          :title="emailErrorInfo"
          :closable="false"
          type="error">
        </el-alert></el-col>
       </el-row>
       <el-row class="list-li">
         <el-col class="name-text" :span="6">Phone</el-col>
         <el-col :span="12"><el-input @focus="activeInput(5)" v-model="phone" type="tel-extension" placeholder="请输入手机号码"></el-input></el-col> 
         <el-col class="errorInfo" :span="6"><el-alert
           v-if="phoneErrorInfo"
          :title="phoneErrorInfo"
          :closable="false"
          type="error">
        </el-alert></el-col>
       </el-row>
       <el-row class="list-li">
         <el-col class="name-text btn-bottom" :span="12">
           <el-button type="primary" @click="regsiterActive">确认完毕 注册</el-button>
         </el-col>
         <el-col :span="12" class="btn-bottom">
           <el-button type="danger">清空信息</el-button>
           </el-col> 
       </el-row>
     </el-card>
  </div>
</template>

<script>
import { register } from "@/api/user";

export default {
  name: "register",
  data() {
    return {
      nickErrorInfo: "",
      userErrorInfo: "",
      passwordErrorInfo: "",
      confirmErrorInfo: "",
      emailErrorInfo: "",
      phoneErrorInfo: "",
      nickname: "",
      username: "",
      password: "",
      confirmPassword: "",
      Email: "",
      phone: ""
    };
  },
  created: function() {
    console.log(this.listData);
  },
  mounted: function() {},
  methods: {
    //表单验证
    formValidation() {
      let EmailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      let phoneFilter = /^1[3|4|5|8][0-9]\d{4,8}$/;
      let isPass = true;
      if (this.nickname === "") {
        this.nickErrorInfo = "昵称不得为空";
        isPass = false;
      }

      if (this.username === "") {
        this.userErrorInfo = "用户名不得为空";
        isPass = false;
      }

      if (this.password === "") {
        this.passwordErrorInfo = "密码不得为空";
        isPass = false;
      }

      if (this.confirmPassword === "") {
        this.confirmErrorInfo = "确认密码不得为空";
        isPass = false;
      } else if (this.password !== this.confirmPassword) {
        this.confirmErrorInfo = "两次密码输入不一致";
        isPass = false;
      }

      if (this.Email === "") {
        this.emailErrorInfo = "电子邮箱不得为空";
        isPass = false;
      } else if (!EmailFilter.test(this.Email)) {
        this.emailErrorInfo = "电子邮箱格式不正确";
        isPass = false;
      }

      if (!phoneFilter.test(this.phone)) {
        this.phoneErrorInfo = "手机号码格式不正确";
        isPass = false;
      }
      return isPass;
    },
    regsiterActive() {
      let passValue = this.formValidation();
      if (passValue) {
        let dataFrom = {};
        dataFrom.nickname = this.nickname;
        dataFrom.username = this.username;
        dataFrom.password = this.password;
        dataFrom.Email = this.Email;
        dataFrom.phone = this.phone;
        register(dataFrom).then(Response => {
          console.log(Response);
        });
        //  this.$message({
        //    message: '注册成功',
        //    type: 'success'
        //  })
      } else {
        this.$message({
          message: "注册失败",
          type: "error"
        });
      }
    },
    activeInput(id) {
      let this_Id = id;
      switch (this_Id) {
        case 0:
          this.nickErrorInfo = "";
          break;
        case 1:
          this.userErrorInfo = "";
          break;
        case 2:
          this.passwordErrorInfo = "";
          break;
        case 3:
          this.confirmErrorInfo = "";
          break;
        case 4:
          this.emailErrorInfo = "";
          break;
        case 5:
          this.phoneErrorInfo = "";
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style  scoped>
.btn-bottom {
  text-align: center;
  padding: 2vh 0;
}
.register {
  width: 60%;
  margin-left: 20%;
  height: 80vh;
}
.list-li {
  height: 4vh;
  min-height: 40px;
  margin: 1vh 0;
}
.box-card {
  width: 80%;
  margin-left: 10%;
  margin-top: 10%;
}
.name-text {
  height: 40px;
  line-height: 40px;
  text-indent: 5%;
}
.errorInfo {
  padding-left: 2vmin;
  white-space: nowrap;
}
</style>
