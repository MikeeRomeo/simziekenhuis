const state = {
    logs:[
        { user: "anios_1", type: "intervention", message: "Sessie gestart" },
        { user: "anios_2", type: "intervention", message: "Sessie gestart" },
    ]
};

const getters = {
    userLogs: (state) => state.logs,
};

const mutations = {
    addNewLog (state, payload) {
        state.logs.push(payload);
    },
};


export default {
    state,
    getters,
    mutations
}

