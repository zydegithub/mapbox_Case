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
      title: "mapbox",
      list: [
        {
          name: "name",
          desc: "描述",
          image:
            "https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/music/%E6%AF%9B%E4%B8%8D%E6%98%93.jpg"
        }
      ]
    });
    return {
      data
    };
  }
};
</script>
