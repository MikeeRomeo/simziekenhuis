<template>
    <div class="request-list">
        <research-request v-for="request in info.researchRequests"
                          :info="request"
                            :key="request.type"></research-request>
    </div>
</template>

<script>
import ResearchRequest from "@/components/game/patient-tabs/ResearchRequest";

export default {
    name: "ResearchTab",
    props:['info'],
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