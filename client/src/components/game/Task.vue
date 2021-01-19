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


export default {
    name: 'Task',
    props: ['taskInfo'],
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

        p {
            font-weight: 600;
        }
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
</style>
