<template>
  <div class="hello">
    我是sub
    <button @click="gohome"> 上一页</button>
  </div>
</template>

<script>
 export default{
   data(){
     return {

     }
   },methods:{
     gohome(){
       this,$router.go(-1);
     }
   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
