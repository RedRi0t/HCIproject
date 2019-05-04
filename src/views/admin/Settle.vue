<template>
    <el-col span="24">
        <br>
        <el-row>
            尊敬的管理员，当前滞留金额为 {{money}} RMB, 点击以下按钮，您可以一键发放该资金。
        </el-row>
        <br>
        <el-button
                size="mini"
                type="danger"
                @click="handleGive">一键发放</el-button>

    </el-col>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default  class Settle extends Vue{
        money:number=0;
        mounted(){
            axios.get('http://localhost:3142/admin/total/1').then((response)=>{
                let data:any=response.data;
                this.money=data.total;
            })
        }
        private handleGive(){
            axios.post('http://localhost:3142/admin/total/',{
                username:"admin",
                password:"123",
            }).then((response)=>{
                alert("发放成功")
                this.money=0;
            })
        }
    }
</script>

<style scoped>

</style>