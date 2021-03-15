<template>
    <div>
    <div class="form-row">
        <div class="image">
            <img :src="require('@/assets/images/cases/case_'+ info.id + '_profile.jpg')" />
        </div>
        <div class="description">
            <h1>{{ info.firstName }} {{ info.lastName}}</h1>
            <p class="room">{{ room }}</p>
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Klachten:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="symptoms" v-model="symptoms">
                </textarea>
            </div>
        </div>
    </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Voorgeschiedenis:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="history" v-model="history">
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Allergie:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="allergies" v-model="allergies">
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Medicatie:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="medication" v-model="medication">
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Last meal:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="lastMeal" v-model="lastMeal">
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Overige Notities:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="notes" v-model="notes">
                </textarea>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex';

export default {
    name: "InfoTab",
    props:['info','room', 'index'],
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['patientFiles']),
        symptoms:{
            get(){
                return this.$store.state.patientFiles.cases[this.index].symptoms;
            },
            set(value){
                this.$store.commit('updateSymptoms', {"contents":value, "index":this.index})
            }
        },
        history:{
            get(){
                return this.$store.state.patientFiles.cases[this.index].history;
            },
            set(value){
                this.$store.commit('updateHistory', {"contents":value, "index":this.index})
            }
        },
        allergies:{
            get(){
                return this.$store.state.patientFiles.cases[this.index].allergies;
            },
            set(value){
                this.$store.commit('updateAllergies', {"contents":value, "index":this.index})
            }
        },
        medication:{
            get(){
                return this.$store.state.patientFiles.cases[this.index].medication;
            },
            set(value){
                this.$store.commit('updateMedication', {"contents":value, "index":this.index})
            }
        },
        lastMeal:{
            get(){
                return this.$store.state.patientFiles.cases[this.index].lastMeal;
            },
            set(value){
                this.$store.commit('updateLastMeal', {"contents":value, "index":this.index})
            }
        },
        notes:{
            get(){
                return this.$store.state.patientFiles.cases[this.index].notes;
            },
            set(value){
                this.$store.commit('updateNotes', {"contents":value, "index":this.index})
            }
        },
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