<template>
  <div>
    <h4>{{data.title}}</h4><ul class='change'>
      <div v-for="demo in data.list" :key="demo.name">
        <a href="http://localhost:5555/Examples/${demo.value}.html">
        <img src="./images/${demo.value}.jpg" class="demoImg" alt="" />
        <p class="demoP">${demo.name}</p></a>
      </div>
  </div>
</template>
<script>
export default {
  name:"List",
  props:{
    data:{
      title:'功能',
      list:[
        {
          name: 'name',
        }
      ]
    }
  },
  setup(props) {
   console.log(props) 
  }
}
</script>
<style lang="">
  
</style>