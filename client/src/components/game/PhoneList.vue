<template>
    <div class="phone">
        <button type="button" class="button blue-button" @click="openButton">
            <i class="fas fa-phone-alt" ></i>
            Open contactenlijst
        </button>

        <div class="phone-list" :class="{'active' : showList === true}">
            <img src="@/assets/phone_template.png"/>

            <div class="phone-button-wrapper">
                <button type="button" class="button close-button" @click="closeButton">
                    sluiten
                    <i class="fas fa-times"></i>
                </button>

                <button type="button" class="button blue-button" @click="closeButton">
                    <span><i class="fas fa-phone-alt"></i></span>
                    Supervisor
                </button>
                <button type="button" class="button blue-button" @click="closeButton">
                    <span><i class="fas fa-phone-alt"></i></span>
                    Verpleegkunde SEH
                </button>
                <button type="button" class="button blue-button" @click="closeButton">
                    <span><i class="fas fa-phone-alt"></i></span>
                    Verpleegkunde afdeling
                </button>
                <button type="button" class="button blue-button" @click="closeButton">
                    <span><i class="fas fa-phone-alt"></i></span>
                    Radioloog
                </button>
                <button type="button" class="button blue-button" @click="closeButton">
                    <span><i class="fas fa-phone-alt"></i></span>
                    Consulent
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PhoneList",
    data() {
        return {
            showList: false,
        }
    },
    methods: {
        openButton() {
            this.showList = true;
        },
        closeButton() {
            this.showList = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.phone {
    position: fixed;
    bottom: 20px;
    left: 20px;
    height: 30px;

    .blue-button {
        padding: 8px 12px;
        position: relative;
    }
}

.phone-list {
    overflow: hidden;
    width: 325px;
    height: 330px;
    transform: translate(-10px, 20px);
    transition: transform 0.4s ease-in-out;

    &.active{
        transform: translate(-10px, -310px);
    }


    img {
        position: absolute;
        top: 0;
        left: 0;
    }

    .phone-button-wrapper {
        padding: 40px;
        margin-top: 60px;
    }

    .close-button {
        border: 0 solid transparent;
        background: none;
        padding: 4px;
        transition: color 0.15s ease-in-out;
        font-weight: bold;
        display: block;
        position: absolute;
        top: 40px;
        right: 40px;
        cursor: pointer;
    }

    .blue-button {
        border-radius: 5px;
        display: flex;
        align-items: center;
        margin-left: 0;
        margin-bottom: 5px;
        width: 100%;

        span {
            background-color: white;
            width: 25px;
            position: relative;
            border-radius: 50%;
            display: inline-block;
            height: 25px;
            color: #2f4858;
            margin-right: 8px;

            svg {
                position: absolute;
                top: 5px;
                left: 6px;
            }

            &:after {
                content: "";
                display: block;
                padding-bottom: 100%;
            }
        }

    }
}
</style>