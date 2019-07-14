<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">{{error.message}}</h1>
    <h1 v-else>应用程序发生错误异常</h1>
    <n-link to="/">首页</n-link>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style lang="scss" scoped>
</style>