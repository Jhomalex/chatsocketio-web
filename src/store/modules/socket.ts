import { Socket } from "socket.io-client";

export default {
    namespaced: true,
    state: {
      socket: {} as Socket
    },
    getters: {
    },
    mutations: {
      setSocket(state: any, newSocket: Socket) {
        state.socket = newSocket;
      },
    },
    actions: {},
    modules: {}
  };
  