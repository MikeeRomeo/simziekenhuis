<template>
    <div class="cursor" :style="{ left: this.contents.coords.x + 'px', top: this.contents.coords.y + 'px' }">
    </div>
</template>

<script>
    export default {
        name: "PlayerSingle",
        props:['contents'],
        data() {
            return {

            }
        },
        mounted() {
            console.log('individuele: sheeeet')
            console.log(this.contents.coords);
        },
        methods: { 
            
        }
    };
</script>

<style scoped>
    .cursor{
        width: 8px;
        height: 8px;
        position: absolute;
        background: red;
    }
</style>
