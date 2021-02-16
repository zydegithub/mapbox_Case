<template>
  <a-row>
    <a-col :span="20"
      ><a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        :title="title"
        :sub-title="desc"
        @back="() => $router.go(-1)"
    /></a-col>
    <a-col :span="4" class="menu"
      ><a-button @click="showDrawer" type="primary">代码</a-button></a-col
    >
  </a-row>
  <div id="map">
    <a-drawer
      :title="title"
      placement="right"
      :closable="false"
      :visible="visible"
      width="50%"
      :get-container="false"
      :wrap-style="{ position: 'absolute' }"
      @close="onClose"
    >
      <pre>{{ code }}</pre>
    </a-drawer>
  </div>
</template>
<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import sMap from "@/js/index.js";

import { ref } from "vue";
export default {
  name: "Map",
  setup() {
    const title = ref(null);
    const code = ref(null);
    const desc = ref(null);
    const visible = ref(false);
    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
    return {
      code,
      title,
      desc,
      visible,
      showDrawer,
      onClose
    };
  },
  methods: {
    routerTo() {
      this.$router.push("/case");
    },
    initMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiaGFoYXhpYW93YWkiLCJhIjoiY2szZTI4bWh2MWdwYzNucGRlcWgxMWg2aCJ9.ykCKZTiqQWql2XjNsOgTuQ";
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11"
      });
      this.title = this.$route.params.title || "示例";
      this.desc = this.$route.params.desc || null;

      this.map.on("load", () => {
        this.code = sMap["addPoint"];
        console.log(sMap["addPoint"](this.map));
      });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>
<style>
#map {
  width: 100%;
  height: 80vh;
}
.menu {
  padding-top: 19px;
  padding-left: 8px;
}
</style>
