<template>
    <el-col span="24">
        <el-row><br></el-row>
        <el-row>
            在这里创建一个新的商品
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col>
                商品名称：
                <el-input v-model="goodName" size="small" style="width: 200px;height:1px" placeholder="请输入商品名称">
                </el-input>
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col>
                商品数量：
                <el-input v-model="goodNum" size="small" style="width: 160px;height:1px" placeholder="请输入商品数量">
                </el-input>
                &nbsp件
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col>
                商品价格：
                <el-input v-model="goodPrice" size="small" style="width: 160px;height:1px" placeholder="请输入商品价格">
                </el-input>
                &nbsp元
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col>
                商品描述：
                <el-input v-model="goodDescription" size="small" style="width: 300px;height:1px" placeholder="请输入商品描述">
                </el-input>
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col span="24">
                <el-button type="success"  @click="addGood">创建</el-button>
                <el-button @click="backToIndex">取消  </el-button>
            </el-col>
        </el-row>

    </el-col>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, deleteCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class CreateGood extends  Vue {
        defaultSeller:string=getCookie('emailAddress');
        goodName:string='';
        goodNum:number=0;
        goodPrice:number=0;
        goodDescription='';
        private addGood(){
            axios.post('http://localhost:3142/good/',{
                emailAddress:this.defaultSeller,
                name:this.goodName,
                description:this.goodDescription,
                number:this.goodNum,
                price:this.goodPrice,
            }).then((response)=>{
                alert('商品创建成功。');
            })
        }
        private  backToIndex () {
            this.$router.push('/seller')
        }
    }


</script>

<style scoped>

</style>