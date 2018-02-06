<template>
  <div >
    我是home
    <button @click="gosub">我去sub</button>
    <button @click="goapp"> 上一页</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      gosub(){
        this.$router.push('/sub')
      },
      goapp(){
        this,$router.go(-1);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
