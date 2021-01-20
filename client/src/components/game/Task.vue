<template>
    <div class="task">
        <div class="task__header">
            <div class="icon" :class="'task-priority--' + taskInfo.priority">
                <beeper-icon></beeper-icon>
            </div>
            <h3>{{ taskInfo.patient }}</h3>
            <drag-icon class="drag"></drag-icon>
        </div>
        <div class="task__body">
            <p>{{ taskInfo.description }}</p>
            <p>{{ taskInfo.room }}</p>

            <div class="hover-button">
                <button type="button" class="blue-button"
                    @click="openSbarMessage">Bekijken</button>
            </div>
        </div>

        <!--    <div class="task__type">-->
        <!--      <div class="type-bar"></div>-->
        <!--    </div>-->
    </div>
</template>

<script>
import BeeperIcon from '@/assets/icons/pager-solid.svg';
// import PhoneIcon from 'src/assets/icons/phone-solid.svg';
import DragIcon from '@/assets/icons/drag_indicator-24px.svg';
import {bus} from "@/main";


export default {
    name: 'Task',
    props: ['taskInfo'],
    methods:{
        openSbarMessage(){
            bus.$emit('OPEN_SBAR_MESSAGE', true);
        }
    },
    components: {
        BeeperIcon,
        // PhoneIcon,
        DragIcon
    },
}
</script>

<style lang="scss">
@import '@/scss/app.scss';

.task {
    max-width: 290px;
    width: 100%;
    border-radius: $border-radius;
    background: $grey;
    border: 4px solid white;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    .icon {
        width: 60px;
        height: 60px;
        position: absolute;
        border-radius: 50%;
        border: 3px solid white;
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;

        &.task-priority--1 {
            background-color: $red;
        }

        &.task-priority--2 {
            background-color: $orange;
        }

        &.task-priority--3 {
            background-color: $yellow;
        }

        &.task-priority--4 {
            background-color: $green;
        }

        &.task-priority--5 {
            background-color: $blue;
        }

        svg {
            width: 32px;
            margin: 0 auto;
            color: white;
            height: auto;
            max-height: 40px;
        }
    }

    &__header {
        background: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
        position: relative;
        cursor: grab;

        &:active, &:focus{
            cursor: grabbing;
        }

        .drag {
            color: #2F4858;
            opacity: 0.5;
            margin-left: auto;
        }

        h3 {
            margin-left: 75px;
        }
    }

    &__body {
        padding: 10px 10px 10px 80px;
        position: relative;
        height: 100%;

        p {
            font-weight: 600;
        }

        &:hover,&:active{
            .hover-button{
                opacity: 1;
            }
        }
    }

    .hover-button{
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(47,72, 88, 0.4);
        text-align: center;
        transition: opacity 0.3s ease-in-out;
    }

    //&__type{
    //  width: 100%;
    //  padding: 3px;
    //  background-color: white;
    //
    //  .type-bar{
    //    width: calc(100% - 6px);
    //    height: 12px;
    //    background-color: $orange;
    //    border-radius: 15px;
    //  }
    //}
}

.blue-button{
    background-color: #2f4858;
    font-weight: bold;
    color: white;
    border: 0;
    padding: 5px 20px;
    border-radius: 25px;
    margin-left: auto;
    top: 50%;
    transform: translateY(-50%);
    position: relative;
    transition: all 0.1s ease-in-out;

    &:hover, &:active{
        cursor: pointer;
        background-color: darken(#2f4858, 40%);
    }
}
</style>
