<template>
    <el-col span="24">
        <el-row>
            尊敬的用户{{defaultUser}}您好：您将支付订单号为{{bid}}的订单
        </el-row>
        <el-row><br></el-row>
        <el-row>
            订单商户ID：{{abstractBill.sid}}
        </el-row>
        <el-row><br></el-row>
        <el-row>
            折扣前金额：{{abstractBill.totalPrice}}
        </el-row>
        <el-row><br></el-row>
        <el-row>
            折扣后金额：{{abstractBill.actualPrice}}
        </el-row>
        <el-row><br></el-row>
        <el-row>
            请输入您的支付宝账户
            <el-input v-model="alipayAccount" placeholder="支付宝账户" style="width: 290px" >

            </el-input>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            请输入您的支付宝密码
            <el-input type="password" v-model="alipayPassword" placeholder="支付宝密码" style="width: 290px" >

            </el-input>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col span="24">
                <el-button type="success" @click="saveInfo">确认支付</el-button>
                <el-button @click="backToIndex">返回  </el-button>
            </el-col>
        </el-row>

    </el-col>

</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, deleteCookie,setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class Pay extends Vue{
        defaultUser:string =getCookie('emailAddress');
        bid:string=getCookie('bid');
        abstractBill:AbstractBill=new AbstractBill();
        alipayAccount:string="";
        alipayPassword:string="";
        mounted(){
            axios.get('http://localhost:3142/good/abstract/'+this.bid).then((response)=>{
                this.abstractBill=response.data;
            })
        }

        private saveInfo(){
            if(this.alipayAccount==""||this.alipayPassword==""||this.alipayAccount.length!=11){
                alert("支付宝账号或密码错误！");
            }else {
                axios.post('http://localhost:3142/good/pay/', {
                    uid: this.defaultUser,
                    bid: this.bid
                }).then((response) => {
                    alert("支付成功");
                    this.$router.push('/user')
                })
            }
        }

        private backToIndex(){
            this.$router.push("/user/u3a")
        }

    }

    class AbstractBill{
        bid:string;
        sid:string;
        uid:string;
        actualPrice:number;
        totalPrice:number;
        time:string;
        status:number;
    }
</script>

<style scoped>

</style>