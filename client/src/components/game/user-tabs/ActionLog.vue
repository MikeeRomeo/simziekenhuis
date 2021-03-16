<template>
    <div class="action-log">
        <div class="message" v-for="log in sortedByUser">
            {{ log.message }}
<!--            <span v-if="log.type === 'intervention'"> is toegepast</span>-->
        </div>
    </div>
</template>

<script>
import ResearchRequest from "@/components/game/patient-tabs/ResearchRequest";
import {mapGetters} from 'vuex';

export default {
    name: "ActionLog",
    props: ['selectedUser'],
    mounted() {
    },
    computed: {
        ...mapGetters(['userLogs']),

        sortedByUser() {
            return this.userLogs.filter(log => log.user === this.selectedUser);
        }
    },
    components: {
        ResearchRequest,
    },
}
</script>

<style lang="scss" scoped>
.action-log {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.message {
    font-size: 12px;
    padding: 8px 15px;
    font-weight: 600;
    color: #2F4858;
    border-radius: 50px;
    background: white;
    margin-bottom: 8px;
    box-shadow: rgba(47, 72, 88, 8%) 0 2px 8px;
}
</style>