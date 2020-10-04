//综上所述，使用创建好的组件的步骤为：
//1、import引入组件
//2、在components中挂载组建
//3、在template模板中使用组件

<template>
  <div id="app">
  <router-link to="/fundtrade">
    <Button :size="buttonSize" shape="circle">基金走势</Button>
  </router-link>
  <router-link to="/recommendedcombination">
    <Button :size="buttonSize" shape="circle">智投组合</Button>
  </router-link>
  <router-link to="">
    <Button :size="buttonSize" shape="circle">关于基金</Button>
  </router-link>
  <router-link to="/login">
   <Button type="primary">登陆</Button>
  </router-link>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
