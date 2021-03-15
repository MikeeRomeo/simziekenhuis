<template>
    <div id="taskbar">
        <participant v-for="user in customUsers" :info="user" :key="user.id"></participant>
    </div>
</template>

<script>
import Participant from './Participant';
import TaskMessageModal from './modals/TaskMessageModal';
import cases from '@/assets/js/patientCases.json';

export default {
    name: 'ParticipantList',
    props: ['users', 'userRole'],
    data() {
        return {
            allCases: cases,
            customUsers:[
                {id:1, role:"anios_1", room:"Kamer 1"},
                {id:2, role:"anios_2", room:"Kamer 2"}
            ],
            // currentTasks: {
            // 	task1: {
            // 		id: 1,
            // 		patient: 'Mvr. Verhaag',
            // 		description: 'Long klachten',
            // 		room: 'Kamer 1',
            // 		priority: 2,
            // 	},
            // 	task2: {
            // 		id: 2,
            // 		patient: 'Telefoontje',
            // 		description: 'Huisarts kondigt een patiënt aan',
            // 		room: '',
            // 		priority: 4,
            // 	},
            // 	task3: {
            // 		id: 3,
            // 		patient: 'Aankondiging',
            // 		description: 'Patiënt onderweg',
            // 		room: 'Ambulance dienst',
            // 		priority: 2,
            // 	}
            // }

        }
    },
    methods: {

    },
    components: {Participant, TaskMessageModal},
}
</script>

<style lang="scss">
#taskbar {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 16px;

    .task {
        margin-right: 16px;
    }
}
</style>
