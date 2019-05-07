<template>
    <el-col span="24">
        <el-row>
            <el-col span="1">
                <br>
            </el-col>
            <el-col span="22">
                <br>
                <br>
                <el-form :inline="true" label-width="220px">
                    <el-form-item label="请选择地址（当前为默认地址）">
                        <el-select v-model="usingAddress" placeholder="请选择地址">
                            <el-option
                                    v-for="item in addresses"
                                    :key="item.address"
                                    :label="item.address"
                                    :value="item.address" >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="handleSelecting">切换地址</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    <el-row><br></el-row>
    <el-row>
        您在其配送范围之内的所有商家如下
    </el-row>
    <el-row><br></el-row>
        <el-table
                :data="sellers"
                height="300"
                border
                style="width: 100%">
            <el-table-column
                    prop="sid"
                    label="商家编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="商家名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="description"
                    label="商家描述"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="城市"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="district"
                    label="区(县)"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="详细地址"
                    width="300">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleLook(scope.$index, scope.row)">查看商家</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-col>

</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, deleteCookie,setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class Book extends Vue{
        defaultUser:string=getCookie('emailAddress');
        sellers:SellerBookDto[]=[];
        addresses:UserAddress[]=[];
        usingAddress:string="";
        mounted(){
            axios.get('http://localhost:3142/user/book/'+this.defaultUser).then(
                (response)=>{
                    this.sellers=response.data;
                }
            )
            axios.get('http://localhost:3142/user/address/'+this.defaultUser).then(response=>{
                this.addresses=response.data
                let addr:UserAddress=new UserAddress();
                addr.address='默认';
                this.addresses.push(addr);
            })
        }

        private handleLook(index:number,row:string){
            setCookie('sellerId',this.sellers[index].sid , 1000 * 60);
            setCookie('defaultAddress',this.usingAddress,1000*60);
            this.$router.push('/detail');
        }



    }

    class SellerBookDto{
        sid:string;
        name:string;
        description:string;
        city:string;
        district:string;
        address:string;

    }

    class UserAddress{
        id:string;
        uid:string;
        city:string;
        district:string;
        address:string;
    }
</script>

<style scoped>

</style>