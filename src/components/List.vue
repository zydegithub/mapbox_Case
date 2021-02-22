<template>
  <div>{{ data.title }}</div>
  <a-divider style="border-color: #7cb305" dashed />
  <div class="list">
    <a-card
      v-for="demo in data.list"
      :key="demo.name"
      hoverable
      @click="routerTo(demo.name, demo.desc, demo.functionName)"
      style="width: 300px;margin-right:15px"
    >
      <template #cover>
        <img alt="example" :src="demo.image" />
      </template>
      <a-card-meta :title="demo.name">
        <template #description>{{ demo.desc }}</template>
      </a-card-meta>
    </a-card>
  </div>

  <a-divider style="height: 2px; background-color: #7cb305" />
</template>
<script>
export default {
  name: "List",
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  setup() {},
  methods: {
    routerTo(title, desc, functionName) {
      this.$router.push({
        name: "Case",
        params: { title, desc, functionName }
      });
    }
  }
};
</script>
<style>
.list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
