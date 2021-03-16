import Vue from 'vue';
import Vuex from 'vuex';
import patientFiles from './modules/patientFiles';
import logs from './modules/logs';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        patientFiles,
        logs
    },
})