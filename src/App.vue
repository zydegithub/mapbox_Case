<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item @click="routerTo" key="1">MapBox</a-menu-item>
        <!-- <a-menu-item key="2">Cesium</a-menu-item> -->
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      开茶会的树洞 ©2021 Created by HHXY
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { ref } from "vue";
// import Home from "./views/Home.vue";
export default {
  // components: { Home },
  setup() {
    return {
      selectedKeys: ref(["1"])
    };
  },
  methods: {
    routerTo() {
      this.$router.push("/");
    }
  }
};
</script>
<style>
.layout {
}
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme="dark"] .site-layout-content {
  background: #141414;
}
</style>
