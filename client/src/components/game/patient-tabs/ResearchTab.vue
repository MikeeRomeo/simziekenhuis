<template>
    <div class="request-list">
        <research-request :name="'ECG'" :icon="'fas fa-heartbeat'" :duration="5"></research-request>
        <research-request :name="'Lab'" :icon="'fas fa-flask'" :duration="15"></research-request>
        <research-request :name="'X-thorax'" :icon="'fas fa-x-ray'" :duration="10"></research-request>
    </div>
</template>

<script>
import ResearchRequest from "@/components/game/patient-tabs/ResearchRequest";

export default {
    name: "ResearchTab",
    components:{
        ResearchRequest,
    },
}
</script>

<style lang="scss" scoped>
    .request-list{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>