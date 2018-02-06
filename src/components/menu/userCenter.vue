<template>
   <el-container>
    <el-header>
      <el-menu  :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              router="true"
               id="first-menu">
            <el-menu-item index="1">Java</el-menu-item>
            <el-menu-item index="2">JavaScript</el-menu-item>
            <el-menu-item index="3">PHP</el-menu-item>
            <el-menu-item index="4">IOS</el-menu-item>
            <el-menu-item index="5">Android</el-menu-item>
            <el-menu-item index="6">HTML5</el-menu-item>
            <el-menu-item index="7">CSS3</el-menu-item>
            <el-menu-item index="8">Linux</el-menu-item>
            <el-menu-item index="9">C++</el-menu-item>
            <el-menu-item index="10">Python</el-menu-item>
            <el-menu-item index="11">C#</el-menu-item>
            <el-menu-item index="12">Node.Js</el-menu-item>
      </el-menu>
    </el-header>
   </el-container>
</template>
<script>
export default {
  
}
</script>
<style>

</style>
