import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/solarized-light.css";
import {
  Layout,
  Menu,
  Col,
  Row,
  Breadcrumb,
  Card,
  Divider,
  Drawer,
  Button,
  PageHeader
} from "ant-design-vue";
createApp(App)
  .use(store)
  .use(router)
  .use(Menu)
  .use(Col)
  .use(Row)
  .use(Divider)
  .use(Layout)
  .use(Card)
  .use(PageHeader)
  .use(Breadcrumb)
  .use(Drawer)
  .use(Button)
  .use(VueHighlightJS)
  .mount("#app");
// app.config.productionTip = false;
// app.use(Button);
// app.component(Layout.name, Layout);
// app.component(Base.name, Base);
