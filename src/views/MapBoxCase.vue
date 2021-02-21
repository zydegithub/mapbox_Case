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
      <pre v-highlightjs><code class="javascript">{{code}}</code></pre>
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
        style: "mapbox://styles/mapbox/streets-v11",
        center: [116.39104843139647, 39.912287369097186],
        zoom: 15
      });
      this.title = this.$route.params.title || "示例";
      this.desc = this.$route.params.desc || null;
      this.functionName = this.$route.params.functionName || null;

      this.map.on("load", () => {
        if (!this.functionName) {
          new Error("未传函数");
        }
        this.code = sMap[this.functionName];
        sMap[this.functionName](this.map);
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
  padding: 19px;
  padding-left: 8px;
}
.ant-drawer-body {
  padding: 0px 24px;
}
.hljs {
  background: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}
.hljs-attr {
  color: rgb(156, 220, 254);
}
.hljs-keyword {
  color: rgb(86, 156, 203);
}
.hljs-string {
  color: rgb(206, 145, 120);
}
.hljs-number {
  color: rgb(181, 206, 155);
}
.hljs-comment {
  color: rgb(106, 153, 85);
}
.hljs-title {
  color: rgb(220, 205, 121);
}
</style>
