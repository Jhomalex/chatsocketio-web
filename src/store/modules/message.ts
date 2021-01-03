import { ChatMessageGeneral } from "@/interfaces/index"
export default {
    namespaced: true,
    state: {
        chatGeneral: {} as ChatMessageGeneral
    },
    getters: {
    },
    mutations: {
        setChatGeneral(state: any, chatGeneral: ChatMessageGeneral) {
            state.chatGeneral = chatGeneral;
        },
    },
    actions: {},
    modules: {}
};
