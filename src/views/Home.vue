<template>
  <div class="home">
    <List :data="base"></List>
    <List :data="point"></List>
    <List :data="line"></List>
    <List :data="polygon"></List>
    <List :data="extrusion"></List>
    <List :data="label"></List>
    <List :data="interactive"></List>
    <List :data="extendRender"></List>
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    List
  },
  setup() {
    const base = ref({
      title: "基础",
      list: [
        {
          name: "点-线-面",
          desc: "基础点线面",
          functionName: "addBase",
          image:
            "https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/mapbox_Case/icon/addBase.png"
        },
        {
          name: "体块",
          desc: "有高度的面",
          functionName: "addFillExtrusion",
          image:
            "https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/mapbox_Case/icon/addBase.png"
        },
        {
          name: "圆",
          desc: "永远在屏幕上保持圆形，不会随着倾角变化而变化",
          functionName: "addCircle",
          image:
            "https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/mapbox_Case/icon/addBase.png"
        },
        {
          name: "热力图",
          desc: "mapbox自身提供的二维热力图功能",
          functionName: "addHeatMap",
          image:
            "https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/mapbox_Case/icon/addBase.png"
        },
        {
          name: "天空",
          desc: "天空图层",
          functionName: "addSky",
          image:
            "https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/mapbox_Case/icon/addBase.png"
        }
      ]
    });
    const point = ref({
      title: "点",
      list: []
    });
    const label = ref({
      title: "注记",
      list: []
    });
    const line = ref({
      title: "线",
      list: []
    });
    const polygon = ref({
      title: "面",
      list: []
    });
    const extrusion = ref({
      title: "体块",
      list: []
    });
    const interactive = ref({
      title: "交互与事件",
      list: []
    });
    const extendRender = ref({
      title: "扩展",
      list: []
    });

    return {
      base,
      point,
      label,
      line,
      polygon,
      extrusion,
      interactive,
      extendRender
    };
  }
};
</script>
