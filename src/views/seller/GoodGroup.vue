<template>
    <el-col span="24">
        <el-row><br></el-row>
        <el-row>您当前已经创建的套餐如下</el-row>
        <el-row><br></el-row>
        <el-row><br></el-row>
        <el-table
                :data="infos"
                height="300"
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
                    width="300">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除套餐</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-col>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, deleteCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class GoodGroup extends Vue {
        defaultSeller:string=getCookie('emailAddress');
        infos:PackageShortInfo[]=[];
        mounted(){
            axios.get('http://localhost:3142/good/package/'+this.defaultSeller).then(
                (response)=>{
                    this.infos=response.data;
                }
            )
        }
        private handleLook(index:number,row:string){
            alert(index);
        }

        private handleDelete(index:number,row:string){
            alert(index);
        }
    }

    class PackageShortInfo{
        id:string;
        name:string;
        price:string;
    }
</script>

<style scoped>

</style>