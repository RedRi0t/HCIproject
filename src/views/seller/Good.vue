<template>
    <el-col span="24">
        <el-row><br></el-row>
        <el-row>
            当前您已经创建的所有商品如下：
        </el-row>
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
        </el-table>
    </el-col>
</template>

<script lang="ts">

    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, deleteCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'
    import {GoodDto} from './GoodDto.ts';

    @Component({})
    export default class  Good extends Vue {
        goods:GoodDto[]=[];
        defaultSeller:string=getCookie('emailAddress');
        mounted(){
            axios.get('http://localhost:3142/good/'+this.defaultSeller).then((response)=>{
                this.goods=response.data;
            })
        }
    }


</script>

<style scoped>

</style>