<template>
    <el-col span="24">
        <p>商家统计信息</p>
        <el-row>
            当前订餐总数： {{dto1.bookNum}} &nbsp &nbsp
            当前退订总数： {{dto1.unBookNum}} &nbsp &nbsp
            当前盈利总金额： {{dto1.totalPrice}} &nbsp &nbsp
        </el-row>
        <el-row><br></el-row>
        <el-row>
            详细订单查询：请选择时间：&nbsp
            <el-select v-model="time" placeholder="请选择时间" style="width: 400px" >
                <el-option
                        v-for="item in timeSelection"
                        :key="item.time"
                        :label="item.time"
                        :value="item.time" >
                </el-option>

            </el-select>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            请输入金额范围：
            <el-input v-model="min" size="small" style="width:100px;height:1px" >

            </el-input>
            <el-input v-model="max" size="small" style="width: 100px;height:1px" >

            </el-input>

            &nbsp&nbsp 请输入用户邮箱：&nbsp
            <el-input v-model="sname" size="small" style="width: 200px;height:1px" >

            </el-input>
            <el-button
                    size="mini"
                    type="success"
                    @click="searchBill">搜索</el-button>
        </el-row>
        <el-row><br></el-row>


        <el-row><br></el-row>
        <el-table
                :data="bills5"
                height="200"
                border
                style="width: 100%">
            <el-table-column
                    prop="bid"
                    label="订单编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="sid"
                    label="用户编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="totalPrice"
                    label="折扣前总价"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="actualPrice"
                    label="折扣后总价"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="下单时间"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="收货地址"
                    width="180">
            </el-table-column>

        </el-table>
        <el-row><br></el-row>


    </el-col>
</template>

<script lang="ts">

    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, deleteCookie,setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class SellerStatistics extends Vue {
        dto1:UserStatisticsBasicDto=new UserStatisticsBasicDto();
        defaultUser:string=getCookie('emailAddress');
        timeSelection:TimeSelection[]=[];
        time:string="";
        bills5:UserBillStatisticsDto[]=[];
        min:number=0;
        max:number=0;
        sname:string="";
        mounted(){
            axios.get('http://localhost:3142/seller/statistics/basic/'+this.defaultUser).then((response)=>{
                this.dto1=response.data;
            })
            let timeSelection1:TimeSelection=new TimeSelection();
            let timeSelection2:TimeSelection=new TimeSelection();
            timeSelection1.time="一周内";
            timeSelection2.time="一个月内";
            this.timeSelection.push(timeSelection1);
            this.timeSelection.push(timeSelection2);
        }
        private searchBill(){
            axios.post("http://localhost:3142/seller/statistics/bill",{
                id:this.defaultUser,
                min:this.min,
                max:this.max,
                name:this.sname
            }).then((response)=>{
                this.bills5=response.data;
            })
        }
    }

    class UserStatisticsBasicDto{
        bookNum:number=0;
        unBookNum:number=0;
        totalPrice:number=0;
    }

    class UserBillStatisticsDto{
        bid:string;
        sid:string;
        actualPrice:number;
        totalPrice:number;
        time:string;
        address:string;

    }

    class TimeSelection{
        time;
    }


</script>

<style scoped>

</style>