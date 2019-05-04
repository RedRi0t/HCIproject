<template>
    <el-col span="24">
        <el-row>
            未支付订单
        </el-row>
        <el-table
                :data="bills1"
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
                    label="商家编号"
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
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handlePay(scope.$index, scope.row)">支付</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleCancel(scope.$index, scope.row)">取消</el-button>

                </template>
            </el-table-column>
        </el-table>
        <el-row><br></el-row>
        <el-row>
            已支付订单
        </el-row>
        <el-table
                :data="bills2"
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
                    label="商家编号"
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
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handlePayBack(scope.$index, scope.row)">申请退款</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row><br></el-row>
        <el-row>
            已退款订单
        </el-row>
        <el-table
                :data="bills3"
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
                    label="商家编号"
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
        </el-table>
        <el-row><br></el-row>
        <el-row>
            已取消订单
        </el-row>
        <el-table
                :data="bills4"
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
                    label="商家编号"
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
        </el-table>
        <el-row><br></el-row>

        <el-row>
            已配送订单
        </el-row>
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
                    label="商家编号"
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
        </el-table>
        <el-row><br></el-row>

        <el-row>
            历史订单
        </el-row>
        <el-table
                :data="bills6"
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
                    label="商家编号"
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
        </el-table>
        <el-row><br></el-row>
    </el-col>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'
    import {GoodDto} from "../seller/GoodDto";

    @Component({})
    export default class UserBill extends Vue {

        bills1:UserBillDto[]=[];
        bills2:UserBillDto[]=[];
        bills3:UserBillDto[]=[];
        bills4:UserBillDto[]=[];
        bills5:UserBillDto[]=[];
        bills6:UserBillDto[]=[];
        defaultUser:string=getCookie('emailAddress');

        mounted(){
            axios.get('http://localhost:3142/good/type/'+this.defaultUser).then((response)=>{
                let bill_get_res:any=response.data;
                this.bills1=bill_get_res.bills1;
                this.bills2=bill_get_res.bills2;
                this.bills3=bill_get_res.bills3;
                this.bills4=bill_get_res.bills4;
                this.bills5=bill_get_res.bills5;
                this.bills6=bill_get_res.bills6;
            });
        }

        private handlePay(index:number,row:string){
            setCookie('bid',this.bills1[index].bid,1000*60);
            this.$router.push("/pay")
        }

        private handleCancel(index:number,row:string){

            axios.delete('http://localhost:3142/good/cancel/'+this.bills1[index].bid).then((response)=>{
                alert("取消成功！");
                let temp_dto:UserBillDto=this.bills1[index];
                this.bills4.push(temp_dto);
                this.bills1.splice(index,1);

            })

        }

        private handlePayBack(index:number,row:string){
            alert("正在退款！");
            axios.delete('http://localhost:3142/good/type/'+this.bills2[index].bid).then((response)=>{
                alert("退款成功！");
                let temp_dto:UserBillDto=this.bills2[index];
                this.bills3.push(temp_dto);
                this.bills2.splice(index,1);

            })

        }
    }

    class UserBillDto{
        bid:string;
        sid:string;
        actualPrice:number;
        totalPrice:number;
        time:string;
    }

</script>

<style scoped>

</style>