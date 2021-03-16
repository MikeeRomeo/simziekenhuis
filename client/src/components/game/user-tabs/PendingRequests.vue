<template>
    <div class="request-list">
        Komt nog
    </div>
</template>

<script>
import ResearchRequest from "@/components/game/patient-tabs/ResearchRequest";

export default {
    name: "PendingRequests",
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