<template>
    <el-col span="24">
        <el-row><br></el-row>
        <el-row>
            <el-col span="12">
                <div>
                    尊敬的用户{{defaultUser}}您好，您当前已经消费 {{s0.balance}}元。
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
                会员等级：{{s0.level}}
            </el-col>
        </el-row>

        <el-row><br></el-row>
        <el-row>
            <el-col span="24">
                <el-button type="success" @click="saveInfo">保存</el-button>
                <el-button @click="backToIndex">取消  </el-button>
                <el-button type="warning" @click="deleteUser">注销</el-button>

            </el-col>
        </el-row>

    </el-col>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, deleteCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class UserInfo extends Vue{
        defaultUser:string=getCookie('emailAddress');
        s0:UserInfoDto=new UserInfoDto();


        mounted(){
            axios.get('http://localhost:3142/user/info/'+this.defaultUser).then((response)=>{

                this.s0=response.data;
            })
        }

        private saveInfo(){
            axios.post('http://localhost:3142/user/info/',{
                emailAddress:this.defaultUser,
                username:this.s0.username,
                balance:this.s0.balance,
                city:this.s0.city,
                district:this.s0.district,
                address:this.s0.address,
            }).then((response)=>{
                alert('基本信息已保存。');
            })
        }
        private  backToIndex () {
            this.$router.push('/user')
        }

        private deleteUser(){
            axios.delete('http://localhost:3142/user/account/'+this.defaultUser).then((response)=>{
                alert("注销成功！");
                deleteCookie('emailAddress');
                this.$router.push('/');
            })
        }
    }

    class UserInfoDto{
        username:string='';
        balance:number=0;
        city:string='';
        district:string='';
        address:string='';
        level:string="";
    }
</script>

<style scoped>

</style>