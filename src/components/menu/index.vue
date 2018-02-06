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
     <el-container>
          <el-aside width="300px">
             <div class="hotarticle">
                <h3 style="margin-left:15px">热门文章</h3>
                <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="90%" color="blue" size=4/>
                <ul style="list-style-type:none">
                   <li>成为伟大程序员的 10 个要点</li> <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3);margin-left:-20px" width="100%" color="#DDD" size=1 />
                   <li>如何成为一名成功的程序员</li> <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3);margin-left:-20px" width="100%" color="#DDD" size=1 />
                   <li>程序员最核心的竞争力是什么？</li> <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3);margin-left:-20px" width="100%" color="#DDD" size=1 /> 
                   <li>Java 内存模型 JMM 浅析</li> <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3);margin-left:-20px" width="100%" color="#DDD" size=1 />
                   <li>理解 Flexbox：你需要知道的一切</li> <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3);margin-left:-20px" width="100%" color="#DDD" size=1 />
                   <li>创造型职业程序员的无奈</li> <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3);margin-left:-20px" width="100%" color="#DDD" size=1 />
                   <li>我（作为一名开发者）所犯过的错误</li> <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3);margin-left:-20px" width="100%" color="#DDD" size=1 />
                   <li>黑客老王：一个人的黑客史</li> <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3);margin-left:-20px" width="100%" color="#DDD" size=1 />
                   <li>阿里面试回来，想和Java程序员谈一谈</li>
                </ul>
             </div>
          </el-aside>
          <el-main>
            <el-row :span="6" v-for="(topic, index) in topicList" :key="topic.topicid" >
               <el-col  >
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="topic.topicImage" class="image">
                  <div class="bottom">
                    <span style="font-size:16px;font-weight:bold;color:blue">{{topic.title}}</span>
                    <div>
                      <time class="time">{{topic.publishTime}}</time> &nbsp;&nbsp;&nbsp;
                         <img src="static/image/shouye/2.jpg"/><span> {{topic.CommentsNumber}}人评论</span> 
                    </div>
                    <span >{{topic.content}}</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000" style="float:right">
            </el-pagination> 
          </el-main>
           
      </el-container>
  </el-container>
</template>
<script>
export default {
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        topicList:[
           { 
             topicid: 1,
             content:'接上文50个常见的 Java 错误及避免方法（第二部分） 31.“Could Not Create Java Virtual Machine” 当我们尝试调用带有错误参',
             title:'用于数学的 10 个优秀编程语言',
             publishTime: '2017.11',
             CommentsNumber:'4',
             topicImage :'static/image/shouye/1.jpg'


           },
           { 
             topicid: 2,
             content:'接上文50个常见的 Java 错误及避免方法（第二部分） 31.“Could Not Create Java Virtual Machine” 当我们尝试调用带有错误参',
             title:'用于数学的 10 个优秀编程语言',
             publishTime: '2017.11',
             CommentsNumber:'4',
             topicImage :'static/image/shouye/1.jpg'

           },
           { 
             topicid: 3,
             content:'接上文50个常见的 Java 错误及避免方法（第二部分） 31.“Could Not Create Java Virtual Machine” 当我们尝试调用带有错误参',
             title:'用于数学的 10 个优秀编程语言',
             publishTime: '2017.11',
             CommentsNumber:'4',
             topicImage :'static/image/shouye/1.jpg'

           },
            { 
             topicid: 4,
             content:'接上文50个常见的 Java 错误及避免方法（第二部分） 31.“Could Not Create Java Virtual Machine” 当我们尝试调用带有错误参',
             title:'用于数学的 10 个优秀编程语言',
             publishTime: '2017.11',
             CommentsNumber:'4',
             topicImage :'static/image/shouye/1.jpg'


           },
           { 
             topicid: 5,
             content:'接上文50个常见的 Java 错误及避免方法（第二部分） 31.“Could Not Create Java Virtual Machine” 当我们尝试调用带有错误参',
             title:'用于数学的 10 个优秀编程语言',
             publishTime: '2017.11',
             CommentsNumber:'4',
             topicImage :'static/image/shouye/1.jpg'

           },
           { 
             topicid: 6,
             content:'接上文50个常见的 Java 错误及避免方法（第二部分） 31.“Could Not Create Java Virtual Machine” 当我们尝试调用带有错误参',
             title:'用于数学的 10 个优秀编程语言',
             publishTime: '2017.11',
             CommentsNumber:'4',
             topicImage :'static/image/shouye/1.jpg'

           }
        ]
      };
    },
      methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style>

#first-menu{
  margin-top: 5px;
  margin-left: -14px;
  width: 1200px;
}
.image {
    width:140px;
    height: 98px;
    float: left;
  }
  
  .bottom {
    margin-top: 13px;
    margin-left:150px;
    font-size: 14px;
    font-family: "微软雅黑";
    width:698px ;
    line-height: 24px;
  }
  .el-card__body {
    margin-bottom: 14px;
    margin-left: 5px;
  }
.hotarticle{
  border: 2px solid #ccc;
  margin-top: 25px;
}
 .hotarticle ul li{
  margin-left: -25px;
  padding-bottom: 5px;
} 

</style>


