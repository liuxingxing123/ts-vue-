<template lang="pug">
  .about
    h1 This is an about page
    el-row
      el-button(icon="el-icon-search" circle) 哈哈哈啊
      el-button(type="primary" icon="el-icon-edit" circle) 哈哈哈啊
      el-link(type="primary") 主要链接{{fullName}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Action, Mutation, Getter, State } from "vuex-class"
import TYPES from "@/store/user/mutations-types"

const namespace = "user"
@Component({
    name: "about"
})
export default class About extends Vue {
    @Action("fetchData", { namespace }) public fetchData!: Function
    @Mutation(TYPES.CHANGE_MOBILE, { namespace }) public changeMobile!: Function
    @Getter("fullName", { namespace }) public fullName!: string
    @State("firstName", { namespace }) public firstName!: string
    @State("mobile", { namespace }) public mobile!: string

    public created() {
        this.fetchData()
        this.changeMobile("123456")
    }
}
</script>
