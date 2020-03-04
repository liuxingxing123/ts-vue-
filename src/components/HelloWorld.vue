<template lang="pug">
    .helloWorld 这是helloworld组件 ---父组件传下来的msg{{msg}}
      el-button(icon="el-icon-search" @click="clickHandle") 点我触发父组件事件
      el-color-picker(v-model="color" show-alpha)  
</template>

<script lang="ts">
import { Component, Prop, Vue ,Emit} from 'vue-property-decorator';

@Component({
  name:"helloworld",
})
export default class HelloWorld extends Vue {
  private color:string="red";
  @Prop(String) private msg!: string;

  @Emit("click-fu")
  private clickHandle():string{
    console.log(9999)
    return "给父组件的参数"
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
