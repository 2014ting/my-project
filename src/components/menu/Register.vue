<template>
   <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="昵称" prop="nickName" style="width:450px;margin-left:60px" >
    <el-input v-model="registerForm.nickName" placeholder="请输入昵称"></el-input>
  </el-form-item>
   <el-form-item label="真实姓名" prop="trueName" style="width:450px;margin-left:60px">
    <el-input v-model="registerForm.trueName" placeholder="请输入真实姓名"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="sex" style="width:450px;margin-left:60px" >
    <div id="el-form-item_content">
     <el-radio v-model="registerForm.sex" label="1" >男</el-radio>
     <el-radio v-model="registerForm.sex" label="2" >女</el-radio>
    </div>
  </el-form-item>
  <el-form-item label="用户头像" prop="face" style="width:450px;margin-left:60px">
      <el-upload v-model="registerForm.face"
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload" style="width:450px;margin-left:-200px">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
  </el-form-item>
  <el-form-item label="登录密码" prop="password" style="width:450px;margin-left:60px">
    <el-input v-model="registerForm.password" placeholder="请输入登录密码"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPassword" style="width:450px;margin-left:60px">
    <el-input v-model="registerForm.checkPassword" placeholder="请再次输入密码"></el-input>
  </el-form-item>
  <el-form-item label="联系电话" prop="mobile" style="width:450px;margin-left:60px">
    <el-input v-model="registerForm.mobile" placeholder="请输入联系电话"></el-input>
  </el-form-item>
  <el-form-item label="电子邮箱" prop="email" style="width:450px;margin-left:60px">
    <el-input v-model="registerForm.email" placeholder="请输入邮箱地址"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('registerForm')" style="margin-left:-400px">注册</el-button>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  data(){
     var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerForm.checkPassword !== '') {
            this.$refs.registerForm.validateField('checkPassword');
          }
          callback();
        }
      };
      var validateChackpassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return{
      registerForm:{
        nickName: '',  
        trueName: '', 
        sex : '1',  
        face: '',
        password: '',  
        checkPassword: '',
        mobile: '',  
        email: '',       
        },
      rules: {
          nickName: [
            { required: true, message: '请输入昵称', trigger: 'blur' }
          ],
           password: [
            {required: true, validator:validatePassword, trigger: 'blur' }
          ],
          checkPassword:[
            {required: true, validator:validateChackpassword,trigger:'blur'}
          ],
           trueName: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' }
          ],
            mobile: [
            { required: true, message: '请输入联系电话', trigger: 'blur' }
          ], 
           email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' }
           ],
            face: [
            { required: true, message: '请上传您的头像', trigger: 'blur' }
          ]
          
        } 
    } 
  },methods:{
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('register!');
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
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
.avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .demo-ruleForm{
    width: 900px;
    text-align: center;
    margin-right:auto;
    margin-left:300px; 
    padding-top: 30px;
    background-image:url(../../../static/image/login/3.jpg);
    background-repeat: repeat-y;
}
#el-form-item_content{
  width:200px;
}
</style>
