<template>
    <el-col span="24">
        <el-row><br></el-row>
        <el-row>
            您可以在这里创建一个新的套餐
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col>
                请输入商品编号：
                <el-input v-model="gid" size="small" style="width: 180px;height:1px" placeholder="请输入要添加的商品编号">
                </el-input>
                &nbsp&nbsp套餐内商品数量
                <el-input v-model="gnum" size="small" style="width: 180px;height:1px" placeholder="请输入商品数量">
                </el-input>
                <el-button @click="addGood">
                    添加商品
                </el-button>
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-table
                :data="goods"
                height="300"
                border
                style="width: 100%">
            <el-table-column
                    prop="gid"
                    label="商品编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="number"
                    label="数量"
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
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row><br></el-row>
        <el-row>
            <el-col>

                当前商品折扣前总价为：{{this.preTotalPrice}} 元

            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col>

                请输入套餐名称：
                <el-input v-model="groupName" size="small" style="width: 200px;height:1px" placeholder="请输入套餐名称">
                </el-input>
                &nbsp&nbsp套餐总价：
                <el-input v-model="totalPrice" size="small" style="width: 200px;height:1px" placeholder="请输入套餐总价">
                </el-input>
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-button type="success" @click="handleSave">保存</el-button>
            <el-button @click="backToIndex">取消</el-button>
        </el-row>

    </el-col>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, deleteCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'
    import {GoodDto} from './GoodDto.ts';


    @Component({})
    export default  class CreateGoodGroup extends Vue{
        defaultSeller:string=getCookie('emailAddress');
        goods:GoodDto[]=[];
        gid:string='';
        g0:GoodDto=new GoodDto;
        gnum:number=0;
        totalPrice:number=0;
        groupName:string='';
        preTotalPrice:number=0;

        private handleDelete(index:number,row:string){
            if(index>-1){
                this.g0=this.goods[index];
                this.goods.splice(index,1);
                this.preTotalPrice=this.preTotalPrice-this.g0.price*this.g0.number;

            }
        }

        private addGood(){
            axios.get('http://localhost:3142/good/single/'+this.gid).then((response)=>{
                if(response.status==200){
                    this.g0=response.data;
                    this.g0.number=this.gnum;
                    this.goods.push(this.g0);
                    this.preTotalPrice=this.preTotalPrice+this.g0.price*this.g0.number;
                    this.g0=new GoodDto();

                }
            })
        }

        private handleSave(){
            axios.post('http://localhost:3142/good/package/',{
                emailAddress:this.defaultSeller,
                price:this.totalPrice,
                name:this.groupName,
                goods:this.goods
            }).then((response)=>{
                alert("套餐添加成功！")
            })
        }

        private  backToIndex () {
            this.$router.push('/seller')
        }
    }


</script>

<style scoped>

</style>