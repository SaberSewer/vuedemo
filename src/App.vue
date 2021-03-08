<template>
  <div id="app">
    <DropMenu />
    <BigHood />
    <NewsBody />
    <div class="copy-right">
      &copy;Power By CangJie
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "@/router/router";

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
import DropMenu from "@/components/DropMenu";
import BigHood from "@/components/BigHood";
import NewsBody from "@/components/NewsBody";

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
Vue.use(VueRouter)
export default {
  name: 'App',
  components: {
    DropMenu,
    BigHood,
    NewsBody
  },
  router
}
</script>

<style>
.copy-right {
  text-align: center;
}
</style>
