<template>
<div >
  <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm" >
    <el-form-item label="用户名" prop="nickName" style="margin-left:50px">
      <el-input v-model="loginForm.nickName"   placeholder="请输入用户名"  style="width:300px;float:left"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" style="margin-left:50px" >
      <el-input v-model="loginForm.password"   placeholder="请输入密码" style="width:300px;float:left"></el-input>
    </el-form-item>
     <el-form-item label="确认密码" prop="checkPassword"  style="margin-left:50px">
      <el-input v-model="loginForm.checkPassword"   placeholder="请再次输入密码" style="width:300px;float:left"></el-input>
    </el-form-item>
  <el-form-item class="login">
      <el-button type="primary" @click="submitForm('loginForm') " >登陆</el-button>
      <el-button @click="resetForm('loginForm')" >重置</el-button>
    </el-form-item>
  </el-form>  
</div>
</template>
<script>
  export default {
    data() {
       var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.loginForm.checkPassword !== '') {
            this.$refs.loginForm.validateField('checkPassword');
          }
          callback();
        }
      };
      var validateCheckpassword = (rule, value, callback) => {
        if (value === '') {
          console.log(value);
          callback(new Error('请再次输入密码'));
        } else if (value !== this.loginForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          nickName: '',
          password: '' ,
          checkPassword:'',
        },
        rules: {
           nickName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
           password: [
            {required: true, validator:validatePassword, trigger: 'blur' }
          ],
          checkPassword:[
            {required: true, validator:validateCheckpassword,trigger:'blur'}
          ]
        } 
      };
    },
    methods: {
       
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
           console.log(valid);
          if (valid) {
         /* 向后台发送请求*/
           axios.get("/user/login",{
             param:{
               nickName:this.loginForm.nickName,
               password:this.loginForm.password
             }
           }).then(function(response){
             alert("xxxxxxxxxx");
              console.log(response.data);
           }).catch(function(error){
             alert("xxxxxxxxxgggggx");
             console.log(error);
           })
            alert('submit!');
          } else {
            
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
.demo-ruleForm{
      width: 600px;
      height: 400px;
      margin-right:auto;
      margin-left:auto; 
      padding-top: 40px;
      background-image:url(../../../static/image/login/3.jpg);
      background-repeat:no-repeat;
}
.login{
  margin-left: 90px;
}
</style>
