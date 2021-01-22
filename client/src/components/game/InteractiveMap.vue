<template>
    <section class="map">
        <img src="@/assets/map-temporary.png" class="map__image"/>
        <div class="map-icon-wrapper">
            <div class="patient-icon"
                 v-for="patient in patients"
                 :key="patient.name"
                 :class="'room-' + patient.room"
                 @click="viewPatient($event, patient)">
                <img :src="require(`@/assets/${patient.img}`)" alt="">
            </div>
        </div>
    </section>
</template>

<script>
import {bus} from "@/main";

export default {
    name: "InteractiveMap",
    data() {
        return {
            patients: {
                verhaag: {
                    name: 'Mvr. Verhaag',
                    room: 1,
                    img: 'test-profielfoto.jpg',
                }
            }
        }
    },
    methods:{
        viewPatient(event, patient){
            bus.$emit('SHOW_PATIENT_VIEW', {'state':true, 'coords':event, 'patient':patient});
        }
    },

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
    }
}
</style>