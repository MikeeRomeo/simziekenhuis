<template>
    <section>
        <transition name="slide-fade">
            <div class="patient"
                 v-if="docIsActive">
                <div class="patient__header">
                    <div class="image">
                        <img :src="require('@/assets/images/cases/case_'+ caseInfo.id + '_profile.jpg')" />
                    </div>
                    <div class="name">
                        <h2>{{ caseInfo.firstName }} {{caseInfo.lastName}}</h2>
                        <p>{{room}}</p>
                    </div>
                    <div class="symptoms">
                        <h4>Reden van komst:</h4>
                        <p>{{caseInfo.caseInfo.short}}</p>
                    </div>
<!--                    <button-->
<!--                        type="button"-->
<!--                        class="closing-button"-->
<!--                        @click="closeDoc">Sluiten <i class="fas fa-times"></i>-->
<!--                    </button>-->
                </div>

                <div class="patient__tabs">
                    <button class="tab-button"
                            :class="{'active' : currentTab === 1}">
                        Casus informatie
                    </button>
                </div>

                <div class="patient__active-tab">
                    <case-sim-tab :info="caseInfo"
                              :room="room">
                    </case-sim-tab>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>

import {bus} from "@/main";
import cases from '@/assets/js/patientCases.json';
import CaseSimTab from "@/components/game/user-tabs/CaceSimTab";

export default {
    name: "PatientSimDoc",
    props: ['tasks', 'userRole'],
    data() {
        return {
            currentTab: 1,
            docIsActive: true,
            allCases: cases,
            selectedCase:0,
            caseInfo: null,
            room:'',
        }
    },
    mounted() {
        if(this.userRole === 'patient_1'){
            this.room = 'Kamer 1';
            this.caseInfo = this.getCase(1);
        }
        if(this.userRole === 'patient_2'){
            this.room = 'Kamer 2';
            this.caseInfo = this.getCase(2);
        }
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
    computed:{
        sortedTasks() {
            return this.tasks.filter(task => task.assignedTo === this.userRole);
        }
    },
    components: {
        CaseSimTab,
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

        .image {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 20px;

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

    &__active-tab {
        background: white;
        height: 100%;
        width: 100%;
        padding: 15px 15px 35px;
        overflow-y: auto;
    }
}

</style>