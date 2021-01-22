<template>
    <div>
        <section class="role-select" v-if="!roleConfirmed">
            <label for="roles">Choose a role:</label><br/>
            <select name="roles" v-model="selectedRole">
                <option v-for="role in roles" :value="role" :key="role">{{ role }}</option>
            </select><br/>
            <button @click="setRole()">Selecteren</button>
        </section>

        <section v-else class="game-view">
            <taskbar></taskbar>
            <interactive-map></interactive-map>
            <patient-doc></patient-doc>

            <pop-up-content-wrapper></pop-up-content-wrapper>
            <patient-view></patient-view>
            <look-listen-feel></look-listen-feel>

            <phone-list></phone-list>
        </section>

        <player-single
            v-for="client in clients"
            :key="client.id"
            :contents="client">
        </player-single>
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
            selectedRole: null,
            roleConfirmed: false,
            roles: [
                'supervisor',
                'patient',
                'anios',
                'verpleegkundige'
            ],
        }
    },
    created() {
        this.socket = io.connect("http://localhost:3000");
        this.socket.emit('join', 'Game');
    },
    mounted() {
        window.addEventListener('mousemove', this.mouseIsMoving);

        this.socket.on('connected_user', data => {
            console.log('current id: ' + data.id);
        });

        this.socket.on('all_mouse_activity', data => {
            this.clients = data.users;
        });
    },
    destroyed() {
        window.removeEventListener('mousemove', this.mouseIsMoving);
    },
    methods: {
        mouseIsMoving(e) {
            this.socket.emit('mouse_activity', {x: e.pageX, y: e.pageY});
        },
        setRole() {
            this.socket.emit('role_selected', this.selectedRole);
            this.roleConfirmed = true;
        }
    },
    components: {
        PopUpContentWrapper,
        PlayerSingle,
        Taskbar,
        InteractiveMap,
        PatientDoc,
        PatientView,
        LookListenFeel,
        PhoneList
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
