<template>
  <div class="container">
    <div>
      <h1 class="title">fff</h1>
      <h2 class="subtitle">FFF Fans</h2>
      <ul>
        <li v-for="good in goods" :key="good.id">
          <n-link :to="{name: 'index-id', params: {id: good.id}}">
            <span>{{good.text}}</span>
            <span>${{good.price}}</span>
            <button @click.prevent="addCart(good)">加入购物车</button>
          </n-link>
        </li>
      </ul>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "课程列表",
      meta: [
        { name: "description", hid: "description", content: "set page meta" }
      ],
      link: [{ rel: "favicon", href: "favicon.ico" }]
    };
  },
  // data() {
  //   return {
  //     goods: [
  //       { id: 1, text: "web全栈工程师", price: 8999 },
  //       { id: 2, text: "Python全栈工程师", price: 9999 }
  //     ]
  //   };
  // },
  methods: {
    addCart(good) {
      this.$store.dispatch("cart/addToCart", good);
    }
  },
  async asyncData({ $axios, error }) {
    const { ok, goods } = await $axios.$get("/api/goods");
    if (ok) {
      return { goods };
    }
    error({ statusCode: 400, message: "数据查询失败" });
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
