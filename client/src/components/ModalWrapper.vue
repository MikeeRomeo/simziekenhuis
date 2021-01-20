<template>
    <transition name="popUp">
    <div class="modal-wrapper" v-if="active">
        <div class="modal" :class="'modal--' + size">
            <button type="button" class="button close-button" title="Sluiten"
                @click="closeModal">
                <i class="fas fa-times"></i>
            </button>
            <slot>

            </slot>
        </div>
        <div class="dark-bg" @click="closeModal"></div>
    </div>
    </transition>
</template>

<script>
import {bus} from "@/main";

export default {
    name: "ModalWrapper",
    props:['size'],
    data(){
        return{
            active: false
        }
    },
    created() {
        bus.$on('OPEN_SBAR_MESSAGE', (data) => {
            this.active = data;
        })
    },
    methods:{
      closeModal(){
          this.active = false;
      }
    }

}
</script>

<style lang="scss" scoped>
    .modal-wrapper{
        position: fixed;
        z-index: 99;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .dark-bg{
        background-color: rgba(47,72, 88, 0.4);
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 20;
        cursor: pointer;
    }

    .modal{
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

        &--large{
            max-width: 900px;
        }
    }

    .modal-content{

    }

    .close-button{
        font-size: 18px;
        background: white;
        border-radius: 50%;
        color:rgba(47,72, 88, 1);
        position: absolute;
        right: 0;
        transform: translate(30%,-50%);
        padding: 2px;
        border: 0 solid;
        width: 28px;
        height: 28px;
        cursor:pointer;
        transition: all 0.10s ease-in-out;

        &:hover,&:active{
            background: rgba(47,72, 88, 1);
            color: white;
        }
    }

</style>