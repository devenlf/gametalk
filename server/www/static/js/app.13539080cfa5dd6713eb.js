webpackJsonp([1],{"5Trl":function(t,e){},"7Q/n":function(t,e){},AsPD:function(t,e){},BD0b:function(t,e){},CEGK:function(t,e){},M4C8:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("NYxO"),r=a("lbHh"),o=a.n(r);s.default.use(n.a);var i=new n.a.Store({state:{welcomeShow:"",name:""},getters:{welcomeChangeValue:function(t){return t.welcomeShow}},mutations:{welcomeChange:function(t,e){t.welcomeShow=e},welcomeName:function(t,e){t.name=e}}}),l={name:"HelloWorld",data:function(){return{}},computed:{welcomeState:function(){return i.state.welcomeShow},welcomeName:function(){return i.state.name}},methods:{outLogin:function(){o.a.remove("nickName"),o.a.remove("level"),o.a.remove("token"),this.$router.push({path:"/login"})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner"},[s("img",{attrs:{src:a("do/+")}}),t._v(" "),s("div",{staticClass:"line"},[t.welcomeState?s("div",{staticClass:"user-info"},[t._v("\n        欢迎来到游戏世界 "),s("span",{staticClass:"name"},[t._v(t._s(t.welcomeName))]),t._v(" "),s("span",{staticClass:"signout",on:{click:t.outLogin}},[t._v("【退出】")])]):t._e()])])},staticRenderFns:[]};var u={name:"App",data:function(){return{}},components:{"v-header":a("VU/8")(l,c,!1,function(t){a("dUVR")},"data-v-740c6b46",null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-row",[e("v-header")],1),this._v(" "),e("el-row",{staticClass:"main-body"},[e("router-view")],1)],1)},staticRenderFns:[]};var f=a("VU/8")(u,m,!1,function(t){a("M4C8")},null,null).exports,d=a("/ocq"),p=a("//Fk"),v=a.n(p),h=a("mtWM"),g=a.n(h),_=a("zL8q"),b=a.n(_),k=this,w=g.a.create({baseURL:Object({NODE_ENV:"production"}).BASE_URL,timeout:5e4});w.interceptors.request.use(function(t){return o.a.get("token")&&(t.headers={token:o.a.get("token")}),t},function(t){return v.a.reject(t)}),w.interceptors.response.use(function(t){return t},function(t){return _.Message.error(t.response.data),o.a.remove("nickName"),o.a.remove("level"),o.a.remove("token"),k.$router.push({path:"/login"}),v.a.reject(t)});var C=w;var y={name:"login",data:function(){return{isLogin:!0,formLabelAlign:{username:"",password:""}}},methods:{levelDivision:function(t){_.Message.success(t.message),this.$cookie.set("token",t.token),this.$cookie.set("nickName",t.name),this.$cookie.set("level",t.level)},gotoLogin:function(){var t,e,a=this;(t=this.formLabelAlign.username,e=this.formLabelAlign.password,C({url:"/users/login",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"username="+encodeURIComponent(t)+"&password="+encodeURIComponent(e)})).then(function(t){if(0!==t.data.state)switch(t.data.level){case 0:a.levelDivision(t.data),a.$router.push({path:"/"});break;case 1:a.levelDivision(t.data),a.$router.push({path:"/admin"})}else _.Message.error(t.data.message)}).catch(function(t){console.log(t)})},gotoRegister:function(){console.log(this.$router),this.$router.push({path:"/register"})}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-box"},[a("div",{staticStyle:{margin:"20px"}}),t._v(" "),a("h4",{staticClass:"box-title"},[t._v("欢迎登录")]),t._v(" "),a("el-form",{attrs:{"label-position":"right","label-width":"80px",model:t.formLabelAlign}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:t.formLabelAlign.username,callback:function(e){t.$set(t.formLabelAlign,"username",e)},expression:"formLabelAlign.username"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{type:"password"},model:{value:t.formLabelAlign.password,callback:function(e){t.$set(t.formLabelAlign,"password",e)},expression:"formLabelAlign.password"}})],1)],1),t._v(" "),a("el-row",{staticClass:"submit-line"},[a("el-col",{attrs:{span:18}},[t.isLogin?a("el-button",{staticClass:"submit-btn",attrs:{type:"primary"},on:{click:t.gotoLogin}},[t._v("登录")]):a("el-button",{staticClass:"submit-btn",attrs:{type:"primary",plain:""},on:{click:t.gotoRegister}},[t._v("注册")])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-switch",{staticClass:"chooseLogin",attrs:{"active-text":"登录","inactive-text":"注册"},model:{value:t.isLogin,callback:function(e){t.isLogin=e},expression:"isLogin"}})],1)],1)],1)},staticRenderFns:[]};var I=a("VU/8")(y,E,!1,function(t){a("5Trl")},"data-v-197edf7c",null).exports,x={name:"register",data:function(){return{nickErrorInfo:"",userErrorInfo:"",passwordErrorInfo:"",confirmErrorInfo:"",emailErrorInfo:"",phoneErrorInfo:"",nickname:"",username:"",password:"",confirmPassword:"",Email:"",phone:""}},created:function(){console.log(this.listData)},mounted:function(){},methods:{formValidation:function(){var t=!0;return""===this.nickname&&(this.nickErrorInfo="昵称不得为空",t=!1),""===this.username&&(this.userErrorInfo="用户名不得为空",t=!1),""===this.password&&(this.passwordErrorInfo="密码不得为空",t=!1),""===this.confirmPassword?(this.confirmErrorInfo="确认密码不得为空",t=!1):this.password!==this.confirmPassword&&(this.confirmErrorInfo="两次密码输入不一致",t=!1),""===this.Email?(this.emailErrorInfo="电子邮箱不得为空",t=!1):/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.Email)||(this.emailErrorInfo="电子邮箱格式不正确",t=!1),/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone)||(this.phoneErrorInfo="手机号码格式不正确",t=!1),t},regsiterActive:function(){var t,e=this;if(this.formValidation()){var a={};a.nickname=this.nickname,a.username=this.username,a.password=this.password,a.Email=this.Email,a.phone=this.phone,(t=a,C({url:"/users/register",method:"post",data:t})).then(function(t){t.data.scucces?(e.$message({message:t.data.message,type:"success"}),e.$cookie.set("token",t.data.token),e.$cookie.set("nickName",e.nickname),e.$cookie.set("level",0),e.$router.push({path:"/"})):e.$message({message:t.data.message,type:"error"})})}else this.$message({message:"注册失败",type:"error"})},activeInput:function(t){switch(t){case 0:this.nickErrorInfo="";break;case 1:this.userErrorInfo="";break;case 2:this.passwordErrorInfo="";break;case 3:this.confirmErrorInfo="";break;case 4:this.emailErrorInfo="";break;case 5:this.phoneErrorInfo=""}}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register"},[a("el-card",{staticClass:"box-card"},[a("el-row",{staticClass:"list-li"},[a("el-col",{staticClass:"name-text",attrs:{span:6}},[t._v("昵称")]),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{placeholder:"请输入昵称"},on:{focus:function(e){t.activeInput(0)}},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),t._v(" "),a("el-col",{staticClass:"errorInfo",attrs:{span:6}},[t.nickErrorInfo?a("el-alert",{attrs:{title:t.nickErrorInfo,closable:!1,type:"error"}}):t._e()],1)],1),t._v(" "),a("el-row",{staticClass:"list-li"},[a("el-col",{staticClass:"name-text",attrs:{span:6}},[t._v("用户名")]),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{placeholder:"请输入用户名"},on:{focus:function(e){t.activeInput(1)}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),a("el-col",{staticClass:"errorInfo",attrs:{span:6}},[t.userErrorInfo?a("el-alert",{attrs:{title:t.userErrorInfo,closable:!1,type:"error"}}):t._e()],1)],1),t._v(" "),a("el-row",{staticClass:"list-li"},[a("el-col",{staticClass:"name-text",attrs:{span:6}},[t._v("密码")]),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{type:"password",placeholder:"请输入密码"},on:{focus:function(e){t.activeInput(2)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),a("el-col",{staticClass:"errorInfo",attrs:{span:6}},[t.passwordErrorInfo?a("el-alert",{attrs:{title:t.passwordErrorInfo,closable:!1,type:"error"}}):t._e()],1)],1),t._v(" "),a("el-row",{staticClass:"list-li"},[a("el-col",{staticClass:"name-text",attrs:{span:6}},[t._v("确认密码")]),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{type:"password",placeholder:"请确认密码"},on:{focus:function(e){t.activeInput(3)}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1),t._v(" "),a("el-col",{staticClass:"errorInfo",attrs:{span:6}},[t.confirmErrorInfo?a("el-alert",{attrs:{title:t.confirmErrorInfo,closable:!1,type:"error"}}):t._e()],1)],1),t._v(" "),a("el-row",{staticClass:"list-li"},[a("el-col",{staticClass:"name-text",attrs:{span:6}},[t._v("E-mail")]),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{type:"email",placeholder:"请输入Email"},on:{focus:function(e){t.activeInput(4)}},model:{value:t.Email,callback:function(e){t.Email=e},expression:"Email"}})],1),t._v(" "),a("el-col",{staticClass:"errorInfo",attrs:{span:6}},[t.emailErrorInfo?a("el-alert",{attrs:{title:t.emailErrorInfo,closable:!1,type:"error"}}):t._e()],1)],1),t._v(" "),a("el-row",{staticClass:"list-li"},[a("el-col",{staticClass:"name-text",attrs:{span:6}},[t._v("Phone")]),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{type:"tel-extension",placeholder:"请输入手机号码"},on:{focus:function(e){t.activeInput(5)}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),a("el-col",{staticClass:"errorInfo",attrs:{span:6}},[t.phoneErrorInfo?a("el-alert",{attrs:{title:t.phoneErrorInfo,closable:!1,type:"error"}}):t._e()],1)],1),t._v(" "),a("el-row",{staticClass:"list-li"},[a("el-col",{staticClass:"name-text btn-bottom",attrs:{span:12}},[a("el-button",{attrs:{type:"primary"},on:{click:t.regsiterActive}},[t._v("确认完毕 注册")])],1),t._v(" "),a("el-col",{staticClass:"btn-bottom",attrs:{span:12}},[a("el-button",{attrs:{type:"danger"}},[t._v("清空信息")])],1)],1)],1)],1)},staticRenderFns:[]};var $=a("VU/8")(x,A,!1,function(t){a("RKme")},"data-v-80c12086",null).exports;function L(t,e){return C({url:"/game/list",method:"post",data:{page:t,row:e}})}var R={name:"list",data:function(){return{baseUrl:"",currentPageList:""}},created:function(){var t=this;L(0,100).then(function(e){t.currentPageList=e.data.gameList})},methods:{gotoTiezi:function(t,e){this.$router.push({path:"/home/tiezi",query:{id:t,name:e}})}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",{attrs:{span:18}},[a("div",{staticClass:"list"},[a("div",{staticClass:"listBox"},[t._l(t.currentPageList,function(e,s){return[a("el-card",{key:s,staticClass:"box-card list-body"},[a("img",{attrs:{src:e.logoLink,alt:e.gameDes}}),t._v(" "),a("el-tooltip",{staticClass:"gameName",attrs:{effect:"dark",content:e.gameDes,placement:"top-start"}},[a("el-button",{on:{click:function(a){t.gotoTiezi(e.gameId,e.gameName)}}},[t._v(t._s(e.gameName))])],1),t._v(" "),a("el-row",[a("el-col",{staticClass:"bottom-list",attrs:{span:24}},[a("el-col",{staticClass:"pingjia list-son",attrs:{span:12}},[a("i",{staticClass:"el-icon-edit"}),t._v(t._s(e.tieziNum))]),t._v(" "),a("el-col",{staticClass:"pingjia list-son",attrs:{span:12}},[a("i",{staticClass:"el-icon-view"}),t._v(t._s(e.liulanNum))])],1)],1)],1)]})],2)])])},staticRenderFns:[]};var N={name:"list",data:function(){return{baseUrl:i.state.baseurl,listArray:""}},created:function(){var t=this;L().then(function(e){t.listArray=e.data.imageInfo,console.log(t.listArray.imageInfo)})}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-col",{attrs:{span:18}},[e("div",{staticClass:"friends"},[this._v("\r\n    这是交友页面\r\n  ")])])},staticRenderFns:[]};var D={name:"list",data:function(){return{baseUrl:i.state.baseurl,listArray:""}},created:function(){var t=this;L().then(function(e){t.listArray=e.data.imageInfo,console.log(t.listArray.imageInfo)})}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-col",{attrs:{span:18}},[e("div",{staticClass:"gameGoodDIY"},[this._v("\r\n      这是gameGoodDIY\r\n  ")])])},staticRenderFns:[]};var S={name:"list",data:function(){return{baseUrl:i.state.baseurl,listArray:""}},created:function(){var t=this;L().then(function(e){t.listArray=e.data.imageInfo,console.log(t.listArray.imageInfo)})}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-col",{attrs:{span:18}},[e("div",{staticClass:"list"},[this._v("\r\n    gameRankings\r\n  ")])])},staticRenderFns:[]};var O={name:"list",data:function(){return{baseUrl:i.state.baseurl,listArray:""}},created:function(){var t=this;L().then(function(e){t.listArray=e.data.imageInfo,console.log(t.listArray.imageInfo)})}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-col",{attrs:{span:18}},[e("div",{staticClass:"list"},[this._v("\r\n      plyerTrading\r\n  ")])])},staticRenderFns:[]};var j=[{path:"games",component:a("VU/8")(R,U,!1,function(t){a("sO1w")},null,null).exports,name:"游戏专区",class:"el-icon-menu"},{path:"friands",component:a("VU/8")(N,V,!1,function(t){a("AsPD")},null,null).exports,name:"交友专区",class:"el-icon-circle-plus"},{path:"gameGoodDIY",component:a("VU/8")(D,F,!1,function(t){a("ZRdf")},null,null).exports,name:"游戏物品DIY",class:"el-icon-goods"},{path:"gameRankings",component:a("VU/8")(S,z,!1,function(t){a("oJZ1")},null,null).exports,name:"高玩排行",class:"el-icon-tickets"},{path:"plyerTrading",component:a("VU/8")(O,P,!1,function(t){a("BD0b")},null,null).exports,name:"玩家交易",class:"el-icon-sort"}],M={name:"App",data:function(){return{listData:j}},created:function(){console.log(j)}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",{staticClass:"silder-bar",attrs:{span:6}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2",router:!0,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[t._l(t.listData,function(e,s){return[a("el-menu-item",{key:s,attrs:{index:e.path}},[a("i",{class:e.class}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])])]})],2)],1)},staticRenderFns:[]};var H={name:"home",data:function(){return{}},components:{"v-silder":a("VU/8")(M,q,!1,function(t){a("nVGN")},null,null).exports},created:function(){console.log(this.listData)},mounted:function(){}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("v-silder"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var G=a("VU/8")(H,T,!1,function(t){a("7Q/n")},"data-v-0b3a59f1",null).exports,Y={name:"tiezi",data:function(){return{gameId:this.$route.query.id,TieziName:this.$route.query.name}},created:function(){console.log(this.$route.query.id,this.$route.query.name)},methods:{fabuActive:function(){this.$router.push({path:"/home/fabuActive",query:{id:this.gameId}})}}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-col",{staticClass:"box",attrs:{span:18}},[e("div",{staticClass:"tiezi"},[e("h1",{staticClass:"logoFont"},[this._v(this._s(this.TieziName))]),this._v(" "),e("el-row",{staticClass:"fabubtn"},[e("el-button",{attrs:{type:"primary"},on:{click:this.fabuActive}},[this._v("发布帖子")])],1)],1)])},staticRenderFns:[]};var B={name:"tiezi",data:function(){return{gameId:this.$route.query.id,form:{name:"",desc:""},activeUrl:Object({NODE_ENV:"production"}).BASE_URL+"admin/upload",fileList2:[],imgList:[],myHeaders:{token:o.a.get("token")}}},created:function(){},methods:{uploadSuccess:function(t,e,a){this.imgList=a},onSubmit:function(){var t=this,e={};e.gameId=this.gameId,e.name=o.a.get("nickName"),e.title=this.form.name,e.content=this.form.desc,e.imageArray=[],this.imgList.forEach(function(t){e.imageArray.push(t.response.filename)}),function(t){return C({url:"/game/fabutiezi",method:"post",data:t})}(e).then(function(e){console.log(e),t.clearAll()})},clearAll:function(){this.form.name="",this.form.desc="",this.fileList2=[],this.imgList=[]}}},K={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",{attrs:{span:18}},[a("div",{staticClass:"fabu"},[a("el-card",{staticClass:"box-card"},[a("el-form",{ref:"form",staticClass:"fabuFrom",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"帖子标题"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"发帖内容"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"图片上传"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.activeUrl,headers:t.myHeaders,limit:3,"on-success":t.uploadSuccess,"file-list":t.fileList2,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交发布")]),t._v(" "),a("el-button",{on:{click:t.clearAll}},[t._v("取消")])],1)],1)],1)],1)])},staticRenderFns:[]};var W=[{path:"tiezi",component:a("VU/8")(Y,Z,!1,function(t){a("W88K")},null,null).exports},{path:"fabuActive",component:a("VU/8")(B,K,!1,function(t){a("CEGK")},null,null).exports}];var J={name:"listAdmin",data:function(){return{form:{name:"",describe:"",link:"",logoname:""},activeUrl:Object({NODE_ENV:"production"}).BASE_URL+"admin/upload",myHeaders:{token:o.a.get("token")},fileList2:[]}},methods:{onSubmit:function(){var t,e=this,a=!0;for(var s in this.form)""===this.form[s]&&(a=!1);a?(t=this.form,C({url:"/admin/gamefabu",method:"post",data:t})).then(function(t){1===t.data.status&&(_.Message.success(t.data.message),e.clearAll())}):_.Message.error("信息填写不完善")},uploadSuccess:function(t,e,a){this.form.logoname=t.filename},clearAll:function(){this.fileList2=[],this.form.name="",this.form.describe="",this.form.link="",this.form.logoname=""}}},Q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"listUpdata"},[a("el-card",{staticClass:"box-card"},[a("el-form",{ref:"form",staticClass:"from-body",attrs:{model:t.form,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"游戏名称"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"游戏描述"}},[a("el-input",{model:{value:t.form.describe,callback:function(e){t.$set(t.form,"describe",e)},expression:"form.describe"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"游戏链接"}},[a("el-input",{model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"LOGO上传"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.activeUrl,headers:t.myHeaders,limit:1,"on-success":t.uploadSuccess,"file-list":t.fileList2,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交发布")]),t._v(" "),a("el-button",{on:{click:t.clearAll}},[t._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var X=[{path:"gamefabu",component:a("VU/8")(J,Q,!1,function(t){a("ydDi")},null,null).exports,name:"游戏发布",class:"el-icon-menu"}],tt={name:"App",data:function(){return{listData:X}},created:function(){console.log(X)}},et={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",{staticClass:"silder-bar",attrs:{span:6}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2",router:!0,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[t._l(t.listData,function(e,s){return[a("el-menu-item",{key:s,attrs:{index:e.path}},[a("i",{class:e.class}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])])]})],2)],1)},staticRenderFns:[]};var at={name:"admin",data:function(){return{}},components:{"v-silderAdmin":a("VU/8")(tt,et,!1,function(t){a("YuHe")},null,null).exports},created:function(){console.log(this.listData)},mounted:function(){}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"admin"},[e("v-silderAdmin"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var nt=a("VU/8")(at,st,!1,function(t){a("nAyM")},"data-v-df278188",null).exports;s.default.use(d.a);var rt=new d.a({routes:[{path:"/",redirect:"/home"},{path:"/home",redirect:"/home/games",component:G,children:j.concat(W)},{path:"/login",name:"login",component:I},{path:"/admin",redirect:"/admin/gamefabu",component:nt,children:X},{path:"/register",name:"register",component:$}]}),ot=(a("tvR6"),["/login","/register"]);rt.beforeEach(function(t,e,a){var s=o.a.get("token");if(-1!==ot.indexOf(t.path))i.commit("welcomeChange",!1),a();else if(s)switch(i.commit("welcomeChange",!0),i.commit("welcomeName",o.a.get("nickName")),console.log(o.a.get("level")),o.a.get("level")){case"0":a();break;case"1":"/admin/gamefabu"===t.path?a():a("/admin/gamefabu");break;default:a()}else a("/login")}),s.default.config.productionTip=!1,s.default.prototype.$axios=g.a,s.default.prototype.$cookie=o.a,s.default.use(b.a),new s.default({el:"#app",router:rt,components:{App:f},template:"<App/>"})},RKme:function(t,e){},W88K:function(t,e){},YuHe:function(t,e){},ZRdf:function(t,e){},dUVR:function(t,e){},"do/+":function(t,e,a){t.exports=a.p+"static/img/logo.187de0c.jpg"},nAyM:function(t,e){},nVGN:function(t,e){},oJZ1:function(t,e){},sO1w:function(t,e){},tvR6:function(t,e){},ydDi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.13539080cfa5dd6713eb.js.map