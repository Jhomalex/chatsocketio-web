export default {
  namespaced: true,
  state: {
    username: ""
  },
  getters: {
    isJoined: (state: any) => (state.username.length != 0 ? true : false)
  },
  mutations: {
    setUsername(state: any, newUsername: string) {
      state.username = newUsername;
    },
  },
  actions: {},
  modules: {}
};
