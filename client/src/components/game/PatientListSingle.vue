<template>
    <div class="patient-list-item" @click="openPatientDoc">
        <div class="image">
            <img :src="require('@/assets/images/cases/case_'+ taskInfo.id + '_profile.jpg')" />
        </div>
        <div class="content">
            <h4>{{ taskInfo.firstName }} {{ taskInfo.lastName }}</h4>
            <p>{{patientRoom}}</p>
        </div>
    </div>
</template>

<script>
import { bus } from "@/main";

export default {
    name: "PatientListSingle",
    props:['taskInfo', 'patientRoom'],
    methods:{
        openPatientDoc(){
            bus.$emit('OPEN_DOC', {'show': true, 'caseId': this.taskInfo.id});
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/app.scss';

    .patient-list-item{
        display: flex;
        flex-direction: row;
        position: relative;
        cursor: pointer;
        margin-bottom: 25px;

        .image{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 4px solid white;
            overflow: hidden;
            position: absolute;
            top: calc(50% - 35px);
            left: -20px;
            transition: all 0.2s ease-in-out;

            img{
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        .content{
            background-color: white;
            padding: 10px 20px 10px 60px;
            transition: all 0.15s ease-in-out;

            h4{
                color: $red;
                margin: 0;
                font-size: 16px;
            }

            p{
                font-size: 12px;
                margin: 0;
                font-weight: bold;
            }
        }

        &:hover, &:active{
            //.content{
            //    padding-right: 26px;
            //}

            .image{
                transform: scale(1.07);
            }
        }
    }
</style>