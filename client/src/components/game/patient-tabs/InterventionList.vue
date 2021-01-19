<template>
    <div class="list intervention-list">
        <div class="list-header">
            <div class="tag" @click="toggleList()">
                <span>{{ tag }}</span>
            </div>
            <h4 @click="toggleList()">{{ name }}</h4>
            <button class="toggle-down"
                    :class="{'active': active}"
                    @click="toggleList()">
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>
        <div class="list-body" :class="{'active': active}">
            <slot>

            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "InterventionList",
    props:['tag', 'name'],
    data(){
        return{
            active: false,
        }
    },
    methods:{
        toggleList(){
            this.active = !this.active;
        }
    }
}
</script>

<style lang="scss" scoped>
    .intervention-list{
        margin-bottom: 30px;
    }

    .list-header{
        position: relative;

        .tag{
            font-size: 42px;
            border-radius: 50%;
            background-color: #2F4858;
            position: absolute;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            width: 64px;
            border: 4px solid white;
            cursor: pointer;

            &:after{
                content: "";
                padding-bottom: 100%;
                display: block;
            }

            span{
                position: absolute;
                object-fit: cover;
                top: -2px;
                left: 1px;
                width: 100%;
                text-align: center;
            }
        }

        h4{
            padding: 15px 0 0 70px;
            cursor: pointer;
        }

        .toggle-down{
            margin-left: auto;
            border: 0 solid white;
            background: none;
            padding: 4px;
            cursor: pointer;
            position: absolute;
            right: 4px;
            top: 100%;
            transition: transform 0.4s ease-in-out;

            &.active{
                transform: rotate(180deg);
            }
        }
    }

    .list-body{
        background: #F2F2F2;
        margin-left: 20px;
        padding: 20px 12px 0;
        transition: all 0.6s ease-in-out;
        max-height: 0;
        overflow: hidden;

        &.active{
            padding: 36px 12px 12px;
            max-height: 900px;
        }
    }
</style>