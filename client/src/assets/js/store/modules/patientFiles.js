const state = {
    cases:[
        {
            id:1,
            symptoms:"",
            history:"",
            allergies:"",
            medication:"",
            lastMeal:"",
            notes:"",
            primarySurvey:"",
            secondarySurvey:"",
        },
        {
            id:2,
            symptoms:"",
            history:"",
            allergies:"",
            medication:"",
            lastMeal:"",
            notes:"",
            primarySurvey:"",
            secondarySurvey:"",
        }
    ]
};

const getters = {
    // currentSearchToken: (state) => state,
};

const actions = {

};

const mutations = {
    // setToken: (state, token) => (state.token = token),
    updateSymptoms (state, payload) {
        state.cases[payload.index].symptoms = payload.contents
    },

    updateHistory (state, payload) {
        state.cases[payload.index].history = payload.contents
    },

    updateAllergies (state, payload) {
        state.cases[payload.index].allergies = payload.contents
    },

    updateMedication (state, payload) {
        state.cases[payload.index].medication = payload.contents
    },

    updateLastMeal (state, payload) {
        state.cases[payload.index].lastMeal = payload.contents
    },

    updateNotes (state, payload) {
        state.cases[payload.index].notes = payload.contents
    },

    updatePrimary (state, payload) {
        state.cases[payload.index].primarySurvey = payload.contents
    },

    updateSecondary (state, payload) {
        state.cases[payload.index].secondarySurvey = payload.contents
    }

};


export default {
    state,
    getters,
    actions,
    mutations
}

