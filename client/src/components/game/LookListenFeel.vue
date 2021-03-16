<template>
    <div class="look-listen-feel"
         v-if="active"
         :style="{top: position.posY + 'px', left: position.posX + 'px'}">
        <button type="button"
                class="button lll-button"
                @click="showBodyPart($event, selectedType.look)"
                v-if="selectedType.look.length !== 0">
            Look
        </button>
        <button type="button"
                class="button lll-button"
                @click="showBodyPart($event, selectedType.listen)"
                v-if="selectedType.listen.length !== 0">
            Listen
        </button>
        <button type="button"
                class="button lll-button"
                @click="showBodyPart($event, selectedType.feel)"
                v-if="selectedType.feel.length !== 0">
            Feel
        </button>
    </div>
</template>

<script>
import {bus} from "@/main";

export default {
    name: "LookListenFeel",
    data(){
        return{
            active: false,
            selectedType:null,
            position: {
                posX: 0,
                posY: 0,
            },
            lookAvailable: false,
            listenAvailable: false,
            feelAvailable: false,
        }
    },
    mounted() {
        // const e = this;
        bus.$on('SHOW_INSPECTION_METHOD', (data) => {
            this.active = data.state;
            this.position.posX = data.coords.clientX;
            this.position.posY = data.coords.clientY;
            this.selectedType = data.type;

            // switch (data.type) {
            //     case "head":
            //         this.lookAvailable = true;
            //         this.listenAvailable = true;
            //         this.feelAvailable = true;
            //         break;
            //     case "mouth":
            //         this.lookAvailable = true;
            //         this.listenAvailable = true;
            //         this.feelAvailable = true;
            //         break;
            //     case "eyes":
            //         this.lookAvailable = true;
            //         this.listenAvailable = false;
            //         this.feelAvailable = false;
            //         break;
            //     case "chest":
            //         this.lookAvailable = true;
            //         this.listenAvailable = true;
            //         this.feelAvailable = true;
            //         break;
            //     case "wrist":
            //         this.lookAvailable = false;
            //         this.listenAvailable = false;
            //         this.feelAvailable = true;
            //         break;
            //     default:
            //         this.lookAvailable = true;
            //         this.listenAvailable = true;
            //         this.feelAvailable = true;
            // }

            // e.resetButton();
        })
    },
    methods:{
        // resetButton() {
        //     clearTimeout(timer);
        //     let timer = setTimeout(()=>{
        //         this.active = false;
        //     },2500);
        // },
        showBodyPart(event, message){
            this.active = false;
            bus.$emit('SHOW_POPUP', {'state':true, 'coords':event, 'type':'inspecting', 'message':message});
        }
    }
}
</script>

<style lang="scss" scoped>
    .look-listen-feel{
        position: fixed;
        width: 90px;
        z-index: 91;
        transform: translate(20%, -40%);
    }

    .lll-button{
        width: 100%;
        background-color: #2f4858;
        font-weight: bold;
        color: white;
        border: 0;
        padding: 5px 20px;
        border-radius: 25px;
        position: relative;
        margin-bottom: 6px;
        transition: all 0.1s ease-in-out;

        &:hover, &:active{
            cursor: pointer;
            background-color: darken(#2f4858, 40%);
        }
    }
</style>