<template>
    <el-col span="24">

        <el-row><br></el-row>
        <el-row>
            当前普通用户总数：{{dto.userNum-dto.sellerNum}}
        </el-row>
        <el-row><br></el-row>
        <el-row>
            当前商家用户总数：{{dto.sellerNum}}
        </el-row>
        <el-row><br></el-row>
        <el-row>
            当前平台流水金额：{{dto.totalPrice}}
        </el-row>
        <el-row><br></el-row>

    </el-col>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, deleteCookie,setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class AdminStatistics extends Vue{
        dto:AdminStatisticsDto=new AdminStatisticsDto();
        mounted(){
            axios.get('http://localhost:3142/admin/statistics/1').then((response)=>{
                this.dto=response.data;
            })
        }
    }

    class AdminStatisticsDto{
        userNum:number;
        sellerNum:number;
        totalPrice:number;
    }
</script>

<style scoped>

</style>