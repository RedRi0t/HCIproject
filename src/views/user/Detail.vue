<template>
    <el-col span="24">
    <p>商家详情</p>
    <el-row><br></el-row>
    <el-table
            :data="goods"
            height="300"
            border
            style="width: 100%">
        <el-table-column
                prop="sid"
                label="商家编号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="gid"
                label="商品号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="名称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="number"
                label="剩余数量"
                width="180">
        </el-table-column>
        <el-table-column
                prop="price"
                label="单价"
                width="180">
        </el-table-column>
        <el-table-column
                prop="description"
                label="描述"
                width="300">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="danger"
                        @click="buyGood(scope.$index, scope.row)">购买商品</el-button>
            </template>
        </el-table-column>
    </el-table>
        <p>以下是用户套餐列表</p>
        <el-row><br></el-row>
        <el-table
                :data="infos"
                height="180"
                border
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="套餐编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="套餐名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="套餐价格"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="description"
                    label="套餐描述"
                    width="500">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="danger"
                            @click="buyGoodGroup(scope.$index, scope.row)">购买套餐</el-button>
                </template>
            </el-table-column>
        </el-table>
        <p>购物车</p>
        <el-table
                :data="billInfos"
                height="150"
                border
                style="width: 100%">
            <el-table-column
                    prop="gid"
                    label="编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="gname"
                    label="名字"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="gnum"
                    label="数量"
                    width="180">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="inc(scope.$index, scope.row)">追加</el-button>

                </template>
            </el-table-column>
        </el-table>
        <el-row><br></el-row>
        <el-row>
            <el-button type="primary" @click="submit">提交订单</el-button>
            <el-button type="info" @click="backToIndex">返回</el-button>
        </el-row>
    </el-col>

</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'
    import {GoodDto} from "../seller/GoodDto";

    @Component({})
    export default class Detail extends Vue{
        defaultUser:string=getCookie('emailAddress');
        defaultAddress:string='';
        sellerId:string='';
        goods:GoodDto[]=[];
        infos:any[]=[];
        billInfos:BillInfo[]=[];
        mounted(){
            this.sellerId=getCookie('sellerId');
            this.defaultAddress=getCookie('defaultAddress');
            axios.get('http://localhost:3142/good/'+this.sellerId).then((response)=>{
                this.goods=response.data;
            })
            axios.get('http://localhost:3142/good/package/'+this.sellerId).then(
                (response)=>{
                    this.infos=response.data;
                }
            )
        }

        private buyGood(index:number,row:string):number{
            let b:BillInfo=new BillInfo();
            b.gid=this.goods[index].gid;
            b.gname=this.goods[index].name;
            b.gnum=1;
            for(let k:number=0;k<this.billInfos.length;k++){
                if(this.billInfos[k].gid==b.gid){
                    alert("该商品已在购物车中，请勿重复添加！");
                    return 0;
                }
            }
            this.billInfos.push(b);
            alert("该商品已成功加入购物车！");
            return 0;
        }

        private buyGoodGroup(index:number,row:string):number{
            let b:BillInfo=new BillInfo();
            b.gid=this.infos[index].id;
            b.gname=this.infos[index].name;
            b.gnum=1;
            for(let k:number=0;k<this.billInfos.length;k++){
                if(this.billInfos[k].gid==b.gid){
                    alert("该套餐已在购物车中，请勿重复添加！");
                    return 0;
                }
            }
            this.billInfos.push(b);
            alert("该套餐已成功加入购物车！");
            return 0;
        }

        private inc(index:number,row:string){
            this.billInfos[index].gnum=this.billInfos[index].gnum+1;
        }

        private handleDelete(index:number,row:string){
            this.billInfos.splice(index,1);
        }

        private backToIndex(){
            this.$router.push("/user/u2a")
        }

        private submit(){
            if(this.billInfos.length==0){
                alert("提交订单时购物车不得为空！")
            }else{
                axios.post('http://localhost:3142/good/bill/',{
                    userEmail:this.defaultUser,
                    sid:this.sellerId,
                    goods:this.billInfos,
                    address:this.defaultAddress
                }).then((response)=>{
                    alert("提交成功")
                    let res:AddBillResponse=response.data;
                    setCookie('bid',res.bid,1000*60);
                    this.$router.push("/pay")
                }).catch((error)=>{
                    alert("商品不足，无法下单")
                })
            }
        }

    }

    class BillInfo{
        gid:string;
        gname:string;
        gnum:number;

    }
    class AddBillResponse{
        status:number;
        bid:string;
    }
</script>

<style scoped>

</style>