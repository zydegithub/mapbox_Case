import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import { Layout, Menu, Col, Row } from "ant-design-vue";
createApp(App)
  .use(store)
  .use(router)
  .use(Menu)
  .use(Col)
  .use(Row)
  .use(Layout)
  .mount("#app");
// app.config.productionTip = false;
// app.use(Button);
// app.component(Layout.name, Layout);
// app.component(Base.name, Base);
