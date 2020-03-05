<template lang='pug'>
    .faxian
        el-button(@click="addCountHandle") 点击+1  <strong>{{count}}</strong>
        el-button(@click="clickShowMsgHandle") 点击我可以显示信息  
        p {{faxianMsg}}
        el-alert(:title="getFaxianTitle" type="success")
        ChildComponent( :propTitle="faxianMsg" @clickHandleProp="clickHandleAlert")
</template>

<script lang='ts'>
import { Component, Vue, Emit } from "vue-property-decorator"
import { State, Action, Getter, Mutation, namespace } from "vuex-class"
import TYPES from "@/store/faxian/mutations-types"
import ChildComponent from "@/components/ChildComponent.vue"
const faxianModule = namespace("faxian")
@Component({
    name: "faxian",
    components: { ChildComponent }
})
export default class Faxian extends Vue {
    @faxianModule.State("count") public count!: number
    @faxianModule.State("faxianMsg") public faxianMsg!: string
    @faxianModule.Getter("getFaxianTitle") public getFaxianTitle!: string
    @faxianModule.Mutation(TYPES.ADD_COUNT) public addCount!: Function
    @faxianModule.Action("getFaxianMsgData") public getFaxianMsgData!: Function
    public addCountHandle(): void {
        this.addCount()
    }

    public clickShowMsgHandle() {
        this.getFaxianMsgData()
    }

    public clickHandleAlert(msg: string, $event: MouseEvent): void {
        alert(`触发了父组件上的事件 信息是:${msg}"`)
        console.log($event)
    }
}
</script>

<style lang='sass' scoped>

</style>