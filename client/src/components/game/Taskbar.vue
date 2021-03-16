<template>
    <div id="taskbar">
        <task v-for="task in sortedTasks" :task-info="getCase(task.caseId)" :patientRoom="task.room" :key="task.id"></task>

        <distraction v-for="item in sortedDistractions"
                     :task-info="getCase(item.caseId)"
                     :patientRoom="item.room"
                  :key="item.id">
        </distraction>
        <task-message-modal></task-message-modal>
    </div>
</template>

<script>
import Task from './Task';
import Distraction from './Distraction';
import TaskMessageModal from './modals/TaskMessageModal';
import cases from '@/assets/js/patientCases.json';

export default {
    name: 'Taskbar',
    props: ['tasks', 'userRole'],
    data() {
        return {
            allCases: cases,
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
        getCase(id) {
            return this.allCases.find(item => {
                if (item.id === id) {
                    return item;
                }
            })
        }
    },
    computed:{
        sortedTasks() {
            return this.tasks.filter(task => task.type === 'case' && task.assignedTo === this.userRole);
        },
        sortedDistractions() {
            return this.tasks.filter(task => task.type === 'distraction' && this.userRole);
        }
    },
    components: {Task, Distraction, TaskMessageModal},
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
