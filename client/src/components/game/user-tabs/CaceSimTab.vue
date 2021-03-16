<template>
    <div>
    <div class="form-row">
        <div class="image">
            <img :src="require('@/assets/images/cases/case_'+ info.id + '_profile.jpg')" />
        </div>
        <div class="description">
            <h1>{{ info.firstName }} {{ info.lastName}}</h1>
            <p class="room">{{ room }}</p>
<!--            <div class="form-input">-->
<!--                <div class="form-row form-header">-->
<!--                    <h4 class="title">Volledige casus:</h4>-->
<!--                </div>-->
<!--                <textarea disabled name="symptoms" v-model="info.caseInfo.long">-->
<!--                </textarea>-->
<!--            </div>-->
        </div>
    </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Volledige casus:</h4>
                </div>
                <textarea class="long" disabled name="symptoms" v-model="info.caseInfo.long">
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Voorgeschiedenis:</h4>
                </div>
                <textarea disabled name="history" v-model="info.patientInfo.history">
                </textarea>
            </div>
        </div>


        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Allergie:</h4>
                </div>
                <textarea disabled name="allergies" v-model="info.patientInfo.allergies">
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Medicatie:</h4>
                </div>
                <textarea disabled name="medication" v-model="info.patientInfo.medication">
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Last meal:</h4>
                </div>
                <textarea disabled name="lastMeal" v-model="info.patientInfo.lastMeal">
                </textarea>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "CaseSimTab",
    props:['info','room', 'index'],
    data(){
        return{

        }
    },
    computed:{

    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/app.scss';

    .image{
        width: 180px;
        height: 180px;
        flex-shrink: 0;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    textarea.long{
        height: 180px;
    }

    .description{
        padding-left: 16px;
        color: $red;
        font-size: 20px;
        width: 100%;
    }

    .room{
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    .edit-button{
        background: none;
        border: 0 solid transparent;
        font-weight: bold;
        font-size: 10px;
        margin-left: auto;
        transition: all 0.15s ease-in-out;

        &:hover, &:active{
            color: $red;
            cursor: pointer;
        }
    }



</style>