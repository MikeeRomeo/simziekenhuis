<template>
  <section class="map">
    <img src="@/assets/map-temporary.png" class="map__image" />
  </section>
</template>

<script>
export default {
  name: "InteractiveMap",
}
</script>

<style lang="scss" scoped>
  .map {
    width: 900px;
    margin: 220px 90px;
    position: absolute;
    top: 0;
  }

  .map__image{
    width: 100%;
  }
</style>