<template>
    <div class="action-log">
        <div class="message" v-for="log in sortedByUser">
            {{ log }}
        </div>
    </div>
</template>

<script>
import ResearchRequest from "@/components/game/patient-tabs/ResearchRequest";
import {mapGetters} from 'vuex';

export default {
    name: "ActionLog",
    props:['selectedUser'],
    mounted() {
    },
    computed:{
        ...mapGetters(['userLogs']),

        sortedByUser(){
            return this.userLogs.filter(log => log.user === this.selectedUser);
        }
    },
    components:{
        ResearchRequest,
    },
}
</script>

<style lang="scss" scoped>
    .action-log{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>