<template lang="pug">
  .home
    HelloWorld(msg="Welcome to Your Vue.js App" @click-fu="clickHandle") {{homeVar}} 
    p {{fullName}}---{{firstName}}
    p|{{testMsg}}
      
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import { State, Action, Getter, Mutation, namespace } from "vuex-class";
import TYPES from "@/store/user/mutations-types";
const userModule = namespace("user");
@Component({
  name: "home",
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  @userModule.Action("fetchData") public fetchData!: Function;
  @userModule.Mutation(TYPES.CHANGE_MOBILE) public changeMobile!: Function;
  @userModule.Getter("fullName") public fullName!: string;
  @userModule.State("firstName") public firstName!: string;
  @userModule.State("mobile") public mobile!: string;
  @userModule.State("testMsg") public testMsg!: string;
  public created() {
    this.fetchData();
    this.changeMobile("123456");
  }
  public homeVar: string = "用类编写vue组件的data数据显示";

  public clickHandle(msg: string): void {
    console.log("触发了事件  控制台查看效果", msg);
  }
}
</script>
