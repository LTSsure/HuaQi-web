//综上所述，使用创建好的组件的步骤为：
//1、import引入组件
//2、在components中挂载组建
//3、在template模板中使用组件

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-hello></v-hello>
    <router-view/>
  </div>
</template>

<script>
import Hello from './view/test.vue'
export default {
  name: 'App',
  components:{
    'v-hello':Hello
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
