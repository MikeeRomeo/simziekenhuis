<template>
    <section>
        <transition name="slide-fade">
            <div class="patient"
                 v-for="(user, index) in customUsers"
                 :key="user.id"
                 v-if="docIsActive && selectedUser === user.id">
                <div class="patient__header">
                    <div class="image">
                        <user-icon></user-icon>
                    </div>
                    <div class="name">
                        <h2>{{ user.role }}</h2>
                        <p>{{ user.room}}</p>
                    </div>
                    <div class="symptoms">

                    </div>
                    <button
                        type="button"
                        class="closing-button"
                        @click="closeDoc">Sluiten <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="patient__tabs">
                    <button class="tab-button"
                            :class="{'active' : currentTab === 1}"
                            @click="switchTab(1)">
                        Huidige Taken
                    </button>
                    <button class="tab-button"
                            :class="{'active' : currentTab === 2}"
                            @click="switchTab(2)">
                        Onderzoeksaanvragen
                    </button>
                    <button class="tab-button"
                            :class="{'active' : currentTab === 3}"
                            @click="switchTab(3)">
                        Acties uitgevoerd
                    </button>
                </div>

                <div class="user__active-tab">
                    <current-tasks :tasks="tasks" v-if="currentTab === 1"></current-tasks>
                    <pending-requests  v-if="currentTab === 2"></pending-requests>
                    <action-log  v-if="currentTab === 3"></action-log>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import {bus} from "@/main";
import cases from '@/assets/js/patientCases.json';
import UserIcon from '@/assets/icons/user-solid.svg';
import CurrentTasks from "@/components/game/user-tabs/CurrentTasks";
import PendingRequests from "@/components/game/user-tabs/PendingRequests";
import ActionLog from "@/components/game/user-tabs/ActionLog";

export default {
    name: "DoctorOverview",
    props: ['tasks'],
    data() {
        return {
            currentTab: 1,
            docIsActive: false,
            allCases: cases,
            selectedUser:0,
            customUsers:[
                {id:1, role:"anios_1", room:"Kamer 1"},
                {id:2, role:"anios_2", room:"Kamer 2"}
            ],
        }
    },
    created() {
        bus.$on('OPEN_DOCTOR_OVERVIEW', (data) => {
            this.selectedUser = data.id;
            this.docIsActive = data.show;
        })
    },
    methods: {
        switchTab(tab) {
            this.currentTab = tab;
        },
        closeDoc() {
            this.docIsActive = false;
        },
        getCase(id) {
            return this.allCases.find(item => {
                if (item.id === id) {
                    return item;
                }
            })
        },
        getRoom(id) {
            return this.tasks.find(item => {
                if (item.id === id) {
                    return item;
                }
            })
        }
    },
    components: {
        ActionLog,
        PendingRequests,
        CurrentTasks,
        UserIcon,
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/app.scss';

.patient-list {
    position: absolute;
    right: 0;
}

.patient {
    width: 625px;
    height: 820px;
    max-height: 90%;
    background-color: $grey;
    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    border-radius: 15px 0 0 0;
    border: 4px solid white;
    overflow: hidden;

    &__header {
        display: flex;
        align-items: center;
        padding: 12px;
        background-color: white;

        .image, .image svg {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 20px;
            color: $grey;

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        .name {
            margin-right: 50px;

            h2 {
                font-size: 20px;
                color: $red;
            }

            p {
                font-size: 14px;
                font-weight: bold;
            }
        }

        .symptoms {
            width: 35%;
            align-self: end;

            h4 {
                font-size: 14px;
            }

            p {
                font-size: 12px;
            }
        }

        .closing-button {
            margin-left: auto;
            align-self: start;
            margin-right: -4px;
        }

    }

    &__tabs {
        padding: 22px 12px 0;
        display: flex;

        .tab-button {
            flex: 1 1 auto;
            border: 0 solid transparent;
            border-bottom: 4px solid $grey;
            background: white;
            border-radius: 15px 15px 0 0;
            padding: 10px 10px 6px;
            margin-right: 10px;
            font-size: 14px;
            font-weight: bold;
            transition: all 0.15s ease-in-out;


            &:last-child {
                margin-right: 0;
            }

            &:hover, &:active, &.active {
                cursor: pointer;
                color: $red;
                border-bottom: 4px solid white;
            }
        }
    }
}

.user__active-tab {
    border: 12px solid white;
    height: 100%;
    width: 100%;
    padding: 15px 15px 35px;
    overflow-y: auto;
}

</style>