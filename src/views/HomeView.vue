<!--
 * @Author: zhaoliangcai@yiyetech.com
 * @Date: 2022-06-09 14:07:30
 * @LastEditors: zhaoliangcai@yiyetech.com
 * @LastEditTime: 2022-06-09 14:08:48
 * @FilePath: \工作3\vue-ts-demo\src\views\HomeView.vue
-->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
