<template lang="pug">
  #app
    img(src="./assets/logo.png")
    div
      p |If Element is successfully added to this project, you'll see an<br/>
        |纯文本当然也可以包括 <code>HTML</code> 内容。
      el-row
      el-button(icon="el-icon-search" circle) el-button
    #nav 
      router-link(to="/") Home 
      router-link(to="/about") About 
    router-view
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue'

@Component({
  name:'app',
  components:{
    HelloWorld
  }
})
export default class App extends Vue {
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
