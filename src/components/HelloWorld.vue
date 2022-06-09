<!--
 * @Author: zhaoliangcai@yiyetech.com
 * @Date: 2022-06-09 14:07:30
 * @LastEditors: zhaoliangcai@yiyetech.com
 * @LastEditTime: 2022-06-09 14:11:27
 * @FilePath: \工作3\vue-ts-demo\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
