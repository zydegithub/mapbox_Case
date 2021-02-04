<template>
  <div id="map"></div>
</template>
<script>
import mapboxgl from "mapbox-gl";
export default {
  name: "Map",
  methods: {
    initMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiaGFoYXhpYW93YWkiLCJhIjoiY2szZTI4bWh2MWdwYzNucGRlcWgxMWg2aCJ9.ykCKZTiqQWql2XjNsOgTuQ";
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11"
      });
    }
  }
};
</script>
<style scoped>
#map {
  width: 100%;
  height: 100vh;
}
</style>
