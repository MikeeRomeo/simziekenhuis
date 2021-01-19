<template>
    <section>
        <div class="patient-list">
            <patient-list-single></patient-list-single>
        </div>
        <transition name="slide-fade">
            <div class="patient" v-if="docIsActive">
                <div class="patient__header">
                    <div class="image">
                        <img src="@/assets/test-profielfoto.jpg"/>
                    </div>
                    <div class="name">
                        <h2>Mvr. Verhaag</h2>
                        <p>Kamer 1</p>
                    </div>
                    <div class="symptoms">
                        <h4>Klachten</h4>
                        <p>Opgenomen op vermoeden van longontsteking</p>
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
                        Patiënt
                    </button>
                    <button class="tab-button"
                            :class="{'active' : currentTab === 2}"
                            @click="switchTab(2)">
                        Interventies
                    </button>
                    <button class="tab-button"
                            :class="{'active' : currentTab === 3}"
                            @click="switchTab(3)">
                        Medicatie
                    </button>
                    <button class="tab-button"
                            :class="{'active' : currentTab === 4}"
                            @click="switchTab(4)">
                        Onderzoeken
                    </button>
                </div>

                <div class="patient__active-tab">
                    <info-tab v-if="currentTab === 1"></info-tab>
                    <intervention-tab v-if="currentTab === 2"></intervention-tab>
                    <medication-tab v-if="currentTab === 3"></medication-tab>
                    <research-tab v-if="currentTab === 4"></research-tab>
                </div>

            </div>
        </transition>
    </section>
</template>

<script>
import PatientListSingle from "@/components/game/PatientListSingle";
import InfoTab from "@/components/game/patient-tabs/InfoTab";
import InterventionTab from "@/components/game/patient-tabs/InterventionTab";
import MedicationTab from "@/components/game/patient-tabs/MedicationTab";
import ResearchTab from "@/components/game/patient-tabs/ResearchTab";
import {bus} from "@/main";

export default {
    name: "PatientDoc",
    data() {
        return {
            currentTab: 1,
            docIsActive: false,
        }
    },
    created() {
        bus.$on('OPEN_DOC', (data) => {
            this.docIsActive = data;
        })
    },
    methods: {
        switchTab(tab) {
            this.currentTab = tab;
        },
        closeDoc() {
            this.docIsActive = false;
        }
    },
    components: {
        PatientListSingle,
        InfoTab,
        InterventionTab,
        MedicationTab,
        ResearchTab
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