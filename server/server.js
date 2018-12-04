const Koa = require('koa');
const static = require('koa-static');
const app = new Koa();

console.log(__dirname)
// 配置静态web服务的中间件
app.use(static(__dirname+'/www'));

app.listen(8000,function(){
    console.log('开启服务器成功')
});