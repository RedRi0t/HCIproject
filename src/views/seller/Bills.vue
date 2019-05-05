<template>
    <el-col span="24">
    <el-row>
        待发货订单
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
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleSend(scope.$index, scope.row)">发货</el-button>
            </template>
        </el-table-column>
    </el-table>
        <el-row><br></el-row>
        <el-row>
            已发货订单
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
        <el-row>
            已结算订单
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
    </el-col>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class Bills extends Vue {
        bills4:BillsDto[]=[];
        bills5:BillsDto[]=[];
        bills6:BillsDto[]=[];
        defaultUser:string=getCookie('emailAddress');
        mounted(){
            axios.post('http://localhost:3142/seller/bill/',{
                uid:this.defaultUser,
                type:1
            }).then((response)=>{
                this.bills4=response.data;
            });
            axios.post('http://localhost:3142/seller/bill/',{
                uid:this.defaultUser,
                type:4
            }).then((response)=>{
                this.bills5=response.data;
            });
            axios.post('http://localhost:3142/seller/bill/',{
                uid:this.defaultUser,
                type:5
            }).then((response)=>{
                this.bills6=response.data;
            });

        }

        private handleSend(index:number,row:string){
            alert(index);
            axios.get('http://localhost:3142/seller/send/'+this.bills4[index].bid).then((response)=>{
                alert("发货成功！");
                let bill:BillsDto=this.bills4[index];
                this.bills5.push(bill);
                this.bills4.splice(index,1);
            })
        }
    }

    class BillsDto{
        bid:string;
        sid:string;
        actualPrice:number;
        totalPrice:number;
        time:string;
        address:string;
    }
</script>

<style scoped>

</style>