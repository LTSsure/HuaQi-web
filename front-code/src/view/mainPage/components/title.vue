<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div class="title">
    <Button :size="buttonSize" shape="circle">基金走势</Button>
    <Button :size="buttonSize" shape="circle">智投组合</Button>
    <Button :size="buttonSize" shape="circle">关于基金</Button>
    <Button type="primary">登陆</Button>
  </div>
</template>
<script>
export default {
  name: 'title',
  data () {
    return {
      buttonSize: 'large'
    }
  }
}
</script>
