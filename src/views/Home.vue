<template>
  <div class="home">
    <List :data="data"></List>
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List.vue";

export default {
  name: "Home",
  components: {
    List
  },
  setup() {
    const data = {
      title: "mapbox",
      list: [
        {
          name: "name"
        }
      ]
    };
    return {
      data
    };
  }
};
</script>
