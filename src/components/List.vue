<template>
  <div>
    <h4>{{ data.title }}</h4>
    <div v-for="demo in data.list" :key="demo.name">
      <img src="../assets/logo.png" class="demoImg" alt="" />
      <p class="demoP">demo.name</p>
    </div>
  </div>
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
  setup(props) {
    console.log(props);
  }
};
</script>
<style lang=""></style>
