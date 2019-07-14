<template>
  <div>
    <h2 id="shoping_card">
      <ul>
        <li v-for="item in products" :key="item.id">
          <span>{{item.text}}</span>
          <span>${{item.price}}</span>
          <span>${{item.count}}</span>
          <button @click.prevent="removeFromCart(item.id)">移除购物车</button>
        </li>
      </ul>
    </h2>
  </div>
</template>

<script>
function getStoredProducts(selectedProducts) {
  return Object.keys(selectedProducts).reduce((acc, cur) => {
    if (cur === "length") return acc;
    const existedProduct = selectedProducts[cur];
    if (existedProduct) {
      acc[cur] = existedProduct;
    }
    return acc;
  }, {});
}
export default {
  data() {
    return {
      products: {}
    };
  },
  mounted() {
    this.products = getStoredProducts(this.$store.state.cart.selectedProducts);
  },
  methods: {
    removeFromCart(id) {
      this.$store.dispatch("cart/removeFromCart", id);
      this.products = getStoredProducts(
        this.$store.state.cart.selectedProducts
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>