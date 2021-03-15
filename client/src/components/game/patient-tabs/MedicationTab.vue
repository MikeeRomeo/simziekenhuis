<template>
    <div>
        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Primary survey:</h4>
                </div>
                <textarea name="primarySurvey" v-model="primarySurvey" class="diagnose">
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Secondary survey:</h4>
                </div>
                <textarea name="secondarySurvey" v-model="secondarySurvey" class="diagnose">
                </textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MedicationTab",
    props:['index'],
    computed:{
        primarySurvey:{
            get(){
                return this.$store.state.patientFiles.cases[this.index].primarySurvey;
            },
            set(value){
                this.$store.commit('updatePrimary', {"contents":value, "index":this.index})
            }
        },
        secondarySurvey:{
            get(){
                return this.$store.state.patientFiles.cases[this.index].secondarySurvey;
            },
            set(value){
                this.$store.commit('updateSecondary', {"contents":value, "index":this.index})
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    .diagnose{
        height: 300px;
    }
</style>