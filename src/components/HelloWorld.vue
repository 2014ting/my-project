<template>
<div>
  <div  id="header" class="wrap" style="width: 1200px; margin: 0 auto;">
    <div id="header-wrapper">
		<div id="header" class="container">
			<div id="logo">
				<h1><a href="#">I T 论坛</a></h1>
				<!--  <p> <a href="http://www.java1234.com/" rel="nofollow">Java1234知识分享网</a></p> -->
			</div>
		</div>
	</div>
		<el-menu
			:default-active="activeIndex2"
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
			background-color="rgb(47, 148,168)"
			text-color="#fff"
			active-text-color="#ffd04b">
			<el-menu-item index="1" ><router-link to ="/index">首　页</router-link></el-menu-item>
			<el-menu-item index="2" >申请版主</el-menu-item>
			<el-menu-item index="3">在线文档</el-menu-item>
			<el-menu-item index="4" >资源下载</el-menu-item>
			<el-menu-item index="5" >用户中心</el-menu-item>
			<el-menu-item index="6" class="right1"><router-link to ="/login">登录</router-link></el-menu-item>
			<el-menu-item index="7" class="right2"><router-link to ="/register">注册</router-link></el-menu-item>

        </el-menu>
	  
	
  <!-- end #menu --> 
  </div> 
  <div id="default">
    <router-view></router-view>
  </div>
 
   
</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
		 activeIndex2: '1'
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
	position: relative;
	overflow: hidden;
	text-align: center;
}
#header-wrapper
{
	overflow: hidden;
	background: #252832;
	
}

#logo {
	width: 500px;
	margin: 0 auto;
	padding: 2em 0em;
	text-transform: uppercase;
}

#logo h1 {
	font: normal 400% 'Jenna Sue', arial, sans-serif;
	letter-spacing: 0.10em;
	/* font-size: 3em; */
	color: #FFF;
}

#logo p {
	letter-spacing: 0.10em;
	color: #FFF;
}

#logo a {
	text-decoration: none;
	color: #FFF;
}
/** MENU */

#default{
   margin: 0px;
	padding: 0px;
	background: rgb(245,245,245);
  font-family: 'Source Sans Pro', sans-serif;
  /*margin: -5px,-5px,0px,5px;*/
  margin-left: 75px;
  margin-right:75px;
  margin-top: 5px;
	font-size: 12pt;
	font-weight: 300;
	color: #363636;
}
.el-menu-demo{
	 padding-left:350px;  
	 right: auto;
}
.right1{
	float: right;
	margin-right: 15px;
	padding-left: 5px;
}
.right2{
	float: right;
	
}
</style>
