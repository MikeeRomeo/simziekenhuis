<template>
    <div class="task-list-wide">
        <task
            v-for="task in sortedTasks"
            :task-info="getCase(task.caseId)"
            :patientRoom="task.room"
            :key="task.id">
        </task>

        <button class="red-button" @click="openTaskModal">Nieuw taak</button>
    </div>
</template>

<script>
import Task from "@/components/game/Task";
import cases from '@/assets/js/patientCases.json';
import {bus} from "@/main";

export default {
    name: "CurrentTasks",
    props: ['tasks', 'selectedUser'],
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
        },
        openTaskModal(){
            bus.$emit('ADD_TASK', {'show':true, 'role':this.selectedUser});
        }
    },
    computed:{
        sortedTasks() {
            return this.tasks.filter(task => task.assignedTo === this.selectedUser);
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

    .red-button{
        background-color: #F3726A;
        font-weight: bold;
        color: white;
        border: 0;
        padding: 5px 12px;
        border-radius: 25px;
        margin: 0 auto;
        transition: all 0.1s ease-in-out;

        &:hover, &:active{
            cursor: pointer;
            background-color: darken(#F3726A, 20%);
        }
    }
</style>