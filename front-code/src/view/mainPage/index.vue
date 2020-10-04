<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div class="index">
    <v-title/>
    <Button type="primary" @click="login">登陆</Button>
    <br>
    <v-picture/>
    <Button :size="buttonSize" type="primary" :loading="loading" @click="toLoading">
    进入测试
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
  },
  methods: {
    login () {
      this.$router.replace('login')
    }
  }
}
</script>
