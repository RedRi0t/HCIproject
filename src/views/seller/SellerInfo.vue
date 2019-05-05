<template>
    <el-col span="24">
    <el-row>
        <el-col span="12">
        <div>
            尊敬的商家{{s0.sid}}您好，您当前的余额是{{s0.balance}}元。
        </div>
        </el-col>
    </el-row>
        <el-row>
            <div>
                <br>
                以下是您的基本信息：
                <br>
                <br>
            </div>
        </el-row>
    <el-row>
        <el-col>
            商户名：
        <el-input v-model="s0.username" size="small" style="width: 200px;height:1px" >

        </el-input>
        </el-col>
    </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col>
                    城市 &nbsp：
                <el-input v-model="s0.city" size="small" style="width: 200px;height:1px">
                </el-input>
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col>
                区/县 &nbsp：
                <el-input v-model="s0.district" size="small" style="width: 200px;height:1px">
                </el-input>
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col>
                详细地址：
                <el-input v-model="s0.address" size="small" style="width: 300px;height:1px">
                </el-input>
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col>
                商户描述：
                <el-input v-model="s0.description" size="small" style="width: 300px;height:1px">
                </el-input>
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col span="24">
                <el-button type="success" @click="saveInfo">保存</el-button>
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
    export default class SellerInfo extends Vue{
        defaultSeller:string=getCookie('emailAddress');
        s0:SellInfo=new SellInfo();


        mounted(){
            axios.get('http://localhost:3142/seller/info/'+this.defaultSeller).then((response)=>{

                this.s0=response.data;
            })
        }

        private saveInfo(){
            axios.post('http://localhost:3142/seller/info/',{
                emailAddress:this.defaultSeller,
                username:this.s0.username,
                sid:this.s0.sid,
                balance:this.s0.balance,
                city:this.s0.city,
                district:this.s0.district,
                address:this.s0.address,
                description:this.s0.description
            }).then((response)=>{
                alert('基本信息已保存。');
            })
        }
         private  backToIndex () {
            this.$router.push('/seller')
        }
    }

    class SellInfo{
        username:string='';
        sid:string='';
        balance:number=0;
        city:string='';
        district:string='';
        address:string='';
        description:string='';
    }
</script>

<style scoped>

</style>