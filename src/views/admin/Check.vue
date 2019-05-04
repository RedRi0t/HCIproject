<template>
    <el-col span="24">
        <el-row>
            以下是申请成为商户的用户，您可以在此审批。
        </el-row>
        <el-table
                :data="sellers"
                height="200"
                border
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="商户名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="emailAddress"
                    label="商户邮箱"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="城市"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="district"
                    label="区域"
                    width="150">
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
                            type="success"
                            @click="handleAccept(scope.$index, scope.row)">同意</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleRefuse(scope.$index, scope.row)">拒绝</el-button>

                </template>
            </el-table-column>
        </el-table>
    </el-col>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class Check extends Vue{
        sellers:SellerCheckDto[]=[];
        mounted(){
            axios.get('http://localhost:3142/admin/pending/1').then((response)=>{
                this.sellers=response.data;
            })
        }

        private handleAccept(index:number,row:string){
            alert(index);
            axios.put('http://localhost:3142/admin/pending/'+this.sellers[index].emailAddress).then((response)=>{
                alert("已同意该商家!");
                this.sellers.splice(index,1);
            })
        }

        private handleRefuse(index:number,row:string){

            axios.delete('http://localhost:3142/admin/pending/'+this.sellers[index].emailAddress).then((response)=>{
                alert("已拒绝该商家!");
                this.sellers.splice(index,1);
            })
        }
    }

    class SellerCheckDto{
        name :string;
        emailAddress :string;
        city :string;
        district :string;
        address :string;
    }
</script>

<style scoped>

</style>