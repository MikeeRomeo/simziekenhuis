<template>
    <section class="map">
        <img src="@/assets/map-temporary.png" class="map__image"/>
        <div class="map-icon-wrapper">
            <div class="patient-icon"
                 v-for="patient in sortedTasks"
                 :key="patient.name"
                 :class="'room-' + patient.caseId"
                 @click="viewPatient($event, patient)">
                <img :src="require('@/assets/images/cases/case_'+ patient.caseId + '_profile.jpg')" />
            </div>
        </div>
    </section>
</template>

<script>
import {bus} from "@/main";

export default {
    name: "InteractiveMap",
    props:['tasks','userRole'],
    data() {
        return {

        }
    },
    methods:{
        viewPatient(event, patient){
            bus.$emit('SHOW_PATIENT_VIEW', {'state':true, 'coords':event, 'patient':patient});
        }
    },
    computed:{
        sortedTasks() {
            if(this.userRole === 'supervisor'){
                return this.tasks.filter(task => task.type === 'case')
            }
            if(this.userRole === 'patient_1'){
                return this.tasks.filter(task => task.caseId === 1);
            }
            if(this.userRole === 'patient_2'){
                return this.tasks.filter(task => task.caseId === 2);
            }
            else{
                return this.tasks.filter(task => task.assignedTo === this.userRole && task.type === 'case')
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.map {
    width: 900px;
    margin: 220px 90px;
    position: absolute;
    top: 0;
}

.map__image {
    width: 100%;
}

.map-icon-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .patient-icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: rgba(47, 72, 88, 18%) 2px 4px 4px;
        overflow: hidden;
        position: absolute;
        cursor: pointer;
        transition: all 0.15s ease-in-out;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        &:hover, &:active{
            transform: translateY(-8px) scale(1.05);
            box-shadow: rgba(47, 72, 88, 18%) 2px 10px 4px;
        }

        &.room-1{
            top: 66%;
            left: 47%;
        }

        &.room-2{
            top: 65%;
            left: 22%;
        }
    }
}
</style>