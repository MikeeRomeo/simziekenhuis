<template>
    <transition name="popUp2">
        <div v-if="active" class="modal"
             :style="{top: position.posY + 'px', left: position.posX + 'px'}"
             ref="popup">
            <button type="button" class="button close-button" title="Sluiten"
                    @click="closeModal">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-content patient-inspection" :class="'modal-content--' + type">
                <img v-if="selectedCase.gender === 'female'"
                     class="vector-model"
                     src="@/assets/characters/female-front.png">
                <img v-if="selectedCase.gender === 'male'"
                     class="vector-model"
                     src="@/assets/characters/male-front.png">

                <div class="head-cta" @click="inspectBodyPart($event, selectedCase.physicalExamination.head)"></div>
                <div class="mouth-cta" @click="inspectBodyPart($event, selectedCase.physicalExamination.mouth)"></div>
                <div class="eyes-cta" @click="inspectBodyPart($event, selectedCase.physicalExamination.eyes)"></div>
                <div class="neck-cta" @click="inspectBodyPart($event, selectedCase.physicalExamination.neck)"></div>
                <div class="chest-cta" @click="inspectBodyPart($event, selectedCase.physicalExamination.chest)"></div>
                <div class="arm-left-cta"
                     @click="inspectBodyPart($event, selectedCase.physicalExamination.armLeft)"></div>
                <div class="wrist-left-cta"
                     @click="inspectBodyPart($event, selectedCase.physicalExamination.wristLeft)"></div>
                <div class="arm-right-cta"
                     @click="inspectBodyPart($event, selectedCase.physicalExamination.armRight)"></div>
                <div class="wrist-right-cta"
                     @click="inspectBodyPart($event, selectedCase.physicalExamination.wristRight)"></div>
                <div class="leg-left-cta"
                     @click="inspectBodyPart($event, selectedCase.physicalExamination.legLeft)"></div>
                <div class="foot-left-cta"
                     @click="inspectBodyPart($event, selectedCase.physicalExamination.feetLeft)"></div>
                <div class="leg-right-cta"
                     @click="inspectBodyPart($event, selectedCase.physicalExamination.legRight)"></div>
                <div class="foot-right-cta"
                     @click="inspectBodyPart($event, selectedCase.physicalExamination.feetRight)"></div>
            </div>
        </div>
    </transition>
</template>

<script>
import {bus} from "@/main";
import cases from '@/assets/js/patientCases.json';

export default {
    name: "PatientView",
    data() {
        return {
            active: false,
            type: 'image',
            position: {
                posX: 0,
                posY: 0,
            },
            patientInfo:null,
            allCases:cases,
        }
    },
    mounted() {
        this.$nextTick(() => {
            bus.$on('SHOW_PATIENT_VIEW', (data) => {
                this.active = data.state;
                this.patientInfo = data.patient;
                if((data.coords.clientX + 200) > window.innerWidth){
                    this.position.posX = data.coords.clientX - 250;
                }else{
                    this.position.posX = data.coords.clientX;
                }
                if((data.coords.clientY + 300) > window.innerHeight){
                    this.position.posY = data.coords.clientY - 120;
                }else{
                    this.position.posY = data.coords.clientY;
                }
            })
        })

    },
    methods: {
        closeModal() {
            this.active = false;
        },
        inspectBodyPart(event, type){
            bus.$emit('SHOW_INSPECTION_METHOD', {'state':true, 'coords':event, 'type':type});
        },

    },
    computed:{
        selectedCase(){
            return this.allCases.find(item => {
                if (item.id === this.patientInfo.caseId) {
                    return item;
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 90;
    width: 440px;
    height: auto;
    background: white;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    padding: 8px;
    border-radius: 10px;
    box-shadow: rgba(47, 72, 88, 8%) 0 2px 8px;
    text-align: center;

    .vector-model{
        width: auto;
        max-height: 560px;
        margin: 20px auto;
    }

    &--large {
        max-width: 900px;
    }
}

.modal-content {
    background-color: #F2F2F2;
    position: relative;
    border-radius: 6px;
}

.close-button {
    z-index: 10;
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

.patient-inspection{
    [class*="-cta"]{
        position: absolute;
        cursor: pointer;
        transition: opacity 0.2s ease-in-out;

        background-color: #0051b6;
        opacity: .5;
        &:hover{
            opacity: 0.8;
        }
    }

    .head-cta{
        width: 55px;
        height: 75px;
        border-radius: 50%;
        top: 19px;
        left: 184px;
        z-index: 2;
    }

    .mouth-cta{
        width: 30px;
        height: 15px;
        border-radius: 50%;
        top: 70px;
        left: 195px;
        z-index: 4;
    }

    .eyes-cta{
        width: 54px;
        height: 19px;
        top: 45px;
        left: 185px;
        z-index: 4;
    }

    .neck-cta{
        width: 38px;
        height: 20px;
        top: 90px;
        left: 192px;
        z-index: 4;
    }

    .chest-cta{
        width: 95px;
        height: 193px;
        top: 110px;
        left: 164px;
        z-index: 2;
        border-radius: 25px 25px 0 0;
    }

/// armen ///////////////////////
    .arm-left-cta{
        width: 30px;
        height: 155px;
        top: 120px;
        left: 132px;
        z-index: 2;
        transform: rotate(11deg);
    }

    .wrist-left-cta{
        width: 40px;
        height: 70px;
        top: 272px;
        left: 102px;
        z-index: 2;
        transform: rotate(14deg);
    }

    .arm-right-cta{
        width: 30px;
        height: 155px;
        top: 120px;
        left: 263px;
        z-index: 2;
        transform: rotate(-11deg);
    }

    .wrist-right-cta{
        width: 40px;
        height: 70px;
        top: 272px;
        left: 281px;
        z-index: 2;
        transform: rotate(-14deg);
    }

/// benen //////////////

    .leg-left-cta{
        width: 48px;
        height: 211px;
        top: 303px;
        left: 162px;
        z-index: 2;
    }

    .foot-left-cta{
        width: 40px;
        height: 70px;
        top: 514px;
        left: 162px;
        z-index: 2;
    }

    .leg-right-cta{
        width: 48px;
        height: 211px;
        top: 303px;
        left: 213px;
        z-index: 2;
    }

    .foot-right-cta{
        width: 45px;
        height: 70px;
        top: 514px;
        left: 220px;
        z-index: 4;
    }

}

</style>