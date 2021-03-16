<template>
    <div>
        <section class="role-select" v-if="!roleConfirmed">
            <label for="roles">Choose a role:</label><br/>
            <select id="roles" name="roles" v-model="selectedRole">
                <option v-for="role in roles" :value="role" :key="role">{{ role }}</option>
            </select><br/>
            <button @click="setRole()">Selecteren</button>
        </section>

        <section v-if="roleConfirmed && (selectedRole === 'anios_1' || selectedRole === 'anios_2')" class="game-view">
            <taskbar :tasks="currentTasks" :userRole="selectedRole"></taskbar>
            <interactive-map :tasks="currentTasks" :userRole="selectedRole"></interactive-map>
            <patient-doc :tasks="currentTasks" :userRole="selectedRole"></patient-doc>

            <pop-up-content-wrapper></pop-up-content-wrapper>
            <patient-view></patient-view>
            <look-listen-feel></look-listen-feel>

            <phone-list></phone-list>
        </section>

        <section v-if="selectedRole === 'supervisor' && roleConfirmed" class="game-view">
            <interactive-map :tasks="currentTasks" :userRole="selectedRole"></interactive-map>
            <participant-list :users="users"></participant-list>
            <doctor-overview :tasks="currentTasks"></doctor-overview>
        </section>

        <section v-if="roleConfirmed && (selectedRole === 'patient_1' || selectedRole === 'patient_2')"
                 class="game-view">
            <interactive-map :tasks="currentTasks" :userRole="selectedRole"></interactive-map>
            <patient-sim-doc :tasks="currentTasks" :userRole="selectedRole"></patient-sim-doc>
        </section>

<!--        <player-single-->
<!--            v-for="client in clients"-->
<!--            :key="client.id"-->
<!--            :contents="client">-->
<!--        </player-single>-->
    </div>
</template>

<script>
import * as io from 'socket.io-client';
import PlayerSingle from './PlayerSingle.vue';
import Taskbar from './game/Taskbar';
import InteractiveMap from './game/InteractiveMap';
import PatientDoc from "@/components/game/PatientDoc";
import PopUpContentWrapper from "@/components/PopUpContentWrapper";
import PatientView from "@/components/game/PatientView";
import LookListenFeel from "@/components/game/LookListenFeel";
import PhoneList from "@/components/game/PhoneList";
import ParticipantList from './game/ParticipantList';
import DoctorOverview from "@/components/game/DoctorOverview";
import PatientSimDoc from "@/components/game/PatientSimDoc";
import {bus} from "@/main";

export default {
    name: "GameView",
    data() {
        return {
            socket: {},
            context: {},
            clients: {},
            position: {
                x: 0,
                y: 0
            },
            users:[],
            currentTasks: [],
            selectedRole: null,
            roleConfirmed: false,
            roles: [
                'supervisor',
                'patient_1',
                'patient_2',
                'anios_1',
                'anios_2',
            ],
            logs:[]
        }
    },
    created() {
        // this.socket = io.connect("http://localhost:3000");
        this.socket = io.connect("https://mikeromeo.codeguys.nl:3000");
        this.socket.emit('join', 'Game');
    },
    mounted() {
        // window.addEventListener('mousemove', this.mouseIsMoving);

        this.socket.on('connected_user', data => {
            this.currentTasks = data.tasks;
            this.users = data.users;
        });

        this.socket.on('new_user', data => {
            this.users = data;
        });

        this.socket.on('update_users', data => {
            this.users = data;
        });

        this.socket.on('all_mouse_activity', data => {
            this.clients = data.users;
        });

        this.socket.on('new_log', data => {
            console.log(data);
            this.$store.commit('addNewLog', data)
        });

        this.socket.on('new_task', data => {
            this.currentTasks.push(data);
        });

        bus.$on('SEND_ACTION', (data) => {
            this.socket.emit('send_log', {'user':this.selectedRole, 'message':data});
        })

        bus.$on('SEND_TASK', (data) => {
            this.socket.emit('send_new_task', data);
        })
    },
    destroyed() {
        // window.removeEventListener('mousemove', this.mouseIsMoving);
    },
    methods: {
        // mouseIsMoving(e) {
        //     this.socket.emit('mouse_activity', {x: e.pageX, y: e.pageY});
        // },
        setRole() {
            this.socket.emit('role_selected', this.selectedRole);
            this.roleConfirmed = true;
        }
    },
    components: {
        DoctorOverview,
        PopUpContentWrapper,
        PlayerSingle,
        Taskbar,
        InteractiveMap,
        PatientDoc,
        PatientView,
        LookListenFeel,
        PhoneList,
        ParticipantList,
        PatientSimDoc
    },

};
</script>

<style lang="scss" scoped>
.role-select {
    text-align: center;
    margin-top: 100px;
}

.game-view {
    width: 100%;
    height: 100%;
    position: relative;
}

</style>
