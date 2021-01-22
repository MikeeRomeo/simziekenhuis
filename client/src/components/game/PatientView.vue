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
                <img class="vector-model" src="@/assets/characters/Lady.png" alt="">

                <div class="head-cta" @click="inspectBodyPart($event, 'head')"></div>
                <div class="mouth-cta" @click="inspectBodyPart($event, 'mouth')"></div>
                <div class="eyes-cta" @click="inspectBodyPart($event, 'eyes')"></div>
                <div class="chest-cta" @click="inspectBodyPart($event, 'chest')"></div>
                <div class="wrist-left-cta" @click="inspectBodyPart($event, 'wrist')"></div>
                <div class="wrist-right-cta" @click="inspectBodyPart($event, 'wrist')"></div>
            </div>
        </div>
    </transition>
</template>

<script>
import {bus} from "@/main";

export default {
    name: "PatientView",
    data() {
        return {
            active: false,
            type: 'image',
            position: {
                posX: 0,
                posY: 0,
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            bus.$on('SHOW_PATIENT_VIEW', (data) => {
                this.active = data.state;
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
        }
    },
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 90;
    height: auto;
    background: white;
    margin: 0 auto;
    width: 440px;
    transform: translate(-50%, -50%);
    padding: 8px;
    border-radius: 10px;
    box-shadow: rgba(47, 72, 88, 8%) 0 2px 8px;
    text-align: center;

    .vector-model{
        width: 100%;
        margin: 0 auto;
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
        background-color: #0051b6;
        opacity: .2;
        cursor: pointer;
        transition: opacity 0.2s ease-in-out;

        &:hover{
            opacity: 0.5;
        }
    }

    .head-cta{
        width: 160px;
        height: 160px;
        border-radius: 50%;
        top: 55px;
        left: 133px;
        z-index: 2;
    }

    .mouth-cta{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        top: 175px;
        left: 195px;
        z-index: 4;
    }

    .eyes-cta{
        width: 100px;
        height: 30px;
        top: 140px;
        left: 158px;
        z-index: 4;
    }

    .chest-cta{
        width: 120px;
        height: 140px;
        top: 220px;
        left: 148px;
        z-index: 2;
        border-radius: 25px 25px 0 0;
    }

    .wrist-left-cta{
        width: 35px;
        height: 50px;
        top: 320px;
        left: 104px;
        z-index: 2;
        transform: rotate(9deg);
    }

    .wrist-right-cta{
        width: 35px;
        height: 50px;
        top: 281px;
        left: 255px;
        z-index: 4;
        transform: rotate(70deg);
    }
}

</style>