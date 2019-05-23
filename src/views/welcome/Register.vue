<template>
    <el-container>

        <el-header>
            注册
        </el-header>

        <el-main>
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="注册类型:" :rules="[{ required: true}]" style="float: left">
                    <el-radio-group v-model="form.category">
                        <el-radio label="0">普通用户</el-radio>
                        <el-radio label="1">商家用户</el-radio>
                    </el-radio-group>

                </el-form-item>

                <el-form-item label="注册邮箱:" prop="email"
                              :rules="[{ required: true, message: '请输入邮箱地址'},
                              { type: 'email', message: '请输入正确的邮箱地址'}]" style="float: left;">
                    <el-col :span="17">
                        <el-input v-model="form.email" clearable></el-input>
                    </el-col>

                    <el-col :span="3" style="margin-left: 5px">
                        <el-button type="primary" @click="getCode">获取验证码</el-button>
                    </el-col>
                </el-form-item>

                <el-form-item label="邮箱验证码:" style="float: left" :rules="[{required: true}]">
                    <el-input v-model="form.code" clearable></el-input>
                </el-form-item>

                <el-form-item label="用户名:" style="float: left" :rules="[{required: true}]">
                    <el-input v-model="form.name" clearable></el-input>
                </el-form-item>

                <el-form-item label="密码:" style="float: left" :rules="[{required: true}]">
                    <el-input v-model="form.password" clearable></el-input>
                </el-form-item>

                <el-form-item label="确认密码:" style="float: left" :rules="[{required: true}]">
                    <el-input v-model="form.confirm_password" clearable></el-input>
                </el-form-item>

                <el-form-item label="默认收获地址:" style="float: left;width: 700px" size="medium" :rules="[{required: true}]">
                    <area-select v-model="form.address" :data="pcaa" :level="2" style="float:left;"></area-select>
                </el-form-item>

                <el-form-item label="" style="float: left;width: 500px" :rules="[{required: true}]">
                    <el-input v-model="form.detail_address" placeholder="详细地址"></el-input>
                </el-form-item>

                <el-form-item label=" " style="float: left">
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
    import Vue from 'vue';
    import { pca, pcaa } from 'area-data'; // v5 or higher
    import 'vue-area-linkage/dist/index.css'; // v2 or higher
    import VueAreaLinkage from 'vue-area-linkage';
    import axios from 'axios'

    Vue.use(VueAreaLinkage)
    export default {
        data() {
            return {
                form: {
                    category: '',
                    email: '',
                    code: '',
                    name: '',
                    password: '',
                    confirm_password: '',
                    address: [],
                    detail_address:''
                },
                pca:pca,
                pcaa:pcaa
            }
        },
        methods: {
            onSubmit() {
                if(this.form.name===''){
                    alert("用户名不得为空")
                }else if(this.form.password===''){
                    alert("密码不得为空")
                }else if(this.form.password!==this.form.confirm_password){
                    alert("前后密码不一致")
                }else{
                    axios.post('http://localhost:3142/welcome/signup',{
                        'username':this.form.name,
                        'password':this.form.password,
                        'emailAddress':this.form.email,
                        'code':this.form.code,
                        'city':this.form.address[0],
                        'district':this.form.address[1],
                        'address':this.form.address[2],
                        'type':this.form.category
                    }).then((response=>{

                        if(response.status==201){

                            alert("注册成功")
                            this.$router.push('/')
                        }
                    })).catch(reason=>{
                            //alert(reason.toString().split(" ")[reason.toString().split(" ").length-1]);
                             status=reason.toString().split(" ")[reason.toString().split(" ").length-1];
                            if(status=="501"){
                                alert("邮箱已被注册")
                            }else{
                                alert("邮箱验证失败")
                            }
                        }
                    )}
            },

            getCode(){
                //获取验证码
                alert("called1!!");
                alert(this.form.email);
                alert("called2!!");
                axios.post('http://localhost:3142/email',{
                    'name':'',
                    'emailAddress':this.form.email

                }).then((response=>{
                    if(response.status==201){
                        alert("邮件已发送，请前往邮箱查收")
                    }
                })).catch(reason => {
                    status=reason.toString().split(" ")[reason.toString().split(" ").length-1];
                    alert(status);
                    alert(reason.toString());
                    if(status=="403"){
                        alert("我们观察到该邮箱已被注册，请您更换邮箱！")
                    }else{
                        alert("网络错误，发送失败")
                    }
                })

            }
        }
    }
</script>



<style scoped>

    .el-row{
        font-size: 30px;
    }

    .el-header{
        margin-top: 30px;
        font-size: 2em;
    }

    .el-form{
        width: 30%;
        margin: 0 auto;
    }





</style>