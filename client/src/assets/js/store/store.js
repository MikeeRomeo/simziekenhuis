import Vue from 'vue';
import Vuex from 'vuex';
import patientFiles from './modules/patientFiles';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        patientFiles,
    },
})