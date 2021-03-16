<template>
    <div class="research-request">
        <div class="tag">
            <i :class="info.icon"></i>
        </div>

        <div class="request-content">
            <h4>{{ info.type }}</h4>
            <button v-if="isRequested === false && resultCollected === false"
                    type="button"
                    class="red-button"
                    @click="requestResearch">
                Aanvragen
            </button>

            <button v-if="isRequested === true && resultCollected === false"
                    type="button"
                    class="red-button disabled">
                Bekijken
            </button>

            <button v-else-if="resultCollected === true"
                    type="button"
                    class="red-button"
                    @click="openPopUpContents">
                Bekijken
            </button>

            <div class="progress">
                <div class="bar">
                    <div class="filling" :style="{width: percentage +'%'}"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {bus} from "@/main";

export default {
    name: "ResearchRequest",
    props:['info'],
    data(){
        return{
            time:0,
            isRequested: false,
            resultCollected: false,
            countDown : 4,
            percentage: 0,
        }
    },
    mounted() {
        // this.countDown = this.duration * 100;
    },
    methods:{
        openPopUpContents(event){
            bus.$emit('SHOW_POPUP', {'state':true,'coords':event, 'type':'request', 'request':this.info});
            this.sendAction(this.info.type + ' aangevraagd');
        },
        sendAction(message){
            bus.$emit('SEND_ACTION', {'type': 'intervention', 'message': message});
        },
        countDownTimer(){
            if(this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1
                    this.percentage += 25
                    this.countDownTimer()
                }, 1000)
            }
            if(this.countDown <= 0){
                this.isRequested = false;
                this.resultCollected = true;
            }
        },
        requestResearch(){
            this.countDownTimer();
            this.isRequested = true;
        },
    }
}
</script>

<style lang="scss" scoped>
    .research-request{
        flex: 0 0 calc(50% - 10px);
        position: relative;
        margin-bottom: 50px;
    }

    .tag{
        font-size: 50px;
        border-radius: 50%;
        background-color: #2F4858;
        position: absolute;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        width: 105px;
        height: 105px;
        text-align: center;
        border: 4px solid white;
        cursor: pointer;
        z-index: 2;
        top: 50%;
        transform: translate(0, -50%);

        &:after{
            content: "";
            padding-bottom: 100%;
            display: block;
        }

        svg{
            width: 100%;
            position: absolute;
            margin-top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }
    }

    .request-content{
        position: relative;
        background: #F2F2F2;
        margin-left: 20px;
        padding: 5px 12px 5px 90px;
        border: 4px solid white;
        box-shadow: rgba(47, 72, 88, 8%) 0 2px 8px;
        border-radius: 15px;
        overflow: hidden;

        h4{
            margin-bottom: 5px;
            cursor: pointer;
        }

        .red-button{
            background-color: #F3726A;
            font-weight: bold;
            color: white;
            border: 0;
            padding: 4px 10px;
            border-radius: 25px;
            margin-left: auto;
            font-size: 12px;
            transition: all 0.1s ease-in-out;
            width: 100%;

            &:hover, &:active{
                cursor: pointer;
                background-color: darken(#F3726A, 20%);
            }

            &.disabled{
                pointer-events: none;
                opacity: 0.6;
            }
        }
    }

    .progress{
        background-color: white;
        width: calc(100% + 42px);
        margin-left: -30px;
        margin-top: 8px;
        margin-bottom: -8px;
        padding: 4px;

        .bar{
            padding: 5px;
            border-radius: 25px;
            position: relative;
            background-color: #DFDFDF;
            overflow: hidden;

            .filling{
                background-color: #0051B6;
                position: absolute;
                //width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
        }
    }
</style>