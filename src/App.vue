<template>
  <div>
    <a-layout class="main">
      <a-layout-header>
        <a-row>
          <a-col :span="20">
            <!-- 开茶会的树洞 -->
          </a-col>
          <a-col :span="4">
            <a-menu v-model="current" mode="horizontal">
              <a-menu-item key="mail">
                <a-icon type="mail" />MapBox
              </a-menu-item>
            </a-menu>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content>
        <!-- <router-link to="/">Mapbox</router-link> | -->
        <router-view />
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100vh;
}
.main {
  height: 100vh;
  .ant-layout-header {
    background: rgb(240, 242, 245);
    color: rgb(255, 255, 255);
    .ant-menu {
      background: rgb(240, 242, 245);
    }
  }
}
</style>
