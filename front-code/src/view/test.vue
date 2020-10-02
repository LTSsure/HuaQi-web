<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'to Your Vue.js App'
    }
  }
}
</script>
