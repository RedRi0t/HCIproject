<template>
    <el-container>
        <el-header>
            <el-row >Yummy !新用户注册</el-row>
        </el-header>

        <el-main>
            <el-row>
                <el-text>
                欢迎成为Yummy!新用户，您将享受专属优惠，您同样可以注册成为商家！
                </el-text>
            </el-row>
            <el-row :gutter="30">
                <el-text>请选择注册类型：</el-text>
                <el-radio v-model="radio" label=0>普通账户</el-radio>
                <el-radio v-model="radio" label=1>商家账户</el-radio>
            </el-row>
            <el-row :gutter="30">
                <el-text>
                    请输入您的邮箱：
                </el-text>
                <el-input v-model="email" placeholder="请在此输入邮箱" style="width: 200px">

                </el-input>
                <el-button type="primary" @click="getCode()">
                    获取验证码
                </el-button>
            </el-row>
            <el-row :gutter="30">
                <el-text>请输入邮箱验证码：</el-text>
                <el-input v-model="code" placeholder="请在此输入验证码" style="width: 290px">

                </el-input>
            </el-row>
            <el-row>
                <el-text>请输入用户名：</el-text>
                <el-input v-model="username" placeholder="用户名" style="width: 290px" >

            </el-input>
            </el-row>
            <el-row>
                <el-text>请输入密码：</el-text>
                <el-input v-model="password" placeholder="密码" style="width: 250px" >

                </el-input>
            </el-row>
            <el-row>
                <el-text>请再次输入密码：</el-text>
                <el-input v-model="password_again" placeholder="确认密码" style="width: 250px" >

                </el-input>
            </el-row>

            <el-row>
                <el-text>请输入所在地区：</el-text>
                <el-input v-model="city" placeholder="请输入所在市" style="width: 150px" >
                </el-input>
                <el-text>市     </el-text>
                <el-input v-model="district" placeholder="请输入所在区（县）" style="width: 150px" >
                </el-input>
                <el-text>区（县）      </el-text>
            </el-row>

            <el-row>
                <el-text>请输入详细地址：</el-text>
                <el-input v-model="address" placeholder="请输入详细地址" style="width: 300px" >
                </el-input>
            </el-row>

            <el-row>
                <el-button type="primary" @click="signUp()">提交信息</el-button>
                <el-button type="info">返回</el-button>
            </el-row>

        </el-main>
    </el-container>

</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {setCookie} from '../../assets/utils/cookie.ts'
    //import {bus} from './bus.ts'
    import axios from 'axios'

    @Component({})
    export default class Register extends  Vue{
        email :string='';
        code: string='';
        username:string='';
        password:string='';
        password_again:string='';
        city:string='';
        district:string='';
        address:string='';
        radio:number=-1;

        private getCode(){
            //获取验证码
            axios.post('http://localhost:3142/email',{
                'name':'',
                'emailAddress':this.email

            }).then((response=>{
                if(response.status==201){
                    alert("邮件已发送，请前往邮箱查收")
                }else if(response.status==403){
                    alert("该邮箱已被注册")
                }else{
                    alert("网络错误，发送失败")
                }
            }))
        }

        private signUp(){
            if(this.username==''){
                alert("用户名不得为空")
            }else if(this.password==''){
                alert("密码不得为空")
            }else if(this.password!=this.password_again){
                alert("前后密码不一致")
            }else{
                axios.post('http://localhost:3142/welcome/signup',{
                'username':this.username,
                'password':this.password,
                'emailAddress':this.email,
                'code':this.code,
                'city':this.city,
                'district':this.district,
                'address':this.address,
                    'type':this.radio
                }).then((response=>{

                if(response.status==201){

                    alert("注册成功")
                    this.$router.push('/')
                }
            })).catch(reason=>{
                    //alert(reason.toString().split(" ")[reason.toString().split(" ").length-1]);
                    let status:string=reason.toString().split(" ")[reason.toString().split(" ").length-1];
                    if(status=="501"){
                        alert("邮箱已被注册")
                    }else{
                        alert("邮箱验证失败")
                    }
                }
            )}

        }

    }

</script>

<style scoped>

    .el-row{
        font-size: 30px;
    }



</style>