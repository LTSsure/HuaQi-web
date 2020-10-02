<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div class="index">
    <v-title/>
    <br>
    <v-picture/>
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
  }
}
</script>
