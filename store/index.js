export const actions = {
  nuxtServerInit({ commit }, { app }) {
    const token = app.$cookies.get("token");
    if (token) {
      console.log("nuxtServerInit: token: " + token);
      commit("user/SET_TOKEN", token);
    }
  }
};
