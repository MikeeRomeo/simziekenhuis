<template>
  <div id="app">
    <game-view></game-view>
  </div>
</template>

<script>
import GameView from './components/GameView.vue';

export default {
  name: 'App',
  components: {
    GameView,
  }
}
</script>

<style lang="scss">
@import "scss/app.scss";
</style>
