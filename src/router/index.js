import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexVue from '@/components/menu/index'
import userCenterVue from '@/components/menu/userCenter'
import loginVue from '@/components/menu/Login'
import registerVue from '@/components/menu/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          // 当 http://localhost:8080/#/index匹配成功，indexVue组件会被渲染到HelloWorld组件的路由中
          path: 'index',
          component: indexVue
        },{
          // 当 http://localhost:8080/#/userCenter userCenter组件会被渲染到HelloWorld组件的路由中
          path:'userCenter',
          component:userCenterVue
        },{
          // 当 http://localhost:8080/#/userCenter userCenter组件会被渲染到HelloWorld组件的路由中
          path:'login',
          component:loginVue
        },{
          // 当 http://localhost:8080/#/userCenter userCenter组件会被渲染到HelloWorld组件的路由中
          path:'register',
          component:registerVue
        }

      ]
    }
    
  ]
})
