<template>
    <transition name="popUp">
        <div class="modal-wrapper" v-if="active">
            <div class="modal" :class="'modal--' + size">
                <button type="button" class="button close-button" title="Sluiten"
                        @click="closeModal">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-content">
                    <h2>Nieuwe taak:</h2>
                    <br>
                    <label for="newTasks">Kiezen een taak</label><br/>
                    <select id="newTasks" name="newTasks" v-model="selectedTask">
                        <option v-for="task in newTasks" :value="task" :key="task.id">{{ task.name }}</option>
                    </select>
                    <br/>
                    <br/>
                    <button @click="giveTask()">Deze taak geven</button>
                </div>
            </div>
            <div class="dark-bg" @click="closeModal"></div>
        </div>
    </transition>
</template>

<script>
import {bus} from "@/main";

export default {
    name: "AddTaskModal",
    props: ['size'],
    data() {
        return {
            active: false,
            selectedTask: null,
            selectedUser:'',
            newTasks: [
                {
                    name: "casus: pneumosepsis",
                    type: "case",
                    id: 1,
                    caseId: 1,
                    room: "kamer 1"
                },
                {
                    name: "casus: DVT",
                    type: "case",
                    id: 2,
                    caseId: 2,
                    room: "kamer 2"
                },
                {
                    name: "storing: Afdelingsvraag",
                    type: "distraction",
                    id: 3,
                    caseId: 3,
                    room: "Koffiekamer"
                },
                {
                    name: "Storing: Telefoontje",
                    type: "distraction",
                    id: 4,
                    caseId: 4,
                    room: "Telefoon"
                }
            ]
        }
    },
    created() {
        bus.$on('ADD_TASK', (data) => {
            this.active = data.show;
            this.selectedUser = data.role;
        })
    },
    methods: {
        closeModal() {
            this.active = false;
        },
        giveTask() {
            bus.$emit('SEND_TASK', {'assigned_to': this.selectedUser, 'task': this.selectedTask});
            this.closeModal();
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.dark-bg {
    background-color: rgba(47, 72, 88, 0.4);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 20;
    cursor: pointer;
}

.modal {
    z-index: 22;
    max-width: 420px;
    height: auto;
    background: white;
    position: relative;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    padding: 8px;
    border-radius: 10px;

    &--large {
        max-width: 900px;
    }
}

.close-button {
    font-size: 18px;
    background: white;
    border-radius: 50%;
    color: rgba(47, 72, 88, 1);
    position: absolute;
    right: 0;
    transform: translate(30%, -50%);
    padding: 2px;
    border: 0 solid;
    width: 28px;
    height: 28px;
    cursor: pointer;
    transition: all 0.10s ease-in-out;

    &:hover, &:active {
        background: rgba(47, 72, 88, 1);
        color: white;
    }
}

.modal-content {
    padding: 16px 12px 32px;
    background: #F2F2F2;
    font-size: 14px;

    h2 {
        font-size: 20px;
        color: #f3726a;
        margin-bottom: 12px;
    }
}

</style>