<template>
  <div>{{ data.title }}</div>
  <a-divider style="border-color: #7cb305" dashed />
  <a-card
    v-for="demo in data.list"
    :key="demo.name"
    hoverable
    @click="routerTo(demo.name, demo.desc)"
    style="width: 300px"
  >
    <template #cover>
      <img alt="example" :src="demo.image" />
    </template>
    <a-card-meta :title="demo.name">
      <template #description>{{ demo.desc }}</template>
    </a-card-meta>
  </a-card>
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
    routerTo(title, desc) {
      this.$router.push({ name: "Case", params: { title, desc } });
    }
  }
};
</script>
<style lang=""></style>
