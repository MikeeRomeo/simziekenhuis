<template>
    <div id="taskbar">
        <task v-for="task in currentTasks" :task-info="task" :key="task.id"></task>
        <task-message-modal></task-message-modal>
    </div>
</template>

<script>
import Task from './Task';
import TaskMessageModal from './modals/TaskMessageModal';

export default {
    name: 'Taskbar',
    data() {
        return {
            currentTasks: {
                task1: {
                    id: 1,
                    patient: 'Mvr. Verhaag',
                    description: 'Long klachten',
                    room: 'Kamer 1',
                    priority: 2,
                },
                task2: {
                    id: 2,
                    patient: 'Telefoontje',
                    description: 'Huisarts belt',
                    room: '',
                    priority: 4,
                },
                task3: {
                    id: 3,
                    patient: 'Aankondiging',
                    description: 'Patiënt onderweg',
                    room: 'Ambulance dienst',
                    priority: 2,
                }

            }
        }
    },
    components: {Task, TaskMessageModal},

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
