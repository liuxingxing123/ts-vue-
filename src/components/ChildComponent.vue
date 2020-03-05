<template lang='pug'>
    .childComponent
        p 获取从父组件传进来的值 ---{{propTitle}}
        el-button(@click="childClickandle") 触发父元素在子组件上绑定的事件
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit } from "vue-property-decorator"
@Component({
    name: "childComponent",
    components: {}
})
export default class ChildComponent extends Vue {
    @Prop({ type: String, default: "如果不传  这是默认参数" })
    public propTitle!: string

    @Emit("clickHandleProp")
    public childClickandle(): string {
        console.log(this.propTitle)
        return "这是触发事件之后传过去的参数"
    }
}
</script>

<style lang='sass' scoped>

</style>