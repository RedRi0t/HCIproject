<template>
    <el-col span="24">
        <br/>
        <el-row>
            <el-col align="center">
                <el-card style="width: 500px">
                    <div slot="header">
                        <span>当前信息</span>
                    </div>
                    当前订餐总数： {{dto1.bookNum}} <br/>
                    当前退订总数： {{dto1.unBookNum}} <br/>
                    当前消费总金额： {{dto1.totalPrice}} <br/>
                </el-card>
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col span="8"><br/></el-col>
            <el-col span="8">
                <br/>
                <div>
                    详细订单查询
                </div>
                <br/>
                <el-form label-width="80px">
                    <el-form-item label="时间">
                        <el-select v-model="time" placeholder="请选择时间" >
                            <el-option
                                    v-for="item in timeSelection"
                                    :key="item.time"
                                    :label="item.time"
                                    :value="item.time" >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="金额范围">
                        <el-col span="11">
                            <el-input v-model="min" ></el-input>
                        </el-col>
                        <el-col span="2"> - </el-col>
                        <el-col span="11">
                            <el-input v-model="max" ></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="餐厅编号">
                        <el-input v-model="sname" ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="searchBill">搜索</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>


        <el-row><br></el-row>
        <el-table
                :data="bills5"
                height="200"
                stripe="true"
                align="center"
                style="width: 100%">
            <el-table-column
                    prop="bid"
                    label="订单编号"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="sid"
                    label="用户编号"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="totalPrice"
                    label="折扣前总价"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="actualPrice"
                    label="折扣后总价"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="下单时间"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="收货地址"
                    width="200">
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
    export default class UserStatistics extends Vue {
        dto1:UserStatisticsBasicDto=new UserStatisticsBasicDto();
        defaultUser:string=getCookie('emailAddress');
        timeSelection:TimeSelection[]=[];
        time:string="";
        bills5:UserBillStatisticsDto[]=[];
        min:number=0;
        max:number=0;
        sname:string="";
        mounted(){
            axios.get('http://localhost:3142/user/statistics/basic/'+this.defaultUser).then((response)=>{
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
            axios.post("http://localhost:3142/user/statistics/bill",{
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