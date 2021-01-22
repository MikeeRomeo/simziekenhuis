<template>
    <transition name="popUp2">
        <div v-if="active" class="modal" :class="'modal--' + size"
             :style="{top: position.posY + 'px', left: position.posX + 'px'}"
             ref="popup">
            <button type="button" class="button close-button" title="Sluiten"
                    @click="closeModal">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-content" :class="'modal-content--' + type">
                <img v-if="type === 'ECG'" src="@/assets/images/hartfilmpje.png">
                <img v-if="type === 'X-thorax'" src="@/assets/images/longfoto.png">
                <img v-if="type === 'eyes'" src="@/assets/images/eyes.png">
                <video v-if="type === 'head'" width="500" loop autoplay>
                    <source src="@/assets/images/test_algemene_impressie.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </transition>
</template>

<script>
import {bus} from "@/main";

export default {
    name: "PopUpContentWrapper",
    props: ['size'],
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
        // const e = this;
        this.$nextTick(() => {
            bus.$on('SHOW_POPUP', (data) => {
                this.active = data.state;

                if((data.coords.clientX + 200) > window.innerWidth){
                    this.position.posX = data.coords.clientX - 250;
                }else{
                    this.position.posX = data.coords.clientX;
                }
                this.position.posY = data.coords.clientY;

                if(data.type !== null){
                    this.type = data.type;
                    console.log(data.type);
                }
            })
        })
    },
    methods: {
        closeModal() {
            this.active = false;
        },
    }
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 99;
    height: auto;
    background: white;
    margin: 0 auto;
    width: 500px;
    transform: translate(-50%, -50%);
    padding: 8px;
    border-radius: 10px;
    box-shadow: rgba(47, 72, 88, 8%) 0 2px 8px;

    img, video{
        width: 100%;
        max-width: 500px;
    }

    &--large {
        max-width: 900px;
    }
}

.modal-content {
    overflow: hidden;
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

</style>