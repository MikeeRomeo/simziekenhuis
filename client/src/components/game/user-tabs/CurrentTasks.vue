<template>
    <div class="task-list-wide">
        <task
            v-for="task in tasks"
            :task-info="getCase(task.caseId)"
            :patientRoom="task.room"
            :key="task.id">
        </task>
    </div>
</template>

<script>
import Task from "@/components/game/Task";
import cases from '@/assets/js/patientCases.json';

export default {
    name: "CurrentTasks",
    props: ['tasks', 'userRole'],
    data() {
        return {
            allCases: cases,
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
    components:{
        Task,
    },
}
</script>

<style lang="scss" scoped>
    .task-list-wide{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        .task{
            max-width: 100%;
            margin-bottom: 15px;
            pointer-events: none;
        }
    }
</style>