//综上所述，使用创建好的组件的步骤为：
//1、import引入组件
//2、在components中挂载组建
//3、在template模板中使用组件

<template>
  <div id="app">
    <v-index/>
  </div>
</template>

<script>
import Index from './view/mainPage/index.vue'
export default {
  name: 'App',
  components: {
    'v-index': Index
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
