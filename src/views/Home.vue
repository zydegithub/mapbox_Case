<template>
  <div class="home">
    <List :data="data"></List>
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
    const data = ref({
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
        }
      ]
    });
    return {
      data
    };
  }
};
</script>
