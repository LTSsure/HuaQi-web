<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div class="index">
    <v-title/>
    <br>
    <v-picture/>
    <Button :size="buttonSize" type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">进入测试</span>
        <span v-else>Loading...</span>
    </Button>
  </div>
</template>
<script>
import Title from './components/title.vue'
import Picture from './components/pictures.vue'
export default {
  name: 'index',
  components: {
    'v-title': Title,
    'v-picture': Picture
  },
  data () {
    return {
      buttonSize: 'large'
    }
  }
}
</script>
