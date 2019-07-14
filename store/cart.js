export const state = () => ({
  selectedProducts: {
    length: 0
  }
});

export const mutations = {
  ADD_PRODUCT(state, product) {
    const updated_products = state.selectedProducts[product.id];
    if (updated_products) ++updated_products.count;
    else {
      const cart_product = Object.create(null);
      Object.assign(cart_product, product, { count: 1 });
      state.selectedProducts[product.id] = cart_product;
      ++state.selectedProducts.length;
    }
  },
  REMOVE_PRODUCT_BY_ID(state, pid) {
    if (!pid || !state.selectedProducts[pid]) return;
    if (pid) {
      --state.selectedProducts[pid].count;
      if (state.selectedProducts[pid].count === 0) {
        delete state.selectedProducts[pid];
        if (state.selectedProducts.length > 0) --state.selectedProducts.length;
      }
    }
  }
};

export const getters = {
  hasEmpty(state) {
    return state.selectedProducts && state.selectedProducts.length === 0;
  },
  addAlertIfEmpty(state, getters) {
    if (getters.hasEmpty) alert("你的购物车已经全部清空！");
  }
};

export const actions = {
  addToCart({ commit, getters, state }, product) {
    commit("ADD_PRODUCT", product);
  },
  removeFromCart({ commit, getters, state }, pid) {
    commit("REMOVE_PRODUCT_BY_ID", pid);
  }
};
